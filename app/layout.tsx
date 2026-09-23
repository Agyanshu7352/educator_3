import type { Metadata } from 'next';
import { Anton, Inter, Plus_Jakarta_Sans, Caveat } from 'next/font/google';
import './globals.css';

const anton = Anton({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-anton',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const caveat = Caveat({
  subsets: ['latin'],
  variable: '--font-handwritten',
  display: 'swap',
  weight: ['500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Educator - Right Career, Right College! | Top Colleges & Guidance',
  description:
    'Empowering students with the right guidance to build a brighter tomorrow. Explore 500+ colleges across India, compare courses, and get expert career guidance with Educator.',
  icons: {
    icon: '/favicon.png',
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${anton.variable} ${inter.variable} ${jakarta.variable} ${caveat.variable}`}
    >
      <body className="min-h-screen bg-[#FDFDFE] text-slate-800 antialiased selection:bg-brand-mint selection:text-slate-900 font-sans">
        {children}
      </body>
    </html>
  );
}
