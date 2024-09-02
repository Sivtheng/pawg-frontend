import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Veterinary',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const VeterinaryPage = () => {
  return (
    <div>
      <h1>Veterinary Services</h1>
      <p>Information about our veterinary services and partners.</p>
    </div>
  );
};

export default VeterinaryPage;
