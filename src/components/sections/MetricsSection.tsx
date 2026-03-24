import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import beforeImg from "@/assets/before-image.jpg";
import afterImg from "@/assets/after-image.jpg";

const slides = [
  { before: beforeImg, after: afterImg, name: "Victoria" },
  { before: beforeImg, after: afterImg, name: "Client 2" },
];

const MetricsSection = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <section className="bis-section bg-bis-gray-light">
      <div className="bis-container">
        {/* Heading */}
        <h2 className="text-center text-bis-dark mb-12">This Is What Ownership Looks Like</h2>

        {/* Before / After Carousel */}
        <div className="relative max-w-3xl mx-auto mb-14">
          <div className="grid grid-cols-2 gap-1 rounded-[16px] overflow-hidden shadow-lg">
            <div className="relative">
              <img
                src={slides[current].before}
                alt="Before"
                loading="lazy"
                width={600}
                height={700}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs uppercase tracking-widest px-3 py-1 rounded-full">
                Before
              </div>
            </div>
            <div className="relative">
              <img
                src={slides[current].after}
                alt="After"
                loading="lazy"
                width={600}
                height={700}
                className="w-full h-80 object-cover"
              />
              <div
                style={{ backgroundColor: "#C8FF00" }}
                className="absolute bottom-3 left-3 text-bis-dark text-xs uppercase tracking-widest px-3 py-1 rounded-full font-semibold"
              >
                After
              </div>
            </div>
          </div>

          {/* Arrows */}
          <button
            onClick={prev}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-bis-lime transition-colors z-10"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-bis-lime transition-colors z-10"
          >
            <ChevronRight size={20} />
          </button>

          <p className="text-center text-bis-gray-medium text-sm mt-4">{slides[current].name}</p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {[
          { label: "Revenue Before BIS", value: "$180K", sub: "creator income", accent: false },
            { label: "Income Tied to Content", value: "70%", sub: "gone in 60 days", accent: false },
            { label: "Revenue After BIS", value: "$730K", sub: "business income", accent: true },
            { label: "Predictable Monthly", value: "$28K+", sub: "owns it forever", accent: true },
          ].map((m) => (
            <div
              key={m.label}
              className="bg-white rounded-[16px] p-6 text-center shadow-sm border border-border"
            >
              <p className="text-xs uppercase tracking-widest text-bis-gray-medium mb-2">
                {m.label}
              </p>
              <p
                className="text-4xl font-black"
                style={{ color: m.accent ? "#C8FF00" : "#1a1a1a" }}
              >
                {m.value}
              </p>
              <p className="text-sm text-bis-gray-medium mt-1">{m.sub}</p>
            </div>
          ))}
        </div>

        {/* Impact Box */}
        <div
          className="rounded-[16px] grid grid-cols-2 lg:grid-cols-4 gap-0 overflow-hidden border border-border"
          style={{ background: "#1a1a1a" }}
        >
          {[
            { label: "Owned Community", value: "50K+" },
            { label: "Customer Value", value: "+340%" },
            { label: "Time on Admin", value: "-60%" },
            { label: "New Products Built", value: "4×" },
          ].map((item, i) => (
            <div
              key={item.label}
              className={`p-6 text-center ${i < 3 ? "border-r border-white/10" : ""} ${i >= 2 ? "border-t border-white/10 lg:border-t-0" : ""}`}
            >
              <p style={{ color: "#C8FF00" }} className="text-2xl font-black">
                {item.value}
              </p>
              <p className="text-white/60 text-sm uppercase tracking-widest mt-1">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
