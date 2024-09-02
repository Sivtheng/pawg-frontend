import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home',
  icons: {
    icon: '/images/doge-logo.png',
  },
};

const IndexPage: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen">
      {/* First Div: Background Image with Text */}
      <div className="relative h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/images/doge.png')" }}>
        <div className="absolute inset-0 flex items-center justify-end bg-black bg-opacity-10">
          <div className="text-right text-black p-6 md:p-12 max-w-2xl mr-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Every pet deserves to live
              <br />
              out the rest of their lives,
              <br />
              being loved and cared for.
            </h1>
          </div>
        </div>
      </div>

      {/* Second Div: Welcome Message */}
      <div className="flex-grow flex items-center justify-center bg-secondary py-12 px-4">
        <div className="text-center max-w-5l mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Welcome to Pawg Adoption Centre
          </h2>
          <p className="text-lg md:text-xl mb-8">
            Acting as both a full-time veterinary clinic and a volunteer organisation, our main mission is to promote animal welfare in Cambodia, one city at a time. The revenue made through Veterinary work are one of the main sources of funding that we use to start significant projects that will not only push forward the goal of improving the situation of abandoned pets in Cambodia, but to also give back to the community as well.
          </p>
          <p className="text-lg md:text-xl mb-8">
            By using our services, you are directly supporting PAWG in our mission to improve the lives of many stray cats and dogs in Phnom Penh, and other areas of Cambodia where we have partnerships and nonprofit work to fund animal rescues and other well-established animal welfare organisations as well.
          </p>
          <Link
            href="/learn-more"
            className="inline-block bg-primary text-black py-3 px-6 rounded-lg hover:bg-accent transition-colors font-semibold text-lg"
          >
            Learn More
          </Link>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
