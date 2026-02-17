import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../src/components/Header';  // Correct if components are in src
import Footer from '../src/components/Footer';  // Correct if components are in src

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Learn English Tenses in Urdu - Complete Grammar Course',
  description: 'Master English grammar tenses step by step through Urdu explanations. Learn all 12 tenses with Urdu examples, practice exercises, and quizzes designed for Urdu speakers.',
  keywords: 'English tenses in Urdu, Learn tenses in English, English grammar tenses in Urdu, Learn English grammar in Urdu, Tenses in Urdu with examples, Learn English tenses step by step, English tenses for beginners in Urdu',
  openGraph: {
    title: 'Learn English Tenses in Urdu - Complete Grammar Course',
    description: 'Master English grammar tenses with Urdu explanations and examples',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}