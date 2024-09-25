import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

const Faqs = () => {
  return (
    <main className="container px-4 py-16 sm:py-24 lg:py-36 justify-between">
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
            options or prefer the savings of an annual plan, we have membership
            options to suit your needs. Our staff can help you choose the best
            plan based on your fitness goals, schedule, and budget during a
            consultation.
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
            equipment, and even schedule a session with a personal trainer to
            get a feel for our gym. Contact us to schedule your trial session.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            Do you offer personal training services, and how do I get started?
          </AccordionTrigger>
          <AccordionContent>
            We provide personalized training services with certified
            professionals. To get started, you can book a consultation with one
            of our trainers who will assess your goals and create a tailored
            program for you. During this initial meeting, we'll discuss your
            fitness history, any health concerns, and your specific objectives
            to design a plan that works best for you.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>
            Do you provide nutritional guidance or meal planning services?
          </AccordionTrigger>
          <AccordionContent>
            Yes, we offer nutritional counseling and meal planning services as
            part of our holistic approach to fitness. Our certified
            nutritionists can work with you to develop a personalized nutrition
            plan that complements your fitness goals. This can include meal
            planning, dietary advice, and strategies to support your workout
            routine and overall health objectives.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>
            What happens if I'm injured or need assistance during a workout?
          </AccordionTrigger>
          <AccordionContent>
            Our staff is trained in first aid and can provide immediate
            assistance. We also have protocols in place for more serious
            situations. Additionally, our trainers can help modify your workout
            routine if you're recovering from an injury. We prioritize safety
            and will work with you to ensure you can continue your fitness
            journey while recovering, adapting exercises as needed.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Faqs;
