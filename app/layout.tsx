import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '../src/components/Header';  // Correct if components are in src
import Footer from '../src/components/Footer';  // Correct if components are in src

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://tensesurdu.vercel.app'),
  title: {
    default: 'Learn English Tenses in Urdu - Complete Grammar Course',
    template: '%s | Tenses in Urdu'
  },
  description: 'Master English grammar tenses step by step through Urdu explanations. Learn all 12 tenses with Urdu examples, practice exercises, and quizzes for Urdu speakers.',
  keywords: 'English tenses in Urdu, Learn tenses in English, English grammar tenses in Urdu, Learn English grammar in Urdu, Tenses in Urdu with examples, Learn English tenses step by step, English tenses for beginners in Urdu',
  authors: [{ name: 'TensesUrdu' }],
  creator: 'TensesUrdu',
  publisher: 'TensesUrdu',
  openGraph: {
    title: 'Learn English Tenses in Urdu - Complete Grammar Course',
    description: 'Master English grammar tenses with Urdu explanations and examples',
    url: 'https://tensesurdu.vercel.app',
    siteName: 'Tenses in Urdu',
    images: [
      {
        url: 'https://tensesurdu.vercel.app/og-image.jpg', // Create this image
        width: 1200,
        height: 630,
        alt: 'Learn English Tenses in Urdu',
      },
    ],
    locale: 'ur_PK',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Learn English Tenses in Urdu',
    description: 'Master English grammar tenses with Urdu explanations',
    images: ['https://tensesurdu.vercel.app/twitter-image.jpg'], // Create this image
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code', // You'll get this from Search Console
  },
  alternates: {
    canonical: 'https://tensesurdu.vercel.app',
  },
  category: 'education',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <meta name="google-site-verification" content="6fXtQXyHT-4aBKw_4QmePYszj0U8a8L5qvwEev8DC-g" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}