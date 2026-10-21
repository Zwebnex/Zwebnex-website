'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import {
  CurrencyInfo,
  SUPPORTED_CURRENCIES,
  DEFAULT_CURRENCY,
  formatCurrencyPrice,
  getBudgetTiersForCurrency,
  BudgetTier
} from '@/lib/currency';

interface CurrencyContextType {
  currency: string;
  currencyInfo: CurrencyInfo;
  setCurrency: (code: string) => void;
  formatPrice: (baseInrAmount: number) => string;
  budgetTiers: BudgetTier[];
  availableCurrencies: CurrencyInfo[];
}

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<string>(DEFAULT_CURRENCY);

  // Restore saved currency from localStorage on client mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem('zwebnex_currency');
      if (saved && SUPPORTED_CURRENCIES[saved]) {
        setCurrencyState(saved);
      }
    } catch {
      // Ignore localStorage access restrictions
    }
  }, []);

  const setCurrency = (code: string) => {
    if (SUPPORTED_CURRENCIES[code]) {
      setCurrencyState(code);
      try {
        localStorage.setItem('zwebnex_currency', code);
      } catch {
        // Ignore localStorage error
      }
    }
  };

  const currencyInfo = SUPPORTED_CURRENCIES[currency] || SUPPORTED_CURRENCIES[DEFAULT_CURRENCY];
  const budgetTiers = getBudgetTiersForCurrency(currency);
  const availableCurrencies = Object.values(SUPPORTED_CURRENCIES);

  const formatPrice = (baseInrAmount: number) => {
    return formatCurrencyPrice(baseInrAmount, currency);
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        currencyInfo,
        setCurrency,
        formatPrice,
        budgetTiers,
        availableCurrencies
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency(): CurrencyContextType {
  const context = useContext(CurrencyContext);
  if (!context) {
    // Fallback if rendered outside provider
    const fallbackCurrency = SUPPORTED_CURRENCIES[DEFAULT_CURRENCY];
    return {
      currency: DEFAULT_CURRENCY,
      currencyInfo: fallbackCurrency,
      setCurrency: () => {},
      formatPrice: (amt: number) => formatCurrencyPrice(amt, DEFAULT_CURRENCY),
      budgetTiers: getBudgetTiersForCurrency(DEFAULT_CURRENCY),
      availableCurrencies: Object.values(SUPPORTED_CURRENCIES)
    };
  }
  return context;
}
