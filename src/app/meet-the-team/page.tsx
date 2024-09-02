import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet The Team',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const MeetTheTeamPage = () => {
  return (
    <div>
      <h1>Meet The Team</h1>
      <p>Get to know the wonderful team behind Pawg Adoption Center.</p>
    </div>
  );
};

export default MeetTheTeamPage;
