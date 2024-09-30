"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

// const Hero = () => {
//   return (
//     <main className="container px-4 py-16 sm:py-24 lg:py-48 justify-between max-w-7xl">
//       <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
//         <div className="mt-0 md:mt-24 z-20">
//           <h1 className="lg:text-6xl text-primary md:text-5xl text-3xl font-bold mb-4">
//             Shape Your Body, Shape Your Destiny.
//           </h1>
//           <p className="text-customColor max-w-md mt-2 mb-4">
//             Our mission is to transform your health and fitness through
//             fundamental achievements, proving that even the smallest steps can
//             lead to significant results.
//           </p>
//           <div className="flex gap-4 mt-4">
//             <Button className="bg-secondary text-primary hover:bg-secondary/80">
//               Choose Your Course
//             </Button>
//           </div>
//         </div>
//         <div className="relative">
//           <div className="absolute top-0 right-[28rem] w-3/4 h-2/4 rounded-br-3xl bg-white z-10"></div>
//           <Image
//             src="/assets/the-rock.jpg"
//             alt="Your Digital Banking"
//             className="w-full rounded-3xl"
//             quality={100}
//             width={800}
//             height={400}
//           />
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Hero;
import Navbar from "./Navbar";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      {/* Hero Section */}
      <div className="flex-grow flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4">
            Unleash Your <span className="text-red-600">MaxPower</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
            Transform your body, elevate your mind, and push your limits at
            MaxPower Fitness. Join us and experience the power of premium
            equipment and expert guidance.
          </p>
          <Button
            size="lg"
            className="text-lg px-8 py-3 bg-red-600 hover:bg-red-700"
          >
            Start Your Journey
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
