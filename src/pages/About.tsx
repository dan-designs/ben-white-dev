import { Mail, Phone, MapPin } from "lucide-react";

export function About() {
  return (
    <div className="min-h-screen bg-surface pt-32 pb-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-start">
          
          <div className="w-full md:w-1/3 shrink-0">
            <div className="aspect-[4/5] rounded-[2px] overflow-hidden mb-2 bg-surface-alt">
              <img 
                src="https://res.cloudinary.com/datad8tms/image/upload/v1778863181/Ben_White_J._Chesney_4_kn4ydw.jpg" 
                alt="Benjamin White" 
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-xs text-text/60 italic mb-6">
              Photo credit <a href="https://justinchesney.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors underline">Justin Chesney</a>
            </p>
            
            <div className="bg-surface-alt p-6 rounded-[2px] border border-text/10">
              <h3 className="font-bold uppercase tracking-wider text-text mb-4 text-sm">Contact Info</h3>
              <ul className="space-y-4 text-text/80">
                <li className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:benjahphotography@gmail.com" className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-1 -ml-1">benjahphotography@gmail.com</a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <a href="tel:+18046155220" className="hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-[2px] px-1 -ml-1">(804) 615 - 5220</a>
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Richmond, Virginia</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="w-full md:w-2/3">
            <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-text mb-2">
              Benjamin White
            </h1>
            <h2 className="text-2xl text-primary font-serif italic mb-8">Photographer</h2>
            
            <div className="prose prose-stone max-w-none mb-12">
              <p className="text-lg text-text/80 leading-relaxed">
                I am a Richmond, Virginia native with nomadic tendencies. Aspiring photographer excelling in Portrait, Location, Landscape, Product and Abstract photography. I utilize digital & film through my creative process to bring a unique perspective to every shoot.
              </p>
              <p className="text-lg text-text/80 leading-relaxed mt-4">
                My goal is to capture the authentic essence of my subjects, whether it's a commercial brand, a live event, or a personal portrait. I believe in the power of visual storytelling and work closely with my clients to ensure their vision is brought to life.
              </p>
            </div>

            <div className="mb-12">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-text mb-6 border-b-2 border-text/10 pb-2">
                Services & Specialties
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <ul className="space-y-2 text-text/80 list-disc list-inside">
                  <li>Portrait Photography</li>
                  <li>Location & Landscape</li>
                  <li>Product & Brand</li>
                  <li>Abstract Photography</li>
                </ul>
                <ul className="space-y-2 text-text/80 list-disc list-inside">
                  <li>Event Coverage</li>
                  <li>Wedding Photography</li>
                  <li>Film Photography</li>
                  <li>Digital Retouching</li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold uppercase tracking-tight text-text mb-6 border-b-2 border-text/10 pb-2">
                Selected Clients
              </h3>
              <ul className="space-y-4 text-text/80">
                <li className="flex items-start gap-4">
                  <span className="font-bold text-text w-1/3">HJ Holtz & Son</span>
                  <span className="w-2/3">Commercial and location photography showcasing premium contracting services.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-text w-1/3">Drive Shack</span>
                  <span className="w-2/3">High-energy event and lifestyle photography.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-text w-1/3">VA Repertory Theatre</span>
                  <span className="w-2/3">Promotional images and live performance capture.</span>
                </li>
                <li className="flex items-start gap-4">
                  <span className="font-bold text-text w-1/3">Cava Co.</span>
                  <span className="w-2/3">Food and lifestyle photography highlighting culinary offerings.</span>
                </li>
              </ul>
            </div>

            <div className="mt-12">
              <h3 className="text-2xl font-bold uppercase tracking-tight text-text mb-6 border-b-2 border-text/10 pb-2">
                My Studio
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="aspect-square sm:aspect-[4/5] rounded-[2px] overflow-hidden bg-surface-alt">
                  <img src="https://res.cloudinary.com/datad8tms/image/upload/v1778863194/Ben_White_J._Chesney_2_zh6v5a.jpg" alt="Ben White Studio 1" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square sm:aspect-[4/5] rounded-[2px] overflow-hidden bg-surface-alt">
                  <img src="https://res.cloudinary.com/datad8tms/image/upload/v1778863154/Ben_White_J._Chesney_5_wibgce.png" alt="Ben White Studio 2" className="w-full h-full object-cover" />
                </div>
                <div className="aspect-square sm:aspect-[4/5] rounded-[2px] overflow-hidden bg-surface-alt">
                  <img src="https://res.cloudinary.com/datad8tms/image/upload/v1778863187/Ben_White_J._Chesney_3_ak5lrr.jpg" alt="Ben White Studio 3" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
