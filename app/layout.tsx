import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ProgressProvider } from './context/ProgressContext';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'The Web3 Playbook',
  description: 'Learn Web3 and Solana concepts through interactive lessons and quizzes',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}
