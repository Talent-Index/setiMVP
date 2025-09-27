import { useState } from 'react';
import { useCurrentWallet, useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { SUI_TYPE_ARG } from '@mysten/sui/utils';
import { PACKAGE_ID, MODULE } from '@/types/contract';

export interface PredictionParams {
  marketId: string;
  outcome: 'YES' | 'NO';
  amount: number; // in SUI
}

export function usePrediction() {
  const { isConnected } = useCurrentWallet();
  const { mutateAsync: signAndExecute } = useSignAndExecuteTransaction();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const placePrediction = async (params: PredictionParams): Promise<boolean> => {
    if (!isConnected) {
      setError('Please connect your wallet first');
      return false;
    }

    setIsLoading(true);
    setError(null);

    try {
      // Convert SUI to MIST (1 SUI = 1,000,000,000 MIST)
      const amountMist = Math.floor(params.amount * 1_000_000_000);
      
      // Convert outcome to contract format (YES = 1, NO = 0)
      const outcomeValue = params.outcome === 'YES' ? 1 : 0;

      // Create transaction
      const tx = new Transaction();
      
      // Split SUI for payment
      const [paymentCoin] = tx.splitCoins(tx.gas, [amountMist]);

      // Call place_prediction function
      tx.moveCall({
        target: `${PACKAGE_ID}::${MODULE}::place_prediction`,
        arguments: [
          tx.object(params.marketId), // Market object
          tx.pure.u8(outcomeValue),   // Outcome (0 or 1)
          paymentCoin,                // Payment coin
        ],
      });

      // Execute transaction
      const result = await signAndExecute({
        transaction: tx,
        options: {
          showEffects: true,
          showEvents: true,
        },
      });

      console.log('Prediction placed successfully:', result);
      return true;
      
    } catch (err) {
      console.error('Error placing prediction:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to place prediction';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return {
    placePrediction,
    isLoading,
    error,
    isConnected
  };
}