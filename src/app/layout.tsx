import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './globals.css'; // Import global styles
import Head from 'next/head';

export const metadata = {
  title: 'Pawg Adoption Center',
  description: 'Adopt a pet and make a difference!',
};

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <Head>
        {/* Preconnect and Font Links */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </Head>
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
