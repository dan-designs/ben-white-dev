import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router-dom";
import { ArrowRight, Quote } from "lucide-react";
import { projects } from "../data/projects";

export function Home() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]); // Reduced parallax

  const services = [
    "Abstract", "Event", "Landscape", "Location", "Portrait", "Product", "Wedding"
  ];

  const quotes = [
    { text: "Ben captured the essence of our brand perfectly. Highly recommended!", author: "HJ Holtz & Son" },
    { text: "The photos from our event were absolutely stunning. A true professional.", author: "Drive Shack" },
    { text: "Creative, versatile, and a joy to work with.", author: "SUPPLY" }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-[#e4eadf]">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y }}
        >
          <img 
            src="https://res.cloudinary.com/datad8tms/image/upload/v1773333119/Camera_bpdbus.png" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-[0.45] mix-blend-multiply grayscale"
          />
        </motion.div>
        
        <div className="absolute bottom-8 left-8 z-10 flex flex-col items-start">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-white bg-orange-600 px-4 py-2 rounded-[2px] font-medium mb-6 max-w-md inline-block"
          >
            Capturing moments through digital & film.
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
                className="text-2xl md:text-4xl font-light uppercase tracking-wider hover:text-orange-600 transition-colors cursor-default text-zinc-800"
              >
                {service}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <Link to="/pricing" className="inline-block bg-zinc-900 text-white px-6 py-3 rounded-[2px] font-bold uppercase tracking-wider text-sm hover:bg-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2">
              View Pricing & Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Samples of Work */}
      <section className="py-24 px-6 bg-[#EEF4EC]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-zinc-900">Selected Work</h2>
            <Link to="/work" className="hidden md:flex items-center gap-2 text-orange-600 font-bold uppercase tracking-wider hover:text-orange-700 transition-colors rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project) => (
              <div 
                key={project.id}
                className="group relative overflow-hidden rounded-[2px] aspect-[4/5] bg-[#e4eadf]"
              >
                <Link to={`/work/${project.id}`} className="block w-full h-full focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-600 rounded-[2px]">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-opacity duration-500 group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-[#EEF4EC]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                    <h3 className="text-zinc-900 text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-orange-600 font-bold text-sm uppercase tracking-wider">{project.tags.join(' • ')}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-8 md:hidden">
            <Link to="/work" className="flex items-center justify-center gap-2 text-orange-600 font-bold uppercase tracking-wider hover:text-orange-700 transition-colors rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600">
              View All <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Clients & Quotes */}
      <section className="py-24 px-6 bg-[#EEF4EC]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold uppercase tracking-tight mb-16 text-center text-zinc-900">Trusted By</h2>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-24 opacity-50 hover:opacity-100 transition-opacity duration-500">
            {projects.map(p => (
              <Link key={p.id} to={`/work/${p.id}`} className="text-xl md:text-2xl font-black uppercase tracking-tighter text-zinc-500 hover:text-orange-600 transition-colors rounded-[2px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 px-2">
                {p.title}
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {quotes.map((quote, i) => (
              <div 
                key={i}
                className="bg-[#e4eadf] p-8 rounded-[2px] border border-zinc-200 relative"
              >
                <Quote className="w-10 h-10 text-orange-600/20 absolute top-6 left-6" />
                <p className="text-zinc-500 text-lg italic relative z-10 mt-8 mb-6">"{quote.text}"</p>
                <p className="text-zinc-900 font-bold uppercase text-sm tracking-wider">— {quote.author}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
