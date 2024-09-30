import { Facebook, Instagram, Twitter, BicepsFlexed } from "lucide-react";

const Footer = () => {
  return (
    <footer className="container px-4 py-16 sm:py-24 lg:py-20 justify-between">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-900 rounded-3xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <BicepsFlexed className="text-red-600" />
              <span className="font-bold text-xl text-white">
                MaxPower Fitness
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Empowering you to reach your fitness goals since 2010.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="text-sm hover:text-red-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-600">
                  Classes
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-600">
                  Membership
                </a>
              </li>
              <li>
                <a href="#" className="text-sm hover:text-red-600">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Contact Us
            </h4>
            <p className="text-sm text-gray-400 mb-2">
              7th street, Eastleigh, Nairobi, Kenya
            </p>
            <p className="text-sm text-gray-400 mb-2">Phone: (555) 123-4567</p>
            <p className="text-sm text-gray-400">
              Email: info@maxpowerfitness.com
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Facebook size={24} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Instagram size={24} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-red-600">
                <Twitter size={24} />
                <span className="sr-only">Twitter</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} MaxPower Fitness. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
