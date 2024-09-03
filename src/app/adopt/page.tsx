import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Adopt',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const AdoptPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/adopt.png')" }}>
      </div>
      <div className="flex-grow flex items-center justify-center bg-secondary py-12 px-4">
        <div className="text-center max-w-5l mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Adopt an Animal
          </h2>
          <p className="text-lg md:text-xl mb-8">
            We want to see the animals that we rescued be given a second chance by providing them a warm home to go to,

            greeted and cared for by fur-loving owners that can attend to their needs, teaching them how to live out their days

            without fear of being mistreated or abused ever again.
          </p>
          <p className="text-lg md:text-xl mb-8">
            If you're interested in getting a fur buddy of your own, you can start by clicking the button below to apply.

            Do consider that adoption costs will vary depending on the condition of the animal you chose.
          </p>
          {/* Image Section */}
          <div className="mb-8">
            <img
              src="/images/adopt-me.png" // Replace with your actual image path
              alt="Adoptable Animal"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg object-cover"
            />
          </div>
          <Link
            href="/adopt/apply"
            className="inline-block bg-primary text-black py-3 px-6 rounded-lg hover:bg-accent transition-colors font-semibold text-lg"
          >
            Apply For Adoption
          </Link>
        </div>
      </div>
    </main>
  );
};

export default AdoptPage;
