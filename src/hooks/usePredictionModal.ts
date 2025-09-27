import { useState } from 'react';
import { Market } from '@/types/contract';

export function usePredictionModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMarket, setSelectedMarket] = useState<Market | null>(null);
  const [selectedOutcome, setSelectedOutcome] = useState<'YES' | 'NO' | null>(null);

  const openModal = (market: Market, outcome: 'YES' | 'NO') => {
    setSelectedMarket(market);
    setSelectedOutcome(outcome);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedMarket(null);
    setSelectedOutcome(null);
  };

  return {
    isOpen,
    selectedMarket,
    selectedOutcome,
    openModal,
    closeModal,
  };
}