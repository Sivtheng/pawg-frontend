import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Learn More',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const LearnMorePage = () => {
  return (
    <div>
      <h1>Learn More About Us</h1>
      <p>Information about our adoption process, policies, and more.</p>
    </div>
  );
};

export default LearnMorePage;
