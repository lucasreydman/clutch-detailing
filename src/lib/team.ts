export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
};

export const team: TeamMember[] = [
  {
    name: "Alexander Reydman",
    role: "Co-owner & Lead Detailer",
    bio: "Alex runs operations end-to-end — from product selection to final inspection. He treats every car like it's about to be photographed.",
    linkedin: "https://www.linkedin.com/in/alex-reydman-751b92364/",
    initials: "AR",
  },
  {
    name: "Matthew Petko",
    role: "Co-owner & Lead Detailer",
    bio: "Matthew brings the obsession with the small stuff — vent slats, stitching, badge edges. The places a quick wash always misses.",
    linkedin: "https://www.linkedin.com/in/matthew-p-a0b210326/",
    initials: "MP",
  },
];
