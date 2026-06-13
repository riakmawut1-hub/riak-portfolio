'use client';

import type { Module, EquationState } from '@/lib/course/types';

interface LessonProgressState {
  phase1Done: boolean;
  phase2Done: boolean;
  phase3Done: boolean;
  quizScore: number | null;
}
interface ModuleProgressState {
  unlocked: boolean;
  lessonsCompleted: Record<string, LessonProgressState>;
  problemSetDone: boolean;
}

interface Props {
  modules: Module[];
  progress: Record<string, ModuleProgressState>;
  currentModuleId: string | null;
  currentLessonId: string | null;
  isOpen: boolean;
  onToggle: () => void;
  onGoHome: () => void;
  onGoToModule: (id: string) => void;
  onGoToLesson: (moduleId: string, lessonId: string) => void;
  totalComplete: number;
  totalLessons: number;
  equation: EquationState;
}

function lessonIsDone(lp?: LessonProgressState) {
  return lp?.phase1Done && lp?.phase2Done && lp?.phase3Done && (lp?.quizScore ?? 0) >= 80;
}

const MOD_DOT: Record<string, string> = {
  'module-1': 'bg-blue-500',
  'module-2': 'bg-emerald-500',
  'module-3': 'bg-violet-500',
  'module-4': 'bg-amber-500',
  'module-5': 'bg-cyan-500',
  'module-6': 'bg-rose-500',
};

export default function ProgressSidebar({
  modules, progress, currentModuleId, currentLessonId,
  isOpen, onToggle, onGoHome, onGoToModule, onGoToLesson,
  totalComplete, totalLessons, equation,
}: Props) {
  const overallPct = totalLessons > 0 ? Math.round((totalComplete / totalLessons) * 100) : 0;
  const fmt = (n: number) => n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });

  return (
    <>
      {/* Collapsed toggle */}
      {!isOpen && (
        <div className="w-12 flex-shrink-0 bg-stone-100 border-r border-stone-300 flex flex-col items-center pt-4 gap-3">
          <button onClick={onToggle} className="p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-stone-200" title="Expand sidebar">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button onClick={onGoHome} className="p-2 text-slate-600 hover:text-slate-900 transition-colors rounded-lg hover:bg-stone-200" title="Course home">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </button>
          {modules.map((mod) => {
            const prog = progress[mod.id];
            if (!prog?.unlocked) return null;
            return (
              <button key={mod.id} onClick={() => onGoToModule(mod.id)}
                className={`w-7 h-7 rounded-lg text-xs flex items-center justify-center transition-colors ${currentModuleId === mod.id ? MOD_DOT[mod.id] + ' text-white' : 'bg-slate-800 text-slate-400 hover:bg-slate-700'}`}
                title={`Module ${mod.number}`}
              >
                {mod.number}
              </button>
            );
          })}
        </div>
      )}

      {/* Expanded sidebar */}
      {isOpen && (
        <div className="w-72 flex-shrink-0 bg-stone-100 border-r border-stone-300 flex flex-col overflow-hidden">
          {/* Top bar */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-stone-300">
            <button onClick={onGoHome} className="text-sm font-semibold text-slate-700 hover:text-slate-900 flex items-center gap-2 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Course Home
            </button>
            <button onClick={onToggle} className="p-1.5 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-stone-200 transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          </div>

          {/* Overall progress */}
          <div className="px-4 py-3 border-b border-stone-300">
            <div className="flex items-center justify-between text-xs mb-1.5">
              <span className="text-slate-600 font-medium">Overall Progress</span>
              <span className="font-mono text-slate-700">{totalComplete}/{totalLessons} lessons</span>
            </div>
            <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-violet-500 rounded-full transition-all duration-500" style={{ width: `${overallPct}%` }} />
            </div>
          </div>

          {/* Module/lesson tree */}
          <div className="flex-1 overflow-y-auto py-2">
            {modules.map((mod) => {
              const prog = progress[mod.id];
              const isLocked = !prog?.unlocked;
              const isCurrentMod = currentModuleId === mod.id;

              return (
                <div key={mod.id}>
                  {/* Module row */}
                  <button
                    onClick={() => !isLocked && onGoToModule(mod.id)}
                    disabled={isLocked}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors group
                      ${isLocked ? 'opacity-40 cursor-not-allowed' : 'hover:bg-stone-200'}
                      ${isCurrentMod ? 'bg-stone-200' : ''}`}
                  >
                    <div className={`w-2 h-2 rounded-full flex-shrink-0 ${isLocked ? 'bg-stone-300' : MOD_DOT[mod.id]}`} />
                    <div className="flex-1 min-w-0">
                      <p className={`text-xs font-semibold truncate ${isCurrentMod ? 'text-slate-900' : 'text-slate-600'}`}>
                        {mod.number}. {mod.title}
                      </p>
                    </div>
                    {isLocked && (
                      <svg className="w-3 h-3 text-stone-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Lessons (only show for current module) */}
                  {isCurrentMod && !isLocked && (
                    <div className="pl-7 pr-4 pb-1">
                      {mod.lessons.map((lesson) => {
                        const lp = prog?.lessonsCompleted[lesson.id];
                        const done = lessonIsDone(lp);
                        const isCurrent = currentLessonId === lesson.id;

                        return (
                          <button
                            key={lesson.id}
                            onClick={() => onGoToLesson(mod.id, lesson.id)}
                            className={`w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left mb-0.5 transition-colors
                              ${isCurrent ? 'bg-stone-200 text-slate-900' : 'hover:bg-stone-200 text-slate-600 hover:text-slate-800'}`}
                          >
                            <div className={`w-4 h-4 rounded-full border flex-shrink-0 flex items-center justify-center text-xs
                              ${done ? 'bg-emerald-600 border-emerald-600 text-white' : isCurrent ? 'border-slate-400' : 'border-stone-300'}`}>
                              {done ? '✓' : ''}
                            </div>
                            <span className="text-xs truncate">{lesson.title}</span>
                            {lp && !done && (lp.phase1Done || lp.phase2Done || lp.phase3Done) && (
                              <span className="ml-auto text-xs text-slate-600">…</span>
                            )}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Accounting equation banner */}
          <div className="border-t border-stone-300 px-4 py-3 bg-stone-200/80">
            <p className="text-xs text-slate-700 uppercase tracking-widest font-mono mb-2">Live Equation</p>
            <div className="grid grid-cols-3 gap-1 text-center">
              <div className="bg-blue-50 border border-blue-200 rounded-lg px-1 py-1.5">
                <p className="text-xs font-mono text-blue-600 font-bold truncate">{fmt(equation.assets)}</p>
                <p className="text-xs text-slate-600 leading-none mt-0.5">Assets</p>
              </div>
              <div className="bg-red-50 border border-red-200 rounded-lg px-1 py-1.5">
                <p className="text-xs font-mono text-red-600 font-bold truncate">{fmt(equation.liabilities)}</p>
                <p className="text-xs text-slate-600 leading-none mt-0.5">Liabilities</p>
              </div>
              <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-1 py-1.5">
                <p className="text-xs font-mono text-emerald-600 font-bold truncate">{fmt(equation.equity)}</p>
                <p className="text-xs text-slate-600 leading-none mt-0.5">Equity</p>
              </div>
            </div>
            <div className={`mt-2 text-center text-xs font-mono ${Math.abs(equation.assets - (equation.liabilities + equation.equity)) < 1 ? 'text-emerald-600' : 'text-red-600'}`}>
              {Math.abs(equation.assets - (equation.liabilities + equation.equity)) < 1 ? '✓ In Balance' : '⚠ Out of Balance'}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
