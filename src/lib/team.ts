export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  initials: string;
  phone: string;
  phoneDisplay: string;
  photo?: string;
};

export const team: TeamMember[] = [
  {
    name: "Alexander Reydman",
    role: "Co-owner & Lead Detailer",
    bio: "Alex handles operations end to end, from product selection through to the final inspection on every job.",
    linkedin: "https://www.linkedin.com/in/alex-reydman-751b92364/",
    initials: "AR",
    phone: "+16472746958",
    phoneDisplay: "(647) 274-6958",
    photo: "/team/alex.jpg",
  },
  {
    name: "Matthew Petko",
    role: "Co-owner & Lead Detailer",
    bio: "Matthew focuses on the details a quick wash always skips. Vent slats, stitching, badge edges, and door jambs.",
    linkedin: "https://www.linkedin.com/in/matthew-p-a0b210326/",
    initials: "MP",
    phone: "+16475171020",
    phoneDisplay: "(647) 517-1020",
    photo: "/team/matt.jpg",
  },
];
