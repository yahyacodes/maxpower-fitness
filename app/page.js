import ContactUS from "@/components/contact-us";
import Courasel from "@/components/courasel";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Guidance from "@/components/Guidance";
import Hero from "@/components/hero";
import Join from "@/components/Join";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Hero />
        <Guidance />
        <Join />
        <Pricing />
        <Faqs />
        <ContactUS />
        <Footer />
      </div>
    </main>
  );
}
