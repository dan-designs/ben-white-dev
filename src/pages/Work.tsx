import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";

export function Work() {
  return (
    <div className="min-h-screen bg-surface pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-text mb-6">
            Selected <span className="text-primary">Work</span>
          </h1>
          <p className="text-lg text-text/80 max-w-2xl">
            A collection of commercial, event, and personal projects capturing unique moments and stories.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group flex flex-col"
            >
              <Link to={`/work/${project.id}`} className="relative overflow-hidden rounded-[2px] aspect-[5/4] mb-6 bg-surface-alt block focus:outline-none focus-visible:ring-4 focus-visible:ring-primary">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                />
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Link>
              
              <div className="flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-[2px]">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h2 className="text-2xl font-bold text-text mb-3 group-hover:text-primary transition-colors">
                  <Link to={`/work/${project.id}`} className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-1 -ml-1">{project.title}</Link>
                </h2>
                
                <p className="text-base text-text/80 mb-6 flex-grow">
                  {project.intro}
                </p>
                
                <Link 
                  to={`/work/${project.id}`} 
                  className="inline-flex items-center gap-2 text-text font-bold uppercase tracking-wider group-hover:text-primary transition-colors self-start focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-1 -ml-1"
                >
                  See More <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
