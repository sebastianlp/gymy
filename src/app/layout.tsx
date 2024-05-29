import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import clsx from 'clsx';
import Header from './header';
import Main from './main';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gymy',
  description: 'Gymy: Gym tracker',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(inter.className, 'min-h-screen bg-background')}>
        <div>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <Main>{children}</Main>
          </div>
        </div>
      </body>
    </html>
  );
}
