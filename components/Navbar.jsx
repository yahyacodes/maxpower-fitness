import { Button } from "@/components/ui/button";
import { BicepsFlexed } from "lucide-react";

const Navbar = () => {
  return (
    <header className="px-4 py-6 flex justify-between items-center z-50">
      <div className="flex items-center space-x-2">
        <BicepsFlexed className="text-red-600" />
        <span className="font-bold text-xl text-white">MaxPower Fitness</span>
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
