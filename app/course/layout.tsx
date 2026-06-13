import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accounting & Finance: Zero to Mastery | Interactive Course',
  description:
    'Master accounting and finance through an interactive, hands-on course. Journey from double-entry bookkeeping to financial statement analysis — by doing, not reading.',
  openGraph: {
    title: 'Accounting & Finance: Zero to Mastery',
    description: 'Interactive accounting course with live journal sandbox, T-account visualization, and diagnostic feedback.',
    type: 'website',
  },
};

export default function CourseLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-slate-950 font-sans antialiased">
      {children}
    </div>
  );
}
