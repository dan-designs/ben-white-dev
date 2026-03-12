import { Check } from "lucide-react";

export function Pricing() {
  const packages = [
    {
      name: "Portrait Session",
      price: "Starting at $450",
      description: "Ideal for individuals, couples, or small families.",
      features: [
        "1-2 hour location shoot",
        "2 outfit changes",
        "30+ high-resolution edited images",
        "Online gallery for viewing and downloading",
        "Print release"
      ]
    },
    {
      name: "Event Coverage",
      price: "Starting at $1,200",
      description: "Perfect for corporate events, parties, and gatherings.",
      features: [
        "Up to 4 hours of coverage",
        "Candid and posed shots",
        "150+ high-resolution edited images",
        "Online gallery for viewing and downloading",
        "Quick turnaround for social media"
      ]
    },
    {
      name: "Commercial & Brand",
      price: "Starting at $1,800",
      description: "Comprehensive coverage for businesses and brands.",
      features: [
        "Half-day or full-day rates available",
        "Product, lifestyle, and headshot photography",
        "Commercial usage rights",
        "High-end retouching",
        "Pre-shoot consultation and planning"
      ]
    },
    {
      name: "Wedding Packages",
      price: "Starting at $3,500",
      description: "Full-day coverage to capture every moment of your special day.",
      features: [
        "8+ hours of coverage",
        "Second shooter included",
        "Complimentary engagement session",
        "500+ high-resolution edited images",
        "Custom heirloom photo album options"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#e4eadf] pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 mb-4">
            Investment
          </h1>
          <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
            A broad range of photographic services tailored to your needs. 
            <br className="hidden md:block" />
            <span className="font-semibold text-orange-600">Please note: All prices are starting points. Contact me for a 100% accurate custom quote.</span>
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className="bg-[#EEF4EC] p-8 rounded-[2px] border border-zinc-200 flex flex-col h-full hover:border-orange-600 transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold uppercase tracking-tight text-zinc-900 mb-2">
                {pkg.name}
              </h3>
              <div className="text-orange-600 font-serif italic text-xl mb-4">
                {pkg.price}
              </div>
              <p className="text-zinc-500 mb-8 flex-grow">
                {pkg.description}
              </p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-zinc-600">
                    <Check className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a 
                href="mailto:BenWhiteIV@gmail.com?subject=Pricing%20Inquiry"
                className="block w-full text-center bg-zinc-900 text-white py-3 rounded-[2px] font-bold uppercase tracking-wider text-sm hover:bg-orange-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
              >
                Inquire Now
              </a>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-[#EEF4EC] p-8 md:p-12 rounded-[2px] border border-zinc-200 text-center max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold uppercase tracking-tight text-zinc-900 mb-4">
            Don't see what you're looking for?
          </h2>
          <p className="text-zinc-500 mb-6">
            I also offer custom packages for abstract photography, specific product shoots, and unique locations. Every project is different, and I'm happy to build a custom quote that fits your exact requirements.
          </p>
          <a 
            href="mailto:BenWhiteIV@gmail.com?subject=Custom%20Quote%20Request"
            className="inline-block bg-orange-600 text-white px-8 py-3 rounded-[2px] font-bold uppercase tracking-wider text-sm hover:bg-orange-700 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-600 focus-visible:ring-offset-2"
          >
            Request Custom Quote
          </a>
        </div>
      </div>
    </div>
  );
}
