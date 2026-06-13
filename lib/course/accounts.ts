import type { Account } from './types';

export const ACCOUNTS: Account[] = [
  // ─── ASSETS ─────────────────────────────────────────────────────────────────
  {
    id: 'cash',
    name: 'Cash',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Physical currency, bank deposits, and anything immediately spendable.',
  },
  {
    id: 'accounts-receivable',
    name: 'Accounts Receivable',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Money customers owe us for services/goods delivered but not yet paid for.',
  },
  {
    id: 'supplies',
    name: 'Supplies',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Office or operating supplies on hand (paper, pens, cleaning supplies, etc.).',
  },
  {
    id: 'prepaid-insurance',
    name: 'Prepaid Insurance',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Insurance paid in advance — an asset until the coverage period passes.',
  },
  {
    id: 'prepaid-rent',
    name: 'Prepaid Rent',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Rent paid before the rental period — becomes an expense as time passes.',
  },
  {
    id: 'equipment',
    name: 'Equipment',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Computers, machinery, vehicles — tangible assets used in operations.',
  },
  {
    id: 'furniture',
    name: 'Furniture & Fixtures',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Desks, chairs, shelving — physical assets used in the business.',
  },
  {
    id: 'accum-depreciation',
    name: 'Accumulated Depreciation',
    category: 'Asset',
    normalBalance: 'Credit',
    description:
      'A contra-asset: the total depreciation charged to date on a long-term asset. Reduces the book value of the related asset.',
  },
  {
    id: 'notes-receivable',
    name: 'Notes Receivable',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Formal written promises (promissory notes) from others to pay us.',
  },
  {
    id: 'land',
    name: 'Land',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Land owned by the business. Not depreciated — land value is assumed permanent.',
  },
  {
    id: 'building',
    name: 'Building',
    category: 'Asset',
    normalBalance: 'Debit',
    description: 'Structures owned and used in the business. Subject to depreciation.',
  },
  {
    id: 'allowance-doubtful',
    name: 'Allowance for Doubtful Accounts',
    category: 'Asset',
    normalBalance: 'Credit',
    description:
      'A contra-asset that estimates how much of Accounts Receivable will never be collected.',
  },

  // ─── LIABILITIES ─────────────────────────────────────────────────────────────
  {
    id: 'accounts-payable',
    name: 'Accounts Payable',
    category: 'Liability',
    normalBalance: 'Credit',
    description: 'Money we owe suppliers for goods/services received but not yet paid.',
  },
  {
    id: 'wages-payable',
    name: 'Wages Payable',
    category: 'Liability',
    normalBalance: 'Credit',
    description: 'Employee wages earned but not yet paid at period end.',
  },
  {
    id: 'interest-payable',
    name: 'Interest Payable',
    category: 'Liability',
    normalBalance: 'Credit',
    description: 'Interest accrued on loans that has not yet been paid.',
  },
  {
    id: 'unearned-revenue',
    name: 'Unearned Revenue',
    category: 'Liability',
    normalBalance: 'Credit',
    description:
      'Cash received in advance for services not yet delivered. We owe the service — hence a liability.',
  },
  {
    id: 'bank-loan-payable',
    name: 'Bank Loan Payable',
    category: 'Liability',
    normalBalance: 'Credit',
    description: 'Amounts borrowed from a bank or financial institution.',
  },
  {
    id: 'notes-payable',
    name: 'Notes Payable',
    category: 'Liability',
    normalBalance: 'Credit',
    description: 'Formal written promises to pay a creditor — usually with a set repayment schedule.',
  },
  {
    id: 'taxes-payable',
    name: 'Income Tax Payable',
    category: 'Liability',
    normalBalance: 'Credit',
    description: 'Taxes owed to the government that have been incurred but not yet paid.',
  },

  // ─── EQUITY ──────────────────────────────────────────────────────────────────
  {
    id: 'owners-capital',
    name: "Owner's Capital",
    category: 'Equity',
    normalBalance: 'Credit',
    description:
      "The owner's investment in the business. Increases with investments and net income; decreases with drawings and net losses.",
  },
  {
    id: 'owners-drawings',
    name: "Owner's Drawings",
    category: 'Equity',
    normalBalance: 'Debit',
    description:
      'A contra-equity account representing cash or assets the owner withdraws for personal use. Reduces owner equity.',
  },
  {
    id: 'retained-earnings',
    name: 'Retained Earnings',
    category: 'Equity',
    normalBalance: 'Credit',
    description:
      'Cumulative net income kept in the business (not distributed as dividends). Builds up over years.',
  },
  {
    id: 'common-stock',
    name: 'Common Stock',
    category: 'Equity',
    normalBalance: 'Credit',
    description: 'The par value of shares issued to shareholders in a corporation.',
  },
  {
    id: 'additional-paid-in',
    name: 'Additional Paid-In Capital',
    category: 'Equity',
    normalBalance: 'Credit',
    description: 'Amount received from shareholders above par value when shares are issued.',
  },

  // ─── REVENUE ─────────────────────────────────────────────────────────────────
  {
    id: 'service-revenue',
    name: 'Service Revenue',
    category: 'Revenue',
    normalBalance: 'Credit',
    description: 'Income earned by providing consulting, advisory, or other professional services.',
  },
  {
    id: 'consulting-revenue',
    name: 'Consulting Revenue',
    category: 'Revenue',
    normalBalance: 'Credit',
    description: 'Specifically revenue from consulting engagements and project-based work.',
  },
  {
    id: 'interest-income',
    name: 'Interest Income',
    category: 'Revenue',
    normalBalance: 'Credit',
    description: 'Interest earned on bank deposits, loans made to others, or investments.',
  },
  {
    id: 'sales-revenue',
    name: 'Sales Revenue',
    category: 'Revenue',
    normalBalance: 'Credit',
    description: 'Revenue from selling physical products to customers.',
  },

  // ─── EXPENSES ────────────────────────────────────────────────────────────────
  {
    id: 'wages-expense',
    name: 'Wages Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'Total wages and salaries earned by employees during the period.',
  },
  {
    id: 'rent-expense',
    name: 'Rent Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'The cost of renting office space or other business premises.',
  },
  {
    id: 'insurance-expense',
    name: 'Insurance Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'The portion of prepaid insurance that has been used up during the current period.',
  },
  {
    id: 'supplies-expense',
    name: 'Supplies Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'The cost of supplies actually consumed during the period.',
  },
  {
    id: 'depreciation-expense',
    name: 'Depreciation Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description:
      'The systematic allocation of a long-term asset cost over its useful life — a non-cash expense.',
  },
  {
    id: 'utilities-expense',
    name: 'Utilities Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'Electricity, water, internet, and other utility costs for the period.',
  },
  {
    id: 'interest-expense',
    name: 'Interest Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'The cost of borrowing — interest charged on loans and credit facilities.',
  },
  {
    id: 'bad-debt-expense',
    name: 'Bad Debt Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'The estimated amount of receivables that will not be collected.',
  },
  {
    id: 'advertising-expense',
    name: 'Advertising Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'Costs incurred for marketing, advertising, and promotion activities.',
  },
  {
    id: 'income-tax-expense',
    name: 'Income Tax Expense',
    category: 'Expense',
    normalBalance: 'Debit',
    description: 'The tax owed on the company\'s net income for the reporting period.',
  },
];

// Helper lookups
export const ACCOUNT_MAP = Object.fromEntries(ACCOUNTS.map((a) => [a.id, a]));

export const ACCOUNTS_BY_CATEGORY = ACCOUNTS.reduce(
  (acc, account) => {
    if (!acc[account.category]) acc[account.category] = [];
    acc[account.category].push(account);
    return acc;
  },
  {} as Record<string, Account[]>
);

export const CATEGORY_ORDER: Account['category'][] = [
  'Asset',
  'Liability',
  'Equity',
  'Revenue',
  'Expense',
];

export const CATEGORY_LABELS: Record<Account['category'], string> = {
  Asset: '📦 Assets',
  Liability: '🏦 Liabilities',
  Equity: '👤 Equity',
  Revenue: '💰 Revenue',
  Expense: '📋 Expenses',
};
