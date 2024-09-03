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
    <main className="flex flex-col min-h-screen">
      {/* First Div: Background Image*/}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/meet-the-team-dog.png')" }}>
      </div>
      {/* content */}
      <div className="flex flex-col items-center justify-center p-6 bg-secondary">
        <h1 className="text-4xl font-bold mb-12 text-center">Meet the Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl">

          {/* Team Member 1 */}
          <div className="flex flex-col items-center bg-accent rounded-lg shadow-lg p-6">
            <img
              src="/images/sivtheng.png"
              alt="Sivtheng"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">Sivtheng Chang</h1>
            <p className="text-center text-gray-700">
              "Kim Hyunjin barks Jeon Heejin aww" - Park Gowon
            </p>
          </div>

          {/* Team Member 2 */}
          <div className="flex flex-col items-center bg-accent rounded-lg shadow-lg p-6">
            <img
              src="/images/rithy.png"
              alt="Rithy"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">Rithy Phal</h1>
            <p className="text-center text-gray-700">
              "I do not think anyone should adopt chihuahuas." - Rithy Phal
            </p>
          </div>

          {/* Team Member 3 */}
          <div className="flex flex-col items-center bg-accent rounded-lg shadow-lg p-6">
            <img
              src="/images/pich.png"
              alt="Keoprospich"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">Keoprospich Men</h1>
            <p className="text-center text-gray-700">
              "Okay" - Keoprospich Men
            </p>
          </div>

          {/* Team Member 4 */}
          <div className="flex flex-col items-center bg-accent rounded-lg shadow-lg p-6">
            <img
              src="/images/visal.png"
              alt="Sokvisal"
              className="w-40 h-40 rounded-full object-cover mb-4"
            />
            <h1 className="text-2xl font-bold mb-2">Sokvisal Mong</h1>
            <p className="text-center text-gray-700">
              "Professionally unprofessional" - Sokvisal Mong
            </p>
          </div>

        </div>
      </div>
    </main>
  );
};

export default MeetTheTeamPage;
