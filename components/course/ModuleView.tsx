'use client';

import type { Module } from '@/lib/course/types';

interface LessonProgressState { phase1Done: boolean; phase2Done: boolean; phase3Done: boolean; quizScore: number | null; }
interface ModuleProgressState { unlocked: boolean; lessonsCompleted: Record<string, LessonProgressState>; problemSetDone: boolean; }

interface Props {
  module: Module;
  progress: ModuleProgressState;
  onStartLesson: (lessonId: string) => void;
  onBack: () => void;
}

function lessonIsDone(lp?: LessonProgressState) {
  return !!(lp?.phase1Done && lp?.phase2Done && lp?.phase3Done && (lp?.quizScore ?? 0) >= 80);
}
function lessonInProgress(lp?: LessonProgressState) {
  return !!(lp && !lessonIsDone(lp) && (lp.phase1Done || lp.phase2Done || lp.phase3Done));
}

const GRADIENT_TEXT: Record<string, string> = {
  'module-1': 'from-blue-400 to-indigo-400',
  'module-2': 'from-emerald-400 to-teal-400',
  'module-3': 'from-violet-400 to-purple-400',
  'module-4': 'from-amber-400 to-orange-400',
  'module-5': 'from-cyan-400 to-sky-400',
  'module-6': 'from-rose-400 to-pink-400',
};

export default function ModuleView({ module: mod, progress, onStartLesson, onBack }: Props) {
  const completedCount = mod.lessons.filter((l) => lessonIsDone(progress?.lessonsCompleted[l.id])).length;
  const pct = mod.lessons.length > 0 ? Math.round((completedCount / mod.lessons.length) * 100) : 0;

  const firstIncomplete = mod.lessons.find((l) => !lessonIsDone(progress?.lessonsCompleted[l.id]));
  const primaryAction = firstIncomplete ?? mod.lessons[0];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <div className="max-w-3xl mx-auto px-6 py-10">

        {/* Back */}
        <button onClick={onBack} className="flex items-center gap-2 text-slate-600 hover:text-slate-800 text-sm mb-8 transition-colors group">
          <svg className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          All Modules
        </button>

        {/* Module header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{mod.icon}</span>
            <div>
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">Module {mod.number}</p>
              <h1 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${GRADIENT_TEXT[mod.id] ?? 'from-slate-200 to-slate-400'}`}>
                {mod.title}
              </h1>
            </div>
          </div>
          <p className="text-slate-400 text-base leading-relaxed mb-4">{mod.subtitle}</p>

          {/* Meta + progress */}
          <div className="flex items-center gap-6 text-sm text-slate-600 mb-4">
            <span>{mod.lessons.length} lessons</span>
            <span>{mod.estimatedHours} hours</span>
            <span className="font-mono text-slate-800">{completedCount}/{mod.lessons.length} complete</span>
          </div>
          <div className="w-full h-2 bg-stone-200 rounded-full overflow-hidden">
            <div className={`h-full rounded-full transition-all duration-500 bg-gradient-to-r ${mod.color}`} style={{ width: `${pct}%` }} />
          </div>
        </div>

        {/* What you will DO */}
        <div className="border border-stone-200 rounded-2xl p-5 bg-white mb-8">
          <p className="text-xs text-slate-600 font-mono uppercase tracking-widest mb-2">What you will do in this module</p>
          <p className="text-slate-700 text-sm leading-relaxed">{mod.whatYouWillDo}</p>
        </div>

        {/* Learning objectives */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-slate-700 uppercase tracking-widest mb-3">Learning Objectives</h2>
          <div className="space-y-2">
            {mod.objectives.map((obj) => (
              <div key={obj.id} className="flex items-start gap-3">
                <span className="text-xs font-mono font-bold text-blue-500 mt-0.5 flex-shrink-0 w-16">{obj.actionVerb}</span>
                <p className="text-slate-700 text-sm">{obj.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Lesson list */}
        <div className="mb-8">
          <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-3">Lessons</h2>
          <div className="space-y-3">
            {mod.lessons.map((lesson, idx) => {
              const lp = progress?.lessonsCompleted[lesson.id];
              const done = lessonIsDone(lp);
              const inProgress = lessonInProgress(lp);
              const isLocked = idx > 0 && !lessonIsDone(progress?.lessonsCompleted[mod.lessons[idx - 1].id]);

              // Phase completion
              const phaseCount = [lp?.phase1Done, lp?.phase2Done, lp?.phase3Done, (lp?.quizScore ?? 0) >= 80].filter(Boolean).length;

              return (
                <button
                  key={lesson.id}
                  onClick={() => !isLocked && onStartLesson(lesson.id)}
                  disabled={isLocked}
                  className={`w-full text-left rounded-xl border p-4 transition-all group
                    ${isLocked ? 'border-stone-300 opacity-50 cursor-not-allowed bg-stone-100'
                      : done ? 'border-emerald-300 bg-emerald-50 hover:bg-emerald-100'
                      : inProgress ? 'border-blue-300 bg-blue-50 hover:bg-blue-100'
                      : 'border-stone-200 bg-white hover:bg-stone-50'}`}
                >
                  <div className="flex items-start gap-4">
                    {/* Status icon */}
                    <div className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center text-sm font-bold
                      ${done ? 'bg-emerald-700 text-white' : inProgress ? 'bg-blue-800 text-white' : isLocked ? 'bg-slate-800 text-slate-600' : 'bg-slate-700 text-slate-400'}`}>
                      {done ? '✓' : isLocked ? '🔒' : idx + 1}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-0.5">
                        <h3 className="font-semibold text-sm text-slate-900">{lesson.title}</h3>
                        {inProgress && !done && (
                          <span className="text-xs bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-mono">In Progress</span>
                        )}
                        {done && (
                          <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-mono">Complete</span>
                        )}
                      </div>
                      <p className="text-slate-600 text-xs mb-2">{lesson.subtitle}</p>

                      {/* Phase progress dots */}
                      {!isLocked && (
                        <div className="flex items-center gap-1.5">
                          {['Concept', 'Walkthrough', 'Sandbox', 'Quiz'].map((phase, i) => (
                            <div key={phase} className={`flex items-center gap-1 ${i < 3 ? 'mr-0.5' : ''}`}>
                              <div className={`w-1.5 h-1.5 rounded-full ${i < phaseCount ? 'bg-emerald-500' : 'bg-stone-300'}`} />
                              {i === 0 && <span className="text-xs text-slate-600 hidden sm:inline">{phase}</span>}
                            </div>
                          ))}
                          <span className="text-xs text-slate-600 ml-1">{phaseCount}/4 phases</span>
                        </div>
                      )}
                    </div>

                    <div className="flex-shrink-0 text-slate-600 group-hover:text-slate-400 transition-colors">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Primary CTA */}
        {primaryAction && (
          <div className="flex justify-center">
            <button
              onClick={() => onStartLesson(primaryAction.id)}
              className={`px-8 py-4 font-semibold rounded-xl text-white transition-all shadow-lg hover:-translate-y-0.5 active:translate-y-0 bg-gradient-to-r ${mod.color} hover:opacity-90`}
            >
              {completedCount === 0 ? `Start Lesson 1: ${primaryAction.title}` : `Continue: ${primaryAction.title}`} →
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
