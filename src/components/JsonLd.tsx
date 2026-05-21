import { site } from "@/lib/site";

export function LocalBusinessJsonLd() {
  const json = {
    "@context": "https://schema.org",
    "@type": "AutoDetailing",
    name: site.name,
    description: site.description,
    url: site.url,
    email: site.email,
    image: `${site.url}/og.png`,
    priceRange: "$30 – $599",
    foundingDate: site.founded,
    areaServed: [
      { "@type": "Place", name: "Lawrence Park, Toronto" },
      { "@type": "Place", name: "Hoggs Hollow, Toronto" },
      { "@type": "Place", name: "North Toronto" },
    ],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Toronto",
      addressRegion: "ON",
      addressCountry: "CA",
    },
    sameAs: [site.social.instagram, site.social.linkedin],
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}
