import type { Metadata } from 'next';
import '@/styles/global.css';
import '@/styles/main.scss';
import { lato } from './font';
import dayjs from 'dayjs';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
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
  openGraph: {
    type: 'profile',
    images: ['https://jimcbl.dev/opengraph-image.jpg'],
    url: 'https://jimcbl-dev.vercel.app/',
  },
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
      <body className={'bg-slate-50 dark:bg-slate-900 relative ' + lato.className}>
        <Navbar />
        <main className="dark:text-gray-300 max-w-screen-xl mx-auto px-10 lg:px-24 lg:mt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
