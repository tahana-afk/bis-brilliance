import { Phone } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border shadow-sm">
      <div className="bis-container flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-1">
          <span className="text-2xl font-black tracking-tight text-bis-dark">BIS</span>
          <span className="text-2xl font-light tracking-tight text-bis-dark ml-1">Media</span>
          <span className="ml-2 w-2 h-2 rounded-full bg-bis-lime inline-block"></span>
        </div>

        {/* Phone CTA */}
        <a
          href="tel:+18005550100"
          className="flex items-center gap-2 text-bis-dark font-medium text-sm hover:text-bis-lime transition-colors group"
        >
          <div className="w-10 h-10 rounded-full border-2 border-bis-dark group-hover:border-bis-lime flex items-center justify-center transition-colors">
            <Phone size={18} />
          </div>
          <span className="hidden sm:block">(800) 555-0100</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
