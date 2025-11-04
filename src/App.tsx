import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import HowItWorksSection from "./components/HowItWorksSection";
import AboutSection from "./components/AboutSection";
import CTASection from "./components/CTASection";
import Footer from "./components/Footer";
import ComingSoonPage from "./components/ComingSoonPage";
import { Toaster } from "sonner@2.0.3";

export default function App() {
  const [currentPage, setCurrentPage] = useState<
    "home" | "coming-soon"
  >("home");

  const navigateToComingSoon = () =>
    setCurrentPage("coming-soon");
  const navigateToHome = () => setCurrentPage("home");

  if (currentPage === "coming-soon") {
    return <ComingSoonPage onBackHome={navigateToHome} />;
  }

  return (
    <div className="min-h-screen w-full">
      <Toaster position="top-center" richColors />
      <Navbar onNavigateToComingSoon={navigateToComingSoon} />
      <HeroSection
        onNavigateToComingSoon={navigateToComingSoon}
      />
      <FeaturesSection
        onNavigateToComingSoon={navigateToComingSoon}
      />
      <HowItWorksSection />
      <AboutSection />
      <CTASection
        onNavigateToComingSoon={navigateToComingSoon}
      />
      <Footer />
    </div>
  );
}