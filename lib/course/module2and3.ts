import type { Module } from './types';

export const MODULE_2: Module = {
  id: 'module-2',
  number: 2,
  title: 'Journalizing Real Transactions',
  subtitle: 'Revenue, Expenses, Assets & Adjusting Entries',
  estimatedHours: 4,
  color: 'from-emerald-600 to-teal-700',
  icon: '📓',
  isUnlocked: false,
  objectives: [
    {
      id: 'obj-2-1',
      actionVerb: 'JOURNALIZE',
      text: 'Journalize 8 distinct transaction types including revenue, expenses, prepayments, and accruals.',
    },
    {
      id: 'obj-2-2',
      actionVerb: 'DISTINGUISH',
      text: 'Distinguish between cash-basis and accrual-basis recognition for any given transaction.',
    },
    {
      id: 'obj-2-3',
      actionVerb: 'CONSTRUCT',
      text: 'Construct adjusting entries for deferrals (prepaid expenses, unearned revenue) and accruals (unpaid wages, accrued revenue).',
    },
    {
      id: 'obj-2-4',
      actionVerb: 'ANALYZE',
      text: "Analyze the impact of each entry on the accounting equation and verify balance before proceeding.",
    },
  ],
  whatYouWillDo:
    "You will journalize 8 real ClearPath Consulting transactions — including purchases on credit, advance payments, and month-end adjustments — and demonstrate why each adjusting entry is required by the matching principle.",

  lessons: [
    {
      id: 'lesson-2-1',
      title: 'Revenue Transactions — Two Patterns',
      subtitle: 'Cash sales vs. sales on account',
      estimatedMinutes: 20,

      phase1: {
        concept:
          'Revenue transactions fall into two patterns. **Pattern A (Cash Sale):** Customer pays immediately → Dr. Cash / Cr. Revenue. **Pattern B (Credit Sale / On Account):** You deliver first, collect later → Dr. Accounts Receivable / Cr. Revenue. Both recognize revenue at the point of delivery. The difference is whether cash or a receivable captures the asset side.',
        analogy:
          '🍕 A pizzeria: Pattern A is walk-in customers paying at the counter (immediate cash). Pattern B is a corporate client who orders 50 pizzas for a company event and gets a 30-day invoice. The pizza was made and delivered in both cases — the revenue is earned the moment it leaves the kitchen. How and when the cash arrives is a separate question.',
        visualType: 'table',
        visualData: {
          headers: ['Pattern', 'When Cash Arrives', 'Debit', 'Credit'],
          rows: [
            ['A — Cash Sale', 'Immediately', 'Cash', 'Revenue'],
            ['B — On Account', 'Later (invoice)', 'Accounts Receivable', 'Revenue'],
            ['Collecting B', 'When client pays', 'Cash', 'Accounts Receivable'],
          ],
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'Revenue recognition: one rule, two formats',
            body: "Under GAAP's revenue recognition principle (ASC 606), revenue is recognized when performance obligations are satisfied — when the service is delivered or the good is transferred. Whether the customer has paid yet is irrelevant to recognition. Master this concept and the two revenue patterns become intuitive.",
          },
          {
            type: 'DEEP_DIVE',
            title: 'Cash vs. Accrual: Why it matters for taxes and analysis',
            body: "Under CASH basis (used by some small businesses), revenue is recognized only when cash is received. Under ACCRUAL basis (required by GAAP for larger companies), revenue is recognized when earned. A company with $500K of invoices sent but not yet collected might look highly profitable under accrual accounting — but if clients are slow to pay, cash flow could be dangerously tight. This gap between accrual income and cash flow is why the Cash Flow Statement exists.",
          },
          {
            type: 'COMMON_PITFALL',
            title: "Don't credit revenue when cash is collected on an A/R balance",
            body: "When a client pays an existing invoice, the entry is Dr. Cash / Cr. Accounts Receivable — NOT Cr. Revenue. Revenue was already recorded when the invoice was issued. Crediting Revenue on collection double-counts income and inflates the income statement. This is one of the most common errors in early bookkeeping.",
          },
        ],
      },

      phase2: {
        transactionDescription:
          "ClearPath provides a $3,500 consulting engagement. Half is collected in cash at completion; the other half ($1,750) is invoiced and will be collected next month.",
        steps: [
          {
            id: 'step-1',
            prompt: "This is a compound entry — two payment arrangements for one service. What total revenue should be recognized?",
            choices: [
              { id: 'a', label: '$3,500 — the full service value', isCorrect: true, feedback: "Correct. The entire service was delivered — $3,500 of revenue is earned today, regardless of how or when the cash arrives." },
              { id: 'b', label: '$1,750 — only the part paid in cash', isCorrect: false, feedback: "Under accrual accounting, revenue is recognized when EARNED (service delivered), not when cash is received. The full $3,500 was earned today." },
            ],
            revealText: "Cr. Service Revenue $3,500 — the full value earned, regardless of payment method.",
          },
          {
            id: 'step-2',
            prompt: "The cash portion ($1,750) is received. Which account captures it?",
            choices: [
              { id: 'a', label: 'Dr. Cash $1,750', isCorrect: true, feedback: "Cash arrives immediately for this portion — debit Cash $1,750 to increase the asset." },
              { id: 'b', label: 'Dr. Accounts Receivable $1,750', isCorrect: false, feedback: "A/R is for amounts that will be collected LATER. This $1,750 was paid on the spot — it's Cash, not a future receivable." },
            ],
            revealText: "Dr. Cash $1,750 for the portion paid immediately.",
          },
          {
            id: 'step-3',
            prompt: "The invoiced portion ($1,750) will be collected next month. Which account holds this right to collect?",
            choices: [
              { id: 'a', label: 'Dr. Accounts Receivable $1,750', isCorrect: true, feedback: "A/R captures the right to collect cash from the client in the future. It's an asset — we own this claim." },
              { id: 'b', label: 'Dr. Unearned Revenue $1,750', isCorrect: false, feedback: "Unearned Revenue is a LIABILITY used when WE receive money in advance and owe a service. Here the CLIENT owes us money — that's a Receivable, not Unearned Revenue." },
            ],
            revealText: "Complete compound entry: Dr. Cash $1,750 + Dr. A/R $1,750 = Cr. Service Revenue $3,500. Debits ($3,500) = Credits ($3,500). ✓",
          },
        ],
        summaryText:
          "Compound entries split one credit (Revenue) across two debit accounts. The rule is the same: total debits must equal total credits. Revenue is always recognized at the point of delivery.",
      },

      phase3: {
        sandboxScenarioId: 'tx-005',
        contextNote: "Practice the collection entry: ClearPath collects the $1,200 receivable from the invoice issued last lesson. Record how cash arrives and A/R is cleared — no new revenue.",
      },

      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-2-1-1',
            conceptTag: 'revenue-recognition',
            question: "ClearPath completes a 3-month consulting project in November. The client pays 100% upfront in September. When is revenue recognized?",
            options: [
              {
                id: 'A',
                text: 'September — when cash is received',
                isCorrect: false,
                explanation:
                  "Cash receipt triggers the recording of Unearned Revenue (a liability) in September — not Revenue. The cash is in the bank but the obligation to deliver services still exists. Recognizing revenue in September would violate the revenue recognition principle.",
              },
              {
                id: 'B',
                text: 'Equally over September, October, and November as work is performed',
                isCorrect: true,
                explanation:
                  "Correct. Under GAAP (ASC 606), revenue is recognized as the performance obligation is satisfied. If the consulting work is spread evenly over 3 months, 1/3 of the revenue is recognized each month as the service is delivered. Each month: Dr. Unearned Revenue / Cr. Service Revenue for 1/3 of the total.",
              },
              {
                id: 'C',
                text: 'November — when the project is fully complete',
                isCorrect: false,
                explanation:
                  "If the performance obligation is satisfied all at once at project completion, recognizing it all in November would be correct for a one-shot deliverable. But a 3-month consulting engagement typically involves ongoing service delivery each month — so revenue should be recognized progressively as work is performed, not all at the end.",
              },
              {
                id: 'D',
                text: 'When the client formally approves the final deliverable',
                isCorrect: false,
                explanation:
                  "Client approval can matter for certain revenue recognition models, but under GAAP, the key is when the performance obligation is satisfied — when control of the service is transferred to the client. For ongoing consulting, this typically occurs as the work is performed, not upon a final sign-off.",
              },
            ],
          },
          {
            id: 'q-2-1-2',
            conceptTag: 'compound-entries',
            question: "A compound journal entry is one where:",
            options: [
              {
                id: 'A',
                text: 'Debits and credits are equal in amount but many accounts are used',
                isCorrect: false,
                explanation:
                  "Debits always equal credits in ANY journal entry — that's not what makes an entry 'compound.' A simple entry has one debit and one credit. A compound entry has more than two lines (multiple debits, multiple credits, or both). The defining feature is the number of accounts, not just that they balance.",
              },
              {
                id: 'B',
                text: 'Two or more accounts are debited and/or two or more accounts are credited in a single entry',
                isCorrect: true,
                explanation:
                  "Correct. A compound entry involves more than the standard one-debit-one-credit structure. Examples: Dr. Cash + Dr. A/R / Cr. Revenue (two debits, one credit) or Dr. Equipment / Cr. Cash + Cr. Notes Payable (one debit, two credits). The rule still applies: total debits = total credits.",
              },
              {
                id: 'C',
                text: 'An entry that affects both the income statement and the balance sheet',
                isCorrect: false,
                explanation:
                  "Most regular transactions affect both — that description fits almost every revenue and expense entry. A compound entry is specifically defined by having more than one account on either the debit or credit side (or both). The term 'compound' refers to structure, not which financial statements are affected.",
              },
              {
                id: 'D',
                text: 'An entry recorded at year-end to close temporary accounts',
                isCorrect: false,
                explanation:
                  "You're describing closing entries — which do happen at year-end and do have multiple accounts, but closing entries are a specific category, not the definition of a compound entry. Compound entries can happen any time during the accounting period.",
              },
            ],
          },
        ],
      },
    },

    {
      id: 'lesson-2-2',
      title: 'Adjusting Entries — Deferrals',
      subtitle: 'Prepaid expenses & unearned revenue',
      estimatedMinutes: 30,

      phase1: {
        concept:
          'A **deferral** is when cash moves BEFORE the economic event is recognized. Two types: (1) **Prepaid Expense**: You pay cash now for a future benefit (insurance, rent in advance). The asset expires gradually → expense is recognized over time. (2) **Unearned Revenue**: You collect cash now for a future service. The liability shrinks as you deliver → revenue is recognized over time.',
        analogy:
          '📦 Imagine you buy 12 boxes of toner cartridges for $600 (the whole year\'s supply). At purchase, you own $600 of future benefit — an asset. Each month, one box is used — $50 shifts from "Prepaid Supplies" (asset) to "Supplies Expense." By month 12, the asset is zero and $600 of expense has been recognized. The physical consumption drives the accounting.',
        visualType: 'diagram',
        visualData: {
          type: 'timeline',
          title: 'Prepaid Insurance — $1,200 for 12 months',
          start: { label: 'Jan 1: Pay $1,200', event: 'Dr. Prepaid Insurance $1,200 / Cr. Cash $1,200' },
          middle: { label: 'Jan 31: Month ends', event: 'Dr. Insurance Expense $100 / Cr. Prepaid Insurance $100' },
          repeat: 'Repeat monthly for 12 months',
          end: { label: 'Dec 31: Zero balance', event: 'Prepaid Insurance = $0; Insurance Expense = $1,200' },
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'Create an amortization schedule for every prepaid',
            body: "When you record a prepaid expense, immediately calculate the monthly expense amount and note the expiry date. For a $1,200 / 12-month policy: $100/month, expiring Dec 31. Write this directly in the transaction memo. When period-end comes, you already know the adjusting amount without recalculating.",
          },
          {
            type: 'DEEP_DIVE',
            title: 'Why is Unearned Revenue a liability?',
            body: "This surprises many learners. If someone pays you $600 cash, why record a liability? Because you now OWE them a service. From the client's perspective, they paid for something they haven't received yet. If your business collapsed tomorrow, you'd legally owe them that $600 back. The liability represents a legal and ethical obligation — it's not optional. It disappears only when the service is fully delivered.",
          },
          {
            type: 'COMMON_PITFALL',
            title: 'Forgetting adjusting entries at period end',
            body: "The most common period-end error: failing to run adjusting entries before closing the books. If you omit the Insurance Expense adjustment, your expenses are understated (no $100 expense), your assets are overstated (Prepaid Insurance is too high), and your net income is overstated. This causes the balance sheet to be wrong AND the income statement to be wrong. Always run a checklist of prepaid balances and unearned balances before period-end close.",
          },
        ],
      },

      phase2: {
        transactionDescription:
          "January 1: ClearPath pays $1,200 for a 12-month insurance policy. January 31: Month-end — record one month of insurance used.",
        steps: [
          {
            id: 'step-1',
            prompt: "Jan 1: Cash goes out, but the benefit hasn't been received yet. Which account holds the future benefit?",
            choices: [
              { id: 'a', label: 'Dr. Prepaid Insurance $1,200 (an asset — future benefit)', isCorrect: true, feedback: "Correct. The cash is gone but 12 months of protection have been purchased. Prepaid Insurance is the asset that holds this future value." },
              { id: 'b', label: 'Dr. Insurance Expense $1,200 (expense it immediately)', isCorrect: false, feedback: "Expensing immediately would violate the matching principle. The insurance protects 12 months — each month should get $100 of expense, not all $1,200 in January." },
            ],
            revealText: "Jan 1 entry: Dr. Prepaid Insurance $1,200 / Cr. Cash $1,200. An asset is created.",
          },
          {
            id: 'step-2',
            prompt: "Jan 31: One month has passed. $100 of insurance has been 'used.' What must happen to the Prepaid Insurance asset?",
            choices: [
              { id: 'a', label: "It decreases by $100 (it's been consumed)", isCorrect: true, feedback: "The asset shrinks as time passes. $1,200 − $100 = $1,100 remaining in Prepaid Insurance." },
              { id: 'b', label: "Nothing — it stays at $1,200 until the policy expires", isCorrect: false, feedback: "The matching principle requires recognizing the expense in the period the benefit is received. Waiting 12 months would bunch all expense in December, misrepresenting each month's true profitability." },
            ],
            revealText: "Jan 31 adjusting entry: Dr. Insurance Expense $100 / Cr. Prepaid Insurance $100.",
          },
          {
            id: 'step-3',
            prompt: "After the January adjustment: Prepaid Insurance = $1,100. Insurance Expense for January = $100. Is this correct?",
            choices: [
              { id: 'a', label: 'Yes — $1,100 remaining asset, $100 recognized expense', isCorrect: true, feedback: "Perfect. 11 months of future benefit remain (the asset). 1 month has been expensed (matching principle satisfied). This pattern repeats each month until the asset reaches zero." },
              { id: 'b', label: 'No — the full $1,200 should be expensed in January', isCorrect: false, feedback: "Only $100 belongs to January. The remaining $1,100 represents future periods — it's still an asset. The matching principle demands the cost be spread over the 12 months it covers." },
            ],
            revealText: "After 12 months: Prepaid Insurance = $0, Insurance Expense (cumulative) = $1,200. The full cost has been matched to the periods benefited.",
          },
        ],
        summaryText:
          "Every prepaid expense follows the same lifecycle: asset created on payment → asset consumed gradually → expense recognized period by period. The adjusting entry is the mechanism that transfers value from the balance sheet to the income statement.",
      },

      phase3: {
        sandboxScenarioId: 'tx-008',
        contextNote: "Record January's insurance adjustment: transfer $100 from Prepaid Insurance to Insurance Expense. This is an adjusting entry — no cash moves.",
      },

      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-2-2-1',
            conceptTag: 'deferrals',
            question: "ClearPath receives $600 cash in advance for a project to be delivered next month. Which entry is correct?",
            options: [
              {
                id: 'A',
                text: 'Dr. Cash $600 / Cr. Service Revenue $600',
                isCorrect: false,
                explanation:
                  "This would recognize revenue immediately — but the service hasn't been delivered yet. Crediting Revenue on cash receipt violates the revenue recognition principle. The cash is not yet earned; it's a liability (an obligation to deliver).",
              },
              {
                id: 'B',
                text: 'Dr. Cash $600 / Cr. Unearned Revenue $600',
                isCorrect: true,
                explanation:
                  "Correct. Cash arrives (asset increases), but revenue isn't earned yet (no Cr. Revenue). Unearned Revenue is a Liability because we owe the service to the client. Next month when delivered: Dr. Unearned Revenue $600 / Cr. Service Revenue $600 — the liability converts to earned revenue.",
              },
              {
                id: 'C',
                text: 'Dr. Accounts Receivable $600 / Cr. Unearned Revenue $600',
                isCorrect: false,
                explanation:
                  "Cash was actually received — so Cash (not A/R) is debited. Accounts Receivable is for amounts OWED TO us in the future. Here cash arrived today. The credit side (Unearned Revenue) is correct, but the debit should be Cash.",
              },
              {
                id: 'D',
                text: 'Dr. Cash $600 / Cr. Accounts Payable $600',
                isCorrect: false,
                explanation:
                  "Accounts Payable is used when WE owe money to SUPPLIERS. The obligation here is to deliver a service to a CLIENT who prepaid — that's Unearned Revenue, not A/P. Both are liabilities, but they represent completely different obligations.",
              },
            ],
          },
          {
            id: 'q-2-2-2',
            conceptTag: 'matching-principle',
            question: "The matching principle requires that:",
            options: [
              {
                id: 'A',
                text: 'Cash paid must equal cash received in every period',
                isCorrect: false,
                explanation:
                  "The matching principle has nothing to do with cash flows. It governs the timing of expense recognition relative to revenue. A company can pay cash for 12 months of insurance in January but recognize the expense month by month — that's matching in action.",
              },
              {
                id: 'B',
                text: 'Expenses must be recognized in the same period as the revenue they help generate',
                isCorrect: true,
                explanation:
                  "That is the matching principle precisely stated. Wages paid in January to deliver January services → January expense. Depreciation on equipment used to generate revenue → allocated across the periods the equipment is used. The principle connects costs to the revenues they support, regardless of when cash moves.",
              },
              {
                id: 'C',
                text: 'Debits must equal credits in every journal entry',
                isCorrect: false,
                explanation:
                  "You're describing the double-entry principle (or the duality concept) — not the matching principle. Debits equaling credits is a mathematical requirement of double-entry bookkeeping. The matching principle is an accounting standard about WHEN to recognize expenses relative to related revenues.",
              },
              {
                id: 'D',
                text: 'Total assets must equal total liabilities plus total equity',
                isCorrect: false,
                explanation:
                  "That's the accounting equation. The matching principle is one of the foundational recognition principles under GAAP: costs should be expensed in the period they contribute to generating revenue. The accounting equation is always true; the matching principle tells us WHEN to recognize items.",
              },
            ],
          },
        ],
      },
    },
  ],

  problemSet: {
    id: 'ps-module-2',
    title: "ClearPath Consulting — Month 1, Full Operations",
    companyContext:
      "ClearPath is now operational. Complete 5 transactions covering expense payments, prepayments, and an advance from a client. After posting all entries, review the accounting equation and write a one-paragraph summary of ClearPath's financial position.",
    transactions: ['tx-006', 'tx-007', 'tx-011', 'tx-009', 'tx-010'],
    reflectionPrompt:
      "After completing all 5 adjusting and operational entries: (1) What is ClearPath's total Asset base? (2) Is the company profitable this month? (3) Why does the cash balance differ from the net income figure?",
  },
};

export const MODULE_3: Module = {
  id: 'module-3',
  number: 3,
  title: 'Financial Statements',
  subtitle: 'From journal entries to reports that tell a story',
  estimatedHours: 4,
  color: 'from-violet-600 to-purple-700',
  icon: '📊',
  isUnlocked: false,
  objectives: [
    {
      id: 'obj-3-1',
      actionVerb: 'PREPARE',
      text: 'Prepare an Income Statement from a trial balance, correctly ordering revenues and expenses.',
    },
    {
      id: 'obj-3-2',
      actionVerb: 'BUILD',
      text: "Build a Balance Sheet for ClearPath Consulting and verify Assets = Liabilities + Equity.",
    },
    {
      id: 'obj-3-3',
      actionVerb: 'TRACE',
      text: 'Trace how net income flows from the Income Statement into the Balance Sheet through Owner\'s Equity.',
    },
    {
      id: 'obj-3-4',
      actionVerb: 'INTERPRET',
      text: 'Interpret three key ratios (current ratio, profit margin, debt-to-equity) and explain what they signal about financial health.',
    },
  ],
  whatYouWillDo:
    "You will take ClearPath's full trial balance from Modules 1 and 2, prepare all three financial statements, and trace how every number connects — from a single journal entry all the way to the final balance sheet.",

  lessons: [
    {
      id: 'lesson-3-1',
      title: 'The Income Statement',
      subtitle: 'Did the business make money this period?',
      estimatedMinutes: 25,

      phase1: {
        concept:
          'The **Income Statement** answers one question: Did the business earn more than it spent? It shows all **Revenues** earned during the period, subtracts all **Expenses** incurred, and produces **Net Income** (profit) or a **Net Loss**. The period covered is critical — an income statement for "Month of January" captures only January activity. It is a FLOW statement (like a video) — not a snapshot.',
        analogy:
          '🎬 Think of the income statement as the highlight reel of a sports game — it shows everything that HAPPENED during the game (revenues = points scored; expenses = points given up). The balance sheet, by contrast, is the final scoreboard snapshot at the END of the game. You need both: the reel shows HOW you got there; the scoreboard shows WHERE you are.',
        visualType: 'table',
        visualData: {
          title: 'ClearPath Consulting — Income Statement',
          period: 'For the Month Ended January 31',
          sections: [
            {
              label: 'Revenue',
              items: [{ name: 'Service Revenue', amount: 6300 }],
              total: { label: 'Total Revenue', amount: 6300 },
            },
            {
              label: 'Expenses',
              items: [
                { name: 'Wages Expense', amount: 1300 },
                { name: 'Rent Expense', amount: 800 },
                { name: 'Insurance Expense', amount: 100 },
                { name: 'Depreciation Expense', amount: 200 },
              ],
              total: { label: 'Total Expenses', amount: 2400 },
            },
            {
              label: 'Net Income',
              amount: 3900,
              highlight: true,
            },
          ],
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'Always state the period covered',
            body: "An income statement without a period is meaningless. 'For the Year Ended December 31, 2024' vs. 'For the Month Ended January 31, 2024' represent completely different pictures. Professional financial statements always include the entity name, the statement name, and the period covered — in that order, on three separate lines.",
          },
          {
            type: 'DEEP_DIVE',
            title: 'Net income is not cash — ever confuse these two',
            body: "Net income includes non-cash expenses like Depreciation ($200 in our example). It also includes revenue earned but not yet collected (A/R). A company can show a $3,900 net income while having only $1,000 of additional cash. This disconnect is why the Cash Flow Statement exists — it reconciles net income to actual cash movement. High net income with low cash growth is a warning sign worth investigating.",
          },
          {
            type: 'COMMON_PITFALL',
            title: 'Including balance sheet items in the income statement',
            body: "Assets, liabilities, and equity accounts do NOT appear on the income statement. Only revenue and expense accounts do. A common error: including the Prepaid Insurance balance (an asset) as an expense, instead of the Insurance Expense adjustment ($100). The trial balance will show both — you must choose the RIGHT one for each statement.",
          },
        ],
      },

      phase2: {
        transactionDescription:
          "Build ClearPath's January Income Statement from these balances: Service Revenue $6,300 | Wages Expense $1,300 | Rent Expense $800 | Insurance Expense $100 | Depreciation Expense $200.",
        steps: [
          {
            id: 'step-1',
            prompt: "Which accounts belong on the Income Statement?",
            choices: [
              { id: 'a', label: 'Revenue and Expense accounts only', isCorrect: true, feedback: "Exactly right. Revenue and expense accounts are 'temporary' accounts — they are closed to zero at year-end. Only they appear on the income statement. Assets, liabilities, and equity go on the balance sheet." },
              { id: 'b', label: 'All accounts from the trial balance', isCorrect: false, feedback: "The trial balance contains ALL accounts. You must filter: revenue and expense accounts → income statement. Asset, liability, and equity accounts → balance sheet. Never mix them." },
            ],
            revealText: "Revenue accounts and expense accounts feed the income statement. Every other account stays on the balance sheet.",
          },
          {
            id: 'step-2',
            prompt: "Total Revenue = $6,300. Total Expenses = $2,400. What is Net Income?",
            choices: [
              { id: 'a', label: '$3,900 (Revenue − Expenses)', isCorrect: true, feedback: "Correct. Net Income = $6,300 − $2,400 = $3,900. ClearPath is profitable in January." },
              { id: 'b', label: '$8,700 (Revenue + Expenses)', isCorrect: false, feedback: "Adding expenses to revenue doesn't make sense economically — expenses are COSTS, not additions. Net Income = Revenue MINUS Expenses." },
            ],
            revealText: "Net Income = $6,300 − $2,400 = $3,900. This $3,900 will flow directly into Owner's Equity on the balance sheet.",
          },
          {
            id: 'step-3',
            prompt: "Where does the $3,900 Net Income go next?",
            choices: [
              { id: 'a', label: "Into Owner's Equity on the Balance Sheet", isCorrect: true, feedback: "Net income flows into retained earnings (or owner's capital for a sole proprietorship) on the balance sheet. This is the link between the income statement and the balance sheet — profit increases the owner's stake." },
              { id: 'b', label: "It stays on the Income Statement", isCorrect: false, feedback: "The income statement is reset to zero at year-end (closing entries). Net income flows INTO the balance sheet's equity section — specifically to Owner's Capital or Retained Earnings." },
            ],
            revealText: "The statements are connected: Net Income → Owner's Equity. A profitable company grows its equity through earnings.",
          },
        ],
        summaryText:
          "The income statement transforms journal entry data into a readable performance report. Net income is the bridge that connects it to the balance sheet — profitable operations increase owner equity.",
      },

      phase3: {
        sandboxScenarioId: 'tx-003',
        contextNote: "Before building financial statements, you need all revenue entries in the books. Practice: Record ClearPath's $2,500 cash consulting sale. This will be one line on the income statement.",
      },

      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-3-1-1',
            conceptTag: 'income-statement',
            question: "ClearPath earns $15,000 in revenue and incurs $9,500 in expenses this quarter. Which statement CORRECTLY describes the financial result?",
            options: [
              {
                id: 'A',
                text: 'Net Loss of $9,500',
                isCorrect: false,
                explanation:
                  "A net loss occurs when expenses EXCEED revenue — when you spend more than you earn. Here, Revenue ($15,000) exceeds Expenses ($9,500). Net Income = $15,000 − $9,500 = $5,500 profit, not a loss.",
              },
              {
                id: 'B',
                text: 'Net Income of $5,500',
                isCorrect: true,
                explanation:
                  "Correct. Net Income = Revenue − Expenses = $15,000 − $9,500 = $5,500. The business earned $5,500 more than it spent this quarter. This $5,500 increases Owner's Equity on the balance sheet through retained earnings.",
              },
              {
                id: 'C',
                text: 'Net Income of $15,000',
                isCorrect: false,
                explanation:
                  "$15,000 is total Revenue before expenses are deducted. Net income subtracts the $9,500 in expenses: $15,000 − $9,500 = $5,500. Never report revenue as net income — they are different measures.",
              },
              {
                id: 'D',
                text: 'Net Income of $24,500',
                isCorrect: false,
                explanation:
                  "$24,500 is Revenue + Expenses added together, which has no financial meaning. Net Income is Revenue MINUS Expenses. Expenses represent costs that reduce profitability — they are never added to revenue.",
              },
            ],
          },
          {
            id: 'q-3-1-2',
            conceptTag: 'statement-linkage',
            question: "ClearPath's Income Statement shows Net Income of $3,900 for January. How does this appear on the Balance Sheet?",
            options: [
              {
                id: 'A',
                text: "As $3,900 of Cash under Assets",
                isCorrect: false,
                explanation:
                  "Net income and cash are not the same. Net income includes non-cash items like depreciation ($200) and may include revenue not yet collected (A/R). The Cash balance on the balance sheet reflects actual cash inflows and outflows — it's not equal to net income.",
              },
              {
                id: 'B',
                text: "Added to Owner's Capital (or Retained Earnings) in the Equity section",
                isCorrect: true,
                explanation:
                  "Exactly. Net income flows into equity — specifically Owner's Capital for a sole proprietorship, or Retained Earnings for a corporation. The balance sheet's equity section captures the cumulative result of all past profitable operations. This is the connection between the income statement and the balance sheet.",
              },
              {
                id: 'C',
                text: "As a liability — the business owes its profits to the owner",
                isCorrect: false,
                explanation:
                  "Net income is not a liability. Profits belong to the owners as equity — an increase in their stake in the business. Liabilities are amounts owed to external creditors, not to the owners. Owner's equity and liabilities are categorically different.",
              },
              {
                id: 'D',
                text: "It doesn't appear on the Balance Sheet — the two statements are independent",
                isCorrect: false,
                explanation:
                  "The financial statements are deeply interconnected. Net income from the income statement flows into retained earnings/owner's equity on the balance sheet. Without this connection, the balance sheet wouldn't balance. The three statements (income statement, balance sheet, cash flow) form a unified system.",
              },
            ],
          },
        ],
      },
    },
  ],

  problemSet: {
    id: 'ps-module-3',
    title: "ClearPath Consulting — Month 1 Financial Statements",
    companyContext:
      "Using all journal entries from Modules 1 and 2, prepare ClearPath's complete Income Statement and Balance Sheet for January. Then answer: Is ClearPath financially healthy after its first month? What concerns you, if anything?",
    transactions: ['tx-001', 'tx-002', 'tx-003', 'tx-007', 'tx-008'],
    reflectionPrompt:
      "After preparing both statements: (1) Does the balance sheet balance (Assets = Liabilities + Equity)? (2) Compare net income to cash — why are they different? (3) What is ClearPath's largest asset? What does that tell you?",
  },
};
