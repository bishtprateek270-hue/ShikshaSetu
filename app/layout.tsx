import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'ShikshaSetu',
  description: 'A premium educational platform for learners and educators.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
