export const site = {
  name: "Clutch Detailing",
  tagline: "Mobile car detailing, served waterless.",
  description:
    "Showroom-clean cars at your driveway — without the water bill. Premium mobile car detailing exclusively serving Lawrence Park, Hoggs Hollow, and surrounding neighbourhoods in Toronto.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://www.clutchdetailing.ca",
  email: "clutchdetailinglp@gmail.com",
  area: "Lawrence Park · Hoggs Hollow · Surrounding neighbourhoods",
  city: "Toronto",
  region: "ON",
  country: "CA",
  founded: "2024",
  social: {
    instagram: "https://instagram.com/clutch.detailinglp/",
    linkedin: "https://www.linkedin.com/company/clutch-detailing/",
  },
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ||
    "https://calendly.com/your-handle/clutch-detailing",
} as const;
