import { Inter } from 'next/font/google';
import './globals.css';
import type { Metadata } from 'next';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Расул Юсуфалиев',
  description: 'Портфолио',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      {/* Временно убрал сложный фон для чистоты теста */}
      <body className={`${inter.className} bg-[#111111]`}>
        {children}
      </body>
    </html>
  );
}