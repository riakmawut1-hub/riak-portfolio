// ─── Account & Sandbox Types ──────────────────────────────────────────────────

export type AccountCategory = 'Asset' | 'Liability' | 'Equity' | 'Revenue' | 'Expense';
export type NormalBalance = 'Debit' | 'Credit';
export type EntryType = 'Debit' | 'Credit';

export interface Account {
  id: string;
  name: string;
  category: AccountCategory;
  normalBalance: NormalBalance;
  description: string;
}

export interface EntryLine {
  id: string;
  accountId: string;
  amount: number;
  type: EntryType;
}

export interface JournalEntry {
  id: string;
  transactionId: string;
  lines: EntryLine[];
  postedAt: Date;
}

export interface EquationState {
  assets: number;
  liabilities: number;
  equity: number;
}

// ─── Transaction Bank Types ───────────────────────────────────────────────────

export interface TransactionHint {
  text: string;
  accountCategory?: AccountCategory;
}

export interface CorrectEntryLine {
  accountId: string;
  type: EntryType;
  amount: number;
}

export interface TransactionScenario {
  id: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  description: string;
  hint: string;
  correctEntry: CorrectEntryLine[];
  goldenRulesActivated: string[];
  feedbackCorrect: string;
  feedbackIncorrectBalance: string;
  compareAnswerExplanation: string;
}

// ─── Course Content Types ─────────────────────────────────────────────────────

export interface CalloutBox {
  type: 'BEST_PRACTICE' | 'DEEP_DIVE' | 'COMMON_PITFALL';
  title: string;
  body: string;
}

export interface MCQOption {
  id: string;
  text: string;
  isCorrect: boolean;
  explanation: string; // Full diagnostic explanation shown on selection
}

export interface MCQuestion {
  id: string;
  question: string;
  options: MCQOption[];
  conceptTag: string; // Which concept this tests
}

// ─── Phase Types ──────────────────────────────────────────────────────────────

export interface WalkthroughStep {
  id: string;
  prompt: string;
  choices: {
    id: string;
    label: string;
    isCorrect: boolean;
    feedback: string;
  }[];
  revealText: string; // Shown after correct answer
  visual?: 'tAccount' | 'equation' | 'statement'; // Optional visual to display
}

export interface Phase1Content {
  concept: string;            // Jargon-free one-concept explanation
  analogy: string;            // Real-world analogy
  visualType: 'tAccount' | 'equation' | 'table' | 'diagram';
  visualData?: Record<string, unknown>;
  callouts: CalloutBox[];
}

export interface Phase2Content {
  transactionDescription: string;
  steps: WalkthroughStep[];
  summaryText: string;
}

export interface Phase3Content {
  sandboxScenarioId: string;  // References TransactionScenario
  contextNote?: string;       // Extra context shown above sandbox
}

export interface Phase4Content {
  questions: MCQuestion[];
  passMark: number; // percentage (e.g. 80)
}

// ─── Lesson & Module Types ────────────────────────────────────────────────────

export interface Lesson {
  id: string;
  title: string;
  subtitle: string;
  estimatedMinutes: number;
  phase1: Phase1Content;
  phase2: Phase2Content;
  phase3: Phase3Content;
  phase4: Phase4Content;
}

export interface LearningObjective {
  id: string;
  text: string;
  actionVerb: string; // "You will JOURNALIZE 8 transactions..."
}

export interface CumulativeProblemSet {
  id: string;
  title: string;
  companyContext: string; // "ClearPath Consulting — Week 2"
  transactions: string[]; // IDs of TransactionScenarios to complete
  reflectionPrompt: string;
}

export interface Module {
  id: string;
  number: number;
  title: string;
  subtitle: string;
  estimatedHours: number;
  objectives: LearningObjective[];
  whatYouWillDo: string; // "You will journalize X transactions..."
  lessons: Lesson[];
  problemSet: CumulativeProblemSet;
  isUnlocked: boolean;
  color: string; // Tailwind gradient class
  icon: string;  // Emoji
}

// ─── Progress Types ───────────────────────────────────────────────────────────

export interface LessonProgress {
  lessonId: string;
  phase1Complete: boolean;
  phase2Complete: boolean;
  phase3Complete: boolean;
  phase4Score: number | null;
  hintsUsed: number;
  attempts: number;
  completedAt: Date | null;
}

export interface ModuleProgress {
  moduleId: string;
  lessonsProgress: Record<string, LessonProgress>;
  problemSetComplete: boolean;
  unlocked: boolean;
  startedAt: Date | null;
  completedAt: Date | null;
}

export interface CourseProgress {
  userId: string;
  modules: Record<string, ModuleProgress>;
  equationState: EquationState; // Cumulative across all sandbox sessions
  currentModuleId: string | null;
  currentLessonId: string | null;
  startedAt: Date;
  lastActiveAt: Date;
}

// ─── Course Navigation ────────────────────────────────────────────────────────

export type CourseScreen =
  | 'overview'
  | 'orientation'
  | 'module-overview'
  | 'lesson'
  | 'sandbox'
  | 'problem-set'
  | 'checkpoint';

export interface CourseState {
  screen: CourseScreen;
  currentModuleId: string | null;
  currentLessonId: string | null;
  currentPhase: 1 | 2 | 3 | 4;
  progress: ModuleProgress[];
  globalEquation: EquationState;
}
