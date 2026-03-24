const FooterCTASection = () => {
  return (
    <section className="bis-section" style={{ backgroundColor: "#1a1a1a" }}>
      <div className="bis-container text-center">
        {/* Label */}
        <p
          style={{ color: "#C8FF00" }}
          className="text-xs uppercase tracking-[0.3em] font-semibold mb-4"
        >
          Ready to become an empire?
        </p>

        {/* Heading */}
        <h2 className="text-white mb-8 max-w-2xl mx-auto">
          Ready for Your BIS Media Experience?
        </h2>

        {/* CTA */}
        <button className="px-10 py-4 bg-white text-bis-dark font-black uppercase tracking-wider rounded-[25px] hover:bg-bis-lime transition-colors text-sm mb-8">
          BOOK MY FREE CONSULTATION
        </button>

        {/* Disclaimer */}
        <p className="text-white/40 text-sm max-w-lg mx-auto leading-relaxed">
          We work with 5–8 creators per cohort. Not everyone is a fit. Apply now to see if we
          can help scale your business.
        </p>
      </div>
    </section>
  );
};

export default FooterCTASection;
