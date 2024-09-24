import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Guidance = () => {
  return (
    <main className="py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="grid grid-cols-2">
          <div className="mb-10 md:mb-0">
            <Image
              src="/assets/the-rock.jpg"
              alt="Fitness trainer"
              className="rounded-lg shadow-lg"
              width={600}
              height={400}
            />
          </div>

          <div className="md:pl-10">
            <h2 className="text-4xl font-bold mb-6">
              We believe that fitness is not just a destination, it's a journey
            </h2>
            <p className="text-xl mb-8">
              Connect with fellow members, participate in group classes, and
              enjoy your achievements as we celebrate success together.
            </p>
            <div className="space-y-4">
              <details open className="p-4 rounded-lg shadow-md">
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
              <details className="p-4 rounded-lg shadow-md">
                <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-orange-500 transition-colors duration-200">
                  Cutting-Edge Facilities
                </summary>
                <p className="mt-2 text-gray-600">
                  Our state-of-the-art gym is equipped with the latest fitness
                  technology and equipment to ensure you have everything you
                  need for a comprehensive workout. From cardio machines to free
                  weights, we've got you covered.
                </p>
              </details>
              <details className="p-4 rounded-lg shadow-md">
                <summary className="font-semibold cursor-pointer text-lg text-gray-800 hover:text-orange-500 transition-colors duration-200">
                  Flexible Membership Options
                </summary>
                <p className="mt-2 text-gray-600">
                  Choose from a variety of membership plans designed to fit your
                  schedule and fitness goals, from pay-as-you-go to unlimited
                  access options. We believe in providing flexibility to
                  accommodate your lifestyle.
                </p>
              </details>
            </div>
            <Button className="mt-8 bg-orange-500 text-white hover:bg-orange-600 transition-colors duration-200">
              Explore Our Classes
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Guidance;
