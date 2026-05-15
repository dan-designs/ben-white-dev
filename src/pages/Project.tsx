import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "../data/projects";

export function Project() {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => setLightboxOpen(false);

  const nextImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev + 1) % project.gallery.length);
  };

  const prevImage = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, project.gallery.length]);

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <Link to="/work" className="inline-flex items-center gap-2 text-text/80 hover:text-primary transition-colors mb-8 font-bold uppercase tracking-wider text-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-2 -ml-2">
          <ArrowLeft className="w-4 h-4" /> Back to Work
        </Link>

        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mb-16 items-start">
          <div className="w-full md:w-1/3 md:sticky md:top-32">
            <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-text mb-4">
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-[2px]">
                  {tag}
                </span>
              ))}
            </div>
            <p className="text-base text-text/80 leading-relaxed">
              {project.description}
            </p>
            
            <div className="mt-12 hidden md:block">
              <h2 className="text-sm font-bold uppercase tracking-tight mb-4 text-text">Interested in working together?</h2>
              <a
                href="mailto:benjahphotography@gmail.com?subject=Photography%20Inquiry"
                className="inline-block bg-primary text-surface px-6 py-3 rounded-[2px] hover:bg-primary-hover transition-all duration-300 font-bold uppercase tracking-wider text-xs focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
              >
                Email Me
              </a>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <div className="columns-1 sm:columns-2 gap-4 md:gap-6 space-y-4 md:space-y-6">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="break-inside-avoid rounded-[2px] overflow-hidden bg-surface-alt cursor-pointer"
                  onClick={() => openLightbox(i)}
                >
                  <img 
                    src={img} 
                    alt={`${project.title} gallery ${i + 1}`} 
                    className="w-full h-auto object-cover transition-opacity duration-500 hover:opacity-90"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center md:hidden">
          <h2 className="text-2xl font-bold uppercase tracking-tight mb-6 text-text">Interested in working together?</h2>
          <a
            href="mailto:benjahphotography@gmail.com?subject=Photography%20Inquiry"
            className="inline-block bg-primary text-surface px-8 py-4 rounded-[2px] hover:bg-primary-hover transition-all duration-300 font-bold uppercase tracking-wider focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50"
          >
            Email Me
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors focus:outline-none"
          >
            <X className="w-8 h-8" />
          </button>
          
          <button 
            onClick={prevImage}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors focus:outline-none p-2"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          
          <img 
            src={project.gallery[currentImageIndex]} 
            alt={`Lightbox ${currentImageIndex}`}
            className="max-w-full max-h-[85vh] object-contain ml-auto mr-auto"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button 
            onClick={nextImage}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors focus:outline-none p-2"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
        </div>
      )}
    </div>
  );
}
