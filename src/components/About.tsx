import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="about" className="relative z-10 px-5 sm:px-6 py-20 sm:py-24 max-w-6xl mx-auto">
      <Reveal>
        <p className="font-mono text-xs text-muted-foreground mb-4">// about</p>
      </Reveal>

      <Reveal delay={80}>
        <div className="glass-card rounded-3xl p-6 sm:p-12">
          <div className="space-y-5 font-mono text-sm sm:text-base text-muted-foreground leading-relaxed">
            <p>
              I'm a Computer Science student currently pursuing A Levels and a recently graduated
              IGCSE candidate with A grades. I have over 2 years of experience working in the
              coding field with both clients and collaborative passion projects.
            </p>
            <p>
              I develop websites and high-performance web applications while also working in motion
              graphics editing, digital advertising, and content marketing. Over the years, I've
              completed numerous projects involving both frontend and backend development, giving
              me strong experience across the full development process.
            </p>
            <p>
              In addition, I have experience in UI/UX design, identity design, and social media
              marketing design, helping businesses stand out through compelling visual storytelling.
              I focus on delivering solutions that are both thoughtful and impactful.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {["student", "engineer", "frontend", "backend", "designer"].map((t) => (
              <span key={t} className="chip">{t}</span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
