import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const GetInvolvedPage = () => {
  return (
    <div>
      <h1>Get Involved</h1>
      <p>Learn how you can support Pawg Adoption Center and help animals in need.</p>
    </div>
  );
};

export default GetInvolvedPage;
