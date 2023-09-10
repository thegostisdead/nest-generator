import './globals.css';
import type { Metadata } from 'next';
import { Provider } from '@/components/provider';

import localFont from 'next/font/local';
import { Toaster } from '@/components/ui/toaster';
import React from 'react';

const spaceMono = localFont({
  src: [
    {
      path: '../public/fonts/space-mono/SpaceMono-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/space-mono/SpaceMono-Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/space-mono/SpaceMono-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/space-mono/SpaceMono-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
});

export const metadata: Metadata = {
  title: 'Nest Gen',
  generator: 'Next.js',
  applicationName: 'Nest Gen',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Next.js',
    'React',
    'JavaScript',
    'Nest',
    'NestJs',
  ],
  authors: [{ name: 'thegostisdead', url: 'https://github.com/thegostisdead' }],
  colorScheme: 'dark',
  creator: 'thegostisdead',
  publisher: 'thegostisdead',
  alternates: {},
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Nest Gen',
    description: 'Generate nest js commands easily',
    url: 'https://nest-gen.vercel.app',
    siteName: 'Nest Gen',
    images: [
      {
        url: 'https://nest-gen.vercel.app/og.png',
        width: 2558,
        height: 1279,
      },
      {
        url: 'https://nest-gen.vercel.app/og-dark.png',
        width: 2559,
        height: 1278,
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  robots: {
    index: true,
  },
};

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
    <body className={`${spaceMono.className}`}>
    <Provider attribute='class' defaultTheme='system' enableSystem>
      <main
        className={`text-zinc-700 bg-white dark:text-zinc-400 dark:bg-black`}
      >
        {children}
      </main>
      <Toaster />
    </Provider>
    </body>
    </html>
  );
}
