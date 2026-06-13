'use client';

import { useState } from 'react';
import type { Lesson, CalloutBox } from '@/lib/course/types';

interface Props {
  lesson: Lesson;
  onComplete: () => void;
}

const CALLOUT_STYLES: Record<CalloutBox['type'], { icon: string; label: string; border: string; bg: string; text: string }> = {
  BEST_PRACTICE: { icon: '📌', label: 'BEST PRACTICE', border: 'border-blue-500/40', bg: 'bg-blue-50', text: 'text-blue-700' },
  DEEP_DIVE:     { icon: '🔍', label: 'DEEP DIVE',     border: 'border-violet-500/40', bg: 'bg-violet-50', text: 'text-violet-700' },
  COMMON_PITFALL:{ icon: '⚠️', label: 'COMMON PITFALL', border: 'border-amber-500/40', bg: 'bg-amber-50', text: 'text-amber-700' },
};

function EquationVisual({ data }: { data: Record<string, unknown> }) {
  const left = data.left as { label: string; value: number; color: string; example: string };
  const right = data.right as { label: string; value: number; color: string; example: string }[];
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 my-4">
      <p className="text-xs text-slate-600 font-mono uppercase tracking-widest text-center mb-4">The Accounting Equation</p>
      <div className="flex items-center justify-center gap-4 flex-wrap">
        <div className="text-center p-4 rounded-xl bg-blue-50 border border-blue-200 min-w-[120px]">
          <p className="text-xs text-blue-600 font-mono font-bold uppercase mb-1">{left.label}</p>
          <p className="text-2xl font-bold font-mono text-slate-900">${(left.value / 1000).toFixed(0)}K</p>
          <p className="text-xs text-slate-600 mt-1">{left.example}</p>
        </div>
        <div className="text-3xl font-light text-slate-400">=</div>
        <div className="flex items-center gap-2">
          {right.map((r, i) => (
            <div key={r.label} className="flex items-center gap-2">
              {i > 0 && <span className="text-2xl font-light text-slate-400">+</span>}
              <div className={`text-center p-4 rounded-xl border min-w-[110px] ${r.color === 'red' ? 'bg-red-50 border-red-200' : 'bg-emerald-50 border-emerald-200'}`}>
                <p className={`text-xs font-mono font-bold uppercase mb-1 ${r.color === 'red' ? 'text-red-600' : 'text-emerald-600'}`}>{r.label}</p>
                <p className="text-2xl font-bold font-mono text-slate-900">${(r.value / 1000).toFixed(0)}K</p>
                <p className="text-xs text-slate-600 mt-1">{r.example}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TableVisual({ data }: { data: Record<string, unknown> }) {
  const headers = data.headers as string[];
  const rows = data.rows as string[][];
  return (
    <div className="rounded-xl border border-stone-200 overflow-hidden my-4">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-stone-100 border-b border-stone-200">
            {headers.map((h) => (
              <th key={h} className="px-4 py-2.5 text-left text-xs font-mono text-slate-700 uppercase tracking-wider">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={`border-b border-stone-200 last:border-0 ${i % 2 === 0 ? 'bg-white' : 'bg-stone-50'}`}>
              {row.map((cell, j) => (
                <td key={j} className={`px-4 py-2.5 font-mono text-xs ${j === 0 ? 'text-slate-800 font-medium' : cell.includes('DEBIT') ? 'text-blue-600' : cell.includes('CREDIT') ? 'text-emerald-600' : 'text-slate-600'}`}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function TAccountVisual({ data }: { data: Record<string, unknown> }) {
  const d = data as { accountName: string; debitEntries: { description: string; amount: number }[]; creditEntries: { description: string; amount: number }[]; balance: { side: string; amount: number } };
  const debitTotal = d.debitEntries.reduce((s, e) => s + e.amount, 0);
  const creditTotal = d.creditEntries.reduce((s, e) => s + e.amount, 0);
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-5 my-4">
      <p className="text-center font-bold text-slate-900 mb-3 text-sm">{d.accountName}</p>
      <div className="border border-stone-300 rounded-lg overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-stone-300">
          <div className="p-3">
            <p className="text-xs font-mono text-blue-600 uppercase tracking-widest mb-2 text-center">DEBIT (Dr.)</p>
            {d.debitEntries.map((e, i) => (
              <div key={i} className="flex justify-between text-xs py-1 border-b border-stone-200 last:border-0">
                <span className="text-slate-700">{e.description}</span>
                <span className="font-mono text-blue-600">{e.amount.toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-stone-300 mt-2 pt-2 flex justify-between text-xs font-bold">
              <span className="text-slate-700">Total</span>
              <span className="font-mono text-blue-600">{debitTotal.toLocaleString()}</span>
            </div>
          </div>
          <div className="p-3">
            <p className="text-xs font-mono text-emerald-600 uppercase tracking-widest mb-2 text-center">CREDIT (Cr.)</p>
            {d.creditEntries.map((e, i) => (
              <div key={i} className="flex justify-between text-xs py-1 border-b border-stone-200 last:border-0">
                <span className="text-slate-700">{e.description}</span>
                <span className="font-mono text-emerald-600">{e.amount.toLocaleString()}</span>
              </div>
            ))}
            <div className="border-t border-stone-300 mt-2 pt-2 flex justify-between text-xs font-bold">
              <span className="text-slate-700">Total</span>
              <span className="font-mono text-emerald-600">{creditTotal.toLocaleString()}</span>
            </div>
          </div>
        </div>
        <div className="bg-stone-100 px-4 py-2 text-center text-xs">
          <span className="text-slate-700">Balance: </span>
          <span className={`font-mono font-bold ${d.balance.side === 'Debit' ? 'text-blue-600' : 'text-emerald-600'}`}>
            {d.balance.side} ${d.balance.amount.toLocaleString()}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Phase1Concept({ lesson, onComplete }: Props) {
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const { phase1 } = lesson;

  const toggleCallout = (i: number) => setExpanded((e) => ({ ...e, [i]: !e[i] }));

  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      {/* Phase label */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-mono font-semibold uppercase tracking-widest mb-6">
        <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
        Phase 01 — Concept Micro-Lesson
      </div>

      <h1 className="text-3xl font-bold text-slate-900 mb-2">{lesson.title}</h1>
      <p className="text-slate-700 mb-8">{lesson.subtitle}</p>

      {/* Concept */}
      <div className="mb-6">
        <p className="text-slate-800 text-base leading-relaxed whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: phase1.concept.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }}
        />
      </div>

      {/* Analogy */}
      <div className="rounded-xl border border-stone-200 bg-white p-4 mb-6">
        <p className="text-xs font-mono text-slate-600 uppercase tracking-widest mb-2">Real-World Analogy</p>
        <p className="text-slate-800 text-sm leading-relaxed"
          dangerouslySetInnerHTML={{ __html: phase1.analogy.replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900">$1</strong>') }}
        />
      </div>

      {/* Visual */}
      {phase1.visualType === 'equation' && phase1.visualData && (
        <EquationVisual data={phase1.visualData} />
      )}
      {phase1.visualType === 'table' && phase1.visualData && (
        <TableVisual data={phase1.visualData} />
      )}
      {phase1.visualType === 'tAccount' && phase1.visualData && (
        <TAccountVisual data={phase1.visualData} />
      )}

      {/* Callouts */}
      {phase1.callouts.length > 0 && (
        <div className="space-y-3 mb-8">
          {phase1.callouts.map((callout, i) => {
            const style = CALLOUT_STYLES[callout.type];
            const isOpen = expanded[i];
            return (
              <div key={i} className={`rounded-xl border ${style.border} ${style.bg} overflow-hidden`}>
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 text-left"
                  onClick={() => toggleCallout(i)}
                >
                  <span>{style.icon}</span>
                  <span className={`text-xs font-mono font-bold uppercase tracking-widest ${style.text}`}>{style.label}</span>
                  <span className="text-slate-600 text-xs font-medium flex-1">{callout.title}</span>
                  <svg className={`w-4 h-4 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isOpen && (
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-sm text-slate-700 leading-relaxed">{callout.body}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-stone-200">
        <p className="text-slate-600 text-sm italic">Now let's see this in action →</p>
        <button
          onClick={onComplete}
          className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all shadow-lg shadow-blue-900/30 hover:-translate-y-0.5 active:translate-y-0"
        >
          Go to Walkthrough →
        </button>
      </div>
    </div>
  );
}
