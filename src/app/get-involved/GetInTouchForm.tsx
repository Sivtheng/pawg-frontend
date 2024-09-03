// src/components/GetInTouchForm.tsx
'use client';

import React, { useState } from 'react';

const GetInTouchForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/get-in-touch', { // Replace with your API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (response.ok) {
        setSubmitStatus('Thank you for reaching out! We will get back to you soon.');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setSubmitStatus('Something went wrong. Please try again later.');
      }
    } catch (error) {
      setSubmitStatus('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-accent p-6 rounded-lg shadow-md max-w-lg mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-lg font-medium text-gray-700">Name <span className="text-red-500">*</span></label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email <span className="text-red-500">*</span></label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message <span className="text-red-500">*</span></label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary"
          rows={4}
        />
      </div>
      <div className="flex justify-center mb-4">
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-white py-2 px-4 rounded-lg shadow-sm hover:bg-accent transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </button>
      </div>
      {submitStatus && (
        <div className="mt-4 text-center text-sm text-gray-700">
          {submitStatus}
        </div>
      )}
    </form>
  );
};

export default GetInTouchForm;
