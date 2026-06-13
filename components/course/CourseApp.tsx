'use client';

import { useState, useCallback, useEffect } from 'react';
import { ALL_MODULES, MODULE_MAP } from '@/lib/course/courseData';
import type { EquationState, CourseScreen } from '@/lib/course/types';
import CourseOverview from './CourseOverview';
import OrientationScreen from './OrientationScreen';
import ModuleView from './ModuleView';
import LessonView from './LessonView';
import ProgressSidebar from './ProgressSidebar';

// ─── Progress types (local to app state) ─────────────────────────────────────
interface LessonProgressState {
  phase1Done: boolean;
  phase2Done: boolean;
  phase3Done: boolean;
  quizScore: number | null;
  hintsUsed: number;
}

interface ModuleProgressState {
  unlocked: boolean;
  lessonsCompleted: Record<string, LessonProgressState>;
  problemSetDone: boolean;
}

type ProgressState = Record<string, ModuleProgressState>;

function buildInitialProgress(): ProgressState {
  const prog: ProgressState = {};
  ALL_MODULES.forEach((mod, i) => {
    prog[mod.id] = {
      unlocked: i === 0,
      lessonsCompleted: {},
      problemSetDone: false,
    };
    mod.lessons.forEach((lesson) => {
      prog[mod.id].lessonsCompleted[lesson.id] = {
        phase1Done: false,
        phase2Done: false,
        phase3Done: false,
        quizScore: null,
        hintsUsed: 0,
      };
    });
  });
  return prog;
}

// ─── Nav state ────────────────────────────────────────────────────────────────
interface NavState {
  screen: CourseScreen;
  moduleId: string | null;
  lessonId: string | null;
  phase: 1 | 2 | 3 | 4;
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function CourseApp() {
  const [nav, setNav] = useState<NavState>({
    screen: 'overview',
    moduleId: null,
    lessonId: null,
    phase: 1,
  });

  const [progress, setProgress] = useState<ProgressState>(buildInitialProgress);
  const [sidebarOpen, setSidebarOpen] = useState(true);

  // Global equation state — accumulates across ALL sandbox entries
  const [equation, setEquation] = useState<EquationState>({
    assets: 0,
    liabilities: 0,
    equity: 0,
  });

  // Persist progress in localStorage
  useEffect(() => {
    try {
      const saved = localStorage.getItem('clearpath-course-progress');
      if (saved) {
        const { progress: savedProg, equation: savedEq } = JSON.parse(saved);
        if (savedProg) setProgress(savedProg);
        if (savedEq) setEquation(savedEq);
      }
    } catch {
      // ignore
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(
        'clearpath-course-progress',
        JSON.stringify({ progress, equation })
      );
    } catch {
      // ignore
    }
  }, [progress, equation]);

  // ── Navigation helpers ──────────────────────────────────────────────────────
  const goToOverview = useCallback(() =>
    setNav({ screen: 'overview', moduleId: null, lessonId: null, phase: 1 }), []);

  const goToOrientation = useCallback(() =>
    setNav({ screen: 'orientation', moduleId: null, lessonId: null, phase: 1 }), []);

  const goToModule = useCallback((moduleId: string) =>
    setNav({ screen: 'module-overview', moduleId, lessonId: null, phase: 1 }), []);

  const goToLesson = useCallback((moduleId: string, lessonId: string) =>
    setNav({ screen: 'lesson', moduleId, lessonId, phase: 1 }), []);

  // ── Progress setters ────────────────────────────────────────────────────────
  const markPhase1Done = useCallback((moduleId: string, lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        lessonsCompleted: {
          ...prev[moduleId].lessonsCompleted,
          [lessonId]: {
            ...prev[moduleId].lessonsCompleted[lessonId],
            phase1Done: true,
          },
        },
      },
    }));
    setNav((n) => ({ ...n, phase: 2 }));
  }, []);

  const markPhase2Done = useCallback((moduleId: string, lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        lessonsCompleted: {
          ...prev[moduleId].lessonsCompleted,
          [lessonId]: {
            ...prev[moduleId].lessonsCompleted[lessonId],
            phase2Done: true,
          },
        },
      },
    }));
    setNav((n) => ({ ...n, phase: 3 }));
  }, []);

  const markPhase3Done = useCallback((moduleId: string, lessonId: string) => {
    setProgress((prev) => ({
      ...prev,
      [moduleId]: {
        ...prev[moduleId],
        lessonsCompleted: {
          ...prev[moduleId].lessonsCompleted,
          [lessonId]: {
            ...prev[moduleId].lessonsCompleted[lessonId],
            phase3Done: true,
          },
        },
      },
    }));
    setNav((n) => ({ ...n, phase: 4 }));
  }, []);

  const markQuizComplete = useCallback(
    (moduleId: string, lessonId: string, score: number) => {
      setProgress((prev) => {
        const updated = {
          ...prev,
          [moduleId]: {
            ...prev[moduleId],
            lessonsCompleted: {
              ...prev[moduleId].lessonsCompleted,
              [lessonId]: {
                ...prev[moduleId].lessonsCompleted[lessonId],
                quizScore: score,
              },
            },
          },
        };

        // Check if all lessons in this module are done → unlock next
        const mod = MODULE_MAP[moduleId];
        const allLessonsDone = mod.lessons.every((l) => {
          const lp = updated[moduleId].lessonsCompleted[l.id];
          return lp?.phase1Done && lp?.phase2Done && lp?.phase3Done && (lp?.quizScore ?? 0) >= 80;
        });

        if (allLessonsDone) {
          const modIndex = ALL_MODULES.findIndex((m) => m.id === moduleId);
          if (modIndex < ALL_MODULES.length - 1) {
            const nextModId = ALL_MODULES[modIndex + 1].id;
            updated[nextModId] = { ...updated[nextModId], unlocked: true };
          }
        }
        return updated;
      });
    },
    []
  );

  const updateEquation = useCallback((delta: Partial<EquationState>) => {
    setEquation((prev) => ({
      assets: prev.assets + (delta.assets ?? 0),
      liabilities: prev.liabilities + (delta.liabilities ?? 0),
      equity: prev.equity + (delta.equity ?? 0),
    }));
  }, []);

  const resetProgress = useCallback(() => {
    setProgress(buildInitialProgress());
    setEquation({ assets: 0, liabilities: 0, equity: 0 });
    localStorage.removeItem('clearpath-course-progress');
  }, []);

  // ── Derive current module/lesson ────────────────────────────────────────────
  const currentModule = nav.moduleId ? MODULE_MAP[nav.moduleId] : null;
  const currentLesson = currentModule?.lessons.find((l) => l.id === nav.lessonId) ?? null;
  const currentLessonProgress =
    nav.moduleId && nav.lessonId
      ? progress[nav.moduleId]?.lessonsCompleted[nav.lessonId]
      : null;

  // ── Total completed count ───────────────────────────────────────────────────
  const totalLessonsComplete = Object.values(progress).reduce((acc, mp) => {
    return acc + Object.values(mp.lessonsCompleted).filter(
      (lp) => lp.phase1Done && lp.phase2Done && lp.phase3Done && (lp.quizScore ?? 0) >= 80
    ).length;
  }, 0);

  const totalLessons = ALL_MODULES.reduce((acc, m) => acc + m.lessons.length, 0);

  // ── Render ──────────────────────────────────────────────────────────────────
  return (
    <div className="flex h-screen overflow-hidden bg-stone-50 text-slate-900">
      {/* Sidebar */}
      {nav.screen !== 'overview' && nav.screen !== 'orientation' && (
        <ProgressSidebar
          modules={ALL_MODULES}
          progress={progress}
          currentModuleId={nav.moduleId}
          currentLessonId={nav.lessonId}
          isOpen={sidebarOpen}
          onToggle={() => setSidebarOpen((o) => !o)}
          onGoHome={goToOverview}
          onGoToModule={goToModule}
          onGoToLesson={goToLesson}
          totalComplete={totalLessonsComplete}
          totalLessons={totalLessons}
          equation={equation}
        />
      )}

      {/* Main content */}
      <main
        className={`flex-1 overflow-y-auto transition-all duration-300 ${
          nav.screen !== 'overview' && nav.screen !== 'orientation' && sidebarOpen
            ? 'ml-0'
            : 'ml-0'
        }`}
      >
        {nav.screen === 'overview' && (
          <CourseOverview
            modules={ALL_MODULES}
            progress={progress}
            totalComplete={totalLessonsComplete}
            totalLessons={totalLessons}
            onStart={goToOrientation}
            onGoToModule={goToModule}
            onReset={resetProgress}
          />
        )}

        {nav.screen === 'orientation' && (
          <OrientationScreen onBegin={() => goToModule('module-1')} onBack={goToOverview} />
        )}

        {nav.screen === 'module-overview' && currentModule && (
          <ModuleView
            module={currentModule}
            progress={progress[currentModule.id]}
            onStartLesson={(lessonId) => goToLesson(currentModule.id, lessonId)}
            onBack={goToOverview}
          />
        )}

        {nav.screen === 'lesson' && currentModule && currentLesson && currentLessonProgress && (
          <LessonView
            module={currentModule}
            lesson={currentLesson}
            lessonProgress={currentLessonProgress}
            currentPhase={nav.phase}
            equation={equation}
            onPhase1Complete={() => markPhase1Done(currentModule.id, currentLesson.id)}
            onPhase2Complete={() => markPhase2Done(currentModule.id, currentLesson.id)}
            onPhase3Complete={() => markPhase3Done(currentModule.id, currentLesson.id)}
            onQuizComplete={(score) => markQuizComplete(currentModule.id, currentLesson.id, score)}
            onUpdateEquation={updateEquation}
            onBack={() => goToModule(currentModule.id)}
            onNextLesson={() => {
              const idx = currentModule.lessons.findIndex((l) => l.id === currentLesson.id);
              if (idx < currentModule.lessons.length - 1) {
                goToLesson(currentModule.id, currentModule.lessons[idx + 1].id);
              } else {
                goToModule(currentModule.id);
              }
            }}
          />
        )}
      </main>
    </div>
  );
}
