import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Hero = () => {
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-32 justify-between max-w-7xl">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div className="mt-0 md:mt-24 z-20">
          <h1 className="lg:text-6xl text-primary md:text-5xl text-3xl font-bold mb-4">
            Shape Your Body, Shape Your Destiny.
          </h1>
          <p className="text-customColor max-w-md mt-2 mb-4">
            Our mission is to transform your health and fitness through
            fundamental achievements, proving that even the smallest steps can
            lead to significant results.
          </p>
          <div className="flex gap-4 mt-4">
            <Button className="bg-secondary text-primary hover:bg-secondary/80">
              Choose Your Course
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-0 right-[28rem] w-3/4 h-2/4 rounded-br-3xl bg-white z-10"></div>
          <Image
            src="/assets/the-rock.jpg"
            alt="Your Digital Banking"
            className="w-full rounded-3xl"
            quality={100}
            width={800}
            height={400}
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;
