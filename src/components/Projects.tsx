import { Link } from "react-router-dom";
import { Reveal } from "./Reveal";
import homelab1 from "@/assets/homelab-1.jpeg";
import homelab2 from "@/assets/homelab-2.jpeg";

type Project = {
  name: string;
  tag: string;
  stack: string[];
  blurb: string;
  images?: string[];
  compact?: boolean;
};

const projects: Project[] = [
  {
    name: "Homelab Cluster",
    tag: "Self-hosted compute",
    stack: ["Linux", "Docker", "Blender", "After Effects"],
    blurb:
      "A homelab built from an old laptop unit clustered with my primary rig. It runs as a headless build dedicated to rendering Blender scenes and exporting After Effects comps without choking my main machine. I can flip a switch and use its built-in display as a second monitor for reference footage, timelines, or as a live performance monitor showing CPU, GPU, RAM and render queue stats. It also quietly hosts a few local websites and services, so I can keep chipping away at projects without leaning on cloud subscriptions.",
    images: [homelab1, homelab2],
  },
  {
    name: "Device Monitor",
    tag: "Cross-device dashboard",
    stack: ["Node.js", "WebSockets", "React"],
    blurb:
      "A custom monitoring application that manages four devices... old PC unit, primary PC, laptop, and tablet. The system surfaces detailed performance stats in a single dashboard and lets me control all devices from my phone, including switching display and control between them seamlessly.",
    compact: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative z-10 px-5 sm:px-6 py-20 sm:py-24 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs text-muted-foreground mb-10 sm:mb-12">// projects</p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-5 sm:gap-6 items-stretch max-w-xl md:max-w-none mx-auto">
        {projects.map((p, i) => (
          <Reveal key={p.name} from={i % 2 === 0 ? "left" : "right"} delay={i * 120} className="h-full">
            {p.compact ? (
              <div className="flex flex-col gap-5 sm:gap-6 h-full">
                <article className="glass-card hover-glow rounded-2xl p-6 sm:p-7 group hover:translate-y-[-2px] transition-transform duration-500 flex flex-col">
                  <h3 className="text-2xl sm:text-2xl font-bold font-sans">{p.name}</h3>
                  <p className="mt-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="chip text-[11px] px-2.5 py-0.5">{s}</span>
                    ))}
                  </div>
                  <p className="mt-4 font-mono text-sm sm:text-[15px] text-muted-foreground leading-relaxed">{p.blurb}</p>
                </article>

                <Link
                  to="/work"
                  className="ribbon-card glass-card hover-glow rounded-2xl p-6 sm:p-7 flex flex-col items-center justify-center text-center group hover:translate-y-[-2px] transition-transform duration-500 min-h-[120px] relative overflow-hidden"
                >
                  <span className="ribbon-shine" aria-hidden="true" />
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground relative z-10">// more_work</p>
                  <h3 className="mt-1 text-xl sm:text-2xl font-bold font-sans relative z-10 flex items-center gap-2">
                    See more
                    <span className="text-primary inline-block transition-transform duration-500 group-hover:translate-x-2">→</span>
                  </h3>
                </Link>
              </div>
            ) : (
              <article className="glass-card hover-glow rounded-3xl p-7 sm:p-10 h-full group hover:translate-y-[-2px] transition-transform duration-500">
                <h3 className="text-2xl sm:text-3xl font-bold font-sans">{p.name}</h3>
                <p className="mt-3 font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="chip">{s}</span>
                  ))}
                </div>
                <p className="mt-6 font-mono text-sm text-muted-foreground leading-relaxed">{p.blurb}</p>
                {p.images && p.images.length > 0 && (
                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {p.images.map((src, idx) => (
                      <div
                        key={idx}
                        className="relative overflow-hidden rounded-xl border border-border aspect-[4/3] bg-black/30"
                      >
                        <img
                          src={src}
                          alt={`${p.name} photo ${idx + 1}`}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </article>
            )}
          </Reveal>
        ))}
      </div>
    </section>
  );
}
