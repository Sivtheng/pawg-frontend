import Link from 'next/link';
import Image from 'next/image';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-primary text-black py-4">
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Image src="/images/pawg-logo.png" alt="Pawg Adoption Center Logo" width={150} height={50} />
          </Link>
        </div>

        {/* Menu */}
        <div className="flex space-x-6 text-xl font-bold">
          <Link href="/" className="hover:text-gray-700" aria-label="home">
            Ver 2.0.0-alpha
          </Link>
          <Link href="/learn-more" className="hover:text-gray-700" aria-label="learn-more">
            About Us
          </Link>
          <Link href="/veterinary" className="hover:text-gray-700" aria-label="Veterinary">
            Veterinary
          </Link>
          <Link href="/adopt" className="hover:text-gray-700" aria-label="Adopt">
            Adopt
          </Link>
          <Link href="/get-involved" className="hover:text-gray-700" aria-label="Get Involved">
            Get Involved
          </Link>
          <Link href="/donate" className="hover:text-gray-700" aria-label="Donate">
            Donate
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
