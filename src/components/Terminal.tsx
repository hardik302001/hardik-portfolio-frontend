import { useState, useRef, useEffect } from "react";
import { VscTerminal, VscClose } from "react-icons/vsc";
import styles from "../styles/Terminal.module.css";

interface TerminalProps {
  onToggle: () => void;
}

interface TerminalLine {
  command?: string;
  output: string;
  type?: "error" | "success";
}

const themes = [
  { name: "github-dark", display: "GitHub Dark" },
  { name: "dracula", display: "Dracula" },
  { name: "ayu-dark", display: "Ayu Dark" },
  { name: "nord", display: "Nord" },
  { name: "night-owl", display: "Night Owl" },
];

const themeNames = themes.map((t) => t.name);

function processCommand(input: string): TerminalLine {
  const trimmed = input.trim();
  const parts = trimmed.split(/\s+/);
  const cmd = parts[0]?.toLowerCase() ?? "";

  switch (cmd) {
    case "help":
      return {
        command: trimmed,
        output: [
          "Available commands:",
          "  help       - Show this help message",
          "  about      - About me",
          "  skills     - List my technical skills",
          "  projects   - List my projects",
          "  contact    - Show contact information",
          "  themes     - List available themes",
          "  theme <n>  - Change color theme",
          "  clear      - Clear terminal",
          "  date       - Show current date",
          "  whoami     - Who are you?",
          "  ls         - List files",
          "  pwd        - Print working directory",
          "  echo <msg> - Echo a message",
        ].join("\n"),
      };

    case "about":
      return {
        command: trimmed,
        output:
          "Hi, I'm Hardik! SDE II at Zomato, previously at Amazon. I love building scalable backend systems, competitive programming, and exploring distributed architectures.",
      };

    case "skills":
      return {
        command: trimmed,
        output:
          "Golang, Python, C++, Java, JS/TS, SQL, AWS, Redis, Kafka, React, Docker, gRPC, Grafana, Datadog",
      };

    case "projects":
      return {
        command: trimmed,
        output: [
          "1. TrackEx       - Voice-powered expense tracker with AI categorization",
          "2. Discode       - Real-time collaborative coding platform",
          "3. LLD in Go     - Low-level design patterns in Go",
          "4. YT Productive - Chrome extension for focused YouTube learning",
        ].join("\n"),
      };

    case "contact":
      return {
        command: trimmed,
        output: [
          "Email:    shardik2001@gmail.com",
          "GitHub:   hardik302001",
          "LinkedIn: linkedin.com/in/hardik-sharma",
          "LeetCode: leetcode.com/hardik302001",
        ].join("\n"),
      };

    case "themes":
      return {
        command: trimmed,
        output: [
          "Available themes:",
          ...themes.map((t) => `  ${t.name.padEnd(14)} ${t.display}`),
          "",
          'Usage: theme <name>  (e.g. "theme dracula")',
        ].join("\n"),
      };

    case "theme": {
      const themeName = parts[1]?.toLowerCase();
      if (!themeName) {
        return {
          command: trimmed,
          output: 'Usage: theme <name>  (e.g. "theme dracula")',
          type: "error",
        };
      }
      if (!themeNames.includes(themeName)) {
        return {
          command: trimmed,
          output: `Unknown theme: "${themeName}". Run "themes" to see available options.`,
          type: "error",
        };
      }
      if (themeName === "github-dark") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", themeName);
      }
      localStorage.setItem("portfolio-theme", themeName);
      const display =
        themes.find((t) => t.name === themeName)?.display ?? themeName;
      return {
        command: trimmed,
        output: `Theme changed to ${display}`,
        type: "success",
      };
    }

    case "date":
      return {
        command: trimmed,
        output: new Date().toString(),
      };

    case "whoami":
      return {
        command: trimmed,
        output:
          "visitor@hardik-portfolio ~ exploring awesome projects",
      };

    case "ls":
      return {
        command: trimmed,
        output: "about/  projects/  skills/  contact/  README.md",
      };

    case "pwd":
      return {
        command: trimmed,
        output: "/home/visitor/portfolio",
      };

    case "echo":
      return {
        command: trimmed,
        output: parts.slice(1).join(" ") || "",
      };

    case "clear":
      return { command: trimmed, output: "__CLEAR__" };

    case "":
      return { command: "", output: "" };

    default:
      return {
        command: trimmed,
        output: `command not found: ${cmd}. Type "help" for available commands.`,
        type: "error",
      };
  }
}

export default function Terminal({ onToggle }: TerminalProps) {
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      output:
        'Welcome to Hardik\'s portfolio terminal! Type "help" to get started.',
    },
  ]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bodyRef.current?.scrollTo(0, bodyRef.current.scrollHeight);
  }, [lines]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = () => {
    const result = processCommand(input);
    if (result.output === "__CLEAR__") {
      setLines([]);
    } else {
      setLines((prev) => [...prev, result]);
    }
    if (input.trim()) {
      setHistory((prev) => [...prev, input.trim()]);
    }
    setInput("");
    setHistoryIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (history.length === 0) return;
      const newIndex =
        historyIndex === -1
          ? history.length - 1
          : Math.max(0, historyIndex - 1);
      setHistoryIndex(newIndex);
      setInput(history[newIndex] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex === -1) return;
      const newIndex = historyIndex + 1;
      if (newIndex >= history.length) {
        setHistoryIndex(-1);
        setInput("");
      } else {
        setHistoryIndex(newIndex);
        setInput(history[newIndex] ?? "");
      }
    }
  };

  return (
    <div className={styles.terminal}>
      <div className={styles.header}>
        <div className={styles.headerTabs}>
          <span className={styles.headerTabActive}>
            <VscTerminal style={{ marginRight: "0.35rem" }} />
            Terminal
          </span>
        </div>
        <div className={styles.headerActions}>
          <VscClose
            style={{ cursor: "pointer" }}
            onClick={onToggle}
          />
        </div>
      </div>
      <div
        className={styles.body}
        ref={bodyRef}
        onClick={() => inputRef.current?.focus()}
      >
        {lines.map((line, i) => (
          <div key={i}>
            {line.command !== undefined && (
              <div className={styles.line}>
                <span className={styles.prompt}>$</span>
                <span>{line.command}</span>
              </div>
            )}
            {line.output && (
              <div
                className={`${styles.line} ${
                  line.type === "error"
                    ? styles.error
                    : line.type === "success"
                      ? styles.success
                      : styles.output
                }`}
                style={{ whiteSpace: "pre-wrap" }}
              >
                {line.output}
              </div>
            )}
          </div>
        ))}
        <div className={styles.line}>
          <span className={styles.prompt}>$</span>
          <input
            ref={inputRef}
            className={styles.input}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck={false}
            autoComplete="off"
          />
        </div>
      </div>
    </div>
  );
}
