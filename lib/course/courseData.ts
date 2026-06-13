import { MODULE_1 } from './module1';
import { MODULE_2, MODULE_3 } from './module2and3';
import { MODULE_4, MODULE_5, MODULE_6 } from './modules4to6';
import type { Module } from './types';

export const ALL_MODULES: Module[] = [
  MODULE_1,
  MODULE_2,
  MODULE_3,
  MODULE_4,
  MODULE_5,
  MODULE_6,
];

export const MODULE_MAP: Record<string, Module> = Object.fromEntries(
  ALL_MODULES.map((m) => [m.id, m])
);

export const COURSE_META = {
  title: 'Accounting & Finance: Zero to Mastery',
  subtitle: 'An interactive, hands-on journey through the language of business',
  totalHours: ALL_MODULES.reduce((sum, m) => sum + m.estimatedHours, 0),
  totalModules: ALL_MODULES.length,
  totalLessons: ALL_MODULES.reduce((sum, m) => sum + m.lessons.length, 0),
  company: 'ClearPath Consulting',
  companyDescription:
    'A fictional consulting firm that grows throughout the course — every transaction you journalize is a real event in ClearPath\'s story.',
};

export const LEARNING_PATH = [
  {
    moduleId: 'module-1',
    milestone: 'Foundation',
    description: 'The accounting equation and double-entry bookkeeping',
    prerequisite: null,
  },
  {
    moduleId: 'module-2',
    milestone: 'Transactions',
    description: 'Real-world revenue, expenses, and adjusting entries',
    prerequisite: 'module-1',
  },
  {
    moduleId: 'module-3',
    milestone: 'Reporting',
    description: 'Financial statements and how they connect',
    prerequisite: 'module-2',
  },
  {
    moduleId: 'module-4',
    milestone: 'The Cycle',
    description: 'Trial balance, adjusting, and closing entries',
    prerequisite: 'module-3',
  },
  {
    moduleId: 'module-5',
    milestone: 'Controls',
    description: 'Bank reconciliation and internal controls',
    prerequisite: 'module-4',
  },
  {
    moduleId: 'module-6',
    milestone: 'Analysis',
    description: 'Financial ratios, Excel models, and real-world application',
    prerequisite: 'module-5',
  },
];

export { MODULE_1, MODULE_2, MODULE_3, MODULE_4, MODULE_5, MODULE_6 };
export type { Module };
