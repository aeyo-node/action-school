import Hero from "@/components/Hero";
import PlaneMorph from "@/components/PlaneMorph";
import AboutSection from "@/components/AboutSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import AdvantagesSection from "@/components/AdvantagesSection";
import FutureSection from "@/components/FutureSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    // Stacked layout
    <main className="w-full bg-rich-black relative">
      <Hero />
      <PlaneMorph />
      <AboutSection />
      <ActivitiesSection />
      <AdvantagesSection />
      <FutureSection />
      <Footer />
    </main>
  );
}


