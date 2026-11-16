export interface EducationItem {
  institution: string;
  degree: string;
  specialization: string;
  duration: string;
  cgpa: string;
  location: string;
  status: string;
  highlights: string[];
  coursework: string[];
}

export const educationData: EducationItem = {
  institution: "Chitkara University Institute of Engineering & Technology (CUIET)",
  degree: "Bachelor of Engineering (B.E.)",
  specialization: "Computer Science and Engineering with specialization in AI & ML",
  duration: "2024 – 2028",
  cgpa: "8.61 / 10.0",
  location: "Punjab, India",
  status: "Currently Pursuing (Undergraduate)",
  highlights: [
    "Maintaining a rigorous academic record with an 8.61 CGPA across foundational and advanced CS subjects.",
    "Active participant in collegiate hackathons, technical symposiums, and engineering forums.",
    "Recipient of CUCET Scholarship recognized at CU Scholars' Summit 2024."
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (C++/Java)",
    "Artificial Intelligence Foundations",
    "Machine Learning & Statistical Methods",
    "Database Management Systems",
    "Operating Systems & Linux Architecture",
    "Software Engineering Principles"
  ]
};
