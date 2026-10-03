import {
  useState,
  useEffect,
  useCallback,
  useRef,
} from "react";
import type { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Titlebar from "./Titlebar";
import Sidebar from "./Sidebar";
import Explorer from "./Explorer";
import Tabsbar from "./Tabsbar";
import Terminal from "./Terminal";
import Bottombar from "./Bottombar";
import CommandPalette from "./CommandPalette";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const toggleTerminal = useCallback(() => {
    setIsTerminalOpen((prev) => !prev);
  }, []);

  const openPalette = useCallback(() => {
    setIsPaletteOpen(true);
  }, []);

  const closePalette = useCallback(() => {
    setIsPaletteOpen(false);
  }, []);

  // Restore theme from localStorage on mount
  useEffect(() => {
    try {
      const saved = localStorage.getItem("portfolio-theme");
      if (saved && saved !== "github-dark") {
        document.documentElement.setAttribute("data-theme", saved);
      }
    } catch {
      // localStorage unavailable
    }
  }, []);

  // Scroll content to top on route change
  useEffect(() => {
    contentRef.current?.scrollTo(0, 0);
  }, [location.pathname]);

  // Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Ctrl+` toggles terminal
      if (e.ctrlKey && e.key === "`") {
        e.preventDefault();
        toggleTerminal();
      }
      // Ctrl+Shift+P opens command palette
      if (e.ctrlKey && e.shiftKey && e.key === "P") {
        e.preventDefault();
        setIsPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleTerminal]);

  return (
    <div className={styles.layout}>
      <Titlebar onOpenCommandPalette={openPalette} />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div className={styles.editorContainer}>
          <Tabsbar />
          <div className={styles.editorWithTerminal}>
            <div className={styles.content} ref={contentRef}>
              {children}
            </div>
            {isTerminalOpen && <Terminal onToggle={toggleTerminal} />}
          </div>
        </div>
      </div>
      <Bottombar
        onTerminalToggle={toggleTerminal}
        isTerminalOpen={isTerminalOpen}
      />
      <CommandPalette
        isOpen={isPaletteOpen}
        onClose={closePalette}
        onToggleTerminal={toggleTerminal}
        isTerminalOpen={isTerminalOpen}
      />
    </div>
  );
}
