'use client'
import React, { useEffect, useState } from 'react';
import Form from './form';

const ApplyToAdoptPage: React.FC = () => {
  const [title] = useState('Adopt');

  useEffect(() => {
    document.title = title;
  }, [title]);
  return (
    <main className="flex flex-col min-h-screen">
      {/* First Div: Background Image with Text */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/apply.png')" }}></div>
      {/* Second Div: Welcome Message */}
      <div className="flex-grow flex items-center justify-center bg-secondary py-12 px-4">
        <div className="text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Adoption and Foster Questionnaire</h2>
          {/* Form */}
          <Form />
        </div>
      </div>
    </main>
  );
};

export default ApplyToAdoptPage;