import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Donate',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const DonatePage = () => {
  return (
    <div>
      <h1>Donate</h1>
      <p>Your donations help us care for and find homes for pets.</p>
    </div>
  );
};

export default DonatePage;
