export interface LeadershipRole {
  organization: string;
  role: string;
  previousRole?: string;
  scope: string;
  highlights: string[];
  skillsApplied: string[];
}

export const leadershipData: LeadershipRole[] = [
  {
    organization: "Soft Computing Research Society (SCRS), CUIET",
    role: "Vice Chairperson",
    previousRole: "Former Content Writer",
    scope: "Chapter Leadership & Technical Operations (80+ Members)",
    highlights: [
      "Oversee comprehensive chapter operations and coordinate technical initiatives for 80+ active student members, driving structured project allocation and milestone tracking.",
      "Spearhead hackathons, research symposiums, technical talks, and hands-on computing workshops across university departments.",
      "Collaborate closely with faculty mentors, distinguished speakers, and university organizing bodies to elevate technical standards and maximize attendee engagement."
    ],
    skillsApplied: [
      "Team Leadership",
      "Event Architecture",
      "Cross-functional Coordination",
      "Public Speaking",
      "Technical Mentorship"
    ]
  },
  {
    organization: "Bits 'N' Bytes",
    role: "Promotions Head",
    previousRole: "Former Promotions Executive",
    scope: "Brand Strategy, Media & Student Outreach",
    highlights: [
      "Lead promotional strategy, digital branding, and multi-channel outreach campaigns for signature university technology events.",
      "Direct creative teams to develop compelling visual assets, social collateral, and technical communications that elevate event visibility.",
      "Drive strategic engagement initiatives resulting in measurable growth in event registrations, audience participation, and community reach."
    ],
    skillsApplied: [
      "Campaign Strategy",
      "Brand Direction",
      "Community Outreach",
      "Audience Engagement",
      "Creative Production"
    ]
  }
];
