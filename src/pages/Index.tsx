import { Nav } from "@/components/Nav";
import { MatrixBackground } from "@/components/MatrixBackground";
import { SplitIntro } from "@/components/SplitIntro";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";

export default function Index() {
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
