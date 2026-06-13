'use client';

import { useState } from 'react';
import type { Lesson } from '@/lib/course/types';

interface Props {
  lesson: Lesson;
  onComplete: () => void;
}

type StepState = 'waiting' | 'correct' | 'wrong';

export default function Phase2Walkthrough({ lesson, onComplete }: Props) {
  const { phase2 } = lesson;
  const [currentStep, setCurrentStep] = useState(0);
  const [stepStates, setStepStates] = useState<StepState[]>(phase2.steps.map(() => 'waiting'));
  const [selectedChoices, setSelectedChoices] = useState<Record<number, string>>({});
  const [feedbacks, setFeedbacks] = useState<Record<number, string>>({});
  const [allDone, setAllDone] = useState(false);

  const step = phase2.steps[currentStep];

  const handleChoice = (stepIdx: number, choiceId: string) => {
    if (stepStates[stepIdx] === 'correct') return; // already answered correctly

    const choice = phase2.steps[stepIdx].choices.find((c) => c.id === choiceId);
    if (!choice) return;

    setSelectedChoices((s) => ({ ...s, [stepIdx]: choiceId }));
    setFeedbacks((f) => ({ ...f, [stepIdx]: choice.feedback }));

    if (choice.isCorrect) {
      const newStates = [...stepStates];
      newStates[stepIdx] = 'correct';
      setStepStates(newStates);
      // Auto-advance after a short delay
      setTimeout(() => {
        if (stepIdx === phase2.steps.length - 1) {
          setAllDone(true);
        } else {
          setCurrentStep(stepIdx + 1);
        }
      }, 1800);
    } else {
      const newStates = [...stepStates];
      newStates[stepIdx] = 'wrong';
      setStepStates(newStates);
      // Allow retry
      setTimeout(() => {
        const resetStates = [...newStates];
        resetStates[stepIdx] = 'waiting';
        setStepStates(resetStates);
        setSelectedChoices((s) => { const n = { ...s }; delete n[stepIdx]; return n; });
      }, 2500);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Phase label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-900/40 border border-violet-700/40 text-violet-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
        Phase 02 — Guided Walkthrough
      </div>

      <h2 className="text-2xl font-bold text-white mb-1">Worked Example</h2>
      <p className="text-slate-400 text-sm mb-6">Unlock each step by answering. Wrong answers are corrected gently before continuing.</p>

      {/* Transaction description */}
      <div className="rounded-xl border border-violet-700/40 bg-violet-950/30 p-5 mb-8">
        <p className="text-xs font-mono text-violet-400 uppercase tracking-widest mb-2">Transaction</p>
        <p className="text-slate-800 text-base leading-relaxed">{phase2.transactionDescription}</p>
      </div>

      {/* Steps */}
      <div className="space-y-6 mb-8">
        {phase2.steps.map((step, i) => {
          const isCurrent = i === currentStep && !allDone;
          const isDone = stepStates[i] === 'correct';
          const isWrong = stepStates[i] === 'wrong';
          const isLocked = i > currentStep && !allDone;
          const selectedChoice = selectedChoices[i];
          const feedback = feedbacks[i];

          return (
            <div key={step.id} className={`rounded-xl border transition-all duration-300
              ${isDone ? 'border-emerald-300 bg-emerald-50'
                : isCurrent ? 'border-violet-300 bg-violet-50'
                : isLocked ? 'border-stone-300 bg-stone-100 opacity-40'
                : 'border-stone-200 bg-white'}`}>

              {/* Step header */}
              <div className="flex items-center gap-3 px-5 py-3 border-b border-stone-200">
                <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0
                  ${isDone ? 'bg-emerald-600 text-white' : isCurrent ? 'bg-violet-600 text-white' : 'bg-stone-200 text-slate-600'}`}>
                  {isDone ? '✓' : i + 1}
                </div>
                <p className={`text-sm font-medium ${isDone ? 'text-emerald-700' : isCurrent ? 'text-slate-900' : 'text-slate-600'}`}>
                  {step.prompt}
                </p>
              </div>

              {/* Choices */}
              {!isLocked && (
                <div className="p-4 space-y-2">
                  {step.choices.map((choice) => {
                    const isSelected = selectedChoice === choice.id;
                    const showCorrect = isDone && choice.isCorrect;
                    const showWrong = isWrong && isSelected && !choice.isCorrect;

                    return (
                      <button
                        key={choice.id}
                        onClick={() => handleChoice(i, choice.id)}
                        disabled={isDone || isLocked}
                        className={`w-full text-left rounded-lg border px-4 py-3 text-sm transition-all
                          ${showCorrect ? 'border-emerald-400 bg-emerald-50 text-emerald-700'
                            : showWrong ? 'border-red-400 bg-red-50 text-red-700 animate-pulse'
                            : isDone ? 'border-stone-300 text-slate-600'
                            : 'border-stone-200 hover:border-violet-400 hover:bg-violet-50 text-slate-800 cursor-pointer'}`}
                      >
                        <span className={`font-semibold mr-2 ${showCorrect ? 'text-emerald-400' : showWrong ? 'text-red-500' : 'text-slate-500'}`}>
                          {choice.isCorrect && isDone ? '✓' : ''}
                        </span>
                        {choice.label}
                      </button>
                    );
                  })}

                  {/* Feedback */}
                  {feedback && (
                    <div className={`rounded-lg px-4 py-3 text-sm mt-2 border
                      ${stepStates[i] === 'correct'
                        ? 'bg-emerald-950/40 border-emerald-800/50 text-emerald-300'
                        : 'bg-red-950/30 border-red-900/40 text-red-400'}`}>
                      <span className="font-semibold">{stepStates[i] === 'correct' ? '✓ ' : '✗ '}</span>
                      {feedback}
                    </div>
                  )}

                  {/* Reveal text after correct */}
                  {isDone && (
                    <div className="rounded-lg bg-stone-100 border border-stone-200 px-4 py-3 text-sm text-slate-800 font-mono mt-3">
                      {step.revealText}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Summary + CTA */}
      {allDone && (
        <div className="rounded-xl border border-emerald-300 bg-emerald-50 p-5 mb-6">
          <p className="text-xs font-mono text-emerald-700 uppercase tracking-widest mb-2">Walkthrough Complete</p>
          <p className="text-slate-700 text-sm leading-relaxed">{phase2.summaryText}</p>
        </div>
      )}

      <div className="flex justify-end pt-4 border-t border-stone-200">
        <button
          onClick={onComplete}
          disabled={!allDone}
          className={`px-6 py-3 font-semibold rounded-xl transition-all text-sm
            ${allDone
              ? 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/30 hover:-translate-y-0.5'
              : 'bg-stone-200 text-slate-600 cursor-not-allowed'}`}
        >
          {allDone ? 'Go to Sandbox →' : `Complete all ${phase2.steps.length} steps to continue`}
        </button>
      </div>
    </div>
  );
}
