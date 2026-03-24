import { creators } from "@/data/creators";

// Pull the first 5 creators' photos for the grid
const gridPhotos = creators.slice(0, 5).map((c) => ({
  src: c.photo,
  name: c.name,
}));

const ScalableRevenueSection = () => {
  return (
    <section className="bis-section" style={{ backgroundColor: "#1a1a1a" }}>
      {/* Wider container with extra horizontal padding for breathing room */}
      <div className="max-w-[1400px] mx-auto px-16 md:px-24 lg:px-32">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2>
            <span style={{ color: "#C8FF00" }}>Creator-Owned Businesses</span>
            <span className="text-white"> — It's all we build</span>
          </h2>
        </div>

        {/* 5-col photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-[15px]">
          {gridPhotos.map((photo, i) => (
            <div
              key={i}
              className="aspect-square overflow-hidden rounded-[4px]"
            >
              <img
                src={photo.src}
                alt={photo.name}
                loading="lazy"
                width={512}
                height={512}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScalableRevenueSection;

