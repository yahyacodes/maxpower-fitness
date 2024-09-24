import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function CrossFitLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-orange-500"
          >
            <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
            <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
            <line x1="6" y1="1" x2="6" y2="4"></line>
            <line x1="10" y1="1" x2="10" y2="4"></line>
            <line x1="14" y1="1" x2="14" y2="4"></line>
          </svg>
          <span className="font-bold text-xl">CROSSFIT</span>
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:text-orange-500">
            Home
          </a>
          <a href="#" className="hover:text-orange-500">
            About
          </a>
          <a href="#" className="hover:text-orange-500">
            Services
          </a>
          <a href="#" className="hover:text-orange-500">
            Pricing
          </a>
          <a href="#" className="hover:text-orange-500">
            Blog
          </a>
        </nav>
        <Button className="bg-gray-900 text-white hover:bg-gray-800">
          Contact Us
        </Button>
      </header>

      <main>
        <section className="container mx-auto px-4 py-20 flex flex-col md:flex-row items-center">
            <div className="grid grid-cols-2">
          <div className="mb-10 md:mb-0 bg-white">
            <h1 className="text-5xl font-bold mb-6">
              Shape Your Body, Shape Your Destiny.
            </h1>
            <p className="text-xl mb-8">
              Our mission is to transform your health and fitness through
              fundamental achievements, proving that even the smallest steps can
              lead to significant results.
            </p>
            <Button className="bg-orange-500 text-white hover:bg-orange-600">
              Choose Your Course
            </Button>
          </div>
          <div className="md:w-1/2 relative">
            <div className="absolute top-0 right-0 w-3/4 h-3/4 bg-orange-200 rounded-full -z-10"></div>
            <Image
              src="/assets/the-rock.jpg"
              alt="Fitness model"
              className="relative rounded-3xl"
              width={400}
              height={600}
            />
          </div>
            </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Fitness trainer"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-10">
              <h2 className="text-4xl font-bold mb-6">
                We believe that fitness is not just a destination, it's a
                journey
              </h2>
              <p className="text-xl mb-8">
                Connect with fellow members, participate in group classes, and
                enjoy your achievements as we celebrate success together.
              </p>
              <div className="space-y-4">
                <details open className="bg-white p-4 rounded-lg shadow-md">
                  <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-orange-500 transition-colors duration-200">
                    Expert Guidance
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Immerse yourself in a fitness experience like no other. Our
                    expert trainers guide you using advanced equipment, diverse
                    training plans, and personalized programs to keep your
                    workouts fresh and effective.
                  </p>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-md">
                  <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-orange-500 transition-colors duration-200">
                    Cutting-Edge Facilities
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Our state-of-the-art gym is equipped with the latest fitness
                    technology and equipment to ensure you have everything you
                    need for a comprehensive workout. From cardio machines to
                    free weights, we've got you covered.
                  </p>
                </details>
                <details className="bg-white p-4 rounded-lg shadow-md">
                  <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-orange-500 transition-colors duration-200">
                    Flexible Membership Options
                  </summary>
                  <p className="mt-2 text-gray-600">
                    Choose from a variety of membership plans designed to fit
                    your schedule and fitness goals, from pay-as-you-go to
                    unlimited access options. We believe in providing
                    flexibility to accommodate your lifestyle.
                  </p>
                </details>
              </div>
              <Button className="mt-8 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200">
                Explore Our Classes
              </Button>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <div className="flex flex-wrap justify-between items-center mb-10">
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500 inline-block mr-2"
              >
                <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
                <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
                <line x1="6" y1="1" x2="6" y2="4"></line>
                <line x1="10" y1="1" x2="10" y2="4"></line>
                <line x1="14" y1="1" x2="14" y2="4"></line>
              </svg>
              Get Adequate Sleep
            </div>
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500 inline-block mr-2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Include Rest Days
            </div>
            <div className="w-full md:w-auto mb-4 md:mb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500 inline-block mr-2"
              >
                <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path>
                <line x1="4" y1="22" x2="4" y2="15"></line>
              </svg>
              Focus on Form
            </div>
            <div className="w-full md:w-auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-orange-500 inline-block mr-2"
              >
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
              </svg>
              Stay Consistent
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-4xl font-bold mb-6">
                Join the Movement, Embrace the Difference
              </h2>
              <p className="text-xl mb-8">
                Our team of experienced trainers is here to guide you every step
                of the way. Whether you're a beginner or an advanced athlete, we
                have programs tailored to help you achieve your fitness goals.
              </p>
              <div className="flex items-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-500 mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Flexible Membership</span>
              </div>
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-orange-500 mr-2"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                <span>Specialized Programs</span>
              </div>
              <Button className="mt-8 bg-orange-500 text-white hover:bg-orange-600">
                Explore Our Courses
              </Button>
            </div>
            <div className="md:w-1/2 md:pl-10">
              <img
                src="/placeholder.svg?height=500&width=400"
                alt="Fitness class"
                className="rounded-lg"
              />
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">
              Choose Your Fitness Journey
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Basic Membership Card */}

              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    One Month Membership
                  </h3>
                  <p className="text-gray-600 mb-6">
                    For dedicated fitness enthusiasts seeking maximum results
                  </p>
                  <div className="text-4xl font-bold mb-6">
                    5,500Ksh<span className="text-xl font-normal">/month</span>
                  </div>
                  <ul className="mb-8 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Unlimited gym access
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Unlimited group classes
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      1 personal training session/month
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Nutrition consultation
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Choose Plan
                  </Button>
                </div>
              </div>

              {/* Premium Membership Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden border-2 border-orange-500">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Three Months Membership
                  </h3>
                  <p className="text-gray-600 mb-6">
                    For dedicated fitness enthusiasts seeking maximum results
                  </p>
                  <div className="text-4xl font-bold mb-6">
                    14,000Ksh<span className="text-xl font-normal">/month</span>
                  </div>
                  <ul className="mb-8 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Unlimited gym access
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Unlimited group classes
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      1 personal training session/month
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Nutrition consultation
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Choose Plan
                  </Button>
                </div>
              </div>

              {/* Personalized Plan Card */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4">
                    Personalized Plan
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Tailored to your specific fitness goals and needs whether
                    you are loosing weight or loosing fat
                  </p>
                  <div className="text-4xl font-bold mb-6">
                    Contact us<span className="text-xl font-normal"></span>
                  </div>
                  <ul className="mb-8 space-y-2">
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Unlimited gym access
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Unlimited group classes
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      1 personal training session/month
                    </li>
                    <li className="flex items-center">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      Nutrition consultation
                    </li>
                  </ul>
                </div>
                <div className="p-4">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Request Personalized Plan
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 py-20">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion
            type="single"
            collapsible
            className="w-full max-w-3xl mx-auto"
            defaultValue="item-1"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I know which membership option is right for me?
              </AccordionTrigger>
              <AccordionContent>
                We offer various plans to cater to different fitness goals and
                schedules. Whether you're looking for flexible month-to-month
                options or prefer the savings of an annual plan, we have
                membership options to suit your needs. Our staff can help you
                choose the best plan based on your fitness goals, schedule, and
                budget during a consultation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                Can I try out the gym before committing to a membership?
              </AccordionTrigger>
              <AccordionContent>
                Yes! We offer a free trial period where you can experience our
                facilities, classes, and community before making a commitment.
                During this trial, you can participate in group classes, use our
                equipment, and even schedule a session with a personal trainer
                to get a feel for our gym. Contact us to schedule your trial
                session.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Do you offer personal training services, and how do I get
                started?
              </AccordionTrigger>
              <AccordionContent>
                We provide personalized training services with certified
                professionals. To get started, you can book a consultation with
                one of our trainers who will assess your goals and create a
                tailored program for you. During this initial meeting, we'll
                discuss your fitness history, any health concerns, and your
                specific objectives to design a plan that works best for you.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Do you provide nutritional guidance or meal planning services?
              </AccordionTrigger>
              <AccordionContent>
                Yes, we offer nutritional counseling and meal planning services
                as part of our holistic approach to fitness. Our certified
                nutritionists can work with you to develop a personalized
                nutrition plan that complements your fitness goals. This can
                include meal planning, dietary advice, and strategies to support
                your workout routine and overall health objectives.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What happens if I'm injured or need assistance during a workout?
              </AccordionTrigger>
              <AccordionContent>
                Our staff is trained in first aid and can provide immediate
                assistance. We also have protocols in place for more serious
                situations. Additionally, our trainers can help modify your
                workout routine if you're recovering from an injury. We
                prioritize safety and will work with you to ensure you can
                continue your fitness journey while recovering, adapting
                exercises as needed.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-10 text-center">
              Subscribe to our newsletter
            </h2>
            <p className="text-center mb-8">
              Join our newsletter to get latest news, offers, and updates.
            </p>
            <form className="max-w-md mx-auto flex">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow mr-2"
              />
              <Button
                type="submit"
                className="bg-orange-500 text-white hover:bg-orange-600"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Our Services</h3>
              <ul className="space-y-2">
                <li>Personal Training</li>
                <li>Group Classes</li>
                <li>Nutritional Counseling</li>
                <li>Cardiovascular Training</li>
                <li>Strength Training</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-orange-500">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-orange-500">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">
                Our Address & Contact
              </h3>
              <p>123 Fitness Street, Healthyville, FT 12345</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: info@crossfit.com</p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2023 CrossFit. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a href="#" className="hover:text-orange-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
