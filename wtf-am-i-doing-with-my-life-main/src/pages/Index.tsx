import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import LandingHero from "@/components/LandingHero";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="min-h-screen">
      {!showPortfolio ? (
        <LandingHero onReveal={() => setShowPortfolio(true)} />
      ) : (
        <main className="animate-slide-in-diagonal relative">
          {/* Back to Home Button */}
          <button
            onClick={() => setShowPortfolio(false)}
            className="fixed top-6 left-6 z-50 p-3 bg-card border border-border rounded-full opacity-50 hover:opacity-100 hover:border-primary hover:shadow-glow transition-all duration-300 group"
            aria-label="Back to home"
          >
            <ArrowLeft className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
          </button>

          <AboutSection />
          <ExperienceSection />
          <PortfolioSection />
          <ContactSection />
          
          <footer className="bg-background border-t border-border py-8">
            <div className="container mx-auto px-6 text-center">
                <p className="text-muted-foreground">
                  © 2026 Ahsan Mohammed. All rights reserved.
                </p>
              <p className="text-sm text-muted-foreground mt-2">
                Self-taught expert • Digital artist
              </p>
            </div>
          </footer>
        </main>
      )}
    </div>
  );
};

export default Index;
