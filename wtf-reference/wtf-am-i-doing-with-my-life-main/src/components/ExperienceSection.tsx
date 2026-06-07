import { Calendar, Award, GraduationCap } from "lucide-react";
import { useState, useEffect } from "react";
import certificate1 from "@/assets/certificate-1.png";
import certificate2 from "@/assets/certificate-2.png";

const experiences = [
  {
    skill: "Microsoft Office Suite",
    tools: "Word, Excel, PowerPoint",
    duration: "9 years",
    description: "Mastered document creation, data analysis, and professional presentations",
  },
  {
    skill: "Adobe Premiere Pro",
    tools: "Video Editing",
    duration: "7 years",
    description: "Professional video editing including 50+ AMV edits and client projects",
  },
  {
    skill: "Adobe Photoshop CC",
    tools: "Photo Editing",
    duration: "4 years",
    description: "Advanced photo manipulation and design for diverse client needs",
  },
  {
    skill: "Adobe After Effects",
    tools: "Motion Graphics",
    duration: "2 years",
    description: "Creating dynamic motion graphics and visual effects",
  },
  {
    skill: "UI/UX Web Designer & Builder",
    tools: "Web Design & Development",
    duration: "2 years",
    description: "Creating modern, user-friendly websites with positive client feedback and satisfaction",
  },
];

const certificates = [
  {
    name: "CS50x: Introduction to Computer Science",
    issuer: "HarvardX",
    image: certificate1,
  },
  {
    name: "CS50 Certificate",
    issuer: "Harvard University",
    image: certificate2,
  },
];

const ExperienceSection = () => {
  const [viewingCertificate, setViewingCertificate] = useState<number | null>(null);
  const [isBlurred, setIsBlurred] = useState(false);

  // Blur content when tab loses focus (screenshot deterrent)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Prevent context menu (right-click)
  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
  };

  // Prevent drag
  const handleDragStart = (e: React.DragEvent) => {
    e.preventDefault();
  };

  return (
    <section id="experience" className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-foreground">
          My <span className="text-primary">Skills</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-secondary/30 border border-primary/20 rounded-2xl p-8 mb-12 text-center">
            <Award className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-serif font-bold mb-4 text-foreground">
              Self-Taught Mastery
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Every skill I possess has been acquired through dedication, practice, and self-learning. 
              I believe in continuous improvement and am always willing to seek help when facing new challenges.
            </p>
          </div>

          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <div
                key={exp.skill}
                className="relative bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-primary" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-2xl font-serif font-bold text-foreground">
                        {exp.skill}
                      </h3>
                      <span className="text-primary font-bold text-lg whitespace-nowrap ml-4">
                        {exp.duration}
                      </span>
                    </div>
                    
                    <p className="text-primary/80 font-semibold mb-3">{exp.tools}</p>
                    
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Certificates Section */}
          <div className="mt-16">
            <div className="flex items-center justify-center gap-4 mb-8">
              <GraduationCap className="w-10 h-10 text-primary" />
              <h3 className="text-3xl font-serif font-bold text-foreground">
                Certificates
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 hover:border-primary transition-all duration-300 hover:shadow-glow cursor-pointer"
                  onClick={() => setViewingCertificate(index)}
                >
                  <div 
                    className="relative overflow-hidden rounded-lg mb-4 select-none"
                    onContextMenu={handleContextMenu}
                    onDragStart={handleDragStart}
                  >
                    <img
                      src={cert.image}
                      alt={cert.name}
                      className="w-full h-48 object-cover object-top pointer-events-none select-none"
                      draggable={false}
                      style={{ userSelect: "none", WebkitUserSelect: "none" }}
                    />
                    <div className="absolute inset-0 bg-transparent" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-foreground mb-1">
                    {cert.name}
                  </h4>
                  <p className="text-primary text-sm">{cert.issuer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Certificate Modal Viewer */}
      {viewingCertificate !== null && (
        <div
          className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center p-4"
          onClick={() => setViewingCertificate(null)}
          onContextMenu={handleContextMenu}
        >
          <div 
            className={`relative max-w-4xl w-full transition-all duration-300 ${isBlurred ? 'blur-xl' : ''}`}
            onClick={(e) => e.stopPropagation()}
            onContextMenu={handleContextMenu}
            onDragStart={handleDragStart}
          >
            <button
              onClick={() => setViewingCertificate(null)}
              className="absolute -top-12 right-0 text-foreground hover:text-primary transition-colors text-lg"
            >
              Close ✕
            </button>
            <div className="relative select-none">
              <img
                src={certificates[viewingCertificate].image}
                alt={certificates[viewingCertificate].name}
                className="w-full h-auto rounded-lg pointer-events-none select-none"
                draggable={false}
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
              />
              {/* Overlay to prevent interactions */}
              <div className="absolute inset-0 bg-transparent" />
              {/* Watermark overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none select-none">
                <span className="text-6xl font-bold text-foreground rotate-[-30deg]">
                  AHSAN MOHAMMED
                </span>
              </div>
            </div>
            <div className="mt-4 text-center">
              <h4 className="text-xl font-serif font-bold text-foreground">
                {certificates[viewingCertificate].name}
              </h4>
              <p className="text-primary">{certificates[viewingCertificate].issuer}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;
