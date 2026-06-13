import type { Module } from './types';

export const MODULE_4: Module = {
  id: 'module-4',
  number: 4,
  title: 'The Accounting Cycle',
  subtitle: 'Trial Balance, Adjusting & Closing Entries',
  estimatedHours: 4,
  color: 'from-amber-500 to-orange-600',
  icon: '🔄',
  isUnlocked: false,
  objectives: [
    { id: 'obj-4-1', actionVerb: 'COMPLETE', text: 'Complete all 8 steps of the full accounting cycle for ClearPath Consulting.' },
    { id: 'obj-4-2', actionVerb: 'PREPARE', text: 'Prepare an adjusted trial balance from unadjusted figures.' },
    { id: 'obj-4-3', actionVerb: 'CONSTRUCT', text: 'Construct all 4 required closing entries and verify post-closing balances.' },
    { id: 'obj-4-4', actionVerb: 'EXPLAIN', text: "Explain why temporary accounts must be closed and permanent accounts must not." },
  ],
  whatYouWillDo:
    "You will walk through all 8 steps of the accounting cycle — from source documents to the post-closing trial balance — in the correct sequence, and complete ClearPath's period-end close for Month 1.",

  lessons: [
    {
      id: 'lesson-4-1',
      title: 'The Trial Balance',
      subtitle: 'Listing every account to verify the books',
      estimatedMinutes: 20,
      phase1: {
        concept:
          "A **trial balance** lists every account in the ledger with its current balance — debits on the left, credits on the right. Its purpose: confirm that total debits = total credits before you prepare financial statements. It catches arithmetic errors but NOT logic errors (wrong account used, missing entries, etc.).",
        analogy:
          "🧾 A trial balance is like a restaurant pre-check before the bill is printed. You add up all your orders to make sure nothing was missed or miscounted before presenting it to the customer. It proves the math is right — but it won't catch if you ordered steak and were charged for chicken.",
        visualType: 'table',
        visualData: {
          headers: ['Account', 'Debit', 'Credit'],
          rows: [
            ['Cash', '$11,900', ''],
            ['Accounts Receivable', '$1,200', ''],
            ['Prepaid Insurance', '$1,100', ''],
            ['Equipment', '$2,400', ''],
            ['Accumulated Depreciation', '', '$200'],
            ["Owner's Capital", '', '$10,000'],
            ['Service Revenue', '', '$6,300'],
            ['Wages Expense', '$1,300', ''],
            ['Insurance Expense', '$100', ''],
            ['Depreciation Expense', '$200', ''],
            ['**TOTALS**', '**$18,200**', '**$18,200**'],
          ],
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'Prepare the trial balance BEFORE financial statements',
            body: "Always reconcile your trial balance first. If Dr ≠ Cr, stop — do not prepare statements until the discrepancy is found. Financial statements built on an unbalanced trial balance will have hidden errors that are far harder to find later.",
          },
          {
            type: 'COMMON_PITFALL',
            title: "A balanced trial balance doesn't mean error-free books",
            body: "Two errors that balance each other out will pass the trial balance test: (1) Recording the wrong account on BOTH sides (debiting Supplies instead of Equipment — same amount on both sides). (2) Omitting an entire transaction (both sides missing = still balanced). The trial balance is a necessary but not sufficient check.",
          },
          {
            type: 'DEEP_DIVE',
            title: 'Unadjusted vs. Adjusted Trial Balance',
            body: "Two trial balances exist in the accounting cycle: the UNADJUSTED (before adjusting entries — shows balances from raw journal entries only) and the ADJUSTED (after all period-end adjusting entries are posted — the version used to prepare financial statements). Never prepare statements from the unadjusted trial balance.",
          },
        ],
      },
      phase2: {
        transactionDescription: "ClearPath's ledger shows these balances after Month 1. Prepare the trial balance and verify it balances.",
        steps: [
          {
            id: 'step-1',
            prompt: "List all accounts with DEBIT normal balances first. Which accounts from ClearPath's ledger belong in the debit column?",
            choices: [
              { id: 'a', label: 'Cash, A/R, Equipment, Prepaid Insurance, all Expenses', isCorrect: true, feedback: "Assets and Expenses all have debit normal balances. These go in the left (debit) column of the trial balance." },
              { id: 'b', label: "Revenue and Owner's Capital", isCorrect: false, feedback: "Revenue and Owner's Capital have CREDIT normal balances — they belong in the right column." },
            ],
            revealText: "Debit column: Cash, A/R, Prepaid Insurance, Equipment, Wages Expense, Insurance Expense, Depreciation Expense.",
          },
          {
            id: 'step-2',
            prompt: "Now place accounts with CREDIT normal balances. Which go in the credit column?",
            choices: [
              { id: 'a', label: "Accum. Depreciation, Owner's Capital, Service Revenue", isCorrect: true, feedback: "Contra-assets (Accum. Depreciation), Equity, and Revenue all have credit normal balances. These belong in the right column." },
              { id: 'b', label: 'Wages Expense, Rent Expense', isCorrect: false, feedback: "Expenses have DEBIT normal balances. They belong on the left side of the trial balance." },
            ],
            revealText: "Credit column: Accumulated Depreciation, Owner's Capital, Service Revenue.",
          },
          {
            id: 'step-3',
            prompt: "Total Debits = $18,200. Total Credits = $18,200. What does this tell us?",
            choices: [
              { id: 'a', label: "The books are mathematically balanced — safe to proceed to financial statements", isCorrect: true, feedback: "Correct. Equal totals confirm no arithmetic errors exist. We can now prepare the adjusted trial balance and then the financial statements." },
              { id: 'b', label: "The business is profitable", isCorrect: false, feedback: "A balanced trial balance says nothing about profitability. It only confirms the math is consistent. Profitability is determined by comparing Revenue to Expenses on the Income Statement." },
            ],
            revealText: "Trial balance confirmed: $18,200 = $18,200. Proceed to financial statements.",
          },
        ],
        summaryText: "The trial balance is the checkpoint between journalizing and reporting. Equal totals give you the green light to proceed — unequal totals mean stop and investigate before going further.",
      },
      phase3: { sandboxScenarioId: 'tx-012', contextNote: "Before closing, make sure all revenue has been recognized. Post the entry converting $600 of Unearned Revenue to earned Service Revenue." },
      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-4-1-1',
            conceptTag: 'trial-balance',
            question: "ClearPath's trial balance shows total debits of $22,400 and total credits of $21,900. What must be true?",
            options: [
              { id: 'A', text: 'There is a $500 profit for the period', isCorrect: false, explanation: "The $500 discrepancy between debits and credits indicates a bookkeeping error — not profit. Net income is calculated from Revenue minus Expenses on the income statement, not from trial balance differences. A $500 imbalance means something was posted incorrectly." },
              { id: 'B', text: 'There is a posting error somewhere in the ledger — the books must be corrected before proceeding', isCorrect: true, explanation: "Correct. Total debits must ALWAYS equal total credits. A $500 discrepancy means either: an entry was recorded with unequal debits/credits, a posting was made to only one account, or an arithmetic error was made. The books cannot be closed or statements prepared until this is resolved." },
              { id: 'C', text: 'An adjusting entry for $500 needs to be recorded', isCorrect: false, explanation: "Adjusting entries don't 'fix' a trial balance imbalance — they are legitimate period-end entries that affect both sides equally. A $500 imbalance is a bookkeeping error that must be traced and corrected, not covered with an arbitrary adjusting entry." },
              { id: 'D', text: 'Expenses exceed revenues by $500', isCorrect: false, explanation: "Revenue vs. expense comparison determines net income — not trial balance column totals. Each account in the trial balance carries its own balance (debit or credit) regardless of whether it's income or expense. The column imbalance signals a mathematical posting error." },
            ],
          },
        ],
      },
    },

    {
      id: 'lesson-4-2',
      title: 'Closing Entries',
      subtitle: 'Resetting the scoreboard for the new period',
      estimatedMinutes: 25,
      phase1: {
        concept:
          "**Closing entries** reset all **temporary accounts** (Revenue, Expenses, and Drawings) to zero at period-end. They transfer net income (or loss) into Owner's Capital. After closing, only **permanent accounts** (Assets, Liabilities, Equity) carry their balances forward. Temporary accounts start fresh each new period.",
        analogy:
          "🏟️ At the end of a basketball game, the scoreboard resets to 0–0 for the next game. The score from tonight doesn't carry into tomorrow's game. That's closing entries: revenue and expense 'scores' reset to zero each period. But the STANDINGS (the permanent equity balance) DO carry forward — last year's profits are still in the books.",
        visualType: 'diagram',
        visualData: {
          type: 'flow',
          steps: [
            { label: 'Step 1', text: 'Close Revenue accounts → Dr. Service Revenue / Cr. Income Summary' },
            { label: 'Step 2', text: 'Close Expense accounts → Dr. Income Summary / Cr. [Each Expense]' },
            { label: 'Step 3', text: "Close Income Summary → Dr. Income Summary / Cr. Owner's Capital" },
            { label: 'Step 4', text: "Close Drawings → Dr. Owner's Capital / Cr. Owner's Drawings" },
          ],
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: "Always close in the correct 4-step order",
            body: "Step 1: Close all Revenue to Income Summary. Step 2: Close all Expenses to Income Summary. Step 3: Close Income Summary to Owner's Capital (or Retained Earnings). Step 4: Close Drawings to Owner's Capital. Skipping or reordering these steps creates a net income calculation error.",
          },
          {
            type: 'DEEP_DIVE',
            title: "What is Income Summary and why does it exist?",
            body: "Income Summary is a temporary clearing account used only during closing. It aggregates all revenues and expenses for one moment — just long enough to calculate net income before transferring it to equity. Some accountants skip it and close directly to Owner's Capital. Either method is acceptable; Income Summary just makes the calculation visible and auditable.",
          },
          {
            type: 'COMMON_PITFALL',
            title: "Never close permanent accounts",
            body: "Assets, Liabilities, and Equity are permanent — they carry their balances indefinitely. Closing Cash would wipe out the company's bank balance. Closing Owner's Capital would delete cumulative equity. Only temporary accounts (Revenue, Expenses, Drawings) are closed. If in doubt, ask: Is this account reset each period? If yes → temporary. If no → permanent.",
          },
        ],
      },
      phase2: {
        transactionDescription: "Close ClearPath's books for January. Revenue: $6,300. Expenses: $2,400 total. Net Income: $3,900.",
        steps: [
          {
            id: 'step-1',
            prompt: "Step 1: Close Service Revenue to Income Summary. Revenue has a Credit balance — to close it, we DEBIT it. What's the entry?",
            choices: [
              { id: 'a', label: 'Dr. Service Revenue $6,300 / Cr. Income Summary $6,300', isCorrect: true, feedback: "Correct. Debiting Revenue reduces it to zero. Crediting Income Summary begins building the net income calculation." },
              { id: 'b', label: "Dr. Income Summary $6,300 / Cr. Owner's Capital $6,300", isCorrect: false, feedback: "Revenue must be closed to Income Summary first — not directly to Owner's Capital. Step 1 always closes revenue accounts." },
            ],
            revealText: "After Step 1: Service Revenue = $0. Income Summary = $6,300 Credit.",
          },
          {
            id: 'step-2',
            prompt: "Step 2: Close all Expense accounts to Income Summary. Total expenses = $2,400. To close expenses (which have debit balances), we CREDIT them.",
            choices: [
              { id: 'a', label: "Dr. Income Summary $2,400 / Cr. [Wages, Insurance, Depreciation Expense] $2,400", isCorrect: true, feedback: "Correct. Debiting Income Summary reduces its balance by the total expenses. Crediting each expense account brings it to zero." },
              { id: 'b', label: "Dr. Expenses $2,400 / Cr. Revenue $2,400", isCorrect: false, feedback: "Revenue and expenses are closed to Income Summary — not to each other directly. The Income Summary account serves as the intermediary." },
            ],
            revealText: "After Step 2: All expense accounts = $0. Income Summary = $6,300 Cr. − $2,400 Dr. = $3,900 Credit balance (= net income).",
          },
          {
            id: 'step-3',
            prompt: "Step 3: Income Summary has a $3,900 credit balance (net income). Close it to Owner's Capital.",
            choices: [
              { id: 'a', label: "Dr. Income Summary $3,900 / Cr. Owner's Capital $3,900", isCorrect: true, feedback: "Perfect. Income Summary is debited to zero. Owner's Capital is credited — the owner's stake grows by the period's net income." },
              { id: 'b', label: "Dr. Owner's Capital $3,900 / Cr. Income Summary $3,900", isCorrect: false, feedback: "This would DECREASE Owner's Capital (a net loss treatment). Net income INCREASES equity — Owner's Capital must be credited." },
            ],
            revealText: "After Step 3: Income Summary = $0. Owner's Capital increased by $3,900.",
          },
        ],
        summaryText: "After all closing entries, every Revenue and Expense account has a zero balance — ready for the new period. Owner's Capital now reflects the owner's increased stake from Month 1 operations.",
      },
      phase3: { sandboxScenarioId: 'tx-009', contextNote: "Before closing, make sure accrued wages are recorded. Post the $500 wage accrual entry (Dr. Wages Expense / Cr. Wages Payable) that belongs in January's books." },
      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-4-2-1',
            conceptTag: 'closing-entries',
            question: "Which of the following accounts is a PERMANENT account that should NEVER be closed?",
            options: [
              { id: 'A', text: 'Service Revenue', isCorrect: false, explanation: "Service Revenue is a temporary account — it is closed to zero at every period-end so that revenue tracking starts fresh each period. Permanent accounts are assets, liabilities, and equity balances that carry forward indefinitely." },
              { id: 'B', text: "Owner's Drawings", isCorrect: false, explanation: "Owner's Drawings is a temporary contra-equity account — it is closed to Owner's Capital at period end (Step 4 of closing). After closing, Drawings resets to zero. It represents withdrawals for the current period only." },
              { id: 'C', text: 'Wages Expense', isCorrect: false, explanation: "Wages Expense is a temporary account — closed to Income Summary at period end. Expenses accumulate during the period and are reset to zero for the new period so each period's profitability can be measured independently." },
              { id: 'D', text: "Owner's Capital", isCorrect: true, explanation: "Owner's Capital is a permanent equity account. It carries its balance forward indefinitely, accumulating all past net incomes, investments, and drawings over the life of the business. Closing entries INCREASE it (by net income) or DECREASE it (by drawings and net loss) — they never reset it to zero." },
            ],
          },
        ],
      },
    },
  ],

  problemSet: {
    id: 'ps-module-4',
    title: "ClearPath Consulting — Full Month-End Close",
    companyContext: "Complete the full accounting cycle for ClearPath's first month: prepare the trial balance, post all adjusting entries, and complete all 4 closing entries. Verify the post-closing trial balance shows zero balances for all temporary accounts.",
    transactions: ['tx-008', 'tx-009', 'tx-010', 'tx-012'],
    reflectionPrompt: "After closing: (1) Which accounts have zero balances? (2) Which carry forward? (3) What is the final Owner's Capital balance? (4) What would happen if you forgot to run closing entries before starting Month 2?",
  },
};

export const MODULE_5: Module = {
  id: 'module-5',
  number: 5,
  title: 'Bank Reconciliation',
  subtitle: 'Matching internal records to external reality',
  estimatedHours: 3,
  color: 'from-cyan-600 to-sky-700',
  icon: '🏦',
  isUnlocked: false,
  objectives: [
    { id: 'obj-5-1', actionVerb: 'PERFORM', text: 'Perform a complete bank reconciliation, identifying all differences between book and bank records.' },
    { id: 'obj-5-2', actionVerb: 'CLASSIFY', text: 'Classify reconciling items correctly as book adjustments vs. bank adjustments.' },
    { id: 'obj-5-3', actionVerb: 'JOURNALIZE', text: 'Journalize all adjusting entries required after the reconciliation.' },
  ],
  whatYouWillDo:
    "You will reconcile ClearPath's bank statement to the general ledger, identify outstanding checks and deposits in transit, detect an NSF check, and record all necessary adjusting entries.",

  lessons: [
    {
      id: 'lesson-5-1',
      title: 'Why Bank Statements Differ from the Books',
      subtitle: 'Timing differences and errors',
      estimatedMinutes: 20,
      phase1: {
        concept:
          "The **bank reconciliation** proves that your cash records (the General Ledger Cash account) match the bank's records (the bank statement) — after accounting for legitimate timing differences. Common differences: (1) **Deposits in transit** — you recorded a deposit; the bank hasn't processed it yet. (2) **Outstanding checks** — you wrote and recorded a check; the payee hasn't cashed it yet. (3) **Bank charges** — fees the bank deducted that you haven't recorded yet. (4) **NSF checks** — a client's check bounced.",
        analogy:
          "📱 Your banking app shows $3,200. But you have 3 checks you wrote totalling $400 that haven't been cashed yet, and you deposited $600 yesterday that hasn't cleared. Your TRUE cash position: $3,200 (bank) − $400 (outstanding checks) + $600 (deposit in transit) = $3,400. The bank rec reconciles both sides to this true figure.",
        visualType: 'table',
        visualData: {
          headers: ['', 'Bank Balance', 'Book Balance'],
          rows: [
            ['Starting balance', '$8,450', '$8,200'],
            ['Add: Deposits in transit', '+$600', 'already recorded'],
            ['Less: Outstanding checks', '−$350', 'already recorded'],
            ['Add: Bank interest earned', 'already credited', '+$25'],
            ['Less: Bank service charge', 'already deducted', '−$20'],
            ['**Adjusted Balance**', '**$8,700**', '**$8,205**'],
          ],
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'Reconcile monthly, every month, without exception',
            body: "A monthly bank reconciliation is the minimum standard. It catches errors before they compound, detects unauthorized transactions early, and provides an independent verification of the cash balance. Many frauds are discovered through reconciliation — it is a critical internal control.",
          },
          {
            type: 'DEEP_DIVE',
            title: 'Separation of duties: who should reconcile?',
            body: "The person who performs the bank reconciliation should NOT be the person who authorizes payments or handles cash receipts. Why? If one person controls both, they could conceal a theft by adjusting the reconciliation. This is the 'separation of duties' principle — a foundational internal control that makes fraud more difficult and easier to detect.",
          },
          {
            type: 'COMMON_PITFALL',
            title: 'Forgetting to journalize book-side adjustments',
            body: "Many learners complete the reconciliation correctly but forget to record the journal entries for book-side items (bank charges, interest earned, NSF checks). The reconciliation proves the math — but JOURNAL ENTRIES are what update the actual accounting records. A reconciliation without follow-up journal entries leaves the books wrong.",
          },
        ],
      },
      phase2: {
        transactionDescription: "ClearPath's bank statement shows $8,450. The GL Cash balance shows $8,200. Reconcile both to the true cash balance.",
        steps: [
          {
            id: 'step-1',
            prompt: "There's a $600 deposit in transit (recorded in books, not yet on bank statement). Which side of the reconciliation does it appear on?",
            choices: [
              { id: 'a', label: "Bank side — add $600 to the bank balance", isCorrect: true, feedback: "Correct. The deposit is already in our books. The bank just hasn't processed it yet. We add it to the bank balance to bring it closer to reality." },
              { id: 'b', label: "Book side — add $600 to the book balance", isCorrect: false, feedback: "We already recorded this deposit in our books — that's why it's 'in transit.' We don't record it again. The bank side needs to catch up." },
            ],
            revealText: "Bank adjusted: $8,450 + $600 deposit in transit = $9,050 (before outstanding checks).",
          },
          {
            id: 'step-2',
            prompt: "Outstanding checks total $350 (written and recorded, not yet cashed). Which side, and add or subtract?",
            choices: [
              { id: 'a', label: "Bank side — subtract $350", isCorrect: true, feedback: "The checks are recorded in our books (cash already reduced there). The bank hasn't processed them yet — so subtract from the bank balance." },
              { id: 'b', label: "Book side — subtract $350", isCorrect: false, feedback: "Outstanding checks are already recorded in our books (we reduced Cash when we wrote them). No book-side adjustment needed." },
            ],
            revealText: "Bank adjusted: $9,050 − $350 outstanding checks = $8,700.",
          },
          {
            id: 'step-3',
            prompt: "Bank charged a $20 service fee (not in our books yet) and credited $5 interest (also not in our books). Which side do both appear on?",
            choices: [
              { id: 'a', label: "Book side — adjust our records for items we haven't recorded yet", isCorrect: true, feedback: "Exactly. These are book-side adjustments: the bank already processed them (they're on the bank statement) but we haven't recorded them yet. We must record journal entries for each." },
              { id: 'b', label: "Bank side — the bank needs to reverse these", isCorrect: false, feedback: "The bank processed these correctly — they belong on the bank statement. WE need to update our books to match. These are book adjustments, not bank errors." },
            ],
            revealText: "Book adjusted: $8,200 + $5 interest − $20 bank fee = $8,185. Both sides now equal... wait — $8,700 ≠ $8,185. We need to check for more items.",
          },
        ],
        summaryText: "Both sides must reconcile to the SAME adjusted balance. If they don't match, keep looking — there's another item to find. The reconciliation is not complete until both sides show identical adjusted totals.",
      },
      phase3: { sandboxScenarioId: 'tx-006', contextNote: "Practice recording a bank-side adjustment: After the reconciliation, you discover the bank charged a $30 service fee not yet in the books. Record: Dr. Bank Charges Expense / Cr. Cash." },
      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-5-1-1',
            conceptTag: 'bank-reconciliation',
            question: "After completing a bank reconciliation, the adjusted bank balance is $7,200 and the adjusted book balance is $7,200. What does this mean?",
            options: [
              { id: 'A', text: 'The reconciliation has an error — they should never be equal', isCorrect: false, explanation: "Equal adjusted balances is exactly the goal. The bank reconciliation is COMPLETE when both adjusted balances agree. Equal totals confirm that all reconciling items have been properly identified and accounted for." },
              { id: 'B', text: 'The reconciliation is complete — both sides agree at the true cash position', isCorrect: true, explanation: "Correct. When both adjusted balances match, the reconciliation is done. The $7,200 is the true, correct cash balance. Now you must journalize any book-side adjustments (bank charges, interest, NSF checks) to update the GL." },
              { id: 'C', text: 'No journal entries are needed because the books are already correct', isCorrect: false, explanation: "Book-side reconciling items (bank charges, interest earned, NSF checks) require journal entries to update the accounting records — even after the reconciliation balances. The reconciliation proves the math; journal entries update the books." },
              { id: 'D', text: 'The company has $7,200 of profit this period', isCorrect: false, explanation: "The reconciliation shows the TRUE cash balance — not profit. Profit is calculated on the income statement from revenues and expenses. Cash and profit are different concepts; a profitable company can have very little cash (and vice versa)." },
            ],
          },
        ],
      },
    },
  ],

  problemSet: {
    id: 'ps-module-5',
    title: "ClearPath Consulting — Month 2 Bank Reconciliation",
    companyContext: "Reconcile ClearPath's Month 2 bank statement. Items to reconcile: $800 deposit in transit, $450 in outstanding checks, $15 bank fee, $8 interest earned, and a $200 NSF check from a client. Find the adjusted balance and record all book-side journal entries.",
    transactions: ['tx-005', 'tx-006'],
    reflectionPrompt: "After completing the bank rec: (1) What is the true cash balance? (2) Which items required journal entries? (3) How does the NSF check affect ClearPath's relationship with that client going forward?",
  },
};

export const MODULE_6: Module = {
  id: 'module-6',
  number: 6,
  title: 'Financial Analysis & Excel Integration',
  subtitle: 'Reading the numbers and building the tools',
  estimatedHours: 5,
  color: 'from-rose-600 to-pink-700',
  icon: '📈',
  isUnlocked: false,
  objectives: [
    { id: 'obj-6-1', actionVerb: 'CALCULATE', text: 'Calculate and interpret the current ratio, profit margin, and debt-to-equity ratio for ClearPath.' },
    { id: 'obj-6-2', actionVerb: 'BUILD', text: 'Build a dynamic trial balance and income statement in Excel using SUM and IF formulas.' },
    { id: 'obj-6-3', actionVerb: 'ANALYZE', text: 'Analyze financial trends and identify at least two actionable recommendations for ClearPath.' },
    { id: 'obj-6-4', actionVerb: 'DISTINGUISH', text: 'Distinguish between GAAP and IFRS treatment for three key accounting areas.' },
  ],
  whatYouWillDo:
    "You will build a live Excel financial model for ClearPath, calculate 5 key financial ratios, identify trends, and write a one-page financial health analysis for the business owner.",

  lessons: [
    {
      id: 'lesson-6-1',
      title: 'Financial Ratios — Reading the Story in the Numbers',
      subtitle: 'What the statements tell you beyond the totals',
      estimatedMinutes: 30,
      phase1: {
        concept:
          "Financial ratios transform raw statement numbers into meaningful relationships. Three essential ratios: (1) **Current Ratio** = Current Assets ÷ Current Liabilities (measures ability to pay short-term debts; healthy = >1.5). (2) **Profit Margin** = Net Income ÷ Revenue × 100% (measures how much profit per dollar of revenue). (3) **Debt-to-Equity** = Total Liabilities ÷ Total Equity (measures financial leverage; lower = more owner-funded).",
        analogy:
          "🩺 Ratios are like vital signs. A doctor doesn't just note your weight — they compare it to your height (BMI). They don't just note your heart rate — they compare it to your age. Similarly, $3,900 of net income means nothing in isolation. Compared to $6,300 of revenue, it's a 62% profit margin — which is excellent for a service business.",
        visualType: 'table',
        visualData: {
          headers: ['Ratio', 'Formula', 'ClearPath Jan', 'Benchmark'],
          rows: [
            ['Current Ratio', 'Current Assets ÷ Current Liabilities', '14.2', '> 1.5 is healthy'],
            ['Profit Margin', 'Net Income ÷ Revenue', '62%', '15–25% is typical for services'],
            ['Debt-to-Equity', 'Total Liabilities ÷ Equity', '0.07', '< 1.0 is conservative'],
          ],
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'Always compare ratios to a benchmark',
            body: "A ratio is only meaningful when compared to something: the same company last period (trend analysis), an industry average, or a target threshold. A current ratio of 2.5 is great for a retailer but may indicate excess idle cash for a tech company. Context is everything.",
          },
          {
            type: 'DEEP_DIVE',
            title: 'Why ClearPath\'s ratios look so strong (and the risk)',
            body: "ClearPath's ratios look impressive because it's a new, owner-funded consulting business with almost no debt and high margins. But a 62% profit margin in Month 1 may be misleading — there's only one client, and costs are minimal because the owner isn't paying themselves a market salary. As the business grows, margins will compress. Ratio analysis must always consider the business stage and context.",
          },
          {
            type: 'COMMON_PITFALL',
            title: 'Using the wrong balance sheet date for ratios',
            body: "Balance sheet ratios (current ratio, debt-to-equity) use period-end balances — a snapshot in time. A company can manipulate these ratios by timing large transactions near period end. Professional analysts watch for unusual spikes in ratios near reporting dates — a sign of 'window dressing.'",
          },
        ],
      },
      phase2: {
        transactionDescription: "Calculate ClearPath's 3 key ratios from Month 1 data: Current Assets $13,200 | Total Assets $15,400 | Current Liabilities $500 | Total Liabilities $500 | Equity $14,900 | Revenue $6,300 | Net Income $3,900.",
        steps: [
          {
            id: 'step-1',
            prompt: "Current Ratio = Current Assets ÷ Current Liabilities = $13,200 ÷ $500 = ?",
            choices: [
              { id: 'a', label: '26.4 — meaning ClearPath has $26.40 of current assets for every $1 of current debt', isCorrect: true, feedback: "Correct. A ratio of 26.4 is extremely high — ClearPath can easily cover its short-term obligations. For context, most companies target 1.5–3.0. This high ratio reflects the early stage with minimal liabilities." },
              { id: 'b', label: '0.038 — meaning ClearPath is at risk of insolvency', isCorrect: false, feedback: "You divided Current Liabilities by Current Assets instead of the reverse. Current Ratio = Current Assets ÷ Current Liabilities = $13,200 ÷ $500 = 26.4." },
            ],
            revealText: "Current Ratio = 26.4. Interpretation: very low short-term debt relative to liquid assets. Extremely healthy short-term position.",
          },
          {
            id: 'step-2',
            prompt: "Profit Margin = Net Income ÷ Revenue × 100% = $3,900 ÷ $6,300 × 100% = ?",
            choices: [
              { id: 'a', label: '61.9% — ClearPath keeps nearly 62 cents of every dollar earned', isCorrect: true, feedback: "Correct. A 62% profit margin is strong for any service business. This reflects low overhead costs in Month 1. As the business grows and hires staff, this margin will likely compress." },
              { id: 'b', label: '161.5% — revenue exceeds net income', isCorrect: false, feedback: "Profit margin cannot exceed 100%. You may have reversed the calculation: $6,300 ÷ $3,900 = 161.5% gives you a revenue-to-income ratio, not a margin. Margin = Income ÷ Revenue." },
            ],
            revealText: "Profit Margin = 61.9%. Interpretation: excellent profitability for a service firm in early operations.",
          },
          {
            id: 'step-3',
            prompt: "Debt-to-Equity = Total Liabilities ÷ Total Equity = $500 ÷ $14,900 = ?",
            choices: [
              { id: 'a', label: '0.034 — ClearPath is almost entirely equity-funded with minimal debt', isCorrect: true, feedback: "Correct. At 0.034, ClearPath has very little debt relative to equity — it's almost entirely self-funded. This is very conservative (and appropriate for a new consulting business). Higher debt would mean higher risk but also potentially higher returns on equity." },
              { id: 'b', label: '29.8 — ClearPath has high leverage', isCorrect: false, feedback: "You divided Equity by Liabilities instead of the reverse. Debt-to-Equity = Total Liabilities ÷ Total Equity = $500 ÷ $14,900 = 0.034 (very low leverage, not high)." },
            ],
            revealText: "Debt-to-Equity = 0.034. Interpretation: extremely low leverage — the business is funded almost entirely by the owner.",
          },
        ],
        summaryText: "ClearPath's ratios paint a picture: financially strong, highly profitable, and conservatively financed. But these metrics alone don't tell you about growth potential, client concentration risk, or the owner's compensation — qualitative analysis must supplement the numbers.",
      },
      phase3: { sandboxScenarioId: 'tx-015', contextNote: "Record the bad debt estimate for Month 2: ClearPath estimates $350 of receivables may be uncollectible. This will reduce the current ratio slightly — watch the equation banner." },
      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-6-1-1',
            conceptTag: 'financial-ratios',
            question: "ClearPath's current ratio drops from 26.4 in Month 1 to 4.2 in Month 6. Which interpretation is MOST accurate?",
            options: [
              { id: 'A', text: 'The company is heading toward insolvency and must reduce expenses immediately', isCorrect: false, explanation: "A current ratio of 4.2 is still very healthy — significantly above the 1.5 benchmark. A decline from an extreme high (26.4) to a healthy level (4.2) likely reflects normal growth: acquiring liabilities to fund expansion. Context matters enormously. A ratio of 4.2 does not indicate distress." },
              { id: 'B', text: 'The ratio has declined but remains healthy — the decline may reflect normal growth and added liabilities', isCorrect: true, explanation: "Correct interpretation. Moving from 26.4 to 4.2 shows the business is taking on more short-term obligations (perhaps accounts payable from suppliers, wages payable for new staff) — which is normal as a company grows. At 4.2, ClearPath still has $4.20 of liquid assets for every $1 of short-term debt. This is a healthy, sustainable position." },
              { id: 'C', text: 'The company became 6x less profitable between Month 1 and Month 6', isCorrect: false, explanation: "The current ratio measures liquidity (ability to pay short-term debts) — not profitability. Profitability is measured by the profit margin (Net Income ÷ Revenue). The current ratio says nothing about how much money the business is making." },
              { id: 'D', text: 'The company took out a long-term bank loan, which directly reduced the current ratio', isCorrect: false, explanation: "Long-term loans are classified as NON-CURRENT liabilities and do NOT appear in the current ratio denominator (which uses only current liabilities). A long-term loan would affect the debt-to-equity ratio, not the current ratio — unless repayment is due within 12 months." },
            ],
          },
        ],
      },
    },
  ],

  problemSet: {
    id: 'ps-module-6',
    title: "ClearPath Consulting — 3-Month Financial Analysis",
    companyContext: "Using data from Months 1–3 of ClearPath's operations, calculate all three financial ratios for each month, identify trends, build a simple Excel model with dynamic formulas, and write a financial health memo to the business owner.",
    transactions: ['tx-013', 'tx-014', 'tx-015'],
    reflectionPrompt: "Write a 200-word financial health memo to Sarah (ClearPath's owner): What do the numbers say? What's the biggest risk? What's the biggest opportunity? What ONE action should she take in Month 4?",
  },
};
