import { Link, useOutlet, useLocation } from "react-router-dom";
import { Mail, Menu, X, Home as HomeIcon, Image, User, Tag, Calendar, ChevronDown, Instagram, Linkedin, Moon, Sun } from "lucide-react";
import { ShutterTransition } from "./ShutterTransition";
import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { projects } from "../data/projects";

export function Layout() {
  const location = useLocation();
  const outlet = useOutlet();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isWorkDropdownOpen, setIsWorkDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    } else {
      window.scrollTo(0, 0);
    }
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Work", path: "/work", icon: Image },
    { name: "About", path: "/about", icon: User },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <div className="min-h-screen bg-surface text-text font-sans selection:bg-primary selection:text-surface">
      <header 
        className={cn(
            "fixed top-0 left-0 w-full z-40 px-8 transition-all duration-300 border-b border-text/10 text-text bg-white dark:bg-surface",
            isScrolled ? "py-2 shadow-sm" : "py-3"
          )}
        >
          <div className="w-full flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px]">
              <span className="font-bold text-lg tracking-tighter uppercase">Ben White <span className="text-primary">Photography</span></span>
            </Link>
            
            <nav className="hidden md:flex items-center gap-4" aria-label="Main Navigation">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path || (item.name === "Work" && location.pathname.startsWith("/work"));

                if (item.name === "Work") {
                  return (
                    <div key={item.name} className="relative flex items-center" onMouseEnter={() => setIsWorkDropdownOpen(true)} onMouseLeave={() => setIsWorkDropdownOpen(false)}>
                      <Link
                        to={item.path}
                        className={cn(
                          "flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-1.5 py-1",
                          isActive || isWorkDropdownOpen ? "text-primary" : "text-text hover:text-primary",
                          isActive && "underline underline-offset-4"
                        )}
                        onClick={() => setIsWorkDropdownOpen(false)}
                      >
                        <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                        {item.name}
                        <ChevronDown className={cn("w-3.5 h-3.5 transition-transform", isWorkDropdownOpen && "rotate-180")} />
                      </Link>
                      
                      <AnimatePresence>
                        {isWorkDropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-surface border border-text/10 shadow-xl rounded-[2px] py-2 flex flex-col z-50"
                          >
                            {[...projects].sort((a,b) => a.title.localeCompare(b.title)).map(p => (
                              <Link 
                                key={p.id} 
                                to={`/work/${p.id}`} 
                                className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-text/70 hover:bg-surface-alt hover:text-primary transition-colors"
                                onClick={() => setIsWorkDropdownOpen(false)}
                              >
                                {p.title}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={cn(
                      "flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-1.5 py-1",
                      isActive ? "text-primary underline underline-offset-4" : "text-text"
                    )}
                  >
                    <Icon className="w-3.5 h-3.5" strokeWidth={2} />
                    {item.name}
                  </Link>
                );
              })}
              
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="ml-2 p-1.5 text-text hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px]"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </nav>

            <div className="md:hidden flex items-center gap-2">
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className="p-2 text-text hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px]"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button 
                className="p-2 text-text focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px]"
                onClick={() => setIsMobileMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={isMobileMenuOpen}
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </header>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed inset-0 z-50 bg-surface text-text flex flex-col items-center justify-center"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation menu"
            >
              <button 
                className="absolute top-6 right-6 p-2 text-text/60 hover:text-text transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px]"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-8 h-8" />
              </button>
              
              <nav className="flex flex-col items-center gap-6 w-full overflow-y-auto max-h-[70vh] pb-8" aria-label="Mobile Navigation">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path || (item.name === "Work" && location.pathname.startsWith("/work"));

                  if (item.name === "Work") {
                    return (
                      <div key={item.name} className="flex flex-col items-center w-full">
                        <div className="flex items-center justify-center w-full">
                          <Link
                            to={item.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={cn(
                              "flex items-center gap-3 text-3xl font-black uppercase tracking-tighter transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] pl-2 py-1",
                              isActive || isWorkDropdownOpen ? "text-primary" : "text-text hover:text-primary",
                              isActive && "underline underline-offset-8"
                            )}
                          >
                            <Icon className="w-8 h-8" strokeWidth={2.5} />
                            {item.name}
                          </Link>
                          <button 
                            onClick={() => setIsWorkDropdownOpen(!isWorkDropdownOpen)}
                            className={cn(
                              "p-2 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px]",
                              isActive || isWorkDropdownOpen ? "text-primary" : "text-text hover:text-primary"
                            )}
                          >
                            <ChevronDown className={cn("w-8 h-8 transition-transform", isWorkDropdownOpen && "rotate-180")} />
                          </button>
                        </div>
                        <AnimatePresence>
                          {isWorkDropdownOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="flex flex-col items-center gap-4 mt-6 overflow-hidden"
                            >
                              {[...projects].sort((a,b) => a.title.localeCompare(b.title)).map(p => (
                                <Link 
                                  key={p.id} 
                                  to={`/work/${p.id}`} 
                                  onClick={() => setIsMobileMenuOpen(false)}
                                  className="text-xl font-bold uppercase tracking-tighter text-text/70 hover:text-primary transition-colors"
                                >
                                  {p.title}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center gap-3 text-3xl font-black uppercase tracking-tighter hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-2",
                        isActive ? "text-primary underline underline-offset-8" : "text-text"
                      )}
                    >
                      <Icon className="w-8 h-8" strokeWidth={2.5} />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        <main>
          <ShutterTransition>
            {outlet}
          </ShutterTransition>
        </main>

        <footer className="bg-surface text-text/80 py-12 border-t border-text/10 px-8">
          <div className="w-full flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-6">
              <div className="flex flex-col items-center md:items-start gap-2">
                <span className="font-bold text-lg tracking-tighter uppercase text-text">Ben White <span className="text-primary">Photography</span></span>
                <p className="text-sm">&copy; {new Date().getFullYear()} Ben White Photography. All rights reserved.</p>
              </div>
              <div className="flex items-center gap-5">
                <a href="https://www.instagram.com/benwhitephoto/" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="https://www.linkedin.com/in/ben-white-9aa26b53/" target="_blank" rel="noopener noreferrer" className="text-text/70 hover:text-primary transition-colors" aria-label="LinkedIn">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-6 md:pr-32">
              <div className="flex flex-wrap justify-center md:justify-end items-center gap-4 md:gap-6">
                <Link to="/" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Home</Link>
                <Link to="/work" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Work</Link>
                <Link to="/about" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">About</Link>
                <Link to="/contact" className="text-xs font-bold uppercase tracking-widest hover:text-primary transition-colors">Contact</Link>
              </div>
            </div>
          </div>
        </footer>

        {/* FAB for Booking */}
        <a
          href="mailto:benjahphotography@gmail.com?subject=Photography%20Inquiry"
          className="fixed bottom-8 right-8 z-40 flex items-center justify-center gap-2 bg-primary text-surface p-4 md:px-6 md:py-4 rounded-full md:rounded-[2px] hover:bg-primary-hover transition-all duration-300 font-bold uppercase tracking-wider text-sm group focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/50 shadow-lg"
          aria-label="Email Ben White to Book Now"
        >
          <Calendar className="w-6 h-6 md:w-5 md:h-5 group-hover:-rotate-12 transition-transform" />
          <span className="hidden md:inline">Book Now!</span>
        </a>
    </div>
  );
}
