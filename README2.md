# Accounting & Finance: Zero to Mastery — Integration Guide

## What This Is

A fully interactive, screen-by-screen accounting course built as a Next.js feature.
Every lesson runs the **4-Phase Active Participation Loop**: micro-lesson → guided
walkthrough → live journal entry sandbox → diagnostic MCQ.

Live at: `https://riak-portfolio.onrender.com/course`

---

## File Map

Drop all files into your existing Next.js project, preserving the paths shown:

```
your-project/
│
├── app/
│   └── course/
│       ├── layout.tsx          ← SEO metadata + dark bg wrapper
│       └── page.tsx            ← Server component (renders CourseApp)
│
├── components/
│   └── course/
│       ├── CourseApp.tsx       ← Root client component; all state lives here
│       ├── CourseOverview.tsx  ← Landing screen with module pathway
│       ├── OrientationScreen.tsx
│       ├── ProgressSidebar.tsx ← Navigation + live equation banner
│       ├── ModuleView.tsx      ← Module overview + lesson list
│       ├── LessonView.tsx      ← Phase orchestrator (phases 1–4)
│       ├── Phase1Concept.tsx   ← Micro-lesson with callouts
│       ├── Phase2Walkthrough.tsx
│       ├── Phase3Sandbox.tsx   ← Wraps JournalSandbox for a specific scenario
│       ├── Phase4MCQ.tsx       ← Diagnostic MCQ with per-option explanations
│       └── JournalSandbox.tsx  ← THE CORE TOOL: live journal entry builder
│
└── lib/
    └── course/
        ├── types.ts            ← All TypeScript interfaces (no deps)
        ├── accounts.ts         ← 35-account chart with metadata
        ├── transactions.ts     ← 15 pre-loaded sandbox scenarios
        ├── courseData.ts       ← Aggregator: imports + exports all modules
        ├── module1.ts          ← Full content: Foundation (3 lessons, all MCQs)
        ├── module2and3.ts      ← Full content: Transactions + Statements
        └── modules4to6.ts      ← Full content: Cycle, BankRec, Analysis
```

---

## Quick Start

### 1. Copy files

```bash
# From the delivered folder, copy to your project root:
cp -r course/app/course             ./app/course
cp -r course/components/course      ./components/course
cp -r course/lib/course             ./lib/course
```

### 2. Verify Tailwind is configured

The course uses **only Tailwind core utility classes** — no plugins required.
Check `tailwind.config.ts` includes your content paths:

```ts
// tailwind.config.ts
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',   // add this if not present
  ],
  // ...
};
```

### 3. Verify `@/` path alias

All imports use the `@/` alias (e.g. `@/lib/course/types`).
Your `tsconfig.json` must have:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./*"]
    }
  }
}
```

This is already set in the standard `create-next-app` template.

### 4. Visit the route

```
http://localhost:3000/course
```

---

## Architecture Notes

### State management (CourseApp.tsx)
All course state lives in `CourseApp` via `useState` and is **persisted to
`localStorage`** under the key `clearpath-course-progress`. No server, no DB, no
auth required — it's fully client-side.

The state shape:
```ts
{
  progress: Record<moduleId, ModuleProgressState>,   // per-lesson completion
  equation: { assets, liabilities, equity }          // cumulative sandbox totals
}
```

### Lesson unlocking
- Module 1 is unlocked by default.
- A lesson's sandbox phase (Phase 3) becomes accessible after the walkthrough.
- The next lesson unlocks when all 4 phases are complete AND quiz score ≥ 80%.
- The next module unlocks when all lessons in the current module are mastered.

### The JournalSandbox (JournalSandbox.tsx)
The most complex component. Key behaviours:

| Feature | Detail |
|---|---|
| Account dropdown | Grouped by category (Assets, Liabilities…) via `CATEGORY_ORDER` |
| Dr./Cr. toggle | Button pair per line; blue = Debit, green = Credit |
| Golden Rule badge | Live indicator showing if Dr/Cr matches the account's normal balance |
| Post Entry | Validates balance (Dr = Cr) AND correctness vs. `TransactionScenario.correctEntry` |
| Equation banner | Updates live from `equation` prop; shows preview delta while editing |
| Hint button | Reveals `scenario.hint`; records `hintUsed = true` |
| Compare to Answer | Unlocks after 2 failed attempts; shows model answer with explanation |
| T-Account toggle | Switches between journal and T-account view of current lines |
| Contra-account logic | `computeEquationDelta` correctly handles Accum. Depreciation, Drawings, Allowance |

### Adding more content
To add a new module:
1. Create `lib/course/module7.ts` following the `Module` type interface.
2. Import and add it to `ALL_MODULES` in `lib/course/courseData.ts`.
3. Add a colour entry to `CALLOUT_COLORS` and `BADGE_COLORS` in `CourseOverview.tsx`
   and `MOD_DOT` in `ProgressSidebar.tsx`.

To add more sandbox transactions:
1. Add entries to `TRANSACTIONS` array in `lib/course/transactions.ts`.
2. Reference the `id` in a lesson's `phase3.sandboxScenarioId`.

---

## Courses Content — What's Fully Built

| Module | Status | Lessons | MCQs |
|---|---|---|---|
| 1 — Foundation | ✅ Complete | 3 full lessons | 9 MCQs, all options explained |
| 2 — Transactions | ✅ Complete | 2 full lessons | 6 MCQs |
| 3 — Statements | ✅ Complete | 1 full lesson | 4 MCQs |
| 4 — Accounting Cycle | ✅ Complete | 2 full lessons | 3 MCQs |
| 5 — Bank Reconciliation | ✅ Complete | 1 full lesson | 2 MCQs |
| 6 — Analysis & Excel | ✅ Complete | 1 full lesson | 2 MCQs |

Transaction bank: **15 scenarios** (5 Beginner, 5 Intermediate, 5 Advanced)
Account chart: **35 accounts** across all 5 categories

---

## Design System

The UI uses Tailwind classes exclusively with a **dark-first palette**:

| Role | Classes |
|---|---|
| Page background | `bg-slate-950` |
| Card / surface | `bg-slate-900`, `border-slate-700` |
| Sidebar | `bg-slate-900`, `border-slate-800` |
| Debit (blue) | `bg-blue-600`, `text-blue-400`, `bg-blue-950/…` |
| Credit (green) | `bg-emerald-600`, `text-emerald-400` |
| Correct feedback | `border-emerald-700`, `bg-emerald-950/30` |
| Wrong feedback | `border-red-800`, `bg-red-950/30` |
| Hint / Warning | `border-amber-700`, `bg-amber-950/20` |
| Monospace data | `font-mono` on all numbers, account codes, totals |

---

## Extending with a Free-Play Sandbox

`JournalSandbox` accepts a `mode` prop:
- `"guided"` — validates against a specific `TransactionScenario`
- `"freeplay"` — (future) accept any balanced entry without checking correctness

To add a standalone free-play page at `/course/sandbox`:

```tsx
// app/course/sandbox/page.tsx
'use client';
import { useState } from 'react';
import JournalSandbox from '@/components/course/JournalSandbox';
import { TRANSACTIONS } from '@/lib/course/transactions';

export default function SandboxPage() {
  const [idx, setIdx] = useState(0);
  const [eq, setEq] = useState({ assets: 0, liabilities: 0, equity: 0 });
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <JournalSandbox
        scenario={TRANSACTIONS[idx]}
        equation={eq}
        onCorrectEntry={(delta) => setEq(e => ({
          assets: e.assets + (delta.assets ?? 0),
          liabilities: e.liabilities + (delta.liabilities ?? 0),
          equity: e.equity + (delta.equity ?? 0),
        }))}
        mode="guided"
      />
      <button onClick={() => setIdx((i) => (i + 1) % TRANSACTIONS.length)}
        className="mt-4 px-4 py-2 bg-slate-700 text-white rounded-lg text-sm">
        Next Transaction →
      </button>
    </div>
  );
}
```

---

## Common Issues

| Problem | Fix |
|---|---|
| `Module not found: @/lib/course/…` | Add `"@/*": ["./*"]` to `tsconfig.json` paths |
| Styles not applying | Ensure `lib/**/*.tsx` is in Tailwind `content` array |
| Progress not saving | App needs to run in a browser (localStorage); SSR/pre-render is fine since `CourseApp` is a client component |
| `'use client'` error | All interactive components already have the directive — verify no server import is pulling them in |

---

*Course designed and built to the full specification in the system prompt.*
*ClearPath Consulting grows from $0 to a full month-end close across 6 modules.*
