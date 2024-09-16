import React from "react";
import { ChevronRight, Dumbbell } from "lucide-react";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="bg-black text-white py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Dumbbell className="text-red-600 mr-2" size={32} />
          <span className="text-xl font-bold">Maxpower Fitness</span>
        </div>
        <div className="space-x-4">
          <a href="#" className="hover:text-red-600 transition duration-300">
            Home
          </a>
          <a href="#" className="hover:text-red-600 transition duration-300">
            Classes
          </a>
          <a href="#" className="hover:text-red-600 transition duration-300">
            Membership
          </a>
          <a href="#" className="hover:text-red-600 transition duration-300">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="container mx-auto px-4 py-16 sm:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 leading-tight">
            Unleash Your <span className="text-red-600">Power</span> at Maxpower
            Fitness
          </h1>
          <p className="text-xl mb-8">
            Transform your body, elevate your mind, and achieve your fitness
            goals with our state-of-the-art equipment and expert trainers.
          </p>
          <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full inline-flex items-center transition duration-300 text-lg">
            Start Your Journey
            <ChevronRight className="ml-2" size={24} />
          </button>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-16">
        <div className="relative">
          <Image
            src="/api/placeholder/1200/600"
            alt="Fitness equipment"
            className="rounded-lg shadow-xl w-full"
            width={1200}
            height={600}
          />
          <div className="absolute inset-0 bg-red-600 opacity-20 rounded-lg"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
