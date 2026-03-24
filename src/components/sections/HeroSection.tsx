import { useState } from "react";
import victoriaHero from "@/assets/victoria-hero.jpg";

const interests = [
"Digital Products",
"Paid Community",
"Monetization Systems",
"Business Infrastructure"];


const industries = [
"Creator / Influencer",
"Coach / Consultant",
"E-commerce",
"Service Business",
"Other"];


const HeroSection = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interests: [] as string[],
    phone: "",
    zip: "",
    industry: ""
  });

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest) ?
      prev.interests.filter((i) => i !== interest) :
      [...prev.interests, interest]
    }));
  };

  return (
    <section className="relative bg-bis-gray-light min-h-[600px] flex items-stretch">
      <div className="bis-container w-full flex flex-col lg:flex-row items-stretch gap-0 py-0">
        {/* Left: Image */}
        <div className="relative flex-1 min-h-[400px] lg:min-h-[650px] overflow-hidden">
          <img

            alt="Victoria - BIS Media Creator"
            className="w-full h-full object-cover object-top"
            style={{ minHeight: 400 }} src="/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg" />
          
          <div className="absolute bottom-8 left-8 text-white">
            <h1 className="text-5xl font-black text-white drop-shadow-lg">Victoria</h1>
            <p
              style={{ color: "#C8FF00" }}
              className="text-sm uppercase tracking-widest font-semibold mt-1 drop-shadow">
              
              Creator & Entrepreneur
            </p>
          </div>
        </div>

        {/* Right: Form Card */}
        <div className="lg:w-[480px] flex items-start justify-center lg:py-10 py-8 lg:pl-10">
          <div className="bg-white shadow-xl rounded-[4px] w-full max-w-[460px] overflow-hidden">
            {/* Lime top border */}
            <div className="bis-lime-border pt-6 px-6 pb-2">
              <h2
                className="text-xl font-black uppercase tracking-tight text-bis-dark"
                style={{ letterSpacing: "0.02em" }}>
                
                STOP RENTING.
                <br />
                START OWNING.
              </h2>
              <p className="text-sm text-bis-gray-text mt-2 leading-relaxed">
                You built the audience. Now build the company behind it. Book a free strategy call and find out what your influence is actually worth.
              </p>
            </div>

            <div className="px-6 pb-6 pt-4 space-y-3">
              {/* Name row */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="input-bis"
                  placeholder="First Name"
                  value={form.firstName}
                  onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
                
                <input
                  className="input-bis"
                  placeholder="Last Name"
                  value={form.lastName}
                  onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
                
              </div>

              {/* Email */}
              <input
                className="input-bis"
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })} />
              

              {/* Interests */}
              <div>
                <p className="text-xs uppercase tracking-widest text-bis-gray-medium mb-2 font-semibold">
                  Area(s) of Interest
                </p>
                <div className="grid grid-cols-2 gap-1">
                  {interests.map((item) =>
                  <label
                    key={item}
                    className="flex items-center gap-2 cursor-pointer text-sm text-bis-gray-text hover:text-bis-dark py-1">
                    
                      <input
                      type="checkbox"
                      checked={form.interests.includes(item)}
                      onChange={() => toggleInterest(item)}
                      className="accent-bis-lime w-4 h-4" />
                    
                      {item}
                    </label>
                  )}
                </div>
              </div>

              {/* Phone + Zip */}
              <div className="grid grid-cols-2 gap-3">
                <input
                  className="input-bis"
                  type="tel"
                  placeholder="Phone"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })} />
                
                <input
                  className="input-bis"
                  placeholder="Zip Code"
                  value={form.zip}
                  onChange={(e) => setForm({ ...form, zip: e.target.value })} />
                
              </div>

              {/* Industry */}
              <select
                className="input-bis"
                value={form.industry}
                onChange={(e) => setForm({ ...form, industry: e.target.value })}>
                
                <option value="">Industry</option>
                {industries.map((ind) =>
                <option key={ind} value={ind}>
                    {ind}
                  </option>
                )}
              </select>

              {/* Privacy */}
              <p className="text-[11px] leading-relaxed text-bis-gray-medium">
                By clicking "NEXT," you agree to our{" "}
                <a href="#" className="underline">
                  Terms & Conditions
                </a>{" "}
                and{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
                . We take your information seriously and never sell it.
              </p>

              {/* CTA Button */}
              <button
                type="button"
                style={{ backgroundColor: "#C8FF00" }}
                className="w-full py-3.5 font-black uppercase tracking-wider text-bis-dark rounded-[25px] hover:brightness-95 transition-all text-sm">
                
                NEXT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;