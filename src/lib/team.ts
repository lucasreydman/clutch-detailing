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
    bio: "Alex handles operations end to end, from product selection through to the final inspection on every job.",
    linkedin: "https://www.linkedin.com/in/alex-reydman-751b92364/",
    initials: "AR",
  },
  {
    name: "Matthew Petko",
    role: "Co-owner & Lead Detailer",
    bio: "Matthew focuses on the details a quick wash always skips. Vent slats, stitching, badge edges, and door jambs.",
    linkedin: "https://www.linkedin.com/in/matthew-p-a0b210326/",
    initials: "MP",
  },
];
