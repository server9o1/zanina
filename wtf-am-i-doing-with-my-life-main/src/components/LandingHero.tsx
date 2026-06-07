import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import profileImage from "@/assets/profile.jpg";
import heroBg from "@/assets/hero-bg.jpg";

interface LandingHeroProps {
  onReveal: () => void;
}

const LandingHero = ({ onReveal }: LandingHeroProps) => {
  const [isRevealing, setIsRevealing] = useState(false);

  const handleReveal = () => {
    setIsRevealing(true);
    setTimeout(() => {
      onReveal();
    }, 1000);
  };

  return (
    <section
      className={`min-h-screen relative flex items-center justify-center overflow-hidden transition-all duration-1000 ${
        isRevealing ? "clip-diagonal" : ""
      }`}
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-secondary/50" />
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="mb-6 sm:mb-8 inline-block">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto">
            <div className="absolute inset-0 rounded-full bg-gradient-accent animate-glow-pulse" />
            <img
              src={profileImage}
              alt="Ahsan Mohammed"
              className="relative w-full h-full rounded-full object-cover border-4 border-primary shadow-glow-strong transition-all duration-500 hover:scale-105 hover:border-primary/80 animate-fade-in"
              style={{ animationDelay: "0.1s" }}
            />
          </div>
        </div>

        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 sm:mb-8 animate-fade-in">
          <span className="block text-foreground">Ahsan</span>
          <span className="block text-primary">Mohammed</span>
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 sm:mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Night owl editor & digital creator
        </p>

        <Button
          onClick={handleReveal}
          size="lg"
          className="group relative overflow-hidden bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base sm:text-xl md:text-2xl px-8 sm:px-12 md:px-14 py-6 sm:py-7 md:py-8 rounded-full shadow-glow transition-all duration-300 hover:shadow-glow-strong hover:scale-105 animate-fade-in"
          style={{ animationDelay: "0.4s" }}
        >
          <span className="relative z-10">
            Explore Portfolio
          </span>
          <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>
      </div>

      <style>{`
        @keyframes clip-diagonal {
          from {
            clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
          }
          to {
            clip-path: polygon(0 0, 100% 0, 0 100%, 0 100%);
          }
        }
        .clip-diagonal {
          animation: clip-diagonal 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>
    </section>
  );
};

export default LandingHero;
