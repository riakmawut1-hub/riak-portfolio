'use client';

import { useState, useCallback } from 'react';
import type { TransactionScenario, EntryLine, EquationState, AccountCategory } from '@/lib/course/types';
import { ACCOUNTS, ACCOUNTS_BY_CATEGORY, CATEGORY_ORDER, CATEGORY_LABELS, ACCOUNT_MAP } from '@/lib/course/accounts';

interface Props {
  scenario: TransactionScenario;
  equation: EquationState;
  onCorrectEntry: (equationDelta: Partial<EquationState>) => void;
  mode?: 'guided' | 'freeplay';
}

// ── Validation ────────────────────────────────────────────────────────────────
function validateEntry(lines: EntryLine[]): {
  balanced: boolean;
  totalDebits: number;
  totalCredits: number;
  errors: string[];
} {
  const totalDebits = lines.filter((l) => l.type === 'Debit').reduce((s, l) => s + l.amount, 0);
  const totalCredits = lines.filter((l) => l.type === 'Credit').reduce((s, l) => s + l.amount, 0);
  const errors: string[] = [];

  lines.forEach((l) => {
    if (!l.accountId) errors.push('Select an account for each line.');
    if (l.amount <= 0) errors.push('Enter a positive amount for each line.');
  });

  return { balanced: Math.abs(totalDebits - totalCredits) < 0.01, totalDebits, totalCredits, errors };
}

// ── Compute equation delta from posted entry ─────────────────────────────────
// Correctly handles regular AND contra-accounts (Accum. Depreciation, Drawings, Allowance)
function computeEquationDelta(lines: EntryLine[]): Partial<EquationState> {
  const delta: Partial<EquationState> = { assets: 0, liabilities: 0, equity: 0 };
  // Expected normal balance for a "regular" (non-contra) account of each category
  const expectedNormal: Record<string, 'Debit' | 'Credit'> = {
    Asset: 'Debit', Liability: 'Credit', Equity: 'Credit', Revenue: 'Credit', Expense: 'Debit',
  };
  lines.forEach((line) => {
    const account = ACCOUNT_MAP[line.accountId];
    if (!account) return;
    const isIncrease = line.type === account.normalBalance;
    const amt = isIncrease ? line.amount : -line.amount;
    // Contra-accounts (e.g. Accum. Depreciation, Drawings) have opposite normal balance
    const isContra = account.normalBalance !== expectedNormal[account.category];
    const netAmt = isContra ? -amt : amt;
    switch (account.category) {
      case 'Asset':     delta.assets      = (delta.assets      ?? 0) + netAmt; break;
      case 'Liability': delta.liabilities = (delta.liabilities ?? 0) + netAmt; break;
      case 'Equity':    delta.equity      = (delta.equity      ?? 0) + netAmt; break;
      case 'Revenue':   delta.equity      = (delta.equity      ?? 0) + netAmt; break;
      case 'Expense':   delta.equity      = (delta.equity      ?? 0) - netAmt; break;
    }
  });
  return delta;
}
// ── Check if entry matches expected ──────────────────────────────────────────
function checkCorrect(lines: EntryLine[], scenario: TransactionScenario): boolean {
  if (lines.length !== scenario.correctEntry.length) return false;
  const sortedUser = [...lines].sort((a, b) => a.accountId.localeCompare(b.accountId));
  const sortedExpected = [...scenario.correctEntry].sort((a, b) => a.accountId.localeCompare(b.accountId));
  return sortedUser.every((line, i) =>
    line.accountId === sortedExpected[i].accountId &&
    line.type === sortedExpected[i].type &&
    Math.abs(line.amount - sortedExpected[i].amount) < 0.01
  );
}

const fmt = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;

// ── TAccount view ─────────────────────────────────────────────────────────────
function TAccountsView({ lines }: { lines: EntryLine[] }) {
  const accounts = Array.from(new Set(lines.map((l) => l.accountId)));
  if (accounts.length === 0) return null;
  return (
    <div className="mt-4 grid grid-cols-2 gap-3">
      {accounts.map((accId) => {
        const acc = ACCOUNT_MAP[accId];
        if (!acc) return null;
        const debits = lines.filter((l) => l.accountId === accId && l.type === 'Debit');
        const credits = lines.filter((l) => l.accountId === accId && l.type === 'Credit');
        const debitTotal = debits.reduce((s, l) => s + l.amount, 0);
        const creditTotal = credits.reduce((s, l) => s + l.amount, 0);
        const balance = acc.normalBalance === 'Debit' ? debitTotal - creditTotal : creditTotal - debitTotal;
        return (
          <div key={accId} className="border border-slate-700 rounded-lg overflow-hidden text-xs">
            <div className="bg-slate-800 px-3 py-1.5 text-center font-bold text-white text-xs">{acc.name}</div>
            <div className="grid grid-cols-2 divide-x divide-slate-700">
              <div className="p-2">
                <p className="text-blue-400 font-mono text-center text-xs mb-1">Dr.</p>
                {debits.map((l, i) => <p key={i} className="font-mono text-blue-300 text-right">{fmt(l.amount)}</p>)}
                {debits.length === 0 && <p className="text-slate-700 text-center">—</p>}
              </div>
              <div className="p-2">
                <p className="text-emerald-400 font-mono text-center text-xs mb-1">Cr.</p>
                {credits.map((l, i) => <p key={i} className="font-mono text-emerald-300 text-right">{fmt(l.amount)}</p>)}
                {credits.length === 0 && <p className="text-slate-700 text-center">—</p>}
              </div>
            </div>
            <div className={`px-3 py-1 text-center text-xs font-mono font-bold border-t border-slate-700 ${balance >= 0 ? 'text-slate-300' : 'text-red-400'}`}>
              Bal: {fmt(Math.abs(balance))} {acc.normalBalance}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ── Golden rule check ─────────────────────────────────────────────────────────
function GoldenRuleBadge({ accountId, entryType }: { accountId: string; entryType: 'Debit' | 'Credit' }) {
  const acc = ACCOUNT_MAP[accountId];
  if (!acc || !entryType) return null;
  const isNormal = entryType === acc.normalBalance;
  return (
    <span className={`text-xs px-1.5 py-0.5 rounded font-mono ${isNormal ? 'bg-emerald-900/60 text-emerald-400' : 'bg-amber-900/50 text-amber-400'}`}>
      {isNormal ? `✓ Normal ${entryType}` : `⚠ Opposite of normal (${acc.normalBalance})`}
    </span>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export default function JournalSandbox({ scenario, equation, onCorrectEntry, mode = 'guided' }: Props) {
  const [lines, setLines] = useState<EntryLine[]>([
    { id: '1', accountId: '', amount: 0, type: 'Debit' },
    { id: '2', accountId: '', amount: 0, type: 'Credit' },
  ]);

  const [status, setStatus] = useState<'idle' | 'correct' | 'wrong' | 'submitted'>('idle');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [hintUsed, setHintUsed] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [showCompare, setShowCompare] = useState(false);
  const [showTAccounts, setShowTAccounts] = useState(false);

  // equation preview based on current (possibly unposted) entry
  const filledLines = lines.filter((l) => l.accountId && l.amount > 0);
  const validation = validateEntry(filledLines);

  const addLine = () => {
    setLines((l) => [...l, { id: Date.now().toString(), accountId: '', amount: 0, type: 'Debit' }]);
  };

  const removeLine = (id: string) => {
    if (lines.length <= 2) return;
    setLines((l) => l.filter((ln) => ln.id !== id));
  };

  const updateLine = (id: string, field: keyof EntryLine, value: string | number) => {
    setLines((l) => l.map((ln) => ln.id === id ? { ...ln, [field]: value } : ln));
    setStatus('idle');
    setFeedback('');
  };

  const handlePost = useCallback(() => {
    const filled = lines.filter((l) => l.accountId && l.amount > 0);
    if (filled.length < 2) {
      setFeedback('Complete at least 2 lines before posting.');
      setStatus('wrong');
      return;
    }

    const v = validateEntry(filled);

    if (v.errors.length > 0) {
      setFeedback(v.errors[0]);
      setStatus('wrong');
      return;
    }

    if (!v.balanced) {
      setFeedback(`Entry doesn't balance. Debits ${fmt(v.totalDebits)}, Credits ${fmt(v.totalCredits)}. Difference: ${fmt(Math.abs(v.totalDebits - v.totalCredits))}.`);
      setStatus('wrong');
      setAttempts((a) => a + 1);
      return;
    }

    if (checkCorrect(filled, scenario)) {
      setStatus('correct');
      setFeedback(scenario.feedbackCorrect);
      const delta = computeEquationDelta(filled);
      setTimeout(() => onCorrectEntry(delta), 1500);
    } else {
      setAttempts((a) => a + 1);
      setStatus('wrong');
      const wrongAccounts = filled.filter((line) => {
        const expected = scenario.correctEntry.find((e) => e.accountId === line.accountId);
        return !expected || expected.type !== line.type;
      });
      let msg = 'Check your accounts and Dr./Cr. selections. ';
      if (wrongAccounts.length > 0) {
        const firstWrong = ACCOUNT_MAP[wrongAccounts[0].accountId];
        if (firstWrong) {
          msg += `${firstWrong.name} has a normal ${firstWrong.normalBalance} balance. ${wrongAccounts[0].type === firstWrong.normalBalance ? 'That looks right — check the amount.' : `You selected ${wrongAccounts[0].type} — this ${firstWrong.category} account would ${firstWrong.normalBalance === wrongAccounts[0].type ? 'increase' : 'decrease'} on its ${firstWrong.normalBalance} side.`}`;
        }
      }
      setFeedback(msg);
    }
  }, [lines, scenario, onCorrectEntry]);

  const handleHint = () => {
    setHintUsed(true);
    setShowHint(true);
  };

  // Equation preview (before posting)
  const previewDelta = filledLines.length >= 2 ? computeEquationDelta(filledLines) : null;

  return (
    <div className="space-y-5">
      {/* Transaction description */}
      <div className="rounded-xl border border-emerald-700/40 bg-emerald-950/20 p-5">
        <p className="text-xs font-mono text-emerald-400 uppercase tracking-widest mb-2">Transaction</p>
        <p className="text-slate-200 text-base leading-relaxed">{scenario.description}</p>
        <div className="mt-2 text-xs text-slate-500">Difficulty: <span className={`font-mono font-bold ${scenario.difficulty === 'Beginner' ? 'text-emerald-500' : scenario.difficulty === 'Intermediate' ? 'text-amber-500' : 'text-red-500'}`}>{scenario.difficulty}</span></div>
      </div>

      {/* Accounting equation banner */}
      <div className="rounded-xl border border-slate-700 bg-slate-900 p-4">
        <div className="flex items-center justify-between mb-3">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest">Accounting Equation</p>
          {previewDelta && (
            <span className="text-xs text-slate-600 italic">Preview of impact</span>
          )}
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          {[
            { label: 'Assets', value: equation.assets, delta: previewDelta?.assets, color: 'blue' },
            { label: 'Liabilities', value: equation.liabilities, delta: previewDelta?.liabilities, color: 'red' },
            { label: 'Equity', value: equation.equity, delta: previewDelta?.equity, color: 'emerald' },
          ].map((item) => (
            <div key={item.label} className={`rounded-lg border px-3 py-2.5
              ${item.color === 'blue' ? 'border-blue-800/50 bg-blue-950/30' : item.color === 'red' ? 'border-red-800/50 bg-red-950/30' : 'border-emerald-800/50 bg-emerald-950/30'}`}>
              <p className={`text-sm font-mono font-bold ${item.color === 'blue' ? 'text-blue-300' : item.color === 'red' ? 'text-red-300' : 'text-emerald-300'}`}>
                {fmt(item.value)}
                {item.delta !== undefined && item.delta !== 0 && (
                  <span className={`ml-1 text-xs ${item.delta > 0 ? 'text-emerald-400' : 'text-red-400'}`}>
                    {item.delta > 0 ? '+' : ''}{fmt(item.delta)}
                  </span>
                )}
              </p>
              <p className="text-xs text-slate-500 mt-0.5">{item.label}</p>
            </div>
          ))}
        </div>
        <div className={`mt-2 text-center text-xs font-mono ${Math.abs(equation.assets - (equation.liabilities + equation.equity)) < 1 ? 'text-emerald-600' : 'text-red-500'}`}>
          {Math.abs(equation.assets - (equation.liabilities + equation.equity)) < 1 ? '✓ Assets = Liabilities + Equity' : '⚠ Out of Balance'}
        </div>
      </div>

      {/* Toggle T-accounts */}
      <div className="flex items-center gap-3">
        <button
          onClick={() => setShowTAccounts((v) => !v)}
          className="text-xs text-slate-500 hover:text-slate-300 border border-slate-700 hover:border-slate-600 rounded-lg px-3 py-1.5 transition-colors flex items-center gap-1.5"
        >
          {showTAccounts ? '📋 Journal View' : '⊤ T-Account View'}
        </button>
        <span className="text-slate-700 text-xs">Toggle visualization</span>
      </div>

      {/* Journal entry builder */}
      {!showTAccounts ? (
        <div className="rounded-xl border border-slate-700 bg-slate-900 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-slate-800 border-b border-slate-700 text-xs font-mono text-slate-400 uppercase tracking-wider">
            <div className="col-span-6">Account</div>
            <div className="col-span-3 text-right">Amount</div>
            <div className="col-span-2 text-center">Dr. / Cr.</div>
            <div className="col-span-1" />
          </div>

          {/* Entry lines */}
          <div className="divide-y divide-slate-800">
            {lines.map((line, idx) => {
              const acc = ACCOUNT_MAP[line.accountId];
              return (
                <div key={line.id} className={`px-4 py-3 transition-colors ${line.type === 'Debit' ? 'hover:bg-blue-950/10' : 'hover:bg-emerald-950/10'}`}>
                  <div className="grid grid-cols-12 gap-2 items-center">
                    {/* Account selector */}
                    <div className="col-span-6">
                      <select
                        value={line.accountId}
                        onChange={(e) => updateLine(line.id, 'accountId', e.target.value)}
                        disabled={status === 'correct'}
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-xs text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                      >
                        <option value="">— Select Account —</option>
                        {CATEGORY_ORDER.map((cat) => (
                          <optgroup key={cat} label={CATEGORY_LABELS[cat]}>
                            {(ACCOUNTS_BY_CATEGORY[cat] ?? []).map((a) => (
                              <option key={a.id} value={a.id}>{a.name}</option>
                            ))}
                          </optgroup>
                        ))}
                      </select>
                      {/* Account info */}
                      {acc && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs text-slate-600">{acc.category} · Normal: {acc.normalBalance}</span>
                          <GoldenRuleBadge accountId={line.accountId} entryType={line.type} />
                        </div>
                      )}
                    </div>

                    {/* Amount */}
                    <div className="col-span-3">
                      <input
                        type="number"
                        min="0"
                        step="1"
                        value={line.amount || ''}
                        onChange={(e) => updateLine(line.id, 'amount', parseFloat(e.target.value) || 0)}
                        disabled={status === 'correct'}
                        placeholder="0"
                        className="w-full bg-slate-800 border border-slate-700 rounded-lg px-2 py-1.5 text-xs font-mono text-right text-slate-300 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/30"
                      />
                    </div>

                    {/* Dr/Cr toggle */}
                    <div className="col-span-2 flex rounded-lg overflow-hidden border border-slate-700 text-xs">
                      <button
                        onClick={() => updateLine(line.id, 'type', 'Debit')}
                        disabled={status === 'correct'}
                        className={`flex-1 py-1.5 font-mono font-bold transition-colors ${line.type === 'Debit' ? 'bg-blue-700 text-white' : 'bg-slate-800 text-slate-500 hover:bg-slate-700'}`}
                      >
                        Dr.
                      </button>
                      <button
                        onClick={() => updateLine(line.id, 'type', 'Credit')}
                        disabled={status === 'correct'}
                        className={`flex-1 py-1.5 font-mono font-bold transition-colors ${line.type === 'Credit' ? 'bg-emerald-700 text-white' : 'bg-slate-800 text-slate-500 hover:bg-slate-700'}`}
                      >
                        Cr.
                      </button>
                    </div>

                    {/* Remove line */}
                    <div className="col-span-1 flex justify-center">
                      {lines.length > 2 && (
                        <button onClick={() => removeLine(line.id)} className="text-slate-700 hover:text-red-500 transition-colors text-sm">✕</button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Footer: totals */}
          <div className="grid grid-cols-12 gap-2 px-4 py-2.5 bg-slate-800/60 border-t border-slate-700 text-xs font-mono">
            <div className="col-span-6 text-slate-500">Totals</div>
            <div className={`col-span-3 text-right font-bold ${validation.balanced ? 'text-emerald-400' : 'text-red-400'}`}>
              Dr: {fmt(validation.totalDebits)}
            </div>
            <div className={`col-span-2 text-center font-bold ${validation.balanced ? 'text-emerald-400' : 'text-red-400'}`}>
              Cr: {fmt(validation.totalCredits)}
            </div>
            <div className={`col-span-1 text-center ${validation.balanced && filledLines.length >= 2 ? 'text-emerald-400' : 'text-red-400'}`}>
              {validation.balanced && filledLines.length >= 2 ? '✓' : '✗'}
            </div>
          </div>
        </div>
      ) : (
        <TAccountsView lines={lines.filter((l) => l.accountId && l.amount > 0)} />
      )}

      {/* Add line */}
      {status !== 'correct' && (
        <button
          onClick={addLine}
          className="text-xs text-slate-500 hover:text-slate-300 border border-dashed border-slate-700 hover:border-slate-600 rounded-lg px-4 py-2 w-full transition-colors"
        >
          + Add Line (Compound Entry)
        </button>
      )}

      {/* Feedback */}
      {feedback && (
        <div className={`rounded-xl border px-5 py-4 text-sm leading-relaxed
          ${status === 'correct'
            ? 'border-emerald-700/50 bg-emerald-950/30 text-emerald-300'
            : 'border-red-800/50 bg-red-950/30 text-red-400'}`}>
          <p className="font-semibold mb-1">{status === 'correct' ? '✅ Entry Accepted' : '❌ Not Quite'}</p>
          <p>{feedback}</p>
          {status === 'correct' && (
            <div className="mt-3 space-y-1">
              {scenario.goldenRulesActivated.map((rule, i) => (
                <p key={i} className="text-xs text-emerald-600">• {rule}</p>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Hint */}
      {showHint && (
        <div className="rounded-xl border border-amber-700/40 bg-amber-950/20 px-5 py-4 text-sm text-amber-300">
          <p className="font-semibold text-xs font-mono uppercase tracking-widest text-amber-500 mb-1">💡 Hint (score capped)</p>
          <p>{scenario.hint}</p>
        </div>
      )}

      {/* Compare to answer */}
      {showCompare && (
        <div className="rounded-xl border border-slate-600 bg-slate-900 p-5">
          <p className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">Model Answer</p>
          <div className="space-y-2 mb-4">
            {scenario.correctEntry.map((entry, i) => {
              const acc = ACCOUNT_MAP[entry.accountId];
              return (
                <div key={i} className={`flex items-center gap-4 font-mono text-sm ${entry.type === 'Debit' ? 'text-blue-300' : 'pl-8 text-emerald-300'}`}>
                  <span className={`text-xs px-1.5 rounded ${entry.type === 'Debit' ? 'bg-blue-900/50' : 'bg-emerald-900/50'}`}>{entry.type.slice(0, 2)}.</span>
                  <span className="flex-1">{acc?.name ?? entry.accountId}</span>
                  <span>{fmt(entry.amount)}</span>
                </div>
              );
            })}
          </div>
          <p className="text-xs text-slate-400 leading-relaxed">{scenario.compareAnswerExplanation}</p>
        </div>
      )}

      {/* Action buttons */}
      {status !== 'correct' && (
        <div className="flex items-center gap-3 flex-wrap">
          <button
            onClick={handlePost}
            className="px-6 py-3 bg-emerald-700 hover:bg-emerald-600 text-white font-semibold rounded-xl text-sm transition-all shadow-lg shadow-emerald-900/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            Post Entry
          </button>
          {!showHint && (
            <button
              onClick={handleHint}
              className="px-4 py-3 border border-amber-700/40 text-amber-400 hover:bg-amber-950/30 font-medium rounded-xl text-sm transition-colors"
            >
              Show Hint {hintUsed ? '(used)' : ''}
            </button>
          )}
          {attempts >= 2 && !showCompare && (
            <button
              onClick={() => setShowCompare(true)}
              className="px-4 py-3 border border-slate-600 text-slate-400 hover:bg-slate-800 font-medium rounded-xl text-sm transition-colors"
            >
              Compare to Answer
            </button>
          )}
        </div>
      )}

      {status === 'correct' && (
        <div className="flex items-center gap-2 text-emerald-400 text-sm font-semibold">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          Entry posted successfully! Moving to Mastery Check...
        </div>
      )}
    </div>
  );
}
