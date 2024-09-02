import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Learn More',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const LearnMorePage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* First Div: Background Image */}
      <div
        className="relative w-full h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/pink.png')" }}
      >
      </div>
      <div className="flex-grow flex items-center justify-center bg-secondary py-8 px-4">
        <div className="text-center max-w-5l mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            What We Offer
          </h2>
        </div>
      </div>
      {/* Content Section 1*/} 
      <section className="flex flex-col items-center justify-center bg-secondary pb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0">
            <div className="flex justify-center w-full">
              <img
                src="/images/veterinary.png"
                className="w-3/4 max-w-sm h-auto object-cover"
                alt="Veterinary Services"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">
                Veterinary Services
              </h1>
            </div>
            <p className="text-lg leading-relaxed">
              We are equipped with fully trained veterinarians that can help tend to your pet's troubles and needs. Our HQ are equipped with the latest medical technology to assist us in every operation.
            </p>
          </div>
        </div>
      </section>
      {/* Content Section 2*/} 
      <section className="flex flex-col items-center justify-center bg-secondary pb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0">
            <div className="flex justify-center w-full">
              <img
                src="/images/welfare.png"
                className="w-3/4 max-w-sm h-auto object-cover"
                alt="Animal Welface Guidance"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">
                Animal Welface Guidance
              </h1>
            </div>
            <p className="text-lg leading-relaxed">
            We take the 5 animal welfare Acts very seriously. Meaning, for every animal we rescue, we will place full priority on nursing it back to full health, rehabilitating them into behaving naturally for their species(run,jump,etc), and provide therapy if needed in order for them to be ready for adoption when the time is right.
            </p>
          </div>
        </div>
      </section>
      {/* Content Section 3*/} 
      <section className="flex flex-col items-center justify-center bg-secondary pb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0">
            <div className="flex justify-center w-full">
              <img
                src="/images/new-home.png"
                className="w-3/4 max-w-sm h-auto object-cover"
                alt="Finding New Homes For Animals"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">
                Finding New Homes For Animals
              </h1>
            </div>
            <p className="text-lg leading-relaxed">
              As an organisation focused on spreading animal welfare, we are always on the move when it comes to handling animal rescues. In order to keep doing what we do, we need to make space for newer animals by offering the ones that we nursed up back to shape, up for adoption. Of course, we will see for ourselves if the owner is suitable for caring for our furry friends first before making a final decision.
            </p>
          </div>
        </div>
      </section>
      {/* Content Section 4*/} 
      <section className="flex flex-col items-center justify-center bg-secondary pb-6">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          <div className="flex flex-col items-center lg:items-start lg:w-1/2 mb-6 lg:mb-0">
            <div className="flex justify-center w-full">
              <img
                src="/images/supply.png"
                className="w-3/4 max-w-sm h-auto object-cover"
                alt="Pet Supply Shop"
              />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="text-center mb-6">
              <h1 className="text-3xl font-bold">
                Pet Supply Shop
              </h1>
            </div>
            <p className="text-lg leading-relaxed">
            Functioning as a veterinary clinic, we also offer pet supplies(toys, wet food, dry food,etc.) up for sale so that people that either come to have their pets checked or to find a furry riend of their own can shop for proper items that can assist them in taking care of their pet's wellbeing.
            </p>
          </div>
        </div>
      </section>
      {/* Button */}
      <div className="flex-grow flex items-center justify-center bg-secondary py-12 px-4">
        <div className="text-center max-w-5l mx-auto">
          <Link
            href="/meet-the-team"
            className="inline-block bg-primary text-black py-3 px-6 rounded-lg hover:bg-accent transition-colors font-semibold text-lg"
          >
            Meet The Team
          </Link>
        </div>
      </div>
    </main>
  );
};

export default LearnMorePage;
