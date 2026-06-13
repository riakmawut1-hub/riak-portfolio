'use client';

import type { Lesson, EquationState } from '@/lib/course/types';
import { TRANSACTION_MAP } from '@/lib/course/transactions';
import JournalSandbox from './JournalSandbox';

interface Props {
  lesson: Lesson;
  equation: EquationState;
  onComplete: () => void;
  onUpdateEquation: (delta: Partial<EquationState>) => void;
}

export default function Phase3Sandbox({ lesson, equation, onComplete, onUpdateEquation }: Props) {
  const scenario = TRANSACTION_MAP[lesson.phase3.sandboxScenarioId];

  if (!scenario) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10 text-center text-slate-500">
        Sandbox scenario not found: {lesson.phase3.sandboxScenarioId}
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Phase label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/40 border border-emerald-700/40 text-emerald-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        Phase 03 — Sandbox: Do It Yourself
      </div>

      <h2 className="text-2xl font-bold text-white mb-1">Build the Journal Entry</h2>
      <p className="text-slate-400 text-sm mb-4">
        Select accounts, enter amounts, choose Debit or Credit. Hit "Post Entry" — the system validates live.
        You cannot proceed until the entry is correct and balanced.
      </p>

      {/* Context note */}
      {lesson.phase3.contextNote && (
        <div className="rounded-xl border border-stone-200 bg-white p-4 mb-6">
          <p className="text-slate-700 text-sm leading-relaxed">{lesson.phase3.contextNote}</p>
        </div>
      )}

      <JournalSandbox
        scenario={scenario}
        equation={equation}
        onCorrectEntry={(equationDelta) => {
          onUpdateEquation(equationDelta);
          onComplete();
        }}
        mode="guided"
      />
    </div>
  );
}
