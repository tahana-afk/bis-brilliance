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
              <h2 className="text-bis-dark">She Stopped Being a Creator. She Became an Owner.</h2>
            </div>

            <div className="space-y-5 text-bis-gray-text text-base leading-relaxed">
              <p>
                Victoria had the audience. She had the work ethic. She had the content. But
                every month felt like starting over — revenue tied to posts, income tied to
                algorithms she didn't control.
              </p>
              <p>
                That's when she came to BIS Media. We built the business behind her brand:
                a digital product suite, a paid community, and a monetization system that
                generates income whether she posts or not.
              </p>
              <p>
                Now Victoria doesn't just create. She owns. Her revenue is predictable. Her
                business is scalable. And her influence finally works for her — not the other
                way around.
              </p>
            </div>

            <div className="pt-4">
              <button
                style={{ backgroundColor: "#C8FF00" }}
                className="px-8 py-3.5 font-black uppercase tracking-wider text-bis-dark rounded-[25px] hover:brightness-95 transition-all text-sm"
              >
                Build My Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
