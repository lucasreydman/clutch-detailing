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
      "pH-neutral snow foam pre-wash, two-bucket contact wash, microfibre dry, and door jambs wiped.",
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
      "Brake dust removed from the barrels, with a Chemical Guys dressing on the tires.",
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
      "Full vacuum, vents and console detailed, trim cleaned, streak-free interior glass.",
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
      "Everything in Standard, plus floor-mat shampoo, leather conditioning, and pet hair removal.",
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
      "Standard wash, Standard interior detail, and the Wheel & Tire Package combined.",
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
      "Plus+ interior detail, Standard wash, and the Wheel & Tire Package combined.",
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
      "Wash, iron decontamination, clay bar paint preparation, and a CRMX ceramic application with cure.",
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
