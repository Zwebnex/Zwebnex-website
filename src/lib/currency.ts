export interface CurrencyInfo {
  code: string;
  name: string;
  symbol: string;
  flag: string;
  countryName: string;
  // Conversion rate relative to 1 INR (Base currency)
  rateFromINR: number;
}

export const SUPPORTED_CURRENCIES: Record<string, CurrencyInfo> = {
  INR: {
    code: 'INR',
    name: 'Indian Rupee',
    symbol: '₹',
    flag: '🇮🇳',
    countryName: 'India',
    rateFromINR: 1,
  },
  USD: {
    code: 'USD',
    name: 'US Dollar',
    symbol: '$',
    flag: '🇺🇸',
    countryName: 'United States',
    rateFromINR: 0.012, // 1 INR ~ 0.012 USD
  },
  EUR: {
    code: 'EUR',
    name: 'Euro',
    symbol: '€',
    flag: '🇪🇺',
    countryName: 'European Union',
    rateFromINR: 0.011,
  },
  GBP: {
    code: 'GBP',
    name: 'British Pound',
    symbol: '£',
    flag: '🇬🇧',
    countryName: 'United Kingdom',
    rateFromINR: 0.0095,
  },
  AED: {
    code: 'AED',
    name: 'UAE Dirham',
    symbol: 'AED ',
    flag: '🇦🇪',
    countryName: 'United Arab Emirates',
    rateFromINR: 0.044,
  },
  CAD: {
    code: 'CAD',
    name: 'Canadian Dollar',
    symbol: 'CA$',
    flag: '🇨🇦',
    countryName: 'Canada',
    rateFromINR: 0.016,
  },
  AUD: {
    code: 'AUD',
    name: 'Australian Dollar',
    symbol: 'AU$',
    flag: '🇦🇺',
    countryName: 'Australia',
    rateFromINR: 0.018,
  },
  SGD: {
    code: 'SGD',
    name: 'Singapore Dollar',
    symbol: 'S$',
    flag: '🇸🇬',
    countryName: 'Singapore',
    rateFromINR: 0.016,
  },
};

export const DEFAULT_CURRENCY = 'INR';

/**
 * Format a base price in INR to the target currency formatted string
 */
export function formatCurrencyPrice(baseInrAmount: number, currencyCode: string = DEFAULT_CURRENCY): string {
  const currency = SUPPORTED_CURRENCIES[currencyCode] || SUPPORTED_CURRENCIES.INR;
  
  if (currency.code === 'INR') {
    // Format Indian Rupee with Indian number grouping (e.g. ₹24,999 or ₹1,49,999)
    return `₹${baseInrAmount.toLocaleString('en-IN')}`;
  }

  // Convert and round to clean agency figure
  const converted = baseInrAmount * currency.rateFromINR;
  let rounded: number;
  if (converted >= 1000) {
    rounded = Math.round(converted / 50) * 50; // nearest 50
  } else if (converted >= 100) {
    rounded = Math.round(converted / 10) * 10; // nearest 10
  } else {
    rounded = Math.round(converted);
  }

  return `${currency.symbol}${rounded.toLocaleString('en-US')}`;
}

export interface BudgetTier {
  value: string;
  label: string;
}

/**
 * Returns dynamic budget options tailored to the selected currency
 */
export function getBudgetTiersForCurrency(currencyCode: string = DEFAULT_CURRENCY): BudgetTier[] {
  const currency = SUPPORTED_CURRENCIES[currencyCode] || SUPPORTED_CURRENCIES.INR;

  if (currency.code === 'INR') {
    return [
      { value: 'Under ₹25,000', label: 'Starter (Under ₹25,000)' },
      { value: '₹25,000 - ₹60,000', label: 'Growth (₹25,000 – ₹60,000)' },
      { value: '₹60,000 - ₹1,50,000', label: 'Scale (₹60,000 – ₹1,50,000)' },
      { value: '₹1,50,000 - ₹3,00,000', label: 'Enterprise (₹1,50,000 – ₹3,00,000)' },
      { value: '₹3,00,000+', label: 'Custom Enterprise (₹3,00,000+)' },
      { value: 'Flexible / Needs Consultation', label: 'Flexible / Needs Consultation' },
    ];
  }

  if (currency.code === 'USD') {
    return [
      { value: 'Under $500', label: 'Starter (Under $500)' },
      { value: '$500 - $1,500', label: 'Growth ($500 – $1,500)' },
      { value: '$1,500 - $3,500', label: 'Scale ($1,500 – $3,500)' },
      { value: '$3,500 - $7,500', label: 'Enterprise ($3,500 – $7,500)' },
      { value: '$7,500+', label: 'Custom Enterprise ($7,500+)' },
      { value: 'Flexible / Needs Consultation', label: 'Flexible / Needs Consultation' },
    ];
  }

  if (currency.code === 'EUR') {
    return [
      { value: 'Under €450', label: 'Starter (Under €450)' },
      { value: '€450 - €1,400', label: 'Growth (€450 – €1,400)' },
      { value: '€1,400 - €3,200', label: 'Scale (€1,400 – €3,200)' },
      { value: '€3,200 - €7,000', label: 'Enterprise (€3,200 – €7,000)' },
      { value: '€7,000+', label: 'Custom Enterprise (€7,000+)' },
      { value: 'Flexible / Needs Consultation', label: 'Flexible / Needs Consultation' },
    ];
  }

  if (currency.code === 'GBP') {
    return [
      { value: 'Under £400', label: 'Starter (Under £400)' },
      { value: '£400 - £1,200', label: 'Growth (£400 – £1,200)' },
      { value: '£1,200 - £2,800', label: 'Scale (£1,200 – £2,800)' },
      { value: '£2,800 - £6,000', label: 'Enterprise (£2,800 – £6,000)' },
      { value: '£6,000+', label: 'Custom Enterprise (£6,000+)' },
      { value: 'Flexible / Needs Consultation', label: 'Flexible / Needs Consultation' },
    ];
  }

  if (currency.code === 'AED') {
    return [
      { value: 'Under AED 1,800', label: 'Starter (Under AED 1,800)' },
      { value: 'AED 1,800 - AED 5,500', label: 'Growth (AED 1,800 – AED 5,500)' },
      { value: 'AED 5,500 - AED 13,000', label: 'Scale (AED 5,500 – AED 13,000)' },
      { value: 'AED 13,000 - AED 25,000', label: 'Enterprise (AED 13,000 – AED 25,000)' },
      { value: 'AED 25,000+', label: 'Custom Enterprise (AED 25,000+)' },
      { value: 'Flexible / Needs Consultation', label: 'Flexible / Needs Consultation' },
    ];
  }

  // Generic fallback for CAD, AUD, SGD
  return [
    { value: `Under ${currency.symbol}600`, label: `Starter (Under ${currency.symbol}600)` },
    { value: `${currency.symbol}600 - ${currency.symbol}1,800`, label: `Growth (${currency.symbol}600 – ${currency.symbol}1,800)` },
    { value: `${currency.symbol}1,800 - ${currency.symbol}4,000`, label: `Scale (${currency.symbol}1,800 – ${currency.symbol}4,000)` },
    { value: `${currency.symbol}4,000 - ${currency.symbol}8,500`, label: `Enterprise (${currency.symbol}4,000 – ${currency.symbol}8,500)` },
    { value: `${currency.symbol}8,500+`, label: `Custom Enterprise (${currency.symbol}8,500+)` },
    { value: 'Flexible / Needs Consultation', label: 'Flexible / Needs Consultation' },
  ];
}
