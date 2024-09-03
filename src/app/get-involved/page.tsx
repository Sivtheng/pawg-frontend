'use client'
import React, { useEffect, useState } from 'react';
import GetInTouchForm from './GetInTouchForm';

const GetInvolvedPage: React.FC = () => {
  const [title] = useState('Get involved');

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <main className="flex flex-col min-h-screen">
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/get-involved-dog-cat.png')" }}>
      </div>
      <div className="flex-grow flex items-center justify-center bg-secondary py-12 px-4">
        <div className="text-center max-w-5l mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Volunteering at Pawg
          </h2>
          <p className="text-lg md:text-xl mb-8">
          As an organisation dedicated towards promoting animal welfare, we are always assigned to animal rescue operations year-round. Having volunteers help out in managing some portion of our overall workload means we are able to dedicate more time towards rescuing more animals from meat trades, abusive households,etc.
          </p>
          <div className="mb-8">
            <img
              src="/images/pug.png" // Replace with your actual image path
              alt="Adoptable Animal"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <p className="text-lg md:text-xl mb-8">
          If you're interested in caring for the animals we rescued, and is passionate about them finding a loving home, consider applying by sending us a message through the form below. Do keep in mind that you have to come volunteer 3-4 days minimum per week as you need to undergo training for proper animal care.
          </p>
          <GetInTouchForm />
        </div>
      </div>
    </main>
  );
};

export default GetInvolvedPage;
