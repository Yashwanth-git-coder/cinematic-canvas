import { useState, useCallback } from "react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ShowreelSection from "@/components/ShowreelSection";
import ToolsSection from "@/components/ToolsSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import CompaniesSection from "@/components/CompaniesSection";
import ContactSection from "@/components/ContactSection";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [loaded, setLoaded] = useState(false);
  const handleComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      <Loader onComplete={handleComplete} />
      {loaded && (
        <>
          <CustomCursor />
          <div className="grain-overlay" />
          <Navbar />
          <main>
            <HeroSection />
            <ShowreelSection />
            <ToolsSection />
            <ProjectsSection />
            <AboutSection />
            <CompaniesSection />
            <ContactSection />
          </main>
        </>
      )}
    </>
  );
};

export default Index;
