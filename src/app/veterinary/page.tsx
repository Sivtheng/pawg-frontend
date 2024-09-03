import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Veterinary',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const VeterinaryPage = () => {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/veteninary-dog.png')" }}>
      </div>
      <div className="flex-grow flex items-center justify-center bg-secondary py-12 px-4">
        <div className="text-center max-w-5l mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
          About Our Clinic
          </h2>
          <p className="text-lg md:text-xl mb-8">
          PAWG Veterinary Clinic is operated directly from our HQ where surgery and

consultation space are provided.
          </p>
          <p className="text-lg md:text-xl mb-8">
          We are staffed with a generous amount of full-time veterinarians, all of which are

fully trained with years of experience behind their portfolio. Not to mention, our

volunteers are also involved when it comes to caring and calming your pets during

your visit. We aim to keep our clients and their pets satisfied by offering the most

affordable medical care to them, all while keeping up-to-date with the latest medical

technology and practices
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
          What Our Clinic Provides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">

        {/* Team Member 1 */}
        <div className="flex flex-col items-center bg-accent rounded-lg shadow-lg p-6">
          <img 
            src="/images/vac.png" 
            alt="Vaccination..."
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <p className="text-center text-gray-700">
          Vaccination
Rabies, DHPPil,

HC/P injections.
          </p>
        </div>

        {/* Team Member 2 */}
        <div className="flex flex-col items-center bg-accent rounded-lg shadow-lg p-6">
          <img 
            src="/images/health.png" 
            alt="Healthcare..."
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <p className="text-center text-gray-700">
          General Healthcare
Wound stitching, Dentistry,

Bone fracture treatment,

De-worming,etc.
          </p>
        </div>

        {/* Team Member 3 */}
        <div className="flex flex-col items-center bg-accent rounded-lg shadow-lg p-6">
          <img 
            src="/images/spay.png" 
            alt="Spay..."
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <p className="text-center text-gray-700">
          Spay/Neutering
Ovariohysterectomy,

Orchiectomy options for

both sexes.
          </p>
        </div>

        {/* Team Member 4 */}
        <div className="flex flex-col items-center bg-accent rounded-lg shadow-lg p-6">
          <img 
            src="/images/gun.png" 
            alt="gun..."
            className="w-40 h-40 rounded-full object-cover mb-4"
          />
          <p className="text-center text-gray-700">
          Euthanization
Ethical end of life care for aged,

sick,and badly injured pets who

has little to no quality of life.


          </p>
        </div>

      </div>
      <div className='pt-12'>
      <Link
            href="https://t.me/maxyjang" target='blank'
            className="inline-block bg-primary text-black py-3 px-6 rounded-lg hover:bg-accent transition-colors font-semibold text-lg"
          >
            Book an Appointment Now
          </Link>
      </div>
        </div>
      </div>
    </main>
  );
};

export default VeterinaryPage;
