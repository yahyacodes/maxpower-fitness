import Faqs from "@/components/Faqs";
import Footer from "@/components/Footer";
import Guidance from "@/components/Guidance";
import Hero from "@/components/hero";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <Navbar />
      <Hero />
      <Guidance />
      <Join />
      <Pricing />
      <Faqs />
      <Footer />
    </main>
  );
}
