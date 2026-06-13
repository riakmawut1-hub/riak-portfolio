import type { Module } from './types';

export const MODULE_1: Module = {
  id: 'module-1',
  number: 1,
  title: 'The Foundation',
  subtitle: 'Double-Entry Bookkeeping & the Accounting Equation',
  estimatedHours: 3,
  color: 'from-blue-600 to-indigo-700',
  icon: '⚖️',
  isUnlocked: true,
  objectives: [
    {
      id: 'obj-1-1',
      actionVerb: 'EXPLAIN',
      text: 'Explain why the accounting equation always stays in balance after every transaction.',
    },
    {
      id: 'obj-1-2',
      actionVerb: 'APPLY',
      text: 'Apply the Golden Rules of debit and credit to classify any account correctly.',
    },
    {
      id: 'obj-1-3',
      actionVerb: 'JOURNALIZE',
      text: 'Journalize 6 foundational transactions in the interactive sandbox with zero errors.',
    },
    {
      id: 'obj-1-4',
      actionVerb: 'IDENTIFY',
      text: 'Identify the 5 account categories and state the normal balance of each.',
    },
  ],
  whatYouWillDo:
    'You will journalize 6 real-world transactions, build T-accounts from scratch, and demonstrate that the accounting equation stays in balance after every single entry — by doing it, not by reading about it.',

  lessons: [
    // ─── LESSON 1.1 ───────────────────────────────────────────────────────────
    {
      id: 'lesson-1-1',
      title: 'The Accounting Equation',
      subtitle: 'Why everything must balance',
      estimatedMinutes: 20,

      phase1: {
        concept:
          'Every financial fact about a business can be captured in one equation: **Assets = Liabilities + Equity**. This is not a formula someone invented — it\'s a logical truth. Everything a business owns (Assets) had to come from somewhere: either it was borrowed from creditors (Liabilities) or provided by the owners (Equity). Those are the only two sources. Always.',
        analogy:
          '🏠 Think of buying a house worth $300,000. You put down $80,000 of your own money and took out a $220,000 mortgage. The house (asset) = mortgage (liability) + your down payment (equity). $300,000 = $220,000 + $80,000. The equation never lies: if you know any two values, you can calculate the third.',
        visualType: 'equation',
        visualData: {
          left: { label: 'ASSETS', value: 300000, color: 'blue', example: 'House' },
          right: [
            { label: 'LIABILITIES', value: 220000, color: 'red', example: 'Mortgage' },
            { label: 'EQUITY', value: 80000, color: 'green', example: 'Your stake' },
          ],
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'Check the equation after EVERY entry',
            body: 'Professional accountants verify Assets = Liabilities + Equity after posting every journal entry. If it doesn\'t balance, stop — there\'s an error. This habit catches mistakes immediately, before they compound.',
          },
          {
            type: 'DEEP_DIVE',
            title: 'Why does equity go on the right?',
            body: 'The equation puts Liabilities + Equity on the right because they represent the SOURCES of funding. Assets on the left are the USES of that funding. A business is essentially a machine that takes money from lenders and owners (right side) and deploys it into productive resources (left side). The two sides must always match because every dollar deployed had to come from somewhere.',
          },
          {
            type: 'COMMON_PITFALL',
            title: 'Equity ≠ Cash',
            body: 'Most beginners assume equity means cash in the bank. It doesn\'t. Equity is the owner\'s mathematical claim on the business — it can be tied up in equipment, inventory, or receivables. A business can have massive equity and very little cash (or massive cash and very little equity). The equation shows the relationship, not the form of the assets.',
          },
        ],
      },

      phase2: {
        transactionDescription:
          'ClearPath Consulting is born. The owner, Sarah, invests $10,000 of her personal savings into the business.',
        steps: [
          {
            id: 'step-1',
            prompt: 'What does ClearPath now have more of as a result of Sarah\'s investment?',
            choices: [
              { id: 'a', label: 'Cash (an asset)', isCorrect: true, feedback: 'Exactly — the $10,000 is now in the business bank account. Cash is an Asset.' },
              { id: 'b', label: 'Revenue', isCorrect: false, feedback: 'Not revenue — Sarah didn\'t buy a service from the business. She funded it. Revenue comes from selling to customers.' },
              { id: 'c', label: 'Accounts Receivable', isCorrect: false, feedback: 'A/R is money customers owe the business. Sarah\'s investment went straight into the bank — it\'s Cash.' },
            ],
            revealText: 'Cash (an Asset) increases by $10,000. Assets side of the equation: +$10,000.',
          },
          {
            id: 'step-2',
            prompt: 'Sarah\'s investment didn\'t come from borrowing — she used her own money. Which side of the equation absorbs this change?',
            choices: [
              { id: 'a', label: "Liabilities increase", isCorrect: false, feedback: "Liabilities would increase if the business borrowed money (e.g., from a bank). Sarah's personal investment creates no debt." },
              { id: 'b', label: "Equity increases", isCorrect: true, feedback: "Correct! When an owner invests personal funds, their stake (equity) in the business increases. Specifically, Owner's Capital increases by $10,000." },
              { id: 'c', label: "Neither — only one side changes", isCorrect: false, feedback: "The equation must always balance. If Assets increase by $10,000, the right side must also increase by $10,000. Every transaction affects at least two elements." },
            ],
            revealText: "Owner's Capital (Equity) increases by $10,000. The equation: Assets ($10,000) = Liabilities ($0) + Equity ($10,000). ✓",
          },
          {
            id: 'step-3',
            prompt: 'Verify: Does the equation still hold after this transaction?',
            choices: [
              { id: 'a', label: 'Yes — $10,000 = $0 + $10,000', isCorrect: true, feedback: "Perfect. The equation is in balance. This will be true after every single transaction — no exceptions." },
              { id: 'b', label: "No — it's out of balance", isCorrect: false, feedback: "Check again: Assets = $10,000 (cash received). Liabilities = $0 (no debt). Equity = $10,000 (Sarah's investment). $10,000 = $0 + $10,000. The equation holds." },
            ],
            revealText: 'The equation holds: $10,000 = $0 + $10,000. Every transaction — no matter how complex — preserves this balance.',
          },
        ],
        summaryText:
          "This simple investment created the first accounting entry in ClearPath's books: Assets went up, Equity went up by the same amount. The equation stayed perfectly balanced. This principle never breaks.",
      },

      phase3: {
        sandboxScenarioId: 'tx-014',
        contextNote:
          'Now you try. ClearPath needs more capital — Sarah decides to take out a bank loan of $15,000. Complete this journal entry in the sandbox. Remember: Cash arrives AND a liability is created.',
      },

      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-1-1-1',
            conceptTag: 'accounting-equation',
            question:
              'ClearPath has Assets of $80,000 and Equity of $35,000. What is the value of Liabilities?',
            options: [
              {
                id: 'A',
                text: '$115,000',
                isCorrect: false,
                explanation:
                  "That's Assets + Equity added together, which doesn't give you Liabilities. The equation is Assets = Liabilities + Equity. Rearranging: Liabilities = Assets − Equity = $80,000 − $35,000 = $45,000. You need to subtract, not add.",
              },
              {
                id: 'B',
                text: '$45,000',
                isCorrect: true,
                explanation:
                  "Exactly right. Liabilities = Assets − Equity = $80,000 − $35,000 = $45,000. You rearranged the equation correctly. This is the amount ClearPath owes to creditors — the portion of assets funded by lenders rather than the owner.",
              },
              {
                id: 'C',
                text: '$35,000',
                isCorrect: false,
                explanation:
                  "That is the Equity value, not Liabilities. Re-read the question: Assets = $80,000, Equity = $35,000. Liabilities = Assets − Equity = $80,000 − $35,000 = $45,000. The two components on the right side of the equation are separate values.",
              },
              {
                id: 'D',
                text: 'Cannot be determined without more information',
                isCorrect: false,
                explanation:
                  "It can absolutely be determined. The accounting equation has exactly three components. If you know any two, you can always calculate the third. Liabilities = Assets − Equity = $80,000 − $35,000 = $45,000. No additional information is needed.",
              },
            ],
          },
          {
            id: 'q-1-1-2',
            conceptTag: 'equation-balance',
            question:
              'ClearPath purchases office supplies for $300 cash. Which of the following CORRECTLY describes the impact on the accounting equation?',
            options: [
              {
                id: 'A',
                text: 'Assets increase by $300; Equity increases by $300',
                isCorrect: false,
                explanation:
                  "Equity only changes when revenue is earned, expenses are incurred, or the owner invests/withdraws. Buying supplies with cash is an asset swap — one asset (Cash) decreases and another (Supplies) increases. No new value was created; the total assets are unchanged.",
              },
              {
                id: 'B',
                text: 'Assets stay the same; Equity stays the same; Liabilities stay the same',
                isCorrect: true,
                explanation:
                  "Correct! This is an asset-for-asset swap. Cash (asset) goes down by $300; Supplies (asset) goes up by $300. The totals on both sides of the equation are completely unchanged. This type of transaction — where the composition of assets changes but the totals don't — is one of four basic equation patterns.",
              },
              {
                id: 'C',
                text: 'Assets decrease by $300; Equity decreases by $300',
                isCorrect: false,
                explanation:
                  "This would be correct if ClearPath had USED the supplies (which would create Supplies Expense). But here, ClearPath is BUYING supplies — converting one asset (Cash) to another (Supplies). Until the supplies are consumed, they remain an asset, not an expense.",
              },
              {
                id: 'D',
                text: 'Assets increase by $300; Liabilities increase by $300',
                isCorrect: false,
                explanation:
                  "This pattern — assets and liabilities both increasing — would describe buying supplies ON CREDIT (promising to pay later). But the question says cash was paid immediately. There's no liability created when you pay cash at the point of purchase.",
              },
            ],
          },
          {
            id: 'q-1-1-3',
            conceptTag: 'equity-components',
            question:
              'Which transaction would DIRECTLY increase Owner\'s Equity in the accounting equation?',
            options: [
              {
                id: 'A',
                text: 'Borrowing $5,000 from the bank',
                isCorrect: false,
                explanation:
                  "Borrowing money creates a Liability (Bank Loan Payable) and increases Cash — both sides of the equation increase, but Equity is untouched. The bank's loan doesn't give the owner any greater stake in the business; it creates an obligation to repay.",
              },
              {
                id: 'B',
                text: 'Collecting $1,200 from a client who already owed money (clearing a receivable)',
                isCorrect: false,
                explanation:
                  "This is an asset swap: Cash increases, Accounts Receivable decreases — both assets. Equity doesn't change because the revenue was already recognized when the invoice was issued. Collecting cash on an existing receivable doesn't create new income.",
              },
              {
                id: 'C',
                text: 'Providing $3,000 of consulting services and receiving immediate payment',
                isCorrect: true,
                explanation:
                  "This is the correct answer. When revenue is earned, it increases Equity (specifically, Revenue ultimately flows into retained earnings/owner's capital). Cash increases (asset +$3,000) and Equity increases via Revenue +$3,000. The equation: Assets (+$3,000) = Liabilities ($0) + Equity (+$3,000).",
              },
              {
                id: 'D',
                text: "Paying $800 for this month's rent",
                isCorrect: false,
                explanation:
                  "Paying rent is an expense — it DECREASES equity. Cash (asset) decreases and Rent Expense (which reduces equity) is recorded. Expenses represent costs of operations that erode the owner's stake. The equation: Assets (−$800) = Liabilities ($0) + Equity (−$800).",
              },
            ],
          },
        ],
      },
    },

    // ─── LESSON 1.2 ───────────────────────────────────────────────────────────
    {
      id: 'lesson-1-2',
      title: 'The Golden Rules of Debit & Credit',
      subtitle: 'The language double-entry bookkeeping speaks',
      estimatedMinutes: 25,

      phase1: {
        concept:
          'Every transaction is recorded as a combination of **Debits (Dr.)** and **Credits (Cr.)**. These are not "good" and "bad" — they are simply two sides of every transaction. The rule: **Debits increase Assets and Expenses. Credits increase Liabilities, Equity, and Revenue.** DEALER is the mnemonic: **D**ividends/Drawings, **E**xpenses, **A**ssets → normal Debit balance. **L**iabilities, **E**quity, **R**evenue → normal Credit balance.',
        analogy:
          '🎛️ Think of a mixing board with two columns of faders — a LEFT column (Debit) and a RIGHT column (Credit). Push the LEFT fader up for Assets and Expenses. Push the RIGHT fader up for Liabilities, Equity, and Revenue. To DECREASE an account, push the OPPOSITE fader up. The board always needs to sum to zero across every entry.',
        visualType: 'table',
        visualData: {
          headers: ['Account Type', 'Normal Balance', 'To INCREASE', 'To DECREASE'],
          rows: [
            ['Asset', 'DEBIT', 'Debit ↑', 'Credit ↓'],
            ['Liability', 'CREDIT', 'Credit ↑', 'Debit ↓'],
            ['Equity', 'CREDIT', 'Credit ↑', 'Debit ↓'],
            ['Revenue', 'CREDIT', 'Credit ↑', 'Debit ↓'],
            ['Expense', 'DEBIT', 'Debit ↑', 'Credit ↓'],
          ],
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'Always name the account before choosing Dr. or Cr.',
            body: 'Never decide debit or credit before you know the account. Step 1: What is the account? Step 2: What category is it? Step 3: Is it increasing or decreasing? Step 4: What side achieves that? Professional bookkeepers follow this logic every single time — never guess.',
          },
          {
            type: 'DEEP_DIVE',
            title: 'Why "Debit" = Left and "Credit" = Right?',
            body: 'The terms come from Latin: "Debere" (to owe) and "Credere" (to believe/trust). In 15th century Venice, merchants kept two columns: amounts owed TO them (assets — what they were owed) on the left, and amounts they owed TO OTHERS (liabilities — what they trusted others to repay) on the right. The T-account shape you\'ll use comes directly from this 600-year-old ledger format.',
          },
          {
            type: 'COMMON_PITFALL',
            title: 'Credit does NOT mean "money in your account"',
            body: 'The banking world uses "credit" to mean a deposit (money added to your account). But in accounting, "credit" just means the RIGHT SIDE of a T-account entry. When your bank credits your account, they\'re crediting a Liability from their perspective (they owe you the money). This confusion causes more errors than almost any other concept — always think in accounting terms, not banking terms.',
          },
        ],
      },

      phase2: {
        transactionDescription:
          'ClearPath earns $2,500 providing consulting services. The client pays cash on the spot.',
        steps: [
          {
            id: 'step-1',
            prompt: 'Cash is received. Cash is an ASSET. Assets increase on the DEBIT side. What do we do with Cash?',
            choices: [
              { id: 'a', label: 'Debit Cash $2,500', isCorrect: true, feedback: "Correct. Asset increases → Debit. Cash goes on the LEFT side of the T-account, increasing its balance." },
              { id: 'b', label: 'Credit Cash $2,500', isCorrect: false, feedback: "Crediting Cash would DECREASE it (assets have a debit normal balance). Cash is coming IN — we need to debit it to increase it." },
            ],
            revealText: 'Dr. Cash $2,500 ✓ — Cash (asset) increases when debited. One side of the entry is set.',
            visual: 'tAccount',
          },
          {
            id: 'step-2',
            prompt: "The business earned Revenue. Revenue is in the DEALER acronym's Credit side (L, E, R). How do we record Service Revenue?",
            choices: [
              { id: 'a', label: 'Credit Service Revenue $2,500', isCorrect: true, feedback: "Exactly. Revenue increases when Credited. We credit the revenue account to grow it — this ultimately flows into Owner's Equity." },
              { id: 'b', label: 'Debit Service Revenue $2,500', isCorrect: false, feedback: "Debiting Revenue would DECREASE it. Revenue has a Credit normal balance — to increase revenue, we credit it." },
            ],
            revealText: 'Cr. Service Revenue $2,500 ✓ — Revenue (increases equity) grows when credited.',
            visual: 'tAccount',
          },
          {
            id: 'step-3',
            prompt: 'Verify the entry. Debits = $2,500. Credits = $2,500. Is this entry balanced?',
            choices: [
              { id: 'a', label: 'Yes — Dr. $2,500 = Cr. $2,500', isCorrect: true, feedback: "Perfect. A balanced entry is a valid entry. Every journal entry in existence must satisfy this rule: total debits = total credits, always." },
              { id: 'b', label: 'No — something is wrong', isCorrect: false, feedback: "Look again: Dr. Cash $2,500 and Cr. Service Revenue $2,500. Both sides equal $2,500. The entry is perfectly balanced." },
            ],
            revealText: 'Complete entry: Dr. Cash $2,500 / Cr. Service Revenue $2,500. Assets (+$2,500) = Liabilities ($0) + Equity (+$2,500 via Revenue).',
          },
        ],
        summaryText:
          'Every revenue transaction has the same structure: something increases on the left (usually Cash or A/R, both assets), and Revenue increases on the right. The debits and credits mirror the accounting equation perfectly.',
      },

      phase3: {
        sandboxScenarioId: 'tx-003',
        contextNote: 'Practice the same pattern: ClearPath earns $2,500 of consulting revenue paid immediately in cash. Build the journal entry from scratch in the sandbox.',
      },

      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-1-2-1',
            conceptTag: 'golden-rules',
            question: 'ClearPath pays $800 in employee wages with cash. Which entry is CORRECT?',
            options: [
              {
                id: 'A',
                text: 'Dr. Cash $800 / Cr. Wages Expense $800',
                isCorrect: false,
                explanation:
                  "This is backwards. Cash is going OUT of the business — it's decreasing — so we CREDIT Cash (crediting an asset decreases it). Wages Expense is being incurred — it increases — so we DEBIT Wages Expense. The correct entry is the opposite of what's shown here.",
              },
              {
                id: 'B',
                text: 'Dr. Wages Expense $800 / Cr. Cash $800',
                isCorrect: true,
                explanation:
                  "Correct. Wages Expense is DEBITED because expenses increase on the debit side (DEALER rule). Cash is CREDITED because an asset is DECREASING — cash is leaving the business. The equation: Assets (−$800) = Liabilities ($0) + Equity (−$800 via Expense).",
              },
              {
                id: 'C',
                text: 'Dr. Wages Payable $800 / Cr. Cash $800',
                isCorrect: false,
                explanation:
                  "Wages Payable would be debited when you PAY OFF a previously recorded liability (when the cash payment clears a wages payable balance). But here, no prior liability exists — the wages are being paid immediately. The expense must be recognized directly: Dr. Wages Expense.",
              },
              {
                id: 'D',
                text: 'Dr. Wages Expense $800 / Cr. Revenue $800',
                isCorrect: false,
                explanation:
                  "Revenue has nothing to do with paying wages. This transaction involves an asset (Cash) going out and an expense being incurred. Revenue is only recorded when services or goods are delivered to customers. Crediting Revenue here would overstate income by $800.",
              },
            ],
          },
          {
            id: 'q-1-2-2',
            conceptTag: 'normal-balance',
            question: "A credit to Accounts Receivable means:",
            options: [
              {
                id: 'A',
                text: 'A new amount is owed to the business by a customer',
                isCorrect: false,
                explanation:
                  "New receivables are recorded with a DEBIT to Accounts Receivable (assets increase on the debit side). When a customer owes us money and we issue an invoice, we Dr. Accounts Receivable and Cr. Revenue. A credit to A/R does the opposite.",
              },
              {
                id: 'B',
                text: 'The balance of Accounts Receivable is decreasing',
                isCorrect: true,
                explanation:
                  "Exactly right. Accounts Receivable has a DEBIT normal balance (it is an asset). Crediting it moves AGAINST its normal balance, which means it is decreasing. This happens when a customer pays their invoice (Dr. Cash / Cr. A/R) — the receivable is collected and eliminated.",
              },
              {
                id: 'C',
                text: 'Revenue is being earned at this moment',
                isCorrect: false,
                explanation:
                  "Revenue is earned when services are delivered — and under accrual accounting, that's when we record it (usually Dr. A/R / Cr. Revenue). When the client later pays and we credit A/R, the revenue was already recognized. Crediting A/R on payment is NOT a revenue recognition event.",
              },
              {
                id: 'D',
                text: 'The business owes money to a customer',
                isCorrect: false,
                explanation:
                  "Money owed BY the business TO customers (advance payments received) is recorded as Unearned Revenue — a liability — not as a credit to Accounts Receivable. A/R represents money owed TO the business BY customers. A credit to A/R simply reduces what customers owe us.",
              },
            ],
          },
          {
            id: 'q-1-2-3',
            conceptTag: 'dealer-rule',
            question: "Using the DEALER framework, which of the following has a CREDIT normal balance?",
            options: [
              {
                id: 'A',
                text: 'Supplies (office supplies on hand)',
                isCorrect: false,
                explanation:
                  "Supplies is an Asset — and in DEALER, Assets (A) are in the first group with Debit normal balances. As long as supplies remain unused and on hand, they sit as an asset on the balance sheet with a debit balance.",
              },
              {
                id: 'B',
                text: "Owner's Drawings (cash withdrawn by the owner)",
                isCorrect: false,
                explanation:
                  "Owner's Drawings is a contra-equity account — it REDUCES equity. In DEALER, Drawings/Dividends (D) are at the start of the acronym alongside expenses — both have DEBIT normal balances. Drawing money out of the business is recorded with a Debit to Drawings.",
              },
              {
                id: 'C',
                text: 'Depreciation Expense',
                isCorrect: false,
                explanation:
                  "Expenses (E) appear twice in DEALER — and they have a DEBIT normal balance. Depreciation Expense is an expense: it is debited when recognized. (Note: Accumulated Depreciation, the contra-asset, has a Credit normal balance — but that's a different account from Depreciation Expense itself.)",
              },
              {
                id: 'D',
                text: 'Unearned Revenue (advance payment received from a client)',
                isCorrect: true,
                explanation:
                  "Correct. Unearned Revenue is a Liability — and Liabilities (L) in DEALER have a CREDIT normal balance. It increases when credited (more obligations) and decreases when debited (as services are delivered and the liability is converted to Revenue). Both L and R — Liabilities and Revenue — share the Credit normal balance in DEALER.",
              },
            ],
          },
        ],
      },
    },

    // ─── LESSON 1.3 ───────────────────────────────────────────────────────────
    {
      id: 'lesson-1-3',
      title: 'Your First Journal Entry',
      subtitle: 'From transaction to T-account',
      estimatedMinutes: 25,

      phase1: {
        concept:
          'A **journal entry** is the formal written record of a financial transaction. It lists: (1) the date, (2) the accounts affected, (3) which is debited and which is credited, and (4) the amounts. Journal entries are always entered in the **general journal** first, then **posted** (transferred) to individual **T-accounts** in the ledger. The T-account is shaped like the letter T — the left side holds all debits, the right side holds all credits.',
        analogy:
          '📓 The journal is a diary — transactions are written chronologically as they happen. The ledger is an address book — each account has its own page, and all entries related to that account are collected there. Writing in the diary (journal) comes first; organizing by account (ledger) comes second.',
        visualType: 'tAccount',
        visualData: {
          accountName: 'Cash',
          debitEntries: [{ description: 'Owner investment', amount: 10000 }, { description: 'Client payment', amount: 2500 }],
          creditEntries: [{ description: 'Bought supplies', amount: 300 }],
          balance: { side: 'Debit', amount: 12200 },
        },
        callouts: [
          {
            type: 'BEST_PRACTICE',
            title: 'The standard journal entry format',
            body: 'Always write debited accounts FIRST (flush left) and credited accounts SECOND (indented). This visual convention tells you at a glance which account is debited and which is credited. Every professional accounting system — from handwritten ledgers to QuickBooks — uses this debit-first format.',
          },
          {
            type: 'DEEP_DIVE',
            title: 'Why use T-accounts at all?',
            body: "T-accounts are a mental shortcut for visualizing how a transaction affects an account's balance over time. By placing all debits on the left and credits on the right, you can scan the account's history and calculate its current balance instantly. Modern software does this automatically, but the underlying logic is identical — every accounting software simply automates the T-account math.",
          },
          {
            type: 'COMMON_PITFALL',
            title: 'Journalizing ≠ Posting',
            body: "Many beginners confuse these two steps. Journalizing means recording the entry in the general journal (the chronological record). Posting means transferring those debit/credit amounts to the appropriate T-accounts in the ledger. Both must happen for the books to be complete. Posting a transaction that was never journalized is a control gap — the audit trail is broken.",
          },
        ],
      },

      phase2: {
        transactionDescription:
          'ClearPath provides $1,200 of consulting services. The client will pay next month — an invoice is issued.',
        steps: [
          {
            id: 'step-1',
            prompt: "Services are done. Has cash arrived? What account records the right to COLLECT cash from a customer?",
            choices: [
              { id: 'a', label: 'Accounts Receivable (we earned it but haven\'t collected it)', isCorrect: true, feedback: "Exactly. The service is complete, so we've earned the revenue. But cash is coming later — so we record a receivable: our legal right to that $1,200." },
              { id: 'b', label: 'Cash (money is coming soon)', isCorrect: false, feedback: "Cash is only debited when cash is physically received. 'Coming soon' doesn't count — that's the essence of the difference between cash and accrual accounting." },
              { id: 'c', label: 'Unearned Revenue (paid in advance)', isCorrect: false, feedback: "Unearned Revenue is used when the CLIENT pays in advance and we owe them the service. Here, WE completed the service and the client owes us money — that's Accounts Receivable." },
            ],
            revealText: 'Dr. Accounts Receivable $1,200 — an asset is created: the right to collect.',
          },
          {
            id: 'step-2',
            prompt: "The service was delivered. Revenue has been earned. Which account captures this?",
            choices: [
              { id: 'a', label: 'Credit Service Revenue $1,200', isCorrect: true, feedback: "Revenue is recognized when the service is delivered — not when cash arrives. Crediting Service Revenue records the income earned this period." },
              { id: 'b', label: 'Credit Cash $1,200', isCorrect: false, feedback: "Cash is only credited when cash LEAVES the business. In this transaction, no cash has moved yet. We need to credit Revenue to recognize the income." },
            ],
            revealText: 'Cr. Service Revenue $1,200 — income is recognized at the point of delivery.',
          },
          {
            id: 'step-3',
            prompt: "Next month, the client pays. Which account is CREDITED to clear the receivable?",
            choices: [
              { id: 'a', label: 'Credit Accounts Receivable $1,200', isCorrect: true, feedback: "The receivable is satisfied (collected). Crediting A/R reduces it to zero — the debt is cleared. Cash is debited on the other side." },
              { id: 'b', label: 'Credit Service Revenue $1,200', isCorrect: false, feedback: "Revenue was already recognized last month when the service was delivered. Recording it again here would double-count the income. This payment entry is purely a balance sheet movement: Cash goes up, A/R goes down." },
              { id: 'c', label: 'Debit Accounts Receivable $1,200', isCorrect: false, feedback: "Debiting A/R would INCREASE it — creating a new receivable. But we're collecting on an existing one, which means A/R must DECREASE (be credited)." },
            ],
            revealText: 'Payment entry: Dr. Cash $1,200 / Cr. Accounts Receivable $1,200. A/R is cleared; Cash arrives. No new revenue.',
          },
        ],
        summaryText:
          "This two-entry sequence — invoice issued (A/R + Revenue) then collected (Cash + A/R) — is the core of accrual accounting. Revenue is front-loaded at delivery; the cash movement is handled separately.",
      },

      phase3: {
        sandboxScenarioId: 'tx-004',
        contextNote: 'Record the invoice: ClearPath provides $1,200 of consulting services on account. Build the journal entry that recognizes revenue now even though cash arrives later.',
      },

      phase4: {
        passMark: 80,
        questions: [
          {
            id: 'q-1-3-1',
            conceptTag: 'journal-vs-ledger',
            question: 'What is the difference between a journal entry and posting to a ledger?',
            options: [
              {
                id: 'A',
                text: 'They are the same thing — both record transactions in T-accounts',
                isCorrect: false,
                explanation:
                  "They are distinct steps. A journal entry is the chronological record of a transaction in the general journal — date, accounts, amounts, and description. Posting is the process of transferring those amounts to individual T-accounts in the ledger. One is the source record; the other organizes data by account.",
              },
              {
                id: 'B',
                text: 'The journal records transactions chronologically; the ledger organizes them by account',
                isCorrect: true,
                explanation:
                  "Correct. The journal is like a diary — every transaction recorded in the order it happened. The ledger is like an address book — every transaction for a specific account (like Cash) collected in one place. You journalize first, then post. Both records are part of a complete audit trail.",
              },
              {
                id: 'C',
                text: 'The ledger is for cash transactions only; the journal covers all transactions',
                isCorrect: false,
                explanation:
                  "The ledger contains an account for every account used in the business — Cash, A/R, Equipment, Revenue, Expenses, and all others. It is not limited to cash. The general ledger is a complete organized record of all account balances, built from all journal entries across all account types.",
              },
              {
                id: 'D',
                text: 'Journal entries are for adjustments only; regular entries go directly to the ledger',
                isCorrect: false,
                explanation:
                  "Every transaction — regular and adjusting — flows through the general journal first. Adjusting entries are one type of journal entry. The sequence is always: journal → post to ledger → trial balance → financial statements. No transaction skips the journal step.",
              },
            ],
          },
          {
            id: 'q-1-3-2',
            conceptTag: 'receivable-collection',
            question: "When a client pays their $1,200 invoice (previously recorded), why is Service Revenue NOT credited in the collection entry?",
            options: [
              {
                id: 'A',
                text: 'Because cash transactions never involve revenue accounts',
                isCorrect: false,
                explanation:
                  "Cash transactions can absolutely involve revenue — for example, when a client pays immediately for services (Dr. Cash / Cr. Revenue). The reason revenue isn't credited HERE is specific to the timing, not the presence of cash.",
              },
              {
                id: 'B',
                text: 'Because revenue was already recognized when the invoice was issued — recording it again would double-count income',
                isCorrect: true,
                explanation:
                  "Exactly right. Under accrual accounting, revenue is recognized when earned (at service delivery) — not when cash is collected. The invoice entry (Dr. A/R / Cr. Revenue) already captured the income. The collection entry (Dr. Cash / Cr. A/R) is purely a balance sheet swap. Crediting Revenue again would report $2,400 of income from a $1,200 job.",
              },
              {
                id: 'C',
                text: "Because the client hasn't technically approved the payment yet",
                isCorrect: false,
                explanation:
                  "Client approval isn't the deciding factor. The issue is that revenue recognition has already occurred. When the client pays, they are fulfilling an existing obligation — the revenue was earned when the service was delivered, not when the check clears.",
              },
              {
                id: 'D',
                text: 'Because Service Revenue is only credited at year-end during closing entries',
                isCorrect: false,
                explanation:
                  "Service Revenue is credited every time revenue is earned — at the point of service delivery, throughout the year. Closing entries happen at year-end to reset revenue/expense balances to zero, but revenue is NOT deferred until closing. It is recognized immediately when earned.",
              },
            ],
          },
        ],
      },
    },
  ],

  problemSet: {
    id: 'ps-module-1',
    title: "ClearPath Consulting — Month 1, Week 1",
    companyContext:
      "ClearPath Consulting has just launched. Sarah (the owner) has invested her savings and is ready to take on clients. Complete all 4 transactions for Week 1 in the sandbox, then answer the reflection question.",
    transactions: ['tx-001', 'tx-002', 'tx-003', 'tx-004'],
    reflectionPrompt:
      "After completing Week 1's entries, look at the Accounting Equation banner. Does the equation balance? Write one sentence explaining what the total Assets figure represents and one sentence explaining why Equity is not equal to Cash.",
  },
};
