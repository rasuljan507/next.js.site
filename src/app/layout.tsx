'use client'; 

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { AnimatePresence } from 'framer-motion'; 

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="h-full">
      <body className={`${inter.className} h-full bg-[#111111] bg-[url('/ras-background.svg')] bg-no-repeat bg-center bg-cover bg-fixed`}>
        {/* 2. Оборачиваем всех "детей" (наши страницы) в AnimatePresence */}
        <AnimatePresence mode="wait">
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}