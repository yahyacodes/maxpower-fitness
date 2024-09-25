import Courasel from "@/components/courasel";
import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Guidance from "@/components/Guidance";
import Hero from "@/components/hero";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <main>
      <div className="flex flex-col items-center">
        <Navbar />
        <Hero />
      </div>
      <Courasel />
      <div className="flex flex-col items-center">
        <Guidance />
        <Join />
        <Pricing />
        <Faqs />
        <Footer />
      </div>
    </main>
  );
}
