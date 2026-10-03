export interface Project {
  title: string;
  description: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: "TrackEx",
    description:
      "Voice-powered expense tracker with AI-based categorization",
    link: "https://github.com/hardik302001/TrackEx",
    slug: "trackex",
  },
  {
    title: "Discode",
    description:
      "Real-time collaborative coding platform with WebSockets",
    link: "https://github.com/hardik302001/Discode",
    slug: "discode",
  },
  {
    title: "LLD in Go",
    description:
      "Low-level design patterns — parking lot, elevator, cache, ride booking",
    link: "https://github.com/hardik302001/LLD",
    slug: "lld-go",
  },
  {
    title: "YT Productive",
    description:
      "Chrome extension that blocks YouTube distractions for focused learning",
    link: "https://github.com/hardik302001/yt-productive",
    slug: "yt-productive",
  },
];
