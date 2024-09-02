import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Adopt',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const AdoptPage = () => {
  return (
    <div>
      <h1>Adopt a Pet</h1>
      <p>Find your perfect pet to adopt today.</p>
    </div>
  );
};

export default AdoptPage;
