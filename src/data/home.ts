export const hero = {
  greeting: "// hello world !! Welcome to my portfolio",
  firstName: "Hardik",
  lastName: "Sharma",
  description:
    "I live at the crossroads of **backend engineering**, **distributed systems**, and **competitive programming**. I build systems that are genuinely **reliable and scalable**.",
};

export interface RoleBadge {
  label: string;
  color: string;
}

export const roleBadges: RoleBadge[] = [
  { label: "Backend Engineer", color: "#3fb950" },
  { label: "Distributed Systems", color: "#a074c4" },
  { label: "Competitive Programmer", color: "#f97583" },
  { label: "@ Zomato", color: "#f9826c" },
];

export interface Stat {
  value: string;
  label: string;
}

export const stats: Stat[] = [
  { value: "3+", label: "YEARS" },
  { value: "10+", label: "PROJECTS" },
  { value: "2256", label: "LEETCODE" },
  { value: "1000+", label: "DAY STREAK" },
];

export interface SocialLink {
  label: string;
  href: string;
  icon: string;
}

export const socialLinks: SocialLink[] = [
  { label: "Github", href: "https://github.com/hardik302001", icon: "github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/hardik-sharma", icon: "linkedin" },
  { label: "LeetCode", href: "https://leetcode.com/hardik302001", icon: "leetcode" },
  { label: "Codeforces", href: "https://codeforces.com/profile/hardik302001", icon: "codeforces" },
  { label: "Email", href: "mailto:shardik2001@gmail.com", icon: "email" },
];
