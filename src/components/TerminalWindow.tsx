import { useEffect, useState } from "react";

interface TerminalLine {
  type: "prompt" | "command" | "output" | "error" | "thinking";
  content: string;
}

const demoSequence: TerminalLine[] = [
  { type: "prompt", content: "$" },
  { type: "command", content: "ipconfig" },
  { type: "error", content: "bash: ipconfig: command not found" },
  { type: "prompt", content: "$" },
  { type: "command", content: "do ipconfig" },
  { type: "thinking", content: "do is thinking..." },
  { type: "output", content: "→ ifconfig" },
];

export const TerminalWindow = () => {
  const [lines, setLines] = useState<TerminalLine[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= demoSequence.length) {
      const timer = setTimeout(() => {
        setLines([]);
        setCurrentIndex(0);
      }, 3000);
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(
      () => {
        setLines((prev) => [...prev, demoSequence[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      },
      currentIndex === 0 ? 500 : 800
    );

    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <div className="w-full max-w-3xl mx-auto terminal-shadow rounded-sm overflow-hidden border border-terminal-border matte-reflection diffused-glow">
      {/* Terminal Header */}
      <div className="bg-muted/50 px-4 py-2.5 flex items-center gap-2 border-b border-terminal-border/50 backdrop-blur-sm">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-muted-foreground/20"></div>
        </div>
        <span className="text-xs text-muted-foreground ml-2 font-mono">bash</span>
      </div>

      {/* Terminal Content */}
      <div className="bg-card p-8 min-h-[320px] font-mono text-sm relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.02] to-transparent pointer-events-none"></div>
        <div className="relative">
          {lines.map((line, index) => (
            <div key={index} className="mb-1.5">
              {line.type === "prompt" && (
                <span className="text-primary">$ </span>
              )}
              {line.type === "command" && (
                <span className="text-foreground">{line.content}</span>
              )}
              {line.type === "error" && (
                <span className="text-destructive">{line.content}</span>
              )}
              {line.type === "thinking" && (
                <span className="text-muted-foreground italic flex items-center gap-3">
                  {line.content}
                  <span className="flex gap-1.5">
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full ripple-wave"></span>
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full ripple-wave" style={{ animationDelay: '0.2s' }}></span>
                    <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full ripple-wave" style={{ animationDelay: '0.4s' }}></span>
                  </span>
                </span>
              )}
              {line.type === "output" && (
                <span className="text-primary font-medium">{line.content}</span>
              )}
            </div>
          ))}
          {currentIndex < demoSequence.length && (
            <span className="inline-block h-4 bg-primary pulse-line ml-1 rounded-sm"></span>
          )}
        </div>
      </div>
    </div>
  );
};
