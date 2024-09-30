import { Dumbbell, Users, Calendar, Award } from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Dumbbell className="h-10 w-10 text-red-600" />,
      title: "State-of-the-Art Equipment",
      description:
        "Access to the latest fitness technology and premium exercise machines for optimal workouts.",
    },
    {
      icon: <Users className="h-10 w-10 text-red-600" />,
      title: "Expert Trainers",
      description:
        "Our certified personal trainers provide tailored guidance to help you achieve your fitness goals.",
    },
    {
      icon: <Calendar className="h-10 w-10 text-red-600" />,
      title: "Flexible Class Schedule",
      description:
        "Wide variety of classes available throughout the day to fit your busy lifestyle.",
    },
    {
      icon: <Award className="h-10 w-10 text-red-600" />,
      title: "Proven Results",
      description:
        "Join thousands of satisfied members who have transformed their bodies and lives with MaxPower.",
    },
  ];

  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-48 justify-between">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose MaxPower Fitness?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-card rounded-lg hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
