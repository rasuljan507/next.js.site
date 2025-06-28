// app/layout.tsx
'use client'; // Важно: должен быть самым первым

import { Inter } from 'next/font/google';
import './globals.css';
import { AnimatePresence } from 'framer-motion'; 

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="h-full">
      <body className={`${inter.className} h-full bg-[#111111] bg-[url('/ras-background.svg')] bg-no-repeat bg-center bg-cover bg-fixed`}>
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}