import { Button } from "@/components/ui/button";
import { Mail, Instagram, Copy, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ParticlesBackground from "@/components/ParticlesBackground";

const ContactSection = () => {
  const { toast } = useToast();

  return (
    <section id="contact" className="py-24 bg-gradient-primary relative overflow-hidden">
      <ParticlesBackground />
      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-foreground">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Get in Touch Button Section */}
          <div className="flex flex-col items-center space-y-8">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-12 py-8 text-xl rounded-2xl shadow-glow hover:shadow-glow-strong transition-all duration-500 hover:scale-105"
                >
                  Get in Touch
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-[340px] p-0 border-2 border-primary/50 bg-card shadow-glow-strong backdrop-blur-sm">
                <div className="flex flex-col gap-3 p-4">
                  <div className="flex items-center gap-2 p-4 bg-background/50 border border-border rounded-xl">
                    <a
                      href="mailto:ahsanmohammed3343@gmail.com"
                      className="flex items-center gap-4 flex-1 hover:opacity-80 transition-opacity"
                    >
                      <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1 text-left">
                        <p className="text-xs text-muted-foreground">Email</p>
                        <p className="text-foreground font-semibold text-sm break-all">ahsanmohammed3343@gmail.com</p>
                      </div>
                    </a>
                    <button
                      onClick={() => {
                        navigator.clipboard.writeText("ahsanmohammed3343@gmail.com");
                        toast({
                          title: "Copied!",
                          description: "Email copied to clipboard",
                        });
                      }}
                      className="p-2 hover:bg-primary/10 rounded-lg transition-colors border border-border hover:border-primary"
                      aria-label="Copy email"
                    >
                      <Copy className="w-4 h-4 text-primary" />
                    </button>
                  </div>

                  <a
                    href="https://www.instagram.com/aa_xsan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background/50 border border-border rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 group/link"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover/link:bg-primary/30 transition-colors">
                      <Instagram className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-muted-foreground">Instagram</p>
                      <p className="text-foreground font-semibold text-sm">@aa_xsan</p>
                    </div>
                  </a>

                  <a
                    href="https://discordapp.com/users/861277171137249302"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 bg-background/50 border border-border rounded-xl hover:border-primary hover:bg-primary/10 transition-all duration-300 group/link"
                  >
                    <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center group-hover/link:bg-primary/30 transition-colors">
                      <MessageCircle className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 text-left">
                      <p className="text-xs text-muted-foreground">Discord</p>
                      <p className="text-foreground font-semibold text-sm">Connect on Discord</p>
                    </div>
                  </a>
                </div>
              </PopoverContent>
            </Popover>

            <p className="text-muted-foreground text-center max-w-2xl">
              Whether you need video editing, photo manipulation, or document creation, 
              I'm here to bring your vision to life. Click the button to see my contact options.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
