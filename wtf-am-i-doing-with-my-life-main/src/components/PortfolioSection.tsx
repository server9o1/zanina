import { Video, Image as ImageIcon, FileText, Table } from "lucide-react";

const projects = [
  {
    icon: Video,
    title: "AMV Video Collection",
    count: "50+",
    description: "Anime Music Videos showcasing advanced editing techniques and creative storytelling",
    category: "Video Editing",
  },
  {
    icon: ImageIcon,
    title: "Client Photo Edits",
    count: "Multiple",
    description: "Professional photo manipulation and enhancement for diverse client requirements",
    category: "Photo Editing",
  },
  {
    icon: FileText,
    title: "Biology Question Book",
    count: "1 Publication",
    description: "Comprehensive educational resource on Blood Circulation created in Microsoft Word",
    category: "Document Design",
  },
  {
    icon: Table,
    title: "Daily Earnings Tracker",
    count: "Ongoing",
    description: "Professional Excel sheets for financial tracking and analysis",
    category: "Data Management",
  },
  {
    icon: FileText,
    title: "Class Presentations",
    count: "Numerous",
    description: "Engaging PowerPoint presentations for educational purposes",
    category: "Presentation Design",
  },
  {
    icon: ImageIcon,
    title: "Digital Arts",
    count: "Various",
    description: "Creative digital artwork and graphic design projects showcasing artistic skills",
    category: "Digital Art",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-serif font-bold text-center mb-16 text-foreground">
          My <span className="text-primary">Portfolio</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-card border border-border rounded-2xl p-8 hover:border-primary transition-all duration-300 hover:shadow-glow hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <project.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <span className="text-primary font-bold text-sm bg-primary/10 px-3 py-1 rounded-full">
                  {project.count}
                </span>
              </div>

              <h3 className="text-2xl font-serif font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-primary/80 font-semibold mb-4 text-sm">
                {project.category}
              </p>

              <p className="text-muted-foreground leading-relaxed">
                {project.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
            Each project represents countless hours of dedication and creative problem-solving. 
            I approach every task with professionalism and a commitment to excellence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
