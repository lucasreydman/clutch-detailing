export type ServiceTier = {
  id: string;
  name: string;
  category: "Exterior" | "Interior" | "Complete";
  priceCar: number;
  priceSuv?: number;
  duration?: string;
  summary: string;
  includes: string[];
  /** Calendly event slug for the car-sized variant (appended to site.calendlyUrl) */
  calendlyCar?: string;
  /** Calendly event slug for the SUV/Minivan variant */
  calendlySuv?: string;
  /** Add-on within other bookings; no standalone Calendly event */
  addOnOnly?: boolean;
  highlight?: boolean;
};

export const services: ServiceTier[] = [
  {
    id: "standard-wash",
    name: "Standard Wash",
    category: "Exterior",
    priceCar: 30,
    priceSuv: 45,
    duration: "~45 min",
    summary:
      "pH-neutral snow foam pre-wash, two-bucket contact wash, microfibre dry, and door jambs wiped.",
    includes: [
      "pH-neutral snow foam pre-wash",
      "Two-bucket contact wash with grit guards",
      "Microfibre contact dry",
      "Door jambs wiped down",
    ],
    calendlyCar: "car-wash",
    calendlySuv: "waterless-car-wash-suvminivan",
  },
  {
    id: "wheel-tire",
    name: "Wheel & Tire Package",
    category: "Exterior",
    priceCar: 15,
    duration: "~20 min",
    summary:
      "Brake dust removed from the barrels, with a Chemical Guys dressing on the tires.",
    includes: [
      "Acid-free wheel cleaner",
      "Barrel and face agitation",
      "Tire dressing — Chemical Guys",
    ],
    addOnOnly: true,
  },
  {
    id: "interior-standard",
    name: "Interior — Standard",
    category: "Interior",
    priceCar: 135,
    priceSuv: 155,
    duration: "~1.5–2 hr",
    summary:
      "Full vacuum, vents and console detailed, trim cleaned, streak-free interior glass.",
    includes: [
      "Vacuum carpets, seats, trunk",
      "Air vent + console detailing",
      "Plastic and trim cleaner",
      "Streak-free interior glass",
    ],
    calendlyCar: "interior-standard-1",
    calendlySuv: "interior-standard-clone",
  },
  {
    id: "interior-plus",
    name: "Interior — Plus+",
    category: "Interior",
    priceCar: 165,
    priceSuv: 185,
    duration: "~2.5–3 hr",
    summary:
      "Everything in Standard, plus floor-mat shampoo, leather conditioning, and pet hair removal.",
    includes: [
      "Everything in Standard",
      "Floor mat shampoo + extraction",
      "Leather cleaning + conditioning",
      "Pet hair removal",
    ],
    calendlyCar: "plus",
    calendlySuv: "plus-suvminivan",
    highlight: true,
  },
  {
    id: "full-service",
    name: "Full Service",
    category: "Complete",
    priceCar: 165,
    priceSuv: 200,
    duration: "~2.5 hr",
    summary:
      "Standard wash, Standard interior detail, and the Wheel & Tire Package combined.",
    includes: [
      "Standard wash",
      "Standard interior detail",
      "Wheels + tires dressed",
    ],
    calendlyCar: "full-service",
    calendlySuv: "full-service-suvminivan",
  },
  {
    id: "all-in",
    name: "All-In",
    category: "Complete",
    priceCar: 200,
    priceSuv: 225,
    duration: "~3 hr",
    summary:
      "Plus+ interior detail, Standard wash, and the Wheel & Tire Package combined.",
    includes: [
      "Plus+ interior detail",
      "Standard wash",
      "Wheel & Tire package",
      "Final inspection",
    ],
    calendlyCar: "all-in-suv-minivan-clone",
    calendlySuv: "all-in-suv-minivan",
    highlight: true,
  },
];

export const addOns = [
  { name: "Tire Dressing", price: 8 },
  { name: "Wheel Cleaning", price: 10 },
  { name: "Pet Hair Removal", price: "10–15" },
] as const;

/**
 * Build a full Calendly URL for a service variant.
 * Falls back to the account-root URL (event picker) if no slug.
 */
export function bookingUrl(
  baseCalendlyUrl: string,
  slug: string | undefined
): string {
  if (!slug) return baseCalendlyUrl;
  return `${baseCalendlyUrl.replace(/\/$/, "")}/${slug}`;
}
