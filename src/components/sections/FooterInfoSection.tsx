import { Phone, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

const FooterInfoSection = () => {
  return (
    <footer style={{ backgroundColor: "#1a1a1a" }} className="border-t border-white/10">
      <div className="bis-container py-16">
        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Left: Logo + description */}
          <div className="space-y-4">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-black tracking-tight text-white">BIS</span>
              <span className="text-2xl font-light tracking-tight text-white ml-1">Media</span>
              <span
                className="ml-2 w-2 h-2 rounded-full inline-block"
                style={{ backgroundColor: "#C8FF00" }}
              ></span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed">
              We turn creators into owners. We build the companies, products, and systems that
              make influence worth something long after the algorithm changes.
            </p>
            <a
              href="tel:+18005550100"
              className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors"
            >
              <Phone size={16} />
              (800) 555-0100
            </a>
            <div className="flex gap-4 mt-4">
              {[Instagram, Twitter, Youtube, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-full border border-white/20 flex items-center justify-center text-white/50 hover:border-bis-lime hover:text-bis-lime transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Middle: Services */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">
              Our Services
            </h4>
            <ul className="space-y-3">
              {[
                "Digital Products",
                "Paid Communities",
                "Monetization Systems",
                "Business Funnels",
                "Full Infrastructure",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Resources */}
          <div>
            <h4 className="text-white font-bold mb-5 text-sm uppercase tracking-widest">
              Resources
            </h4>
            <ul className="space-y-3">
              {[
                "Success Stories",
                "Pricing",
                "Creator Journeys",
                "Blog",
                "Podcast",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">© 2026 BIS Media. All rights reserved.</p>
          <div className="flex items-center gap-5 flex-wrap justify-center">
            {["FAQs", "Privacy", "Terms", "Careers", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-white/30 hover:text-white text-xs transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfoSection;
