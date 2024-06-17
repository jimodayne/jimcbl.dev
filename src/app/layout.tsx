import type { Metadata } from 'next';
import './globals.css';
import { lato } from './font';
import dayjs from 'dayjs';
const relativeTime = require('dayjs/plugin/relativeTime');
dayjs.extend(relativeTime);

declare module 'dayjs' {
  interface Dayjs {
    to(...args: any): string;
    toNow(...args: any): string;
  }
}

export const metadata: Metadata = {
  title: 'Jim Tran',
  description:
    'A software engineer based in Finland with a demonstrated history of working in the internet industry. Aspiring product management and entrepreneurship.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={lato.className}>{children}</body>
    </html>
  );
}
