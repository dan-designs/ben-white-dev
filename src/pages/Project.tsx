import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { projects } from "../data/projects";

export function Project() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-surface-alt">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-text">Project Not Found</h1>
          <Link to="/work" className="text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-2">Return to Work</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/work" className="inline-flex items-center gap-2 text-text/60 hover:text-primary transition-colors mb-12 font-bold uppercase tracking-wider text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-2 -ml-2">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        <div className="mb-16">
          <div className="flex flex-wrap gap-3 mb-6">
            {project.tags.map(tag => (
              <span key={tag} className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-4 py-1.5 rounded-[2px]">
                {tag}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-text mb-8">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl text-text/60 max-w-3xl leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="w-full aspect-[5/4] md:aspect-[21/9] rounded-[2px] overflow-hidden mb-16 bg-surface-alt">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.gallery.map((img, i) => (
            <div
              key={i}
              className="aspect-[4/5] rounded-[2px] overflow-hidden bg-surface-alt"
            >
              <img 
                src={img} 
                alt={`${project.title} gallery ${i + 1}`} 
                className="w-full h-full object-cover transition-opacity duration-500 hover:opacity-80"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-6 text-text">Interested in working together?</h2>
          <a
            href="mailto:BenWhiteIV@gmail.com?subject=Photography%20Inquiry"
            className="inline-block bg-primary text-surface px-8 py-4 rounded-[2px] hover:bg-primary-hover transition-all duration-300 font-bold uppercase tracking-wider focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          >
            Email Me
          </a>
        </div>
      </div>
    </div>
  );
}
