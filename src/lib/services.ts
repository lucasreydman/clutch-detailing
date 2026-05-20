export type ServiceTier = {
  id: string;
  name: string;
  category: "Exterior" | "Interior" | "Complete" | "Coating";
  priceCar: number;
  priceSuv?: number;
  duration?: string;
  summary: string;
  includes: string[];
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
      "Snow foam, double-bucket technique, and a flawless contact dry. The everyday refresh.",
    includes: [
      "pH-neutral snow foam pre-wash",
      "Two-bucket contact wash with grit guards",
      "Microfibre contact dry",
      "Door jambs wiped down",
    ],
  },
  {
    id: "wheel-tire",
    name: "Wheel & Tire Package",
    category: "Exterior",
    priceCar: 15,
    duration: "~20 min",
    summary:
      "Brake-dust dissolved off the barrels and a Chemical Guys dressing for a satin sheen.",
    includes: [
      "Acid-free wheel cleaner",
      "Barrel and face agitation",
      "Tire dressing — Chemical Guys",
    ],
  },
  {
    id: "interior-standard",
    name: "Interior — Standard",
    category: "Interior",
    priceCar: 135,
    priceSuv: 155,
    duration: "~1.5–2 hr",
    summary:
      "Full vacuum, vent detail, trim cleaning, and streak-free glass — top to bottom.",
    includes: [
      "Vacuum carpets, seats, trunk",
      "Air vent + console detailing",
      "Plastic and trim cleaner",
      "Streak-free interior glass",
    ],
  },
  {
    id: "interior-plus",
    name: "Interior — Plus+",
    category: "Interior",
    priceCar: 165,
    priceSuv: 185,
    duration: "~2.5–3 hr",
    summary:
      "Everything in Standard, plus floor-mat shampoo, leather treatment, and pet hair removal.",
    includes: [
      "Everything in Standard",
      "Floor mat shampoo + extraction",
      "Leather cleaning + conditioning",
      "Pet hair removal",
    ],
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
      "Standard interior + a Standard wash + the Wheel & Tire Package. Inside, outside, done.",
    includes: [
      "Standard wash",
      "Standard interior detail",
      "Wheels + tires dressed",
    ],
  },
  {
    id: "all-in",
    name: "All-In",
    category: "Complete",
    priceCar: 200,
    priceSuv: 225,
    duration: "~3 hr",
    summary:
      "The whole catalogue in one visit. Plus+ interior, wash, wheels, tires.",
    includes: [
      "Plus+ interior detail",
      "Standard wash",
      "Wheel & Tire package",
      "Final inspection",
    ],
    highlight: true,
  },
  {
    id: "ceramic",
    name: "Ceramic Coating — CRMX",
    category: "Coating",
    priceCar: 599,
    duration: "Half day",
    summary:
      "Multi-step decontamination, clay bar, and a CRMX coating with hydrophobic gloss that lasts.",
    includes: [
      "Standard wash + iron decontamination",
      "Clay bar paint prep",
      "CRMX ceramic application",
      "Cure + final wipe-down",
    ],
  },
];

export const addOns = [
  { name: "Tire Dressing", price: 8 },
  { name: "Wheel Cleaning", price: 10 },
  { name: "Pet Hair Removal", price: "10–15" },
] as const;
