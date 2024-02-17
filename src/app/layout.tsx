import './globals.css';

import { Inter as FontSans } from 'next/font/google';
import { cn } from '@/lib/utils';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased',
          FontSans
        )}
      >
        {children}
      </body>
    </html>
  );
}
