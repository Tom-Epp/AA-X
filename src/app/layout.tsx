'use client';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from './components/Header';
import BottomNavigation from './components/BottomNavigation';
import { useEffect, useState } from 'react';
import Loader from './components/Loader';
import { config } from '@fortawesome/fontawesome-svg-core';

config.autoAddCss = false; /* eslint-disable import/first */

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (() => {
      setTimeout(() => setIsLoading(false), 500);
    })();
  }, []);

  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="bg-[#F7F7F7]">
          <Header />
          {isLoading ? <Loader /> : children}
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
