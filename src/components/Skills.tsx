import { Server, Cpu, Database, Code2, Cloud, GitBranch } from "lucide-react";
import { Reveal } from "./Reveal";

function Window({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card rounded-3xl overflow-hidden h-full w-full">
      <div className="flex items-center gap-2 px-5 py-3 border-b border-border bg-card/50">
        <span className="size-3 rounded-full bg-code-red/80" />
        <span className="size-3 rounded-full bg-code-orange/80" />
        <span className="size-3 rounded-full bg-code-green/80" />
        <span className="ml-3 font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="p-5 sm:p-6 font-mono text-sm overflow-x-auto">{children}</div>
    </div>
  );
}

const muted = "text-muted-foreground";
const fg = "text-foreground";
const green = "text-code-green";

const stacks = [
  {
    icon: Code2,
    title: "frontend.stack",
    items: ["React", "Next.js", "TypeScript", "Tailwind"],
    from: "right" as const,
  },
  {
    icon: Database,
    title: "backend.stack",
    items: ["Node.js", "PostgreSQL", "Python", "Firebase"],
    from: "center" as const,
  },
  {
    icon: Server,
    title: "infra.stack",
    items: ["Linux", "Docker", "Homelab", "Cloudflare"],
    from: "left" as const,
  },
  {
    icon: Cpu,
    title: "tools.stack",
    items: ["Git", "Figma", "Blender", "After Effects"],
    from: "center" as const,
  },
  {
    icon: GitBranch,
    title: "workflow.stack",
    items: ["CI/CD", "Bash", "Automation", "Self-hosting"],
    from: "right" as const,
  },
  {
    icon: Cloud,
    title: "deploy.stack",
    items: ["Vercel", "Cloudflare", "Render", "VPS"],
    from: "left" as const,
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative z-10 px-5 sm:px-6 pb-20 sm:pb-24 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs text-muted-foreground mb-4">// skills</p>
      </Reveal>

      <div className="grid md:grid-cols-2 gap-6 max-w-xl md:max-w-none mx-auto">
        <Reveal from="left">
          <Window title="skills.tsx">
            <pre className="whitespace-pre-wrap break-words leading-relaxed text-[12px] sm:text-sm">
              <code>
                <span className={muted}>const</span> <span className={fg}>ahsan_mohammed</span> = {"{"}
                {"\n  "}<span className={fg}>pronouns</span>: [<span className={green}>"he"</span>, <span className={green}>"him"</span>],
                {"\n  "}<span className={fg}>languages</span>: [<span className={green}>"JavaScript"</span>, <span className={green}>"TypeScript"</span>, <span className={green}>"Python"</span>],
                {"\n  "}<span className={fg}>askMeAbout</span>: [<span className={green}>"web dev"</span>, <span className={green}>"video editor"</span>],
                {"\n  "}<span className={fg}>technologies</span>: {"{"}
                {"\n    "}<span className={fg}>frontEnd</span>: [<span className={green}>"React.js"</span>, <span className={green}>"Next.js"</span>, <span className={green}>"Tailwind"</span>, <span className={green}>"Shadcn"</span>],
                {"\n    "}<span className={fg}>backEnd</span>: [<span className={green}>"Node.js"</span>, <span className={green}>"PostgreSQL"</span>, <span className={green}>"Firebase"</span>],
                {"\n    "}<span className={fg}>tools</span>: [<span className={green}>"Git"</span>, <span className={green}>"Docker"</span>, <span className={green}>"Figma"</span>, <span className={green}>"Linux"</span>],
                {"\n  "}{"}"}
                {"\n"}{"}"};
              </code>
            </pre>
          </Window>
        </Reveal>

        <Reveal from="right" delay={120}>
          <Window title="hobbies.txt">
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Everything in my journey has been self-taught, and I genuinely love learning.
                I'm passionate about coding, photography, videography, filmmaking, traveling,
                and researching random topics online, it keeps me curious and grounded.
              </p>
              <p>
                I also love watching anime, reading books and novels, and hanging out with
                family whenever I get the chance.
              </p>
            </div>
          </Window>
        </Reveal>
      </div>

      <div className="mt-10">
        <Reveal>
          <p className="font-mono text-xs text-muted-foreground mb-4">// stack_overview</p>
        </Reveal>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-5 mx-auto">
          {stacks.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.title} from={s.from} delay={i * 90}>
                <div className="glass-card hover-glow rounded-2xl p-4 sm:p-6 h-full flex flex-col gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <span className="grid place-items-center size-9 sm:size-10 rounded-xl bg-accent border border-border shrink-0">
                      <Icon className="size-4 sm:size-5 text-foreground" />
                    </span>
                    <span className="font-mono text-[11px] sm:text-sm text-muted-foreground truncate">{s.title}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                    {s.items.map((it) => (
                      <span key={it} className="chip">{it}</span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
