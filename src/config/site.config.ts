export interface SiteConfig {
  name: string;
  siteName: string;
  domain: string;
  url: string;
  siteUrl: string;
  description: string;
  siteDescription: string;
  defaultAuthor: string;
  repo: string;
  i18n: { defaultLocale: string; locales: string[]; prefixDefaultLocale: boolean; };
  theme: { style: string; fontFamily: string; colorScheme: string; };
  matomo: { url: string; siteId: string; containerId: string; };
  revive: { reviveId: string; scriptUrl: string; zones: Record<string, { zoneId: number; format: string }>; };
  legal: { editor: string; address: string; contactEmail: string; hostName: string; hostAddress: string; };
  categories: Array<{ id: string; label: string }>;
}

export const siteConfig: SiteConfig = {
  name: "Real Estate Saint-Barthélemy — Propriétés de Prestige & Villas Vue Mer",
  siteName: "realestatestbarthelemy.com",
  domain: "realestatestbarthelemy.com",
  url: "https://realestatestbarthelemy.com",
  siteUrl: "https://realestatestbarthelemy.com",
  description: "Portail d'autorité sur l'immobilier de grand luxe à Saint-Barthélemy : villas pieds dans l'eau à Gustavia, Saint-Jean, Flamands, fiscalité de la Collectivité d'Outre-Mer et conseil en acquisition privée.",
  siteDescription: "Portail d'autorité sur l'immobilier de grand luxe à Saint-Barthélemy : villas pieds dans l'eau à Gustavia, Saint-Jean, Flamands, fiscalité de la Collectivité d'Outre-Mer et conseil en acquisition privée.",
  defaultAuthor: "La Rédaction Real Estate Saint-Barth",
  repo: "jc842/realestatestbarthelemy",

  i18n: {
    defaultLocale: "fr",
    locales: ["fr", "en", "es"],
    prefixDefaultLocale: false,
  },

  theme: {
    style: "lexington-aubergine",
    fontFamily: "Playfair Display, Plus Jakarta Sans, serif",
    colorScheme: "purple",
  },

  matomo: {
    url: "https://analytics.les4h.fr/",
    siteId: "64",
    containerId: "jb4xU5OC",
  },

  revive: {
    reviveId: "ac119b122a644588953c74c4c1daee06",
    scriptUrl: "//ads.les4h.fr/www/delivery/asyncjs.php",
    zones: {
      mobileSticky: { zoneId: 704, format: "mobileBanner" },
      inContent: { zoneId: 703, format: "mediumRectangle" },
      header: { zoneId: 702, format: "leaderboard" },
      halfPage: { zoneId: 700, format: "halfPage" },
      largeRectangle: { zoneId: 701, format: "largeRectangle" },
      skyscraper: { zoneId: 705, format: "skyscraper" },
    },
  },

  legal: {
    editor: "Saint-Barth Real Estate Publications",
    address: "Rue du Général de Gaulle, Gustavia, 97133 Saint-Barthélemy",
    contactEmail: "contact@realestatestbarthelemy.com",
    hostName: "Cloudflare Pages",
    hostAddress: "101 Townsend St, San Francisco, CA 94107, USA",
  },

  categories: [
    { id: "villas-luxe", label: "Villas & Domaines d'Exception" },
    { id: "fiscalite", label: "Fiscalité & Résidence Saint-Barth" },
    { id: "quartiers", label: "Gustavia, Saint-Jean & Flamands" },
    { id: "marche", label: "Tendances Marché & Notaires" },
  ],
};
