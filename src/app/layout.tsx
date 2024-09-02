'use client'; 

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-secondary text-white p-3 rounded-full shadow-lg hover:bg-accent transition-colors"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col font-suse">
        <Navbar />
        <main className="flex-grow container mx-auto p-4 bg-secondary">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
