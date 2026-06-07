import { Reveal } from "./Reveal";

export function SplitIntro() {
  return (
    <section
      id="top"
      className="relative min-h-[calc(100vh-80px)] px-5 sm:px-6 py-10 sm:py-12 max-w-4xl mx-auto flex items-center"
    >
      <Reveal delay={80} from="up" className="w-full">
        <div className="relative glass-card no-glow rounded-3xl p-5 sm:p-8 flex flex-col overflow-hidden">
          <div className="relative flex items-center gap-2 pb-4 border-b border-border">
            <span className="size-3 rounded-full bg-code-red/80" />
            <span className="size-3 rounded-full bg-code-orange/80" />
            <span className="size-3 rounded-full bg-code-green/80" />
            <span className="ml-3 font-mono text-[12px] text-muted-foreground">
              bash — ahsan@portfolio: ~
            </span>
          </div>

          <Reveal typing speed={22} className="relative pt-6 flex-1 font-mono text-base sm:text-lg leading-relaxed">
            <div>
              <div className="flex gap-2">
                <span className="text-code-green">$</span>
                <span className="text-foreground">who am i</span>
              </div>
              <div className="pl-4 text-muted-foreground">Ahsan Mohammed</div>

              <div className="flex gap-2 mt-3">
                <span className="text-code-green">$</span>
                <span className="text-foreground">uptime</span>
              </div>
              <div className="pl-4 text-muted-foreground">
                2+ years delivering for clients and building passion projects
              </div>

              <div className="flex gap-2 mt-3">
                <span className="text-code-green">$</span>
                <span className="text-foreground">status --now</span>
              </div>
              <div className="pl-4 text-muted-foreground flex items-center gap-2">
                <span className="status-dot status-dot-late" aria-hidden />
                available_for_work
              </div>
            </div>
          </Reveal>

          <div className="relative pt-6 mt-6 border-t border-border flex flex-wrap gap-3">
            <a
              href="#projects"
              className="no-glow inline-flex items-center justify-center min-h-11 rounded-full bg-primary text-primary-foreground font-mono text-sm px-5 hover:opacity-90 transition"
            >
              ./view_projects →
            </a>
            <a
              href="#contact"
              className="no-glow inline-flex items-center justify-center min-h-11 rounded-full bg-card border border-border font-mono text-sm px-5 hover:bg-accent transition"
            >
              ./contact_me
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
