import type { Metadata } from 'next';
import { Geist, Space_Grotesk } from 'next/font/google';
import './(default)/css/globals.css';

const spaceGrotesk = Space_Grotesk({
  variable: '--font-space-grotesk',
  subsets: ['latin'],
  display: 'swap',
});

const geist = Geist({
  variable: '--font-geist',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'EdgeTalent AI - AI-Powered Recruitment Platform',
  description: 'Revolutionize your hiring process with EdgeTalent AI. Intelligent candidate matching, skill gap analysis, and comprehensive assessment tools powered by AI.',
  applicationName: 'EdgeTalent AI',
  keywords: ['recruitment', 'AI hiring', 'talent matching', 'resume screening', 'ATS', 'candidate assessment'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-US">
      <body
        className={`${geist.variable} ${spaceGrotesk.variable} antialiased bg-white text-gray-900`}
      >
        <div>{children}</div>
      </body>
    </html>
  );
}