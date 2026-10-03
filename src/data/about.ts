export interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    title: "SDE II",
    company: "Zomato — Hyperpure",
    duration: "Sept 2023 – Present",
    description:
      "Built distributed recipe and inventory microservices powering Hyperpure's catalog. Executed a 260M+ row migration with zero downtime. Designed pricing dashboards processing 500K+ events/day using Kafka consumers, Redis caching, and Grafana observability.",
  },
  {
    title: "SDE Intern",
    company: "Amazon",
    duration: "Jan – Jul 2023",
    description:
      "Developed LLM-based document processing workflows with automated content extraction and classification. Built S3 integrations for large-scale data pipelines.",
  },
];

export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  { category: "Languages", items: ["Golang", "C++", "Java", "Python", "JS/TS"] },
  { category: "Backend", items: ["gRPC", "Kafka", "Redis", "DynamoDB", "MySQL"] },
  { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
  { category: "Tools", items: ["AWS", "Docker", "Grafana", "Datadog", "Git"] },
];

export const education = {
  degree: "B.Tech in Computer Science",
  institution: "IIIT Sri City",
  duration: "2019 – 2023",
  cgpa: "8.41 / 10",
};

export const profile = {
  name: "Hardik Sharma",
  role: "SDE II at Zomato — Hyperpure",
  location: "Gurgaon, India",
  github: "https://github.com/hardik302001",
  bio: "I'm a software engineer passionate about building distributed systems that handle real-world scale. Currently at Zomato Hyperpure, I design and ship microservices in Go, work with gRPC and Kafka pipelines, and obsess over system reliability and observability. Previously at Amazon, where I built LLM-based document processing workflows.",
  competitiveProgramming:
    "LeetCode Guardian with a peak rating of 2256 and 2400+ problems solved, maintaining a 1000+ day daily streak. Ranked #1 in India in LeetCode Weekly Contest 281. CodeChef 4 Star rated. Competitive programming sharpened my ability to write correct, performant code under pressure — a skill I bring to every system I build.",
};
