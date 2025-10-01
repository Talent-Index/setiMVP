import { useState } from 'react';
import { useSignAndExecuteTransaction, useSuiClient } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { SUI_TYPE_ARG } from '@mysten/sui/utils';
import { CreateMarketParams, UseCreateMarketResult, PACKAGE_ID, MODULE } from '@/types/contract';

/**
 * Hook to create a new market
 */
export function useCreateMarket(): UseCreateMarketResult {
  const client = useSuiClient();
  const { mutateAsync: signAndExecute } = useSignAndExecuteTransaction();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const createMarket = async (params: CreateMarketParams): Promise<string | null> => {
    setIsLoading(true);
    setError(null);

    try {
      // Convert SUI to MIST (1 SUI = 1,000,000,000 MIST)
      const initialLiquidityMist = Math.floor(params.initialLiquiditySui * 1_000_000_000);
      
      // Convert endTime to milliseconds (Move contract uses ms via epoch_timestamp_ms)
      let endTime = params.endTime instanceof Date
        ? params.endTime.getTime()
        : Number(params.endTime);
      // Heuristic: if value looks like seconds (10 or 13 digits check), convert to ms
      if (endTime < 1e12) {
        endTime = Math.floor(endTime * 1000);
      } else {
        endTime = Math.floor(endTime);
      }

      // Create transaction
      const tx = new Transaction();
      
      // Split SUI for initial liquidity
      const [liquidityCoin] = tx.splitCoins(tx.gas, [initialLiquidityMist]);

      // Call create_market function
      tx.moveCall({
        target: `${PACKAGE_ID}::${MODULE}::create_market`,
        arguments: [
          tx.pure.vector('u8', Array.from(new TextEncoder().encode(params.question))),
          tx.pure.vector('u8', Array.from(new TextEncoder().encode(params.description))),
          tx.pure.u64(endTime),
          tx.pure.vector('u8', Array.from(new TextEncoder().encode(params.category))),
          tx.pure.vector('u8', Array.from(new TextEncoder().encode(params.imageUrl))),
          tx.pure.vector('vector<u8>', params.tags.map(tag => Array.from(new TextEncoder().encode(tag)))),
          liquidityCoin,
        ],
      });

      // Execute transaction, then fetch full effects/events
      const executed = await signAndExecute({ transaction: tx });
      const result = await client.waitForTransaction({
        digest: executed.digest,
        options: {
          showEffects: true,
          showObjectChanges: true,
          showEvents: true,
        },
      });

      // Extract market ID from created objects
      const marketId = extractMarketIdFromResult(result);
      
      if (!marketId) {
        throw new Error('Failed to extract market ID from transaction result');
      }

      return marketId;
    } catch (err) {
      console.error('Error creating market:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to create market';
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    createMarket,
    isLoading,
    error,
  };
}

/**
 * Extract market ID from transaction result
 */
function extractMarketIdFromResult(result: any): string | null {
  try {
    // Look for created objects (top-level or under effects)
    const objectChanges = result?.objectChanges || result?.effects?.objectChanges;
    if (Array.isArray(objectChanges)) {
      for (const change of objectChanges) {
        if (
          change?.type === 'created' &&
          typeof change?.objectType === 'string' &&
          change.objectType.includes('::polymarket::Market')
        ) {
          return change.objectId as string;
        }
      }
    }

    // Fallback: look in events
    const events = result?.events;
    if (Array.isArray(events)) {
      for (const event of events) {
        if (typeof event?.type === 'string' && event.type.endsWith('::polymarket::MarketCreated')) {
          const parsedEvent = event.parsedJson;
          if (parsedEvent && typeof parsedEvent.market_id === 'string') {
            return parsedEvent.market_id as string;
          }
        }
      }
    }

    return null;
  } catch (err) {
    console.error('Error extracting market ID:', err);
    return null;
  }
}
