import ContactUS from "@/components/contact-us";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Hero from "@/components/hero";
import FatLossProgramForElders from "@/components/fat-lose";
import Pricing from "@/components/Pricing";
import Features from "@/components/features";
import Services from "@/components/Services";
import ClassSchedule from "@/components/class-schedule";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Hero />
        <Features />
        <Services />
        <FatLossProgramForElders />
        <ClassSchedule />
        <Pricing />
        <Faqs />
        <ContactUS />
        <Footer />
      </div>
    </main>
  );
}
