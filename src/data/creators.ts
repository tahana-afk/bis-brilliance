/**
 * ============================================================
 *  BIS MEDIA — CREATOR DATA
 * ============================================================
 *
 *  This is the single place to manage all creator cards.
 *
 *  HOW TO EDIT:
 *  1. Upload your photo via the chat (+Attach), then paste
 *     the resulting path into `photo` below.
 *  2. Change `name`, `service`, `slug`, and all page copy.
 *  3. To ADD a creator, copy any object below, paste it at
 *     the end of the array, give it a unique `slug`, and add
 *     a matching <Route> in App.tsx.
 *
 *  SLUGS map to URL paths:
 *    slug: "victoria"  →  /victoria
 *    slug: "sebastian" →  /sebastian
 *    … etc.
 * ============================================================
 */

export interface Creator {
  /** URL slug used for routing, e.g. "victoria" → /victoria */
  slug: string;
  /** Display name shown on the card and page */
  name: string;
  /** Short label under the name, e.g. "The Accelerator" */
  service: string;
  /**
   * Photo for the featured card grid.
   * Use a lovable-uploads path or an @/assets import string.
   * Example: "/lovable-uploads/your-file-id.jpg"
   */
  photo: string;
  /** ── Individual page copy ─────────────────────────────── */
  page: {
    /** Large hero image (left side of the page) */
    heroPhoto: string;
    /** Role/title shown under the name on the hero */
    role: string;
    /** Section label above the narrative heading */
    narrativeLabel: string;
    /** Large heading in the narrative section */
    narrativeHeading: string;
    /** Three narrative paragraphs */
    narrativeParagraphs: [string, string, string];
    /** Results/before-after image */
    resultsPhoto: string;
    /** YouTube video ID, e.g. "dQw4w9WgXcQ" */
    videoId: string;
    /** Video section heading */
    videoHeading: string;
    /** Testimonial quote (without surrounding quotes) */
    testimonialQuote: string;
  };
}

export const creators: Creator[] = [
  // ──────────────────────────────────────────────────────────
  //  1. VICTORIA
  // ──────────────────────────────────────────────────────────
  {
    slug: "victoria",
    name: "Victoria",
    service: "The Accelerator",
    photo: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
    page: {
      heroPhoto: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
      role: "Creator & Entrepreneur",
      narrativeLabel: "From Creator to Owner",
      narrativeHeading: "She Stopped Being a Creator. She Became an Owner.",
      narrativeParagraphs: [
        "Victoria had the audience, the work ethic, and the content. But every month felt like starting over — her income tied to posts, her growth tied to algorithms she didn't control.",
        "So she stopped renting her influence. We built the business behind her brand — one that generates income whether she posts or not.",
        "Now Victoria doesn't just create. She owns. And the difference isn't just financial — it's the freedom to build on her own terms.",
      ],
      resultsPhoto: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
      videoId: "dQw4w9WgXcQ",
      videoHeading: "From Creator to Company — Victoria's Story",
      testimonialQuote:
        "I used to think I was building a business. I was building a job. BIS Media helped me see the difference — and then helped me fix it. Now I own something real. Something that runs without me. Something I'll still have in 10 years.",
    },
  },

  // ──────────────────────────────────────────────────────────
  //  2. SEBASTIAN
  // ──────────────────────────────────────────────────────────
  {
    slug: "sebastian",
    name: "Sebastian",
    service: "The Blueprint",
    photo: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
    page: {
      heroPhoto: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
      role: "Creator & Business Owner",
      narrativeLabel: "From Creator to Owner",
      narrativeHeading: "He Turned His Audience Into a Company.",
      narrativeParagraphs: [
        "Sebastian had a loyal audience and a proven voice. But his income was fragile — dependent on brand deals that came and went.",
        "We built the infrastructure behind his brand. Systems, products, and revenue that compound over time — not reset every month.",
        "Today Sebastian runs a real business. One that works for him, not the other way around.",
      ],
      resultsPhoto: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
      videoId: "dQw4w9WgXcQ",
      videoHeading: "From Creator to Company — Sebastian's Story",
      testimonialQuote:
        "I finally stopped chasing brand deals and started building something I actually own. BIS Media made that possible.",
    },
  },

  // ──────────────────────────────────────────────────────────
  //  3. SOPHIA R.
  //  ↓ Replace photo path and page copy when ready
  // ──────────────────────────────────────────────────────────
  {
    slug: "sophia",
    name: "Sophia R.",
    service: "The Accelerator",
    photo: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
    page: {
      heroPhoto: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
      role: "Creator & Owner",
      narrativeLabel: "From Creator to Owner",
      narrativeHeading: "Sophia Built the Business She Always Deserved.",
      narrativeParagraphs: [
        "Add Sophia's story here. Describe where she started and what she was struggling with.",
        "Explain what BIS Media built for her and why it mattered.",
        "Share the transformation — what ownership looks like for her today.",
      ],
      resultsPhoto: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
      videoId: "dQw4w9WgXcQ",
      videoHeading: "From Creator to Company — Sophia's Story",
      testimonialQuote: "Add Sophia's testimonial quote here.",
    },
  },

  // ──────────────────────────────────────────────────────────
  //  4. AMARA K.
  // ──────────────────────────────────────────────────────────
  {
    slug: "amara",
    name: "Amara K.",
    service: "The Blueprint",
    photo: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
    page: {
      heroPhoto: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
      role: "Creator & Owner",
      narrativeLabel: "From Creator to Owner",
      narrativeHeading: "Amara Stopped Posting for Pennies. She Started Owning.",
      narrativeParagraphs: [
        "Add Amara's story here.",
        "Explain the shift and what was built for her.",
        "Describe what ownership means for her today.",
      ],
      resultsPhoto: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
      videoId: "dQw4w9WgXcQ",
      videoHeading: "From Creator to Company — Amara's Story",
      testimonialQuote: "Add Amara's testimonial quote here.",
    },
  },

  // ──────────────────────────────────────────────────────────
  //  5. MIA C.
  // ──────────────────────────────────────────────────────────
  {
    slug: "mia",
    name: "Mia C.",
    service: "The Spotlight",
    photo: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
    page: {
      heroPhoto: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
      role: "Creator & Owner",
      narrativeLabel: "From Creator to Owner",
      narrativeHeading: "Mia Chose Ownership Over Attention.",
      narrativeParagraphs: [
        "Add Mia's story here.",
        "Explain the shift and what was built for her.",
        "Describe what ownership means for her today.",
      ],
      resultsPhoto: "/lovable-uploads/632e6ce1-dcc5-4e5f-8637-dc50030b76c9.jpg",
      videoId: "dQw4w9WgXcQ",
      videoHeading: "From Creator to Company — Mia's Story",
      testimonialQuote: "Add Mia's testimonial quote here.",
    },
  },

  // ──────────────────────────────────────────────────────────
  //  6. YUKI T.
  // ──────────────────────────────────────────────────────────
  {
    slug: "yuki",
    name: "Yuki T.",
    service: "The Autopilot",
    photo: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
    page: {
      heroPhoto: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
      role: "Creator & Owner",
      narrativeLabel: "From Creator to Owner",
      narrativeHeading: "Yuki Built a Business That Runs Without Her.",
      narrativeParagraphs: [
        "Add Yuki's story here.",
        "Explain the shift and what was built for her.",
        "Describe what ownership means for her today.",
      ],
      resultsPhoto: "/lovable-uploads/c0c80e9c-1462-4dd3-bbdd-9c6cb3b51000.jpg",
      videoId: "dQw4w9WgXcQ",
      videoHeading: "From Creator to Company — Yuki's Story",
      testimonialQuote: "Add Yuki's testimonial quote here.",
    },
  },
];

/** Helper: look up a creator by slug */
export const getCreatorBySlug = (slug: string): Creator | undefined =>
  creators.find((c) => c.slug === slug);
