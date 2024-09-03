import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Pawg Adoption Center',
  description: 'Adopt a pet and make a difference!',
  icons: {
    icon: '/images/doge-logo.png',
  },
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
        <ScrollToTopButton />
      </body>
    </html>
  );
};

export default RootLayout;
