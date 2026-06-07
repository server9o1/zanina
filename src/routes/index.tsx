import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { MatrixBackground } from "@/components/MatrixBackground";
import { SplitIntro } from "@/components/SplitIntro";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ahsan Mohammed Backend Developer & Designer" },
      { name: "description", content: "Ahsan Mohammed Backend Developer & Designer" },
      { property: "og:title", content: "Ahsan Mohammed Backend Developer & Designer" },
      { property: "og:description", content: "Ahsan Mohammed Backend Developer & Designer" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:image", content: "/og-image.png" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="grain min-h-screen relative bg-background">
      <MatrixBackground />
      <div className="relative z-10">
        <Nav />
        <SplitIntro />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </main>
  );
}
