import gridCollage from "@/assets/grid-collage.jpg";
import creator1 from "@/assets/creator-1.jpg";
import creator2 from "@/assets/creator-2.jpg";
import creator3 from "@/assets/creator-3.jpg";
import creator4 from "@/assets/creator-4.jpg";

// Individual square photos for the 5-column grid
const gridPhotos = [creator1, creator2, creator3, creator4, creator1];

const ScalableRevenueSection = () => {
  return (
    <section className="bis-section" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="bis-container">
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
                src={photo}
                alt={`Creator ${i + 1}`}
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
