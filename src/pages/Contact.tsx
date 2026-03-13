import { Mail, Phone, Instagram, Calendar, MapPin, ExternalLink } from "lucide-react";

export function Contact() {
  const links = [
    {
      title: "Schedule a Session",
      description: "View availability and book online",
      icon: <Calendar className="w-6 h-6" />,
      href: "https://app.squarespacescheduling.com/schedule.php?owner=24212360&appointmentType=27323236",
      external: true,
      primary: true
    },
    {
      title: "Email Me",
      description: "BenWhiteIV@gmail.com",
      icon: <Mail className="w-6 h-6" />,
      href: "mailto:BenWhiteIV@gmail.com"
    },
    {
      title: "Call or Text",
      description: "(804) 615 - 5220",
      icon: <Phone className="w-6 h-6" />,
      href: "tel:+18046155220"
    },
    {
      title: "Follow on Instagram",
      description: "@benjah_photography",
      icon: <Instagram className="w-6 h-6" />,
      href: "https://instagram.com",
      external: true
    }
  ];

  return (
    <div className="min-h-screen bg-surface pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="w-full max-w-lg mx-auto flex flex-col items-center">
        
        <div className="w-32 h-32 rounded-[2px] overflow-hidden mb-6 border-4 border-surface-alt">
          <img 
            src="https://res.cloudinary.com/datad8tms/image/upload/v1773329792/Photo_courtesy_of_Kai_Eason_g96irh.webp" 
            alt="Benjamin White" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        <h1 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-text mb-2 text-center">
          Ben White Photography
        </h1>
        
        <p className="text-text/60 mb-2 flex items-center gap-2 font-medium">
          <MapPin className="w-4 h-4" /> Richmond, Virginia
        </p>
        
        <p className="text-text/60 text-center mb-10 max-w-sm">
          Portrait, Location, Wedding, and Event Photography. Let's create something beautiful together.
        </p>

        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target={link.external ? "_blank" : "_self"}
              rel={link.external ? "noopener noreferrer" : ""}
              className={`
                group flex items-center p-4 rounded-[2px] transition-all duration-300
                focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary focus-visible:ring-offset-surface
                ${link.primary 
                  ? "bg-primary text-surface hover:bg-primary-hover" 
                  : "bg-surface-alt text-text hover:bg-surface-alt/80 border border-text/10"
                }
              `}
            >
              <div className={`
                flex items-center justify-center w-12 h-12 rounded-[2px] mr-4 transition-colors
                ${link.primary ? "bg-surface/20" : "bg-surface text-text/60 group-hover:bg-surface-alt"}
              `}>
                {link.icon}
              </div>
              <div className="flex-grow">
                <h2 className="font-bold text-lg">{link.title}</h2>
                <p className={`text-sm ${link.primary ? "text-surface/80" : "text-text/60"}`}>
                  {link.description}
                </p>
              </div>
              {link.external && (
                <ExternalLink className={`w-5 h-5 opacity-50 ${link.primary ? "text-surface" : "text-text/60"}`} />
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
