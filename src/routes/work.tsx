import { createFileRoute, Link } from "@tanstack/react-router";
import { Video, Image as ImageIcon, FileText, Table, Presentation, Palette, ArrowLeft } from "lucide-react";
import { MatrixBackground } from "@/components/MatrixBackground";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "More Work — Ahsan Mohammed" },
      { name: "description", content: "Extended portfolio: video edits, photo work, documents, sheets, presentations and digital art." },
      { property: "og:title", content: "More Work — Ahsan Mohammed" },
      { property: "og:description", content: "Extended portfolio of Ahsan Mohammed." },
    ],
  }),
  component: WorkPage,
});

const works = [
  { icon: Video, title: "AMV Video Collection", category: "Video Editing", badge: "50+", blurb: "Anime Music Videos showcasing advanced editing techniques and creative storytelling" },
  { icon: ImageIcon, title: "Client Photo Edits", category: "Photo Editing", badge: "Multiple", blurb: "Professional photo manipulation and enhancement for diverse client requirements" },
  { icon: FileText, title: "Biology Question Book", category: "Document Design", badge: "1 Publication", blurb: "Comprehensive educational resource on Blood Circulation created in Microsoft Word" },
  { icon: Table, title: "Daily Earnings Tracker", category: "Data Management", badge: "Ongoing", blurb: "Professional Excel sheets for financial tracking and analysis" },
  { icon: Presentation, title: "Class Presentations", category: "Presentation Design", badge: "Numerous", blurb: "Engaging PowerPoint presentations for educational purposes" },
  { icon: Palette, title: "Digital Arts", category: "Digital Art", badge: "Various", blurb: "Creative digital artwork and graphic design projects showcasing artistic skills" },
];

function WorkPage() {
  return (
    <main className="grain min-h-screen relative bg-background">
      <MatrixBackground />
      <div className="relative z-10 px-6 py-16 max-w-6xl mx-auto">
        <Reveal>
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-sm text-muted-foreground hover:text-foreground transition-colors mb-10"
          >
            <ArrowLeft className="h-4 w-4" />
            back_to_home
          </Link>
        </Reveal>

        <Reveal delay={60}>
          <p className="font-mono text-xs text-muted-foreground mb-3">// more_work</p>
        </Reveal>
        <Reveal delay={120}>
          <h1 className="text-4xl sm:text-5xl font-bold mb-12 tracking-tight font-sans">
            Everything <span className="text-muted-foreground italic font-mono">else.</span>
          </h1>
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {works.map((w, i) => {
            const Icon = w.icon;
            return (
              <Reveal key={w.title} from={i % 2 === 0 ? "left" : "right"} delay={i * 80}>
                <article className="glass-card hover-glow rounded-2xl p-6 h-full flex flex-col group hover:translate-y-[-2px] transition-transform duration-500">
                  <div className="flex items-start justify-between">
                    <div
                      className="h-12 w-12 rounded-xl flex items-center justify-center"
                      style={{ background: "linear-gradient(135deg, oklch(0.70 0.20 285), oklch(0.65 0.22 245))" }}
                    >
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <span className="chip text-[10px]">{w.badge}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold font-sans">{w.title}</h3>
                  <p className="mt-1 font-mono text-xs text-primary">{w.category}</p>
                  <p className="mt-4 font-mono text-sm text-muted-foreground leading-relaxed">{w.blurb}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </main>
  );
}
