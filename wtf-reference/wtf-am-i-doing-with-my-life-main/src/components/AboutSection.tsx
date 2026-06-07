import { GraduationCap, Palette } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-primary">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-6xl font-serif font-bold text-center mb-16 text-foreground">
            About <span className="text-primary">Me</span>
          </h2>

          <div className="space-y-8">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Palette className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">Creative Editor</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-3">
                    Hi there, I'm a CS student and great at editing videos, photos, and writing documents. 
                    I can edit high-resolution videos based on your needs, such as gaming, IRL content, or 
                    cooking videos. I also create thumbnails and manipulate photos.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    I've created tons of digital notes, an Excel sheet for my freelance earnings, 
                    and some solid PowerPoint presentations. I'm also a digital artist, so I'm pretty good with 
                    creative visuals too. I can make websites as well, though I don't work on them much. 
                    Maybe we can get in touch, check out my socials!
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-glow transition-all duration-300">
              <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                <div className="w-14 h-14 md:w-20 md:h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 md:w-10 md:h-10 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-serif font-bold mb-3 text-foreground">Academic Excellence</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Recent IGCSE graduate with an A grade. My dedication to learning extends beyond 
                    academics into mastering industry-standard creative software through self-teaching 
                    and continuous practice.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
