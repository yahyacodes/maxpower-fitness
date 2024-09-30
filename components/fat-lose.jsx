import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FatLossProgramForElders() {
  const programFeatures = [
    "Customized low-impact exercises",
    "Nutrition guidance tailored for seniors",
    "Regular health check-ups and progress tracking",
    "Social support group for motivation",
    "Gentle yoga and stretching sessions",
    "Supervised strength training",
  ];

  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-48 justify-between">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold mb-6">
              Fat Loss Program for Elders
            </h2>
            <p className="text-lg mb-6">
              Our specialized program is designed to help seniors achieve their
              weight loss goals safely and effectively. We understand the unique
              needs of older adults and provide a supportive environment for
              your fitness journey.
            </p>
            <ul className="space-y-3 mb-8">
              {programFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button size="lg" className="bg-red-600">
              Join the Program
            </Button>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.pexels.com/photos/4720509/pexels-photo-4720509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Seniors exercising"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
