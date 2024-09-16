import React from 'react';
import { Dumbbell, Users, Calendar, CreditCard, MessageSquare, Mail, ChevronRight } from 'lucide-react';
import Image from 'next/image';

const Section = ({ title, children, dark = false }) => (
  <div className={`py-16 ${dark ? 'bg-black text-white' : 'bg-gray-100'}`}>
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold mb-8 text-center">{title}</h2>
      {children}
    </div>
  </div>
);

const AboutUs = () => (
  <Section title="About Maxpower Fitness" dark>
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div>
        <p className="text-lg mb-4">
          At Maxpower Fitness, we believe in empowering individuals to reach their full potential through fitness. Our state-of-the-art facility and expert trainers are dedicated to helping you achieve your health and fitness goals.
        </p>
        <p className="text-lg mb-4">
          Founded in 2010, we`ve helped thousands of members transform their lives. Our philosophy is simple: provide the best equipment, knowledge, and support to help you succeed.
        </p>
      </div>
      <div className="relative">
        <Image width={600} height={400} src="/api/placeholder/600/400" alt="Gym interior" className="rounded-lg shadow-xl" />
        <div className="absolute inset-0 bg-red-600 opacity-20 rounded-lg"></div>
      </div>
    </div>
  </Section>
);

const ClassCard = ({ name, description, icon: Icon }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <Icon className="text-red-600 mb-4" size={32} />
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ClassesOffered = () => (
  <Section title="Classes Offered">
    <div className="grid md:grid-cols-3 gap-8">
      <ClassCard
        name="Strength Training"
        description="Build muscle and increase your strength with our expert-led strength training classes."
        icon={Dumbbell}
      />
      <ClassCard
        name="Cardio Blast"
        description="Boost your endurance and burn calories with our high-energy cardio sessions."
        icon={Users}
      />
      <ClassCard
        name="Yoga Flow"
        description="Improve flexibility, balance, and mental clarity with our rejuvenating yoga classes."
        icon={Users}
      />
    </div>
  </Section>
);

const TrainerProfile = ({ name, specialty, image }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <Image width={150} height={150} src={image} alt={name} className="w-32 h-32 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-bold mb-2">{name}</h3>
    <p className="text-gray-600">{specialty}</p>
  </div>
);

const TrainerProfiles = () => (
  <Section title="Our Expert Trainers" dark>
    <div className="grid md:grid-cols-3 gap-8">
      <TrainerProfile
        name="John Doe"
        specialty="Strength & Conditioning"
        image="/api/placeholder/150/150"
      />
      <TrainerProfile
        name="Jane Smith"
        specialty="Yoga & Pilates"
        image="/api/placeholder/150/150"
      />
      <TrainerProfile
        name="Mike Johnson"
        specialty="Nutrition & Weight Loss"
        image="/api/placeholder/150/150"
      />
    </div>
  </Section>
);

const MembershipPlan = ({ name, price, features }) => (
  <div className="bg-white p-6 rounded-lg shadow-md text-center">
    <h3 className="text-2xl font-bold mb-4">{name}</h3>
    <p className="text-4xl font-bold text-red-600 mb-4">${price}/mo</p>
    <ul className="text-left mb-6">
      {features.map((feature, index) => (
        <li key={index} className="mb-2 flex items-center">
          <ChevronRight className="text-red-600 mr-2" size={16} />
          {feature}
        </li>
      ))}
    </ul>
    <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
      Choose Plan
    </button>
  </div>
);

const MembershipPlans = () => (
  <Section title="Membership Plans">
    <div className="grid md:grid-cols-3 gap-8">
      <MembershipPlan
        name="Basic"
        price={29.99}
        features={[
          "Access to gym equipment",
          "2 classes per week",
          "Locker room access",
        ]}
      />
      <MembershipPlan
        name="Premium"
        price={49.99}
        features={[
          "Unlimited access to gym",
          "Unlimited classes",
          "1 personal training session/month",
          "Nutrition consultation",
        ]}
      />
      <MembershipPlan
        name="Elite"
        price={79.99}
        features={[
          "24/7 gym access",
          "Unlimited classes",
          "4 personal training sessions/month",
          "Nutrition plan",
          "Access to spa facilities",
        ]}
      />
    </div>
  </Section>
);

const Testimonial = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-lg mb-4 italic">{quote}</p>
    <p className="font-bold text-red-600">- {author}</p>
  </div>
);

const Testimonials = () => (
  <Section title="What Our Members Say" dark>
    <div className="grid md:grid-cols-3 gap-8">
      <Testimonial
        quote="Maxpower Fitness has completely transformed my life. I've never felt stronger or more confident!"
        author="Sarah L."
      />
      <Testimonial
        quote="The trainers here are top-notch. They really know how to push you to your limits in the best way possible."
        author="Mark R."
      />
      <Testimonial
        quote="I love the variety of classes offered. There's always something new to try and keep my workouts exciting."
        author="Emily T."
      />
    </div>
  </Section>
);

const ContactUs = () => (
  <Section title="Contact Us">
    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
        <p className="mb-4">Have questions or want to learn more? Reach out to us!</p>
        <div className="flex items-center mb-2">
          <Mail className="text-red-600 mr-2" size={20} />
          <span>info@maxpowerfitness.com</span>
        </div>
        <div className="flex items-center mb-2">
          <MessageSquare className="text-red-600 mr-2" size={20} />
          <span>+1 (555) 123-4567</span>
        </div>
        <div className="flex items-center">
          <Calendar className="text-red-600 mr-2" size={20} />
          <span>Mon-Fri: 6am-10pm, Sat-Sun: 8am-8pm</span>
        </div>
      </div>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 rounded border" />
        <input type="email" placeholder="Email" className="w-full p-2 rounded border" />
        <textarea placeholder="Message" className="w-full p-2 rounded border h-32"></textarea>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  </Section>
);

const CTAForm = () => (
  <Section title="Start Your Fitness Journey Today" dark>
    <div className="max-w-md mx-auto">
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full p-2 rounded border" />
        <input type="email" placeholder="Email" className="w-full p-2 rounded border" />
        <input type="tel" placeholder="Phone" className="w-full p-2 rounded border" />
        <select className="w-full p-2 rounded border">
          <option value="">Select Membership Plan</option>
          <option value="basic">Basic</option>
          <option value="premium">Premium</option>
          <option value="elite">Elite</option>
        </select>
        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 w-full">
          Get Started
        </button>
      </form>
    </div>
  </Section>
);

const FAQItem = ({ question, answer }) => (
  <div className="mb-4">
    <h4 className="text-xl font-bold mb-2">{question}</h4>
    <p className="text-gray-600">{answer}</p>
  </div>
);

const FAQ = () => (
  <Section title="Frequently Asked Questions">
    <div className="grid md:grid-cols-2 gap-8">
      <FAQItem
        question="What are your operating hours?"
        answer="We are open Monday to Friday from 6am to 10pm, and Saturday to Sunday from 8am to 8pm."
      />
      <FAQItem
        question="Do you offer personal training?"
        answer="Yes, we offer personal training sessions with our certified trainers. You can book these separately or as part of our Elite membership plan."
      />
      <FAQItem
        question="Is there a joining fee?"
        answer="We occasionally run promotions with no joining fee. Please contact us or check our website for current offers."
      />
      <FAQItem
        question="Can I freeze my membership?"
        answer="Yes, you can freeze your membership for up to 3 months per year. Please contact our customer service team for details."
      />
    </div>
  </Section>
);

const MaxpowerFitnessSections = () => (
  <>
    <AboutUs />
    <ClassesOffered />
    <TrainerProfiles />
    <MembershipPlans />
    <Testimonials />
    <ContactUs />
    <CTAForm />
    <FAQ />
  </>
);

export default MaxpowerFitnessSections;