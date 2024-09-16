import React from "react";
import Image from "next/image";

const MaxPowerModernHero = () => {
  return (
    <div className="relative bg-black text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/api/placeholder/1920/1080"
          alt="Gym background"
          className="w-full h-full object-cover opacity-50"
          width={400}
          height={600}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8">
          <div className="lg:col-span-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              UNLEASH YOUR <span className="text-red-600">POTENTIAL</span>
            </h1>
            <p className="mt-6 text-xl lg:text-2xl font-semibold max-w-3xl">
              Transform your body. Elevate your mind. Dominate your goals.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <button className="px-8 py-6 text-lg bg-red-600 hover:bg-red-700 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                Start Your Journey
              </button>
              <button
                variant="outline"
                className="px-8 py-6 text-lg text-white border-white hover:bg-white/10 rounded-full transition duration-300 ease-in-out"
              >
                Learn More
              </button>
            </div>
          </div>
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            {/* Placeholder for a custom graphic or animation */}
            <div className="aspect-w-5 aspect-h-3 rounded-lg overflow-hidden bg-red-600/20 flex items-center justify-center">
              <span className="text-3xl font-bold">MaxPower Fitness</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaxPowerModernHero;
