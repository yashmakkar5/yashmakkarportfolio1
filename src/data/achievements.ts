export interface Achievement {
  id: string;
  title: string;
  context: string;
  scope: string;
  year: string;
  description: string;
  details: string[];
  tag: string;
}

export const achievementsData: Achievement[] = [
  {
    id: "sap-hackfest",
    title: "SAP HackFest 26 Finalist",
    context: "Chitkara University Selection for North India Regional Grand Finale",
    scope: "Top 10 Teams out of 200 Competitors",
    year: "2026",
    tag: "Competitive Hackathon",
    description:
      "Selected among the top 10 teams out of 200 participating teams at Chitkara University to represent the institution at the North India Regional Grand Finale.",
    details: [
      "Competed against 200 collegiate engineering teams evaluating problem formulation, technical depth, and rapid prototype execution.",
      "Engineered an end-to-end software solution demonstrating architectural maturity and problem-solving velocity under time constraints.",
      "Advanced to the North India Regional Grand Finale based on jury evaluation."
    ]
  },
  {
    id: "cu-scholars-summit",
    title: "CU Scholars' Summit Recognition",
    context: "Chandigarh University Common Entrance Test (CUCET)",
    scope: "Merit-Based Academic Scholarship",
    year: "2024",
    tag: "Academic Honor",
    description:
      "Awarded Certificate of Appreciation in recognition of high academic merit and securing scholarship through the CUCET entrance examination.",
    details: [
      "Recognized for top percentile performance in competitive technical and quantitative assessments.",
      "Awarded institutional scholarship supporting undergraduate engineering studies in AI & ML.",
      "Honored at the annual CU Scholars' Summit celebrating academic excellence."
    ]
  }
];
