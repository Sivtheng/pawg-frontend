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
    <main className="flex flex-col min-h-screen">
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/donate-dog.png')" }}>
      </div>
      <div className="flex-grow flex items-center justify-center bg-secondary py-12 px-4">
        <div className="text-center max-w-5l mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Donate
          </h2>
          <h3 className="text-3xl md:text-4xl mb-8">
            If you want to play a part in caring for the animal's wellbeing without adopting, consider donating.
          </h3>
          <div className="mb-8">
            <img
              src="/images/aba.png"
              alt="money money money"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DonatePage;
