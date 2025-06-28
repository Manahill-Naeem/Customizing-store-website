import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Optivance Inspect',
  description: 'Your trusted partner in Non-Destructive Testing, Mechanical Testing, and Storage Tank Services',
  verification: {
    google: 'CesXuw3k8pSw6ifZCYwjPd3abWrCXo6ZJeoffBjTg2c',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
} 