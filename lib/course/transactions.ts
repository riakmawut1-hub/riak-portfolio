import type { TransactionScenario } from './types';

export const TRANSACTIONS: TransactionScenario[] = [
  // ─── BEGINNER ────────────────────────────────────────────────────────────────
  {
    id: 'tx-001',
    difficulty: 'Beginner',
    description:
      'The owner of ClearPath Consulting invests $10,000 of personal cash into the business to get it started.',
    hint: 'Money is coming INTO the business — one asset increases. The owner is funding this from personal funds — equity increases.',
    correctEntry: [
      { accountId: 'cash', type: 'Debit', amount: 10000 },
      { accountId: 'owners-capital', type: 'Credit', amount: 10000 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Cash increases, so we DEBIT Cash',
      'Equity has a CREDIT normal balance → Owner\'s Capital increases, so we CREDIT it',
    ],
    feedbackCorrect:
      'Perfect entry. Cash (an asset) increases when debited. Owner\'s Capital (equity) increases when credited. The accounting equation: Assets (+$10,000) = Liabilities ($0) + Equity (+$10,000). ✓',
    feedbackIncorrectBalance:
      'Your debits and credits don\'t balance. Every journal entry must have equal total debits and credits. Count your amounts on each side.',
    compareAnswerExplanation:
      'Cash is debited $10,000 because it is an Asset with a normal DEBIT balance — it is increasing. Owner\'s Capital is credited $10,000 because Equity has a normal CREDIT balance — the owner\'s stake in the business is increasing by the amount invested.',
  },
  {
    id: 'tx-002',
    difficulty: 'Beginner',
    description:
      'ClearPath Consulting purchases office supplies for $300, paying cash immediately.',
    hint: 'One asset goes up (supplies you now own). Another asset goes down (cash you paid). Both are assets — look at their normal balances.',
    correctEntry: [
      { accountId: 'supplies', type: 'Debit', amount: 300 },
      { accountId: 'cash', type: 'Credit', amount: 300 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Supplies increases, so we DEBIT Supplies',
      'Assets have a DEBIT normal balance → Cash decreases, so we CREDIT Cash (opposite of its normal balance)',
    ],
    feedbackCorrect:
      'Great work! This is an asset swap — you traded $300 of Cash for $300 of Supplies. Both are assets. Total assets stay the same. The equation: Assets (+$300 supplies, -$300 cash = $0 net change) = Liabilities ($0) + Equity ($0). ✓',
    feedbackIncorrectBalance:
      'Debits and credits must balance. This is an asset-for-asset swap — both accounts are Assets.',
    compareAnswerExplanation:
      'Supplies is debited because an Asset is increasing — you now own the supplies. Cash is credited because an Asset is decreasing — you paid out cash. The net effect on total assets is zero (one asset up, one asset down by the same amount).',
  },
  {
    id: 'tx-003',
    difficulty: 'Beginner',
    description:
      'ClearPath Consulting provides $2,500 of consulting services. The client pays immediately in cash.',
    hint: 'Two things happen: cash arrives (an asset increases) AND you\'ve earned revenue (equity increases via Revenue).',
    correctEntry: [
      { accountId: 'cash', type: 'Debit', amount: 2500 },
      { accountId: 'service-revenue', type: 'Credit', amount: 2500 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Cash increases, so we DEBIT Cash',
      'Revenue has a CREDIT normal balance → Service Revenue increases, so we CREDIT it',
      'Revenue increases Equity — both sides of the equation grow equally',
    ],
    feedbackCorrect:
      'Excellent! Cash comes in (debit the asset) and Revenue is earned (credit increases equity). The equation: Assets (+$2,500) = Liabilities ($0) + Equity (+$2,500 via Revenue). ✓',
    feedbackIncorrectBalance:
      'Check your amounts. Revenue earned equals cash received — both sides should be $2,500.',
    compareAnswerExplanation:
      'Cash is debited $2,500 because an asset is increasing. Service Revenue is credited $2,500 because Revenue (which increases Equity) has a normal Credit balance — crediting it means we\'ve earned income. This is the most common revenue transaction for a service business.',
  },
  {
    id: 'tx-004',
    difficulty: 'Beginner',
    description:
      'ClearPath Consulting provides $1,200 of consulting services. The client will pay next month — an invoice is sent (on account).',
    hint: 'You\'ve done the work and earned the revenue — but cash hasn\'t arrived yet. You now have a RIGHT to receive cash (an asset called Accounts Receivable).',
    correctEntry: [
      { accountId: 'accounts-receivable', type: 'Debit', amount: 1200 },
      { accountId: 'service-revenue', type: 'Credit', amount: 1200 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Accounts Receivable increases, so we DEBIT it',
      'Revenue has a CREDIT normal balance → Service Revenue is earned, so we CREDIT it',
      'Accrual principle: revenue is recognized when EARNED, not when cash is collected',
    ],
    feedbackCorrect:
      'Perfect accrual entry! Revenue is recognized NOW because the service is complete — not when cash arrives. A/R (asset) goes up, Revenue (equity) goes up. Assets (+$1,200) = Liabilities ($0) + Equity (+$1,200). ✓',
    feedbackIncorrectBalance:
      'Both sides should be $1,200. The service was worth $1,200 — that amount must appear equally on both sides.',
    compareAnswerExplanation:
      'Accounts Receivable is debited because a new asset has been created — the legal right to collect $1,200 from the client. Service Revenue is credited because the service has been fully delivered. Under GAAP\'s accrual basis, revenue is recognized at the point of delivery, not when cash exchanges hands.',
  },
  {
    id: 'tx-005',
    difficulty: 'Beginner',
    description:
      'The client from the previous transaction pays their $1,200 invoice. Cash is received today.',
    hint: 'Cash arrives — one asset increases. But you no longer have a receivable — that asset goes away. This is an asset swap between two assets.',
    correctEntry: [
      { accountId: 'cash', type: 'Debit', amount: 1200 },
      { accountId: 'accounts-receivable', type: 'Credit', amount: 1200 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Cash increases, so we DEBIT Cash',
      'Assets have a DEBIT normal balance → A/R decreases, so we CREDIT it (opposite of normal balance)',
      'No new revenue — it was already recognized when the work was done',
    ],
    feedbackCorrect:
      'Spot on! This is a balance sheet swap: Cash (asset) ↑ and Accounts Receivable (asset) ↓. Revenue was already recognized in the previous entry. NO revenue recorded here — the earning happened when the service was delivered. ✓',
    feedbackIncorrectBalance:
      'Both sides should be $1,200 — the full invoice amount is being settled.',
    compareAnswerExplanation:
      'Cash is debited because an asset is increasing. Accounts Receivable is credited because an asset is DECREASING — the receivable is "collected" and eliminated. Critically, no Revenue is recorded here because revenue was already recognized when the invoice was sent. Recording it again would double-count income.',
  },
  {
    id: 'tx-006',
    difficulty: 'Beginner',
    description: 'ClearPath Consulting pays employee wages of $800 in cash.',
    hint: 'Wages cost the business money — that\'s an expense. Expenses decrease equity. Cash goes out — an asset decreases.',
    correctEntry: [
      { accountId: 'wages-expense', type: 'Debit', amount: 800 },
      { accountId: 'cash', type: 'Credit', amount: 800 },
    ],
    goldenRulesActivated: [
      'Expenses have a DEBIT normal balance → Wages Expense increases, so we DEBIT it',
      'Assets have a DEBIT normal balance → Cash decreases, so we CREDIT it',
      'Expenses DECREASE equity — recording them on the debit side reduces the owner\'s stake',
    ],
    feedbackCorrect:
      'Correct! Wages Expense is debited (expenses always debit to record them). Cash is credited because it\'s leaving the business. The equation: Assets (-$800) = Liabilities ($0) + Equity (-$800 via Expense). ✓',
    feedbackIncorrectBalance:
      'The expense amount equals the cash paid — both sides should be $800.',
    compareAnswerExplanation:
      'Wages Expense is debited $800 because Expenses have a DEBIT normal balance — debiting them increases the expense balance, which ultimately reduces Owner\'s Equity. Cash is credited because the asset is decreasing (cash is going out). The impact: total equity falls by $800 because this is a cost of running the business.',
  },

  // ─── INTERMEDIATE ─────────────────────────────────────────────────────────────
  {
    id: 'tx-007',
    difficulty: 'Intermediate',
    description:
      'ClearPath Consulting pays $1,200 for 12 months of business insurance in advance (January 1).',
    hint: 'You\'ve paid cash, but you haven\'t "used up" the insurance yet. For 11 more months, that paid insurance is a future benefit — an asset. It will become an expense month by month.',
    correctEntry: [
      { accountId: 'prepaid-insurance', type: 'Debit', amount: 1200 },
      { accountId: 'cash', type: 'Credit', amount: 1200 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Prepaid Insurance (an asset) increases, so we DEBIT it',
      'Assets have a DEBIT normal balance → Cash decreases, so we CREDIT Cash',
      'Matching principle: the expense will be recognized month by month as the insurance is "used"',
    ],
    feedbackCorrect:
      'Excellent deferral entry! You\'re deferring an expense — the cash left the building, but the economic benefit (protection) hasn\'t been consumed yet. Prepaid Insurance is an asset: a future expense waiting to be recognized. ✓',
    feedbackIncorrectBalance:
      'Both sides should be $1,200 — the full amount paid for the insurance policy.',
    compareAnswerExplanation:
      'Prepaid Insurance is debited because the company now owns a future economic benefit worth $1,200 — 12 months of coverage. Cash is credited because it\'s leaving. Each month, $100 will be transferred from Prepaid Insurance to Insurance Expense (an adjusting entry) until the full $1,200 is expensed over 12 months.',
  },
  {
    id: 'tx-008',
    difficulty: 'Intermediate',
    description:
      'At month end, record one month of the prepaid insurance as used ($1,200 / 12 = $100).',
    hint: 'This is an ADJUSTING ENTRY. One month has passed — you\'ve consumed 1/12th of the insurance. Move $100 from the asset (Prepaid Insurance) to the expense (Insurance Expense).',
    correctEntry: [
      { accountId: 'insurance-expense', type: 'Debit', amount: 100 },
      { accountId: 'prepaid-insurance', type: 'Credit', amount: 100 },
    ],
    goldenRulesActivated: [
      'Expenses have a DEBIT normal balance → Insurance Expense increases, so we DEBIT it',
      'Assets have a DEBIT normal balance → Prepaid Insurance decreases, so we CREDIT it',
      'This is a DEFERRAL adjusting entry — expensing a previously deferred cost',
    ],
    feedbackCorrect:
      'Perfect adjusting entry! You\'ve "moved" $100 from an asset to an expense — recognizing the economic cost of one month of insurance protection. Prepaid Insurance goes from $1,200 to $1,100. Insurance Expense is now $100 for the period. ✓',
    feedbackIncorrectBalance:
      'The adjusting amount is $100 ($1,200 ÷ 12 months). Both sides should be $100.',
    compareAnswerExplanation:
      'Insurance Expense is debited $100 because an expense is being incurred this period. Prepaid Insurance is credited $100 because the asset is being consumed (reduced). This is the matching principle in action: the $100 cost is matched to the month in which the insurance protection was received. This entry would be repeated every month for 12 months.',
  },
  {
    id: 'tx-009',
    difficulty: 'Intermediate',
    description:
      'At month end, ClearPath accrues $500 of wages that employees have earned but that won\'t be paid until next week.',
    hint: 'Employees EARNED the wages this period — so the expense belongs this period. But no cash has left yet. Use a payable to capture what you owe.',
    correctEntry: [
      { accountId: 'wages-expense', type: 'Debit', amount: 500 },
      { accountId: 'wages-payable', type: 'Credit', amount: 500 },
    ],
    goldenRulesActivated: [
      'Expenses have a DEBIT normal balance → Wages Expense increases, so we DEBIT it',
      'Liabilities have a CREDIT normal balance → Wages Payable increases, so we CREDIT it',
      'This is an ACCRUAL adjusting entry — recognizing an expense before cash is paid',
    ],
    feedbackCorrect:
      'Textbook accrual! Wages Expense is recognized this period (when earned by employees), and Wages Payable records the obligation. Next period when you pay, it\'s: Dr. Wages Payable / Cr. Cash — clearing the liability. ✓',
    feedbackIncorrectBalance:
      'Both sides should be $500. The accrued amount equals the wages obligation.',
    compareAnswerExplanation:
      'Wages Expense is debited because the employees earned the wages this period — under accrual accounting, expenses are recognized when incurred, not when paid. Wages Payable is credited because the company now owes this money — a liability has been created. When the wages are paid next week, the entry will be Dr. Wages Payable $500 / Cr. Cash $500.',
  },
  {
    id: 'tx-010',
    difficulty: 'Intermediate',
    description:
      'Record depreciation of $200 on ClearPath\'s computer equipment for the month.',
    hint: 'Depreciation is a non-cash expense — no cash moves. Instead, you recognize the "wear and tear" cost of the asset. Use a CONTRA-ASSET account called Accumulated Depreciation.',
    correctEntry: [
      { accountId: 'depreciation-expense', type: 'Debit', amount: 200 },
      { accountId: 'accum-depreciation', type: 'Credit', amount: 200 },
    ],
    goldenRulesActivated: [
      'Expenses have a DEBIT normal balance → Depreciation Expense increases, so we DEBIT it',
      'Accumulated Depreciation is a CONTRA-ASSET (normal CREDIT balance) → it increases when credited',
      'Depreciation is non-cash: no cash account is affected',
    ],
    feedbackCorrect:
      'Perfect depreciation entry! Depreciation Expense reduces equity (income statement). Accumulated Depreciation reduces the book value of the equipment on the balance sheet (without touching the Equipment account). The net book value = Equipment cost - Accumulated Depreciation. ✓',
    feedbackIncorrectBalance:
      'Both sides should be $200. The depreciation amount is the same on both accounts.',
    compareAnswerExplanation:
      'Depreciation Expense is debited $200 to recognize the cost of using the equipment this month. Accumulated Depreciation is credited $200 — this is a contra-asset account that accumulates all past depreciation. We never reduce the Equipment account directly; instead, the "net book value" is Equipment minus Accumulated Depreciation. This preserves the original cost information while showing the current book value.',
  },
  {
    id: 'tx-011',
    difficulty: 'Intermediate',
    description:
      'ClearPath receives $600 cash in advance from a client for services to be delivered next month.',
    hint: 'Cash came in — good! But you haven\'t done the work yet. You OWE the service to the client. Until you deliver, this is a LIABILITY, not revenue.',
    correctEntry: [
      { accountId: 'cash', type: 'Debit', amount: 600 },
      { accountId: 'unearned-revenue', type: 'Credit', amount: 600 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Cash increases, so we DEBIT Cash',
      'Liabilities have a CREDIT normal balance → Unearned Revenue (liability) increases, so we CREDIT it',
      'Revenue is only recognized when EARNED — not when cash is received',
    ],
    feedbackCorrect:
      'Correct deferred revenue entry! Cash is in the bank, but the obligation to deliver services creates a liability. Once you deliver next month, you\'ll move $600 from Unearned Revenue → Service Revenue. ✓',
    feedbackIncorrectBalance:
      'Both sides should be $600 — the full advance payment received.',
    compareAnswerExplanation:
      'Cash is debited because an asset is increasing. Unearned Revenue is credited because a liability is being created — the company now owes services to the client. If we credited Revenue here, we\'d be violating the revenue recognition principle: revenue is earned only when the service is delivered. Next month: Dr. Unearned Revenue $600 / Cr. Service Revenue $600.',
  },
  {
    id: 'tx-012',
    difficulty: 'Intermediate',
    description:
      'ClearPath delivers the services from the advance payment above. Revenue is now earned.',
    hint: 'The work is done — the liability is fulfilled. Eliminate the Unearned Revenue (a liability goes away) and recognize the earned Revenue (equity increases).',
    correctEntry: [
      { accountId: 'unearned-revenue', type: 'Debit', amount: 600 },
      { accountId: 'service-revenue', type: 'Credit', amount: 600 },
    ],
    goldenRulesActivated: [
      'Liabilities have a CREDIT normal balance → Unearned Revenue decreases, so we DEBIT it',
      'Revenue has a CREDIT normal balance → Service Revenue increases, so we CREDIT it',
      'Liability converted to Revenue: balance sheet obligation → income statement recognition',
    ],
    feedbackCorrect:
      'Perfect revenue recognition! The liability (Unearned Revenue) is extinguished and Revenue is recognized. The balance sheet shrinks on the liability side, equity grows via income — and it all stays in balance. ✓',
    feedbackIncorrectBalance:
      'Both sides should be $600 — the full amount of services now delivered.',
    compareAnswerExplanation:
      'Unearned Revenue is debited $600 because the liability is being reduced (fulfilled). Service Revenue is credited $600 because the revenue is now earned — the service has been delivered. The cash is unaffected in this entry because it was already recorded when received. This two-entry sequence (cash receipt + revenue recognition) is the hallmark of deferred revenue accounting.',
  },

  // ─── ADVANCED ─────────────────────────────────────────────────────────────────
  {
    id: 'tx-013',
    difficulty: 'Advanced',
    description:
      'ClearPath buys a new laptop for $2,400 cash. It\'s expected to last 3 years with no salvage value.',
    hint: 'Record the purchase first. The laptop is a long-term asset (Equipment). Depreciation will be a separate adjusting entry each period ($2,400 / 36 months = $66.67/month).',
    correctEntry: [
      { accountId: 'equipment', type: 'Debit', amount: 2400 },
      { accountId: 'cash', type: 'Credit', amount: 2400 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Equipment increases, so we DEBIT it',
      'Assets have a DEBIT normal balance → Cash decreases, so we CREDIT it',
      'Capitalize costs > useful life threshold: this is a capital expenditure, not an expense',
    ],
    feedbackCorrect:
      'Correct capitalization entry! The laptop is recorded at cost ($2,400). Going forward, $66.67/month depreciation will reduce both Depreciation Expense and Accumulated Depreciation. After 36 months, the net book value will be $0. ✓',
    feedbackIncorrectBalance:
      'Both sides should be $2,400 — the full purchase price of the equipment.',
    compareAnswerExplanation:
      'Equipment is debited at the full purchase cost of $2,400 because an Asset is increasing. Cash is credited because an Asset is decreasing. This is called "capitalization" — instead of expensing the $2,400 immediately, the cost is spread over 3 years via depreciation ($66.67/month). The matching principle requires matching costs to the periods benefited.',
  },
  {
    id: 'tx-014',
    difficulty: 'Advanced',
    description:
      'ClearPath borrows $15,000 from the bank. The bank deposits the funds directly into the business account.',
    hint: 'Cash increases — an asset goes up. But you now OWE the bank — a liability goes up. The equation: Assets up = Liabilities up (equity unchanged).',
    correctEntry: [
      { accountId: 'cash', type: 'Debit', amount: 15000 },
      { accountId: 'bank-loan-payable', type: 'Credit', amount: 15000 },
    ],
    goldenRulesActivated: [
      'Assets have a DEBIT normal balance → Cash increases, so we DEBIT Cash',
      'Liabilities have a CREDIT normal balance → Bank Loan Payable increases, so we CREDIT it',
      'Borrowing increases both sides of the equation simultaneously',
    ],
    feedbackCorrect:
      'Correct loan entry! Assets and Liabilities both increase by $15,000. Equity is unchanged — the business got bigger on both sides of the balance sheet. Assets ($15,000) = Liabilities ($15,000) + Equity ($0 change). ✓',
    feedbackIncorrectBalance:
      'Both sides should be $15,000 — the full loan amount deposited.',
    compareAnswerExplanation:
      'Cash is debited $15,000 because the business received funds into its bank account. Bank Loan Payable is credited $15,000 because a new liability was created — the business now owes the bank this amount. Interest will be recorded separately as it accrues. This transaction expands the balance sheet equally on both sides, keeping the equation in balance without affecting equity.',
  },
  {
    id: 'tx-015',
    difficulty: 'Advanced',
    description:
      'At year end, ClearPath estimates that $350 of its outstanding receivables may be uncollectible.',
    hint: 'This is a Bad Debt adjusting entry. You\'re not writing off a specific invoice — you\'re estimating future losses. Use the Allowance for Doubtful Accounts (a contra-asset).',
    correctEntry: [
      { accountId: 'bad-debt-expense', type: 'Debit', amount: 350 },
      { accountId: 'allowance-doubtful', type: 'Credit', amount: 350 },
    ],
    goldenRulesActivated: [
      'Expenses have a DEBIT normal balance → Bad Debt Expense increases, so we DEBIT it',
      'Allowance for Doubtful Accounts is a CONTRA-ASSET (normal CREDIT balance) → it increases when credited',
      'Matching principle: recognize the estimated loss in the same period as the related revenue',
    ],
    feedbackCorrect:
      'Excellent allowance method entry! Bad Debt Expense hits the income statement, while the Allowance contra-asset reduces the net realizable value of A/R on the balance sheet. When a specific invoice is later deemed uncollectible, you\'ll write it off against the Allowance — no additional expense at that point. ✓',
    feedbackIncorrectBalance:
      'Both sides should be $350 — the estimated uncollectible amount.',
    compareAnswerExplanation:
      'Bad Debt Expense is debited $350 to recognize the estimated cost of extending credit to customers. Allowance for Doubtful Accounts is credited $350 — this contra-asset offsets Accounts Receivable on the balance sheet, presenting the "net realizable value" to financial statement readers. The A/R still shows the gross amount; the Allowance shows the expected uncollectible portion. This is the allowance method, preferred under GAAP.',
  },
];

export const TRANSACTION_MAP = Object.fromEntries(TRANSACTIONS.map((t) => [t.id, t]));

export const TRANSACTIONS_BY_DIFFICULTY = {
  Beginner: TRANSACTIONS.filter((t) => t.difficulty === 'Beginner'),
  Intermediate: TRANSACTIONS.filter((t) => t.difficulty === 'Intermediate'),
  Advanced: TRANSACTIONS.filter((t) => t.difficulty === 'Advanced'),
};
