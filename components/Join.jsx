import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Join = () => {
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-36 justify-between">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-4xl font-bold mb-6">
            Join the Movement, Embrace the Difference
          </h2>
          <p className="text-xl mb-8">
            Our team of experienced trainers is here to guide you every step of
            the way. Whether you're a beginner or an advanced athlete, we have
            programs tailored to help you achieve your fitness goals.
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
          <Image
            src="/assets/the-rock.jpg"
            alt="Fitness class"
            className="rounded-lg"
            width={800}
            height={400}
          />
        </div>
      </div>
    </main>
  );
};

export default Join;
