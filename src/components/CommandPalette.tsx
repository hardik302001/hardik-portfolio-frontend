import { useState, useEffect, useRef, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { VscGoToFile } from "react-icons/vsc";
import styles from "../styles/CommandPalette.module.css";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onToggleTerminal: () => void;
  isTerminalOpen: boolean;
}

const themes = [
  { name: "github-dark", display: "GitHub Dark" },
  { name: "dracula", display: "Dracula" },
  { name: "ayu-dark", display: "Ayu Dark" },
  { name: "nord", display: "Nord" },
  { name: "night-owl", display: "Night Owl" },
];

interface Command {
  label: string;
  shortcut?: string;
  action: () => void;
}

type View = "commands" | "themes";

export default function CommandPalette({
  isOpen,
  onClose,
  onToggleTerminal,
  isTerminalOpen,
}: CommandPaletteProps) {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [view, setView] = useState<View>("commands");
  const inputRef = useRef<HTMLInputElement>(null);

  const applyTheme = useCallback(
    (themeName: string) => {
      if (themeName === "github-dark") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", themeName);
      }
      localStorage.setItem("portfolio-theme", themeName);
      onClose();
    },
    [onClose],
  );

  const commands: Command[] = [
    {
      label: "Go to Home",
      action: () => {
        navigate("/");
        onClose();
      },
    },
    {
      label: "Go to About",
      action: () => {
        navigate("/about");
        onClose();
      },
    },
    {
      label: "Go to Projects",
      action: () => {
        navigate("/projects");
        onClose();
      },
    },
    {
      label: "Go to Contact",
      action: () => {
        navigate("/contact");
        onClose();
      },
    },
    {
      label: isTerminalOpen ? "Hide Terminal" : "Toggle Terminal",
      shortcut: "Ctrl+`",
      action: () => {
        onToggleTerminal();
        onClose();
      },
    },
    {
      label: "Change Color Theme",
      action: () => {
        setView("themes");
        setQuery("");
        setSelectedIndex(0);
      },
    },
  ];

  const themeCommands: Command[] = themes.map((t) => ({
    label: t.display,
    action: () => applyTheme(t.name),
  }));

  const activeCommands = view === "commands" ? commands : themeCommands;

  const filtered = activeCommands.filter((cmd) =>
    cmd.label.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setView("commands");
      setTimeout(() => inputRef.current?.focus(), 0);
    }
  }, [isOpen]);

  useEffect(() => {
    setSelectedIndex(0);
  }, [query, view]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      if (view === "themes") {
        setView("commands");
        setQuery("");
        setSelectedIndex(0);
      } else {
        onClose();
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev < filtered.length - 1 ? prev + 1 : 0,
      );
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) =>
        prev > 0 ? prev - 1 : filtered.length - 1,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      filtered[selectedIndex]?.action();
    }
  };

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.container}
        onClick={(e) => e.stopPropagation()}
        onKeyDown={handleKeyDown}
      >
        <div className={styles.inputWrapper}>
          <VscGoToFile className={styles.searchIcon} />
          <input
            ref={inputRef}
            className={styles.input}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              view === "themes"
                ? "Select Color Theme..."
                : "Type a command..."
            }
            spellCheck={false}
          />
        </div>
        {view === "themes" && (
          <div className={styles.footer}>
            <span>Esc to go back</span>
          </div>
        )}
        <div className={styles.items}>
          {filtered.map((cmd, i) => (
            <div
              key={cmd.label}
              className={`${styles.item} ${
                i === selectedIndex ? styles.selected : ""
              }`}
              onClick={() => cmd.action()}
              onMouseEnter={() => setSelectedIndex(i)}
            >
              <span className={styles.itemLabel}>{cmd.label}</span>
              {cmd.shortcut && (
                <span className={styles.key}>{cmd.shortcut}</span>
              )}
            </div>
          ))}
        </div>
        {view === "commands" && (
          <div className={styles.footer}>
            <span className={styles.footerHint}>
              <span className={styles.key}>↑↓</span> navigate
            </span>
            <span className={styles.footerHint}>
              <span className={styles.key}>↵</span> select
            </span>
            <span className={styles.footerHint}>
              <span className={styles.key}>esc</span> close
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
