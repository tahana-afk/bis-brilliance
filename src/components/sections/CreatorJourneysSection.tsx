import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";
import creator4 from "@/assets/creator-4.jpg";
import thumb1 from "@/assets/thumb-1.jpg";
import thumb2 from "@/assets/thumb-2.jpg";
import thumb3 from "@/assets/thumb-3.jpg";
import thumb4 from "@/assets/thumb-4.jpg";

const featuredCreators = [
  { photo: creator1, name: "Sophia R.", service: "The Accelerator" },
  { photo: creator2, name: "Amara K.", service: "The Blueprint" },
  { photo: creator3, name: "Mia C.", service: "The Spotlight" },
  { photo: creator4, name: "Yuki T.", service: "The Autopilot" },
];

const carouselCreators = [
  { photo: thumb1, name: "Jada M." },
  { photo: thumb2, name: "Chloe N." },
  { photo: thumb3, name: "Priya S." },
  { photo: thumb4, name: "Lea V." },
  { photo: thumb1, name: "Rena B." },
  { photo: thumb2, name: "Tanya W." },
  { photo: thumb3, name: "Diana F." },
  { photo: thumb4, name: "Kira J." },
  { photo: thumb1, name: "Ana G." },
  { photo: thumb2, name: "Zoe L." },
];

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
      <div className="bis-container">
        {/* Label */}
        <p className="text-xs uppercase tracking-[0.2em] font-semibold text-bis-gray-medium mb-3">
          Creator Journeys
        </p>
        <h2 className="text-bis-dark mb-10">Our Creator Journeys</h2>

        {/* Featured 4-column grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {featuredCreators.map((c) => (
            <div
              key={c.name}
              className="relative aspect-[3/4] overflow-hidden rounded-[16px] group cursor-pointer"
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
            </div>
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
              <div key={i} className="flex-shrink-0 w-36">
                <div className="relative aspect-square overflow-hidden rounded-[8px]">
                  <img
                    src={c.photo}
                    alt={c.name}
                    loading="lazy"
                    width={512}
                    height={512}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <p className="text-center text-xs text-bis-gray-text mt-2 font-medium">{c.name}</p>
              </div>
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
            MORE CREATOR JOURNEYS
          </button>
        </div>
      </div>
    </section>
  );
};

export default CreatorJourneysSection;
