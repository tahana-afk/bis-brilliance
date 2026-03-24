import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { creators } from "@/data/creators";

// First 4 creators → featured grid cards
const featuredCreators = creators.slice(0, 4);

// All creators → thumbnail carousel (repeat for visual richness)
const carouselCreators = [...creators, ...creators].slice(0, 10);

const CreatorJourneysSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -280, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 280, behavior: "smooth" });
  };

  return (
    <section className="bis-section bg-white">
      {/* Wide container with generous horizontal margins */}
      <div className="max-w-[1400px] mx-auto px-10 sm:px-16 lg:px-24">
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-bis-gray-medium mb-3">
          From Creator to Owner
        </p>
        <h2 className="text-bis-dark mb-10">They Built. They Own. They Don't Look Back.</h2>

        {/* Featured 4-column grid — each card links to its creator page */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {featuredCreators.map((c) => (
            <Link
              key={c.slug}
              to={`/${c.slug}`}
              className="relative aspect-[3/4] overflow-hidden rounded-[16px] group cursor-pointer block"
            >
              <img
                src={c.photo}
                alt={c.name}
                loading="lazy"
                width={512}
                height={600}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <h3 className="text-white font-bold text-lg">{c.name}</h3>
                <p style={{ color: "#C8FF00" }} className="text-xs uppercase tracking-widest font-semibold">
                  {c.service}
                </p>
              </div>
            </Link>
          ))}
        </div>

        {/* Scrollable thumbnail carousel */}
        <div className="relative">
          <button
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-bis-lime transition-colors"
          >
            <ChevronLeft size={18} />
          </button>

          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {carouselCreators.map((c, i) => (
              <Link
                key={`${c.slug}-${i}`}
                to={`/${c.slug}`}
                className="flex-shrink-0 w-36 group"
              >
                <div className="relative aspect-square overflow-hidden rounded-[8px]">
                  <img
                    src={c.photo}
                    alt={c.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center text-xs text-bis-gray-text mt-2 font-medium group-hover:text-bis-dark transition-colors">
                  {c.name}
                </p>
              </Link>
            ))}
          </div>

          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-bis-lime transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-10">
          <button
            style={{ borderColor: "#C8FF00", color: "#C8FF00" }}
            className="px-8 py-3.5 border-2 rounded-[25px] font-black uppercase tracking-wider text-sm hover:bg-bis-lime hover:text-bis-dark transition-all"
          >
            SEE MORE OWNERS
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorJourneysSection;
