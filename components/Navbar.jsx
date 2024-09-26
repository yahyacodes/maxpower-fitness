import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className="px-4 py-6 flex justify-between items-center z-50">
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
          className="text-red-600"
        >
          <path d="M18 8h1a4 4 0 0 1 0 8h-1"></path>
          <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path>
          <line x1="6" y1="1" x2="6" y2="4"></line>
          <line x1="10" y1="1" x2="10" y2="4"></line>
          <line x1="14" y1="1" x2="14" y2="4"></line>
        </svg>
        <span className="font-bold text-xl text-white">CROSSFIT</span>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="#" className="hover:text-red-600 text-white">
          Home
        </a>
        <a href="#" className="hover:text-red-600 text-white">
          About
        </a>
        <a href="#" className="hover:text-red-600 text-white">
          Services
        </a>
        <a href="#" className="hover:text-red-600 text-white">
          Pricing
        </a>
        <a href="#" className="hover:text-red-600 text-white">
          Blog
        </a>
      </nav>
      <Button className="bg-red-600 hover:bg-red-700 text-white">
        Become a Member
      </Button>
    </header>
  );
};

export default Navbar;
