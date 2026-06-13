'use client';

import { useState, useMemo } from 'react';
import type { Lesson, MCQuestion, MCQOption } from '@/lib/course/types';

interface Props {
  lesson: Lesson;
  existingScore: number | null;
  onComplete: (score: number) => void;
  onNextLesson: () => void;
}

interface AnswerState {
  selectedId: string | null;
  revealed: boolean;
}

const OPTION_LABELS = ['A', 'B', 'C', 'D', 'E'];

function QuestionCard({
  question,
  qIndex,
  totalQuestions,
  answerState,
  onSelect,
}: {
  question: MCQuestion;
  qIndex: number;
  totalQuestions: number;
  answerState: AnswerState;
  onSelect: (optionId: string) => void;
}) {
  const { selectedId, revealed } = answerState;
  const selectedOption = question.options.find((o) => o.id === selectedId);
  const isCorrect = selectedOption?.isCorrect ?? false;

  function optionStyle(opt: MCQOption): string {
    if (!revealed) {
      return selectedId === opt.id
        ? 'border-blue-500 bg-blue-950/40'
        : 'border-slate-700 hover:border-slate-500 hover:bg-slate-800/60 cursor-pointer';
    }
    if (opt.isCorrect) return 'border-emerald-600 bg-emerald-950/30';
    if (selectedId === opt.id && !opt.isCorrect) return 'border-red-700 bg-red-950/30';
    return 'border-slate-800 opacity-60';
  }

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-900/60 overflow-hidden">
      {/* Question header */}
      <div className="px-6 py-5 border-b border-slate-800">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-mono text-slate-500 uppercase tracking-widest">
            Question {qIndex + 1} of {totalQuestions}
          </span>
          <span className="text-xs font-mono text-slate-700 bg-slate-800 px-2 py-0.5 rounded-full">{question.conceptTag}</span>
        </div>
        <p className="text-white font-medium text-base leading-relaxed">{question.question}</p>
      </div>

      {/* Options */}
      <div className="p-5 space-y-3">
        {question.options.map((opt, i) => (
          <div key={opt.id}>
            <button
              onClick={() => !revealed && onSelect(opt.id)}
              disabled={revealed}
              className={`w-full text-left rounded-xl border px-4 py-4 transition-all duration-150 ${optionStyle(opt)}`}
            >
              <div className="flex items-start gap-3">
                <span className={`flex-shrink-0 w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold transition-colors
                  ${revealed && opt.isCorrect ? 'bg-emerald-600 border-emerald-600 text-white'
                    : revealed && selectedId === opt.id && !opt.isCorrect ? 'bg-red-700 border-red-700 text-white'
                    : selectedId === opt.id && !revealed ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-slate-600 text-slate-500'}`}>
                  {revealed && opt.isCorrect ? '✓' : revealed && selectedId === opt.id ? '✗' : OPTION_LABELS[i]}
                </span>
                <p className={`flex-1 text-sm leading-relaxed ${revealed && opt.isCorrect ? 'text-emerald-200 font-medium' : revealed && selectedId === opt.id ? 'text-red-300' : 'text-slate-300'}`}>
                  {opt.text}
                </p>
              </div>
            </button>

            {/* Diagnostic explanation — shown after selection */}
            {revealed && (
              <div className={`mt-1 mx-1 rounded-xl px-4 py-3 text-sm border
                ${opt.isCorrect
                  ? 'border-emerald-800/40 bg-emerald-950/30 text-emerald-300'
                  : selectedId === opt.id
                  ? 'border-red-900/40 bg-red-950/20 text-red-400'
                  : 'border-slate-800/30 bg-slate-900/30 text-slate-600'}`}>
                <span className={`text-xs font-mono font-bold uppercase tracking-widest mr-2
                  ${opt.isCorrect ? 'text-emerald-500' : selectedId === opt.id ? 'text-red-500' : 'text-slate-700'}`}>
                  {opt.isCorrect ? '✓ Correct' : selectedId === opt.id ? '✗ Incorrect' : 'Note'}
                </span>
                <span className="leading-relaxed">{opt.explanation}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Status */}
      {revealed && (
        <div className={`px-6 py-3 border-t ${isCorrect ? 'border-emerald-900/50 bg-emerald-950/20' : 'border-amber-900/50 bg-amber-950/20'}`}>
          <p className={`text-xs font-mono font-bold ${isCorrect ? 'text-emerald-400' : 'text-amber-400'}`}>
            {isCorrect ? '✓ You got this one right.' : '→ Review the explanation above before moving on.'}
          </p>
        </div>
      )}
    </div>
  );
}

export default function Phase4MCQ({ lesson, existingScore, onComplete, onNextLesson }: Props) {
  const questions = lesson.phase4.questions;
  const passMark = lesson.phase4.passMark;

  const [answers, setAnswers] = useState<Record<string, AnswerState>>(
    Object.fromEntries(questions.map((q) => [q.id, { selectedId: null, revealed: false }]))
  );
  const [submitted, setSubmitted] = useState(false);

  const handleSelect = (questionId: string, optionId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: { selectedId: optionId, revealed: true },
    }));
  };

  const score = useMemo(() => {
    const correct = questions.filter((q) => {
      const ans = answers[q.id];
      const selectedOpt = q.options.find((o) => o.id === ans.selectedId);
      return selectedOpt?.isCorrect ?? false;
    }).length;
    return Math.round((correct / questions.length) * 100);
  }, [questions, answers]);

  const allAnswered = questions.every((q) => answers[q.id]?.revealed);
  const passed = score >= passMark;

  const handleSubmit = () => {
    setSubmitted(true);
    onComplete(score);
  };

  if (existingScore !== null && existingScore >= passMark) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-700/40 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
          Phase 04 — Mastery Check
        </div>
        <div className="rounded-2xl border border-emerald-700/50 bg-emerald-950/20 p-8 text-center">
          <div className="text-5xl mb-4">🎓</div>
          <h2 className="text-2xl font-bold text-white mb-2">Already Mastered!</h2>
          <p className="text-emerald-400 text-lg font-mono mb-1">Score: {existingScore}%</p>
          <p className="text-slate-400 text-sm mb-6">You passed this lesson's mastery check. You can retake it for review or move on.</p>
          <button onClick={onNextLesson} className="px-8 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all">
            Next Lesson →
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Phase label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-900/40 border border-amber-700/40 text-amber-400 text-xs font-mono font-semibold uppercase tracking-widest mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
        Phase 04 — Mastery Check
      </div>

      <h2 className="text-2xl font-bold text-white mb-1">Test Your Understanding</h2>
      <p className="text-slate-400 text-sm mb-2">
        Select any answer to see its explanation immediately. Every option teaches something.
        Pass mark: <span className="text-amber-400 font-mono font-bold">{passMark}%</span>
      </p>
      <p className="text-slate-600 text-xs mb-8">Questions: {questions.length} · Each tests the WHY behind what you just practiced</p>

      <div className="space-y-6 mb-8">
        {questions.map((q, i) => (
          <QuestionCard
            key={q.id}
            question={q}
            qIndex={i}
            totalQuestions={questions.length}
            answerState={answers[q.id]}
            onSelect={(optId) => handleSelect(q.id, optId)}
          />
        ))}
      </div>

      {/* Score preview */}
      {allAnswered && !submitted && (
        <div className={`rounded-2xl border p-6 mb-6 text-center ${passed ? 'border-emerald-700/50 bg-emerald-950/20' : 'border-amber-700/50 bg-amber-950/20'}`}>
          <p className="text-sm text-slate-400 mb-1">Your score</p>
          <p className={`text-5xl font-bold font-mono mb-2 ${passed ? 'text-emerald-400' : 'text-amber-400'}`}>{score}%</p>
          <p className={`text-sm mb-4 ${passed ? 'text-emerald-300' : 'text-amber-300'}`}>
            {passed ? `✓ Passed! (${passMark}% required)` : `Not yet — ${passMark}% required. Review the explanations above.`}
          </p>
          {passed ? (
            <button
              onClick={handleSubmit}
              className="px-8 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-xl transition-all shadow-lg"
            >
              Mark Complete & Continue →
            </button>
          ) : (
            <button
              onClick={() => {
                setAnswers(Object.fromEntries(questions.map((q) => [q.id, { selectedId: null, revealed: false }])));
                setSubmitted(false);
              }}
              className="px-8 py-3 border border-amber-700/50 text-amber-400 hover:bg-amber-950/30 font-semibold rounded-xl transition-all"
            >
              Retake Quiz
            </button>
          )}
        </div>
      )}

      {!allAnswered && (
        <p className="text-center text-slate-600 text-sm">Answer all {questions.length} questions to see your score.</p>
      )}

      {submitted && (
        <div className="text-center pt-4">
          <button onClick={onNextLesson} className="px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all">
            Next Lesson →
          </button>
        </div>
      )}
    </div>
  );
}
