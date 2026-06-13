'use client';

import type { Module } from '@/lib/course/types';
import { COURSE_META } from '@/lib/course/courseData';

interface ModuleProgressState {
  unlocked: boolean;
  lessonsCompleted: Record<string, { phase1Done: boolean; phase2Done: boolean; phase3Done: boolean; quizScore: number | null }>;
  problemSetDone: boolean;
}

interface Props {
  modules: Module[];
  progress: Record<string, ModuleProgressState>;
  totalComplete: number;
  totalLessons: number;
  onStart: () => void;
  onGoToModule: (id: string) => void;
  onReset: () => void;
}

function getModuleComplete(mod: Module, prog: ModuleProgressState): number {
  const total = mod.lessons.length;
  if (total === 0) return 0;
  const done = mod.lessons.filter((l) => {
    const lp = prog.lessonsCompleted[l.id];
    return lp?.phase1Done && lp?.phase2Done && lp?.phase3Done && (lp?.quizScore ?? 0) >= 80;
  }).length;
  return Math.round((done / total) * 100);
}

const CALLOUT_COLORS: Record<string, string> = {
  'module-1': 'border-blue-500 bg-blue-950/40',
  'module-2': 'border-emerald-500 bg-emerald-950/40',
  'module-3': 'border-violet-500 bg-violet-950/40',
  'module-4': 'border-amber-500 bg-amber-950/40',
  'module-5': 'border-cyan-500 bg-cyan-950/40',
  'module-6': 'border-rose-500 bg-rose-950/40',
};
const BADGE_COLORS: Record<string, string> = {
  'module-1': 'bg-blue-600',
  'module-2': 'bg-emerald-600',
  'module-3': 'bg-violet-600',
  'module-4': 'bg-amber-500',
  'module-5': 'bg-cyan-600',
  'module-6': 'bg-rose-600',
};

export default function CourseOverview({ modules, progress, totalComplete, totalLessons, onStart, onGoToModule, onReset }: Props) {
  const overallPct = totalLessons > 0 ? Math.round((totalComplete / totalLessons) * 100) : 0;
  const hasStarted = totalComplete > 0;

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Hero */}
      <div className="relative overflow-hidden border-b border-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/60 via-slate-950 to-slate-950 pointer-events-none" />
        {/* Ledger line decoration */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 39px, #94a3b8 39px, #94a3b8 40px)', backgroundSize: '100% 40px' }} />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-16">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-xs font-mono font-semibold tracking-widest uppercase mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Interactive Learning Platform
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
              Accounting & Finance<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
                Zero to Mastery
              </span>
            </h1>

            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              You don't read accounting. You <em className="text-slate-200 not-italic font-medium">do</em> it.
              Every concept is learned by journalizing real transactions, building T-accounts,
              and seeing the accounting equation update live — until it becomes instinct.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap gap-6 mb-10 text-sm">
              {[
                { label: 'Modules', value: COURSE_META.totalModules },
                { label: 'Lessons', value: COURSE_META.totalLessons },
                { label: 'Estimated Hours', value: COURSE_META.totalHours },
                { label: 'Live Sandbox', value: '✓' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="text-2xl font-bold font-mono text-white">{s.value}</span>
                  <span className="text-slate-500 text-xs uppercase tracking-widest">{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 flex-wrap">
              {!hasStarted ? (
                <button
                  onClick={onStart}
                  className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-900/40 text-base hover:shadow-blue-800/60 hover:-translate-y-0.5 active:translate-y-0"
                >
                  Start the Course →
                </button>
              ) : (
                <>
                  <button
                    onClick={() => {
                      const nextMod = modules.find((m) => progress[m.id]?.unlocked && getModuleComplete(m, progress[m.id]) < 100);
                      if (nextMod) onGoToModule(nextMod.id);
                    }}
                    className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-900/40 text-base hover:-translate-y-0.5 active:translate-y-0"
                  >
                    Continue Learning →
                  </button>
                  <div className="flex items-center gap-3">
                    <div className="w-32 h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all" style={{ width: `${overallPct}%` }} />
                    </div>
                    <span className="text-slate-400 text-sm font-mono">{overallPct}% complete</span>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Module grid */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white">Learning Pathway</h2>
            <p className="text-slate-500 mt-1 text-sm">Each module builds on the last. Complete in sequence for maximum retention.</p>
          </div>
          {hasStarted && (
            <button onClick={onReset} className="text-xs text-slate-600 hover:text-slate-400 transition-colors underline underline-offset-2">
              Reset progress
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {modules.map((mod, idx) => {
            const prog = progress[mod.id];
            const pct = prog ? getModuleComplete(mod, prog) : 0;
            const isLocked = !prog?.unlocked;
            const isDone = pct === 100;

            return (
              <button
                key={mod.id}
                onClick={() => !isLocked && onGoToModule(mod.id)}
                disabled={isLocked}
                className={`group relative text-left rounded-2xl border p-6 transition-all duration-200
                  ${isLocked
                    ? 'border-slate-800 bg-slate-900/40 opacity-50 cursor-not-allowed'
                    : `${CALLOUT_COLORS[mod.id]} hover:scale-[1.02] hover:shadow-xl cursor-pointer`
                  }`}
              >
                {/* Module number badge */}
                <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl text-white text-sm font-bold mb-4 ${isLocked ? 'bg-slate-700' : BADGE_COLORS[mod.id]}`}>
                  {isDone ? '✓' : mod.number}
                </div>

                {/* Lock indicator */}
                {isLocked && (
                  <div className="absolute top-4 right-4 text-slate-600">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}

                <div className="text-lg mb-1">
                  {mod.icon}
                </div>

                <h3 className="font-bold text-white text-base mb-1">
                  Module {mod.number}: {mod.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4 leading-relaxed">{mod.subtitle}</p>

                <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                  <span>{mod.lessons.length} lessons · {mod.estimatedHours}h</span>
                  {!isLocked && pct > 0 && (
                    <span className="font-mono text-slate-300">{pct}%</span>
                  )}
                </div>

                {!isLocked && (
                  <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-500 ${isDone ? 'bg-emerald-500' : `bg-gradient-to-r ${mod.color.replace('from-', 'from-').replace('to-', 'to-')}`}`}
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                )}

                {/* Connector arrow */}
                {idx < modules.length - 1 && !isLocked && (
                  <div className="absolute -right-3 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
                    <div className="text-slate-700 text-xs">→</div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* How it works strip */}
        <div className="mt-16 border border-slate-800 rounded-2xl p-8 bg-slate-900/40">
          <h2 className="text-lg font-bold text-white mb-6">How Every Lesson Works</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { n: '01', label: 'Micro-Lesson', desc: 'One concept, one analogy, 60 seconds', color: 'text-blue-400' },
              { n: '02', label: 'Guided Walkthrough', desc: 'Unlock each step by answering', color: 'text-violet-400' },
              { n: '03', label: 'Live Sandbox', desc: 'Build the entry yourself — it validates live', color: 'text-emerald-400' },
              { n: '04', label: 'Mastery Check', desc: 'Every wrong answer teaches, not just scores', color: 'text-amber-400' },
            ].map((step) => (
              <div key={step.n} className="flex flex-col gap-2">
                <span className={`font-mono text-2xl font-bold ${step.color}`}>{step.n}</span>
                <span className="font-semibold text-white text-sm">{step.label}</span>
                <span className="text-slate-500 text-xs leading-relaxed">{step.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
