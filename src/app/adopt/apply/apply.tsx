import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Apply',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const ApplyToAdoptPage = () => {
  return (
    <div>
      <h1>Apply to Adopt</h1>
      <p>Fill out the adoption application form to begin the process.</p>
    </div>
  );
};

export default ApplyToAdoptPage;
