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
    service: "Physical Products + Launch Strategy",
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
    service: "Digital Products + Community Build",
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
];

/** Helper: look up a creator by slug */
export const getCreatorBySlug = (slug: string): Creator | undefined =>
  creators.find((c) => c.slug === slug);
