import type { Metadata } from 'next';
import './globals.css';
import { lato } from './font';

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
