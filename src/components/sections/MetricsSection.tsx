const identityCards = [
  {
    title: "Owns What They Build",
    sub: "No longer dependent on platforms or algorithms",
    keyword: "Owns",
  },
  {
    title: "Revenue That Doesn't Reset",
    sub: "Income that continues beyond content cycles",
    keyword: "Revenue",
  },
  {
    title: "Systems Over Effort",
    sub: "The business works even when they're offline",
    keyword: "Systems",
  },
  {
    title: "Built to Scale",
    sub: "Products, communities, and assets that grow over time",
    keyword: "Built",
  },
];

const impactItems = [
  { title: "Owns the Audience", sub: "Not just access — control" },
  { title: "Increases Lifetime Value", sub: "Not just more customers — deeper ones" },
  { title: "Removes Dependency", sub: "Less reliance on constant posting" },
  { title: "Expands the Business", sub: "More than one way to make money" },
];

const MetricsSection = () => {
  return (
    <section className="bis-section" style={{ backgroundColor: "hsl(var(--bis-gray-light))" }}>
      <div className="bis-container">
        {/* Heading */}
        <h2 className="text-center mb-3" style={{ color: "hsl(var(--bis-dark))" }}>
          This Is What Ownership Looks Like
        </h2>
        <p className="text-center mb-14 text-sm uppercase tracking-[0.2em]" style={{ color: "hsl(var(--bis-gray-medium))" }}>
          The shift from creator to owner changes everything
        </p>

        {/* Identity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {identityCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-[16px] p-7 border border-border
                         transition-all duration-300 ease-out
                         hover:-translate-y-1 hover:shadow-[0_8px_40px_-12px_rgba(200,255,0,0.25)]
                         cursor-default"
            >
              {/* Lime dot accent */}
              <span
                className="inline-block w-2 h-2 rounded-full mb-5 transition-transform duration-300 group-hover:scale-125"
                style={{ backgroundColor: "hsl(var(--bis-lime))" }}
              />
              <h3
                className="font-black text-lg leading-tight mb-3"
                style={{ color: "hsl(var(--bis-dark))" }}
              >
                {/* Highlight first word in neon lime */}
                <span style={{ color: "hsl(var(--bis-lime))" }}>{card.keyword} </span>
                {card.title.slice(card.keyword.length)}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(var(--bis-gray-medium))" }}>
                {card.sub}
              </p>
            </div>
          ))}
        </div>

        {/* Impact Bar — dark section */}
        <div
          className="rounded-[16px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-hidden border border-white/5"
          style={{ background: "hsl(var(--bis-dark))" }}
        >
          {impactItems.map((item, i) => (
            <div
              key={item.title}
              className={[
                "p-8 text-center transition-colors duration-200 hover:bg-white/5",
                i < impactItems.length - 1 ? "lg:border-r border-white/10" : "",
                i >= 2 ? "border-t border-white/10 lg:border-t-0" : "",
                i === 1 ? "border-t border-white/10 sm:border-t-0" : "",
              ].join(" ")}
            >
              <p
                className="text-base font-black mb-1"
                style={{ color: "hsl(var(--bis-lime))" }}
              >
                {item.title}
              </p>
              <p className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
                {item.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MetricsSection;
