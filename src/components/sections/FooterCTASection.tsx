const FooterCTASection = () => {
  return (
    <section className="bis-section" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="bis-container text-center">
        {/* Label */}
        <p
          style={{ color: "#C8FF00" }}
          className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
        >
          Your audience is an asset. Start acting like it.
        </p>

        {/* Heading */}
        <h2 className="text-white mb-8 max-w-2xl mx-auto">
          Ready to Stop Creating and Start Owning?
        </h2>

        {/* CTA */}
        <button className="px-10 py-4 bg-white text-bis-dark font-black uppercase tracking-wider rounded-[25px] hover:bg-bis-lime transition-colors text-sm mb-8">
          BUILD MY BUSINESS
        </button>

        {/* Disclaimer */}
        <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
          We take on a small number of creators each cohort. This is for people who are serious
          about building something they own — not just something they manage.
        </p>
      </div>
    </section>
  );
};

export default FooterCTASection;
