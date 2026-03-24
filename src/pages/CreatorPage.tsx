import { useParams, Navigate } from "react-router-dom";
import { useState } from "react";
import { Play } from "lucide-react";
import { getCreatorBySlug } from "@/data/creators";
import Header from "@/components/sections/Header";
import MetricsSection from "@/components/sections/MetricsSection";
import FooterCTASection from "@/components/sections/FooterCTASection";
import FooterInfoSection from "@/components/sections/FooterInfoSection";

const interests = [
  "Digital Products",
  "Paid Community",
  "Monetization Systems",
  "Business Infrastructure",
];

const industries = [
  "Creator / Influencer",
  "Coach / Consultant",
  "E-commerce",
  "Service Business",
  "Other",
];

const CreatorPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const creator = getCreatorBySlug(slug ?? "");
  const [playing, setPlaying] = useState(false);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    interests: [] as string[],
    phone: "",
    zip: "",
    industry: "",
  });

  if (!creator) return <Navigate to="/" replace />;

  const { page } = creator;

  const toggleInterest = (interest: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="relative bg-bis-gray-light min-h-[600px] flex items-stretch">
        <div className="bis-container w-full flex flex-col lg:flex-row items-stretch gap-0 py-0">
          {/* Left: hero photo */}
          <div className="relative flex-1 min-h-[400px] lg:min-h-[650px] overflow-hidden">
            <img
              src={page.heroPhoto}
              alt={`${creator.name} — BIS Media`}
              className="w-full h-full object-cover object-top"
              style={{ minHeight: 400 }}
            />
            <div className="absolute bottom-8 left-8 text-white">
              <h1 className="text-5xl font-black text-white drop-shadow-lg">
                {creator.name}
              </h1>
              <p
                style={{ color: "#C8FF00" }}
                className="text-sm uppercase tracking-widest font-semibold mt-1 drop-shadow"
              >
                {page.role}
              </p>
            </div>
          </div>

          {/* Right: lead-capture form */}
          <div className="lg:w-[480px] flex items-start justify-center lg:py-10 py-8 lg:pl-10">
            <div className="bg-white shadow-xl rounded-[4px] w-full max-w-[460px] overflow-hidden">
              <div className="bis-lime-border pt-6 px-6 pb-2">
                <h2
                  className="text-xl font-black uppercase tracking-tight text-bis-dark"
                  style={{ letterSpacing: "0.02em" }}
                >
                  STOP RENTING.
                  <br />
                  START OWNING.
                </h2>
                <p className="text-sm text-bis-gray-text mt-2 leading-relaxed">
                  You built the audience. Now build the company behind it. Book
                  a free strategy call and find out what your influence is
                  actually worth.
                </p>
              </div>

              <div className="px-6 pb-6 pt-4 space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className="input-bis"
                    placeholder="First Name"
                    value={form.firstName}
                    onChange={(e) =>
                      setForm({ ...form, firstName: e.target.value })
                    }
                  />
                  <input
                    className="input-bis"
                    placeholder="Last Name"
                    value={form.lastName}
                    onChange={(e) =>
                      setForm({ ...form, lastName: e.target.value })
                    }
                  />
                </div>
                <input
                  className="input-bis"
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                />
                <div>
                  <p className="text-xs uppercase tracking-widest text-bis-gray-medium mb-2 font-semibold">
                    Area(s) of Interest
                  </p>
                  <div className="grid grid-cols-2 gap-1">
                    {interests.map((item) => (
                      <label
                        key={item}
                        className="flex items-center gap-2 cursor-pointer text-sm text-bis-gray-text hover:text-bis-dark py-1"
                      >
                        <input
                          type="checkbox"
                          checked={form.interests.includes(item)}
                          onChange={() => toggleInterest(item)}
                          className="accent-bis-lime w-4 h-4"
                        />
                        {item}
                      </label>
                    ))}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    className="input-bis"
                    type="tel"
                    placeholder="Phone"
                    value={form.phone}
                    onChange={(e) =>
                      setForm({ ...form, phone: e.target.value })
                    }
                  />
                  <input
                    className="input-bis"
                    placeholder="Zip Code"
                    value={form.zip}
                    onChange={(e) =>
                      setForm({ ...form, zip: e.target.value })
                    }
                  />
                </div>
                <select
                  className="input-bis"
                  value={form.industry}
                  onChange={(e) =>
                    setForm({ ...form, industry: e.target.value })
                  }
                >
                  <option value="">Industry</option>
                  {industries.map((ind) => (
                    <option key={ind} value={ind}>
                      {ind}
                    </option>
                  ))}
                </select>
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
                <button
                  type="button"
                  style={{ backgroundColor: "#C8FF00" }}
                  className="w-full py-3.5 font-black uppercase tracking-wider text-bis-dark rounded-[25px] hover:brightness-95 transition-all text-sm"
                >
                  NEXT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── NARRATIVE / RESULTS ──────────────────────────────── */}
      <section className="bis-section bg-white">
        <div className="bis-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={page.resultsPhoto}
                alt={`${creator.name} results`}
                loading="lazy"
                width={700}
                height={600}
                className="w-full h-[480px] object-cover rounded-[16px]"
              />
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-3">
                <span
                  style={{ color: "#C8FF00" }}
                  className="text-2xl mt-1 leading-none"
                >
                  ◆
                </span>
                <h2 className="text-bis-dark">{page.narrativeHeading}</h2>
              </div>
              <div className="space-y-5 text-bis-gray-text text-base leading-relaxed">
                {page.narrativeParagraphs.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
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

      {/* ── METRICS (shared component) ───────────────────────── */}
      <MetricsSection />

      {/* ── VIDEO ────────────────────────────────────────────── */}
      <section className="bis-section" style={{ backgroundColor: "#1a1a1a" }}>
        <div className="bis-container text-center">
          <p
            style={{ color: "#C8FF00" }}
            className="text-xs uppercase tracking-[0.2em] font-semibold mb-3"
          >
            HEAR IT FROM {creator.name.toUpperCase()}
          </p>
          <h2 className="text-white mb-10">{page.videoHeading}</h2>
          <div className="relative mx-auto max-w-3xl rounded-[16px] overflow-hidden shadow-2xl aspect-video">
            {!playing ? (
              <div
                className="relative cursor-pointer group bg-black/80 w-full h-full flex items-center justify-center"
                onClick={() => setPlaying(true)}
              >
                <div className="absolute inset-0 bg-bis-dark/60 flex items-center justify-center">
                  <div
                    style={{ backgroundColor: "#C8FF00" }}
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
                  >
                    <Play size={32} className="text-bis-dark ml-1" fill="#1a1a1a" />
                  </div>
                </div>
                <span className="text-white/40 text-sm z-10">
                  {creator.name}'s testimonial video
                </span>
              </div>
            ) : (
              <iframe
                className="w-full aspect-video"
                src={`https://www.youtube.com/embed/${page.videoId}?autoplay=1`}
                title={page.videoHeading}
                allow="autoplay; encrypted-media"
                allowFullScreen
              />
            )}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIAL ──────────────────────────────────────── */}
      <section className="bis-section bg-bis-gray-light">
        <div className="bis-container">
          <div className="max-w-3xl mx-auto">
            <div className="bis-lime-left-border pl-8 py-4">
              <blockquote className="text-[18px] italic leading-relaxed text-bis-gray-text">
                "{page.testimonialQuote}"
              </blockquote>
              <p className="mt-6 font-bold text-bis-dark text-base not-italic">
                — {creator.name}
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterCTASection />
      <FooterInfoSection />
    </div>
  );
};

export default CreatorPage;
