'use client';

import type { Lesson, Module, EquationState } from '@/lib/course/types';
import Phase1Concept from './Phase1Concept';
import Phase2Walkthrough from './Phase2Walkthrough';
import Phase3Sandbox from './Phase3Sandbox';
import Phase4MCQ from './Phase4MCQ';

interface LessonProgressState { phase1Done: boolean; phase2Done: boolean; phase3Done: boolean; quizScore: number | null; hintsUsed: number; }

interface Props {
  module: Module;
  lesson: Lesson;
  lessonProgress: LessonProgressState;
  currentPhase: 1 | 2 | 3 | 4;
  equation: EquationState;
  onPhase1Complete: () => void;
  onPhase2Complete: () => void;
  onPhase3Complete: () => void;
  onQuizComplete: (score: number) => void;
  onUpdateEquation: (delta: Partial<EquationState>) => void;
  onBack: () => void;
  onNextLesson: () => void;
}

const PHASE_LABELS = ['Concept', 'Walkthrough', 'Sandbox', 'Quiz'];
const PHASE_COLORS = ['bg-blue-600', 'bg-violet-600', 'bg-emerald-600', 'bg-amber-500'];

export default function LessonView({
  module: mod, lesson, lessonProgress, currentPhase,
  equation, onPhase1Complete, onPhase2Complete,
  onPhase3Complete, onQuizComplete, onUpdateEquation,
  onBack, onNextLesson,
}: Props) {

  const isAllDone = lessonProgress.phase1Done && lessonProgress.phase2Done &&
    lessonProgress.phase3Done && (lessonProgress.quizScore ?? 0) >= 80;

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      {/* Top nav bar */}
      <div className="sticky top-0 z-20 bg-slate-900/95 backdrop-blur border-b border-slate-800">
        <div className="max-w-3xl mx-auto px-6 py-3 flex items-center gap-4">
          <button onClick={onBack} className="text-slate-500 hover:text-slate-300 transition-colors flex-shrink-0 p-1 rounded hover:bg-slate-800">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs text-slate-500 font-mono">{mod.icon} Module {mod.number}</span>
              <span className="text-slate-700">›</span>
              <span className="text-xs text-white font-medium truncate">{lesson.title}</span>
            </div>
          </div>

          {/* Phase stepper */}
          <div className="flex items-center gap-1 flex-shrink-0">
            {PHASE_LABELS.map((label, i) => {
              const phaseNum = (i + 1) as 1 | 2 | 3 | 4;
              const isDone = i === 0 ? lessonProgress.phase1Done
                : i === 1 ? lessonProgress.phase2Done
                : i === 2 ? lessonProgress.phase3Done
                : (lessonProgress.quizScore ?? 0) >= 80;
              const isCurrent = currentPhase === phaseNum;

              return (
                <div key={label} className="flex items-center gap-1">
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all
                    ${isDone ? 'bg-emerald-600 text-white' : isCurrent ? `${PHASE_COLORS[i]} text-white` : 'bg-slate-800 text-slate-600'}`}
                    title={label}
                  >
                    {isDone ? '✓' : phaseNum}
                  </div>
                  {i < 3 && <div className={`w-4 h-px ${isDone ? 'bg-emerald-700' : 'bg-slate-800'}`} />}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Phase content */}
      <div className="flex-1">
        {currentPhase === 1 && (
          <Phase1Concept
            lesson={lesson}
            onComplete={onPhase1Complete}
          />
        )}
        {currentPhase === 2 && (
          <Phase2Walkthrough
            lesson={lesson}
            onComplete={onPhase2Complete}
          />
        )}
        {currentPhase === 3 && (
          <Phase3Sandbox
            lesson={lesson}
            equation={equation}
            onComplete={onPhase3Complete}
            onUpdateEquation={onUpdateEquation}
          />
        )}
        {currentPhase === 4 && (
          <Phase4MCQ
            lesson={lesson}
            existingScore={lessonProgress.quizScore}
            onComplete={onQuizComplete}
            onNextLesson={onNextLesson}
          />
        )}
      </div>

      {/* Lesson complete banner */}
      {isAllDone && (
        <div className="border-t border-emerald-800 bg-emerald-950/60 px-6 py-4">
          <div className="max-w-3xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🎉</span>
              <div>
                <p className="text-emerald-300 font-semibold text-sm">Lesson Complete!</p>
                <p className="text-emerald-700 text-xs">Score: {lessonProgress.quizScore}% on mastery check</p>
              </div>
            </div>
            <button
              onClick={onNextLesson}
              className="px-5 py-2.5 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-xl text-sm transition-all"
            >
              Next Lesson →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
