import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { projects } from "../data/projects";

export function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Reduced parallax

  const services = [
    "PORTRAIT", "EVENT", "PRODUCT", "BLOG", "PRINTS", "WORK"
  ];

  const quotes = [
    { text: "Ben captured the essence of our brand perfectly. Highly recommended!", author: "HJ Holtz & Son" },
    { text: "The photos from our event were absolutely stunning. A true professional.", author: "Drive Shack" },
    { text: "Creative, versatile, and a joy to work with.", author: "SUPPLY" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-surface-alt">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y }}
        >
          <img 
            src="https://res.cloudinary.com/datad8tms/image/upload/v1778865344/hero_ffxjvm.webp" 
            alt="" 
            aria-hidden="true"
            className="w-full h-full object-cover object-bottom opacity-[0.45] mix-blend-multiply grayscale"
          />
        </motion.div>
        
        <div className="absolute bottom-8 left-8 z-10 flex flex-col items-start">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-[#F4F1EA] bg-[#B85D3F] dark:bg-[#9B462C] dark:text-[#E8E4DB] px-4 py-2 rounded-[2px] font-medium mb-6 inline-block"
          >
            Capturing your moments through digital & film.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-start gap-1 md:gap-2"
          >
            {services.map((service) => (
              <div
                key={service}
                className="text-2xl md:text-4xl font-normal uppercase tracking-wider hover:text-primary transition-colors cursor-default text-text"
              >
                {service}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Samples of Work */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-text">Selected Work</h2>
            <Link to="/work" className="hidden md:flex items-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-primary-hover transition-colors rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-[2px] aspect-[4/5] bg-surface-alt"
              >
                <Link to={`/work/${project.id}`} className="block w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-[2px]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-surface/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-text text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-primary font-bold text-sm uppercase tracking-wider">{project.tags.join(' • ')}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Link to="/work" className="flex items-center justify-center gap-2 text-primary font-bold uppercase tracking-wider hover:text-primary-hover transition-colors rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients & Quotes */}
      <section className="py-24 px-6 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16 text-center text-text">Trusted By</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-24 opacity-50 hover:opacity-100 transition-opacity duration-500">
            {projects.filter(p => p.id !== 'headshots-portraits').map(p => (
              <Link key={p.id} to={`/work/${p.id}`} className="text-xl md:text-2xl font-black uppercase tracking-tighter text-text/80 hover:text-primary transition-colors rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary px-2">
                {p.title}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, i) => (
              <div 
                key={i}
                className="bg-surface-alt p-8 rounded-[2px] border border-text/20 relative"
              >
                <Quote className="w-10 h-10 text-primary/20 absolute top-6 left-6" />
                <p className="text-text/80 text-lg italic relative z-10 mt-8 mb-6">"{quote.text}"</p>
                <p className="text-text font-bold uppercase text-sm tracking-wider">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
