export const siteConfig = {
  name: "Shree Sharma",
  brandWordmark: ["SHREE", "SHARMA"] as const,
  brandFull: "Shree Sharma | Shine With Shree",
  tagline: "Empowerment Catalyst",
  domain: "https://www.shinewithshree.com",
  email: "shinewithshree@gmail.com",
  phone: "+91 98934 23395",
  logoPath: "/brand-profile.png",
  seo: {
    defaultTitle: "Shree Sharma | Sales Leadership, Enterprise Strategy & Growth",
    defaultDescription:
      "Shree Sharma — empowerment catalyst and sales leader. Enterprise sales strategy, team conversion, MEDDIC & value-based selling, and leadership coaching across USA, UAE, and Europe. Shine With Shree.",
    twitterCard: "summary_large_image" as const,
    personDescription:
      "Enterprise sales strategy, MEDDIC and value-based selling, leadership coaching across India, USA, UAE, and Europe.",
    jobTitle: "Sales leader & empowerment catalyst",
  },
  social: {
    linkedin: "https://linkedin.com/in/shinewithshree",
    instagram: "https://www.instagram.com/shinewithshree/",
    x: "https://x.com/shinewithshree",
    youtube: "https://www.youtube.com/@shinewithshree",
  },
  footer: {
    copyright: "© 2026 SHREE SHARMA. DESIGNED FOR EMPOWERMENT.",
  },
  writing: {
    insightsLabel: "Insights",
    insightsDescription:
      "Long-form frameworks and strategy pieces on enterprise sales, qualification, and leadership.",
    perspectivesLabel: "Perspectives",
    perspectivesDescription:
      "Shorter field notes and quick takes from the front lines of complex deals.",
  },
} as const;

export function absoluteUrl(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.domain}${normalized}`;
}
