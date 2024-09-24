import React from "react";
import MaxPowerModernHero from "./Maxpower";

const Feature = ({ title, description }) => (
  <div className="bg-gray-900 border-gray-800">
    <div>
      <h1 className="text-xl font-semibold text-red-600">{title}</h1>
    </div>
    <div>
      <p className="text-gray-300">{description}</p>
    </div>
  </div>
);

const MaxPowerLandingPage = () => {
  return (
    <div className="bg-black text-white">
      <MaxPowerModernHero />a{/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Why Choose MaxPower Fitness
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Feature
              title="Cutting-Edge Equipment"
              description="State-of-the-art machines and free weights to maximize your workout efficiency."
            />
            <Feature
              title="Expert Trainers"
              description="Certified professionals dedicated to helping you achieve your fitness goals."
            />
            <Feature
              title="Diverse Classes"
              description="From high-intensity interval training to yoga, we offer classes for all fitness levels."
            />
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-red-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold mb-8">
            Ready to Transform Your Life?
          </h2>
          <p className="text-xl mb-10">
            Join MaxPower Fitness today and start your journey to a stronger,
            healthier you.
          </p>
          <button className="px-8 py-6 text-lg bg-black hover:bg-gray-900 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Get Your Free Trial
          </button>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            What Our Members Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                name: "Alex M.",
                quote:
                  "MaxPower changed my life. I've never been stronger or more confident.",
              },
              {
                name: "Sarah L.",
                quote:
                  "The trainers here are amazing. They push you to your limits in the best way possible.",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-800 border-gray-700">
                <div className="pt-8">
                  <p className="text-lg italic mb-4">{testimonial.quote}</p>
                  <p className="font-semibold text-red-500">
                    - {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p>&copy; 2024 MaxPower Fitness. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MaxPowerLandingPage;
