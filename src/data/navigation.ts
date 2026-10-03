import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscExtensions,
  VscCode,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";
import type { IconType } from "react-icons";

export interface SidebarItem {
  icon: IconType;
  path: string;
  tooltip?: string;
}

export const sidebarTop: SidebarItem[] = [
  { icon: VscFiles, path: "/", tooltip: "Explorer" },
  { icon: VscSearch, path: "/projects", tooltip: "Search" },
  { icon: VscSourceControl, path: "/about", tooltip: "Source Control" },
  { icon: VscExtensions, path: "/contact", tooltip: "Extensions" },
  { icon: VscCode, path: "/projects", tooltip: "Projects" },
];

export const sidebarBottom: SidebarItem[] = [
  { icon: VscAccount, path: "/about", tooltip: "Account" },
  { icon: VscSettingsGear, path: "/settings", tooltip: "Settings" },
];

export interface ExplorerFile {
  name: string;
  path: string;
  icon: string;
  color: string;
}

export const explorerFiles: ExplorerFile[] = [
  { name: "home.tsx", path: "/", icon: "tsx", color: "#519aba" },
  { name: "about.html", path: "/about", icon: "html", color: "#e37933" },
  { name: "projects.js", path: "/projects", icon: "js", color: "#cbcb41" },
  { name: "skills.json", path: "/about", icon: "json", color: "#cbcb41" },
  { name: "experience.ts", path: "/about", icon: "ts", color: "#519aba" },
  { name: "contact.css", path: "/contact", icon: "css", color: "#a074c4" },
  { name: "README.md", path: "/", icon: "md", color: "#519aba" },
];

export const tabs = [
  { filename: "home.tsx", path: "/", color: "#519aba" },
  { filename: "about.html", path: "/about", color: "#e37933" },
  { filename: "contact.css", path: "/contact", color: "#a074c4" },
  { filename: "projects.js", path: "/projects", color: "#cbcb41" },
];
