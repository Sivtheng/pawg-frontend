import Link from 'next/link';
import { FaGithub, FaTwitter, FaFacebook, FaInstagram, FaTelegram, FaReddit, FaSpotify, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-black py-8">
      {/* Top Layer: Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <Link href="https://github.com" className="hover:text-gray-700" aria-label="GitHub">
          <FaGithub size={24} />
        </Link>
        <Link href="https://twitter.com" className="hover:text-gray-700" aria-label="Twitter">
          <FaTwitter size={24} />
        </Link>
        <Link href="https://facebook.com" className="hover:text-gray-700" aria-label="Facebook">
          <FaFacebook size={24} />
        </Link>
        <Link href="https://instagram.com" className="hover:text-gray-700" aria-label="Instagram">
          <FaInstagram size={24} />
        </Link>
        <Link href="https://telegram.org" className="hover:text-gray-700" aria-label="Telegram">
          <FaTelegram size={24} />
        </Link>
        <Link href="https://reddit.com" className="hover:text-gray-700" aria-label="Reddit">
          <FaReddit size={24} />
        </Link>
        <Link href="https://spotify.com" className="hover:text-gray-700" aria-label="Spotify">
          <FaSpotify size={24} />
        </Link>
        <Link href="https://linkedin.com" className="hover:text-gray-700" aria-label="LinkedIn">
          <FaLinkedin size={24} />
        </Link>
      </div>

      {/* Bottom Layer: Footer Sections */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 md:space-x-6">
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Opening Hours</h3>
          <p>Monday - Sunday</p>
          <p>8 AM - 12 PM</p>
          <p>2 PM - 6 PM</p>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
          <p>Building 4, Sangkat Boeung kak,</p>
          <p>St 315, Phnom Penh</p>
          <p>023 996 111</p>
          <p>sc@paragoniu.edu.kh</p>
        </div>
        <div className="flex-1">
          <div className="w-full h-48">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16459.394714959904!2d104.90507255882206!3d11.576491535907062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31095144cbdbf311%3A0x2588e1ac1787eb64!2sWat%20Phnom%20Daun%20Penh!5e0!3m2!1sen!2skh!4v1725245232915!5m2!1sen!2skh"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
