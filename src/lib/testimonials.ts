export type Testimonial = {
  name: string;
  quote: string;
  vehicle?: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Donna M.",
    vehicle: "Porsche",
    quote:
      "It was a pleasure having you clean and detail my Porsche. The job was immaculate and made my car look like a new penny.",
  },
  {
    name: "Jason G.",
    vehicle: "SUV",
    quote:
      "My SUV looks like it was when I picked it up from the dealer lot. Very courteous, very professional. Highly recommend.",
  },
  {
    name: "Karen S.",
    quote:
      "The waterless, environmentally conscious approach is a great idea — and the team is meticulous and paid attention to every detail.",
  },
  {
    name: "P. Brennan",
    quote:
      "Clutch Detailing did an amazing job — very professional, great attention to detail, and courteous throughout.",
  },
  {
    name: "David A.",
    quote:
      "I easily booked my appointment same day online. They arrived and finished on time and did a great job.",
  },
  {
    name: "Jason F.",
    quote:
      "I was really impressed with the personal touch and attention to detail while cleaning my car.",
  },
];
