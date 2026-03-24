import victoriaResults from "@/assets/victoria-results.jpg";

const ResultsSection = () => {
  return (
    <section className="bis-section bg-white">
      <div className="bis-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src={victoriaResults}
              alt="Victoria working"
              loading="lazy"
              width={700}
              height={600}
              className="w-full h-[480px] object-cover rounded-[16px]"
            />
          </div>

          {/* Narrative */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span style={{ color: "#C8FF00" }} className="text-2xl mt-1 leading-none">◆</span>
              <h2 className="text-bis-dark">Results That Reflect The Effort</h2>
            </div>

            <div className="space-y-5 text-bis-gray-text text-base leading-relaxed">
              <p>
                Victoria is a creator and entrepreneur who has prioritized building sustainable
                systems. She works with intention and is thoughtful about pricing, but felt she
                hadn't reached her goals.
              </p>
              <p>
                That's what led her to explore BIS Media. She was drawn to the guidance,
                support, and clarity. Combined with a launch strategy that moved revenue from
                seasonal spikes to predictable monthly income, it was the right fit.
              </p>
              <p>
                With Europe travel and new product drops planned, Victoria is excited to feel
                confident in her growth. BIS Media is about aligning how she operates with how
                she shows up.
              </p>
            </div>

            <div className="pt-4">
              <button
                style={{ backgroundColor: "#C8FF00" }}
                className="px-8 py-3.5 font-black uppercase tracking-wider text-bis-dark rounded-[25px] hover:brightness-95 transition-all text-sm"
              >
                Book My Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
