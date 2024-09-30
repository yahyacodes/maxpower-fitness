import Image from "next/image";
import { Dumbbell, Heart, Brain, Users } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Services() {
  const services = [
    {
      icon: <Dumbbell className="h-8 w-8 text-red-600" />,
      title: "Strength Training",
      description:
        "Build muscle, increase strength, and boost your metabolism with our expert-led strength training programs.",
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: "Cardio Fitness",
      description:
        "Improve your heart health and endurance with our state-of-the-art cardio equipment and high-energy classes.",
      image:
        "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    },
    {
      icon: <Brain className="h-8 w-8 text-red-600" />,
      title: "Mind-Body Balance",
      description:
        "Find your center with our yoga and meditation classes, designed to reduce stress and improve flexibility.",
      image:
        "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80",
    },
    {
      icon: <Users className="h-8 w-8 text-red-600" />,
      title: "Group Classes",
      description:
        "Join our motivating group classes led by certified instructors for a fun and effective workout experience.",
      image:
        "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1375&q=80",
    },
  ];

  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-48 justify-between">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative h-[20rem]">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="flex items-center">
                  {service.icon}
                  <span className="ml-2">{service.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="max-w-md">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  );
}
