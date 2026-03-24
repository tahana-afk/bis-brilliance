import victoriaResults from "@/assets/victoria-results.jpg";

const ResultsSection = () => {
  return (
    <section className="bis-section bg-white">
      <div className="bis-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <img

              alt="Victoria working"
              loading="lazy"
              width={700}
              height={600}
              className="w-full h-[480px] object-cover rounded-[16px]" src="/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg" />
            
          </div>

          {/* Narrative */}
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <span style={{ color: "#C8FF00" }} className="text-2xl mt-1 leading-none">◆</span>
              <h2 className="text-bis-dark">She Stopped Being a Creator. She Became an Owner.</h2>
            </div>

            <div className="space-y-5 text-bis-gray-text text-base leading-relaxed">
              <p>
                Victoria had the audience, the work ethic, and the content.
                But every month felt like starting over — her income tied to
                posts, her growth tied to algorithms she didn't control.
              </p>
              <p>
                So she stopped renting her influence. We built the business
                behind her brand — one that generates income whether she posts
                or not.
              </p>
              <p>
                Now Victoria doesn't just create. She owns. And the difference
                isn't just financial — it's the freedom to build on her own terms.
              </p>
            </div>

            <div className="pt-4">
              <button
                style={{ backgroundColor: "#C8FF00" }}
                className="px-8 py-3.5 font-black uppercase tracking-wider text-bis-dark rounded-[25px] hover:brightness-95 transition-all text-sm">
                
                Build My Business
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default ResultsSection;