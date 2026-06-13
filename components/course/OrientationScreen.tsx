'use client';

interface Props {
  onBegin: () => void;
  onBack: () => void;
}

const PHASES = [
  {
    number: '01',
    label: 'Concept Micro-Lesson',
    color: 'border-blue-500 bg-blue-950/30',
    badge: 'bg-blue-600',
    icon: '💡',
    duration: '~60 seconds',
    what: 'One concept. One analogy. One visual.',
    how: 'You read a tightly written explanation of exactly one idea — never a paragraph wall. A real-world analogy makes it concrete. Then a visual (T-account, equation, table) makes it visual.',
    signal: '"Now let\'s see this in action." — that\'s your cue to move.',
  },
  {
    number: '02',
    label: 'Guided Walkthrough',
    color: 'border-violet-500 bg-violet-950/30',
    badge: 'bg-violet-600',
    icon: '🔍',
    duration: '~5 min',
    what: 'A solved example — but you unlock each step.',
    how: 'You\'re shown a transaction in plain English. For each step of the solution, you choose the answer before it\'s revealed. Wrong answers are corrected gently with a one-sentence explanation before the walkthrough continues.',
    signal: 'This is NOT a quiz — it\'s guided discovery. You always finish the full example.',
  },
  {
    number: '03',
    label: 'Sandbox: Do It Yourself',
    color: 'border-emerald-500 bg-emerald-950/30',
    badge: 'bg-emerald-600',
    icon: '⚙️',
    duration: '~10 min',
    what: 'You build the journal entry from scratch.',
    how: 'Select accounts from the dropdown, enter amounts, choose Debit or Credit. Hit "Post Entry." The sandbox validates your entry live: green if balanced and correct, red with a specific diagnosis if not. You can\'t advance until the entry is valid.',
    signal: 'A Hint button exists — but using it caps your score for that exercise.',
  },
  {
    number: '04',
    label: 'Mastery Check (MCQ)',
    color: 'border-amber-500 bg-amber-950/30',
    badge: 'bg-amber-500',
    icon: '🎯',
    duration: '~5 min',
    what: '2–4 questions testing the WHY behind what you just did.',
    how: 'Select any answer. A full diagnostic explanation appears immediately — for EVERY option, right or wrong. Wrong answers explain the exact conceptual error. Right answers explain WHY that reasoning is correct. You need 80%+ to unlock the next lesson.',
    signal: 'You learn as much from the explanations as from the questions themselves.',
  },
];

const CALLOUT_TYPES = [
  {
    icon: '📌',
    label: 'BEST PRACTICE',
    color: 'border-blue-500/30 bg-blue-950/20 text-blue-300',
    desc: 'What professional accountants always do in real practice.',
  },
  {
    icon: '🔍',
    label: 'DEEP DIVE',
    color: 'border-violet-500/30 bg-violet-950/20 text-violet-300',
    desc: 'The economic or business reasoning behind the rule.',
  },
  {
    icon: '⚠️',
    label: 'COMMON PITFALL',
    color: 'border-amber-500/30 bg-amber-950/20 text-amber-300',
    desc: 'The exact error most learners make — and why.',
  },
];

export default function OrientationScreen({ onBegin, onBack }: Props) {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-4xl mx-auto px-6 py-12">

        {/* Back */}
        <button onClick={onBack} className="flex items-center gap-2 text-slate-500 hover:text-slate-300 text-sm mb-8 transition-colors group">
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Overview
        </button>

        {/* Header */}
        <div className="mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-400 text-xs font-mono uppercase tracking-widest mb-4">
            Orientation
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">How This Course Works</h1>
          <p className="text-slate-400 text-lg leading-relaxed max-w-2xl">
            This is not a reading course. Every single lesson runs you through a four-phase
            active participation loop — you are always the actor inside the material, never a passive observer.
          </p>
        </div>

        {/* 4-phase loop */}
        <div className="space-y-4 mb-14">
          {PHASES.map((phase) => (
            <div key={phase.number} className={`rounded-2xl border p-6 ${phase.color}`}>
              <div className="flex items-start gap-5">
                <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${phase.badge} flex items-center justify-center text-white font-mono font-bold text-sm`}>
                  {phase.number}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2 flex-wrap">
                    <span className="text-lg">{phase.icon}</span>
                    <h3 className="font-bold text-white text-base">{phase.label}</h3>
                    <span className="text-xs text-slate-500 font-mono bg-slate-800 px-2 py-0.5 rounded-full">{phase.duration}</span>
                  </div>
                  <p className="text-slate-200 font-medium text-sm mb-2">{phase.what}</p>
                  <p className="text-slate-400 text-sm leading-relaxed mb-2">{phase.how}</p>
                  <p className="text-slate-500 text-xs italic">{phase.signal}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Callout types */}
        <div className="mb-14">
          <h2 className="text-lg font-bold text-white mb-4">Throughout each lesson, watch for three types of callouts:</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CALLOUT_TYPES.map((c) => (
              <div key={c.label} className={`rounded-xl border p-4 ${c.color}`}>
                <div className="text-2xl mb-2">{c.icon}</div>
                <div className="text-xs font-mono font-bold uppercase tracking-widest mb-1">{c.label}</div>
                <p className="text-sm opacity-80 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* MCQ format preview */}
        <div className="mb-14 border border-slate-800 rounded-2xl p-6 bg-slate-900/50">
          <h2 className="text-lg font-bold text-white mb-2">What the Mastery Check feels like</h2>
          <p className="text-slate-400 text-sm mb-5">Every answer — right or wrong — gets a full explanation. Here's an example:</p>

          <div className="rounded-xl border border-slate-700 overflow-hidden">
            <div className="bg-slate-800 px-4 py-3 border-b border-slate-700">
              <p className="text-sm font-medium text-slate-200">
                Why do we CREDIT Accounts Receivable when a client pays their invoice?
              </p>
            </div>
            {[
              { label: 'A', text: 'Because cash is leaving the business.', verdict: 'incorrect', explanation: 'Cash is arriving, not leaving. Credits don\'t mean "money out" — in double-entry, crediting an asset means that asset is DECREASING. A/R (an asset) decreases when collected.' },
              { label: 'B', text: 'Because A/R is an asset, and collecting cash reduces what is owed to us, decreasing that asset.', verdict: 'correct', explanation: 'Exactly. A/R has a debit normal balance. Crediting it reduces the balance — the customer\'s debt is now settled. Cash (the other asset) is debited.' },
              { label: 'C', text: 'Because revenue is being earned at this moment.', verdict: 'incorrect', explanation: 'Revenue was recognized when the invoice was sent, not when cash arrives. This collection entry is purely a balance sheet swap.' },
            ].map((opt) => (
              <div key={opt.label} className={`px-4 py-3 border-b border-slate-800 last:border-0 ${opt.verdict === 'correct' ? 'bg-emerald-950/30' : 'bg-slate-900/30'}`}>
                <div className="flex items-start gap-3">
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full text-xs font-bold flex items-center justify-center ${opt.verdict === 'correct' ? 'bg-emerald-600 text-white' : 'bg-slate-700 text-slate-300'}`}>
                    {opt.label}
                  </span>
                  <div>
                    <p className={`text-sm font-medium mb-1 ${opt.verdict === 'correct' ? 'text-emerald-300' : 'text-slate-300'}`}>
                      {opt.verdict === 'correct' && '✓ '}{opt.text}
                    </p>
                    <p className="text-xs text-slate-500 leading-relaxed italic">→ {opt.explanation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-xs mt-3">In the actual course, explanations appear only after you select an option.</p>
        </div>

        {/* ClearPath note */}
        <div className="mb-12 border border-slate-700 rounded-2xl p-6 bg-gradient-to-br from-slate-800/60 to-slate-900/60">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-2xl">🏢</span>
            <h2 className="font-bold text-white">Meet ClearPath Consulting</h2>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Every transaction you journalize, every statement you prepare, and every ratio you calculate
            belongs to <strong className="text-slate-200">ClearPath Consulting</strong> — a fictional consulting firm
            that grows from a $10,000 owner investment in Module 1 to a full month-end close with 30+ transactions
            in the final capstone. By the end of the course, you'll know this company's finances as well as its bookkeeper.
          </p>
        </div>

        {/* Begin button */}
        <div className="text-center">
          <button
            onClick={onBegin}
            className="px-12 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl text-base transition-all shadow-lg shadow-blue-900/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            Begin Module 1: The Foundation →
          </button>
          <p className="text-slate-600 text-xs mt-3">Your progress is saved automatically in your browser.</p>
        </div>
      </div>
    </div>
  );
}
