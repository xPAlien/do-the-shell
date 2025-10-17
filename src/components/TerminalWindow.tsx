import { useEffect, useState } from "react";

interface TerminalLine {
  type: "prompt" | "command" | "output" | "error" | "thinking";
  content: string;
}

const demoSequence: TerminalLine[] = [
  { type: "prompt", content: "%" },
  { type: "command", content: "ipconfig" },
  { type: "error", content: "bash: ipconfig: command not found" },
  { type: "prompt", content: "%" },
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
    <div className="w-full max-w-3xl mx-auto terminal-shadow rounded-lg overflow-hidden border border-terminal-border">
      {/* Terminal Header */}
      <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-terminal-border">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <span className="text-sm text-muted-foreground ml-2">bash</span>
      </div>

      {/* Terminal Content */}
      <div className="bg-card p-6 min-h-[300px] font-mono text-sm">
        {lines.map((line, index) => (
          <div key={index} className="mb-1">
            {line.type === "prompt" && (
              <span className="text-primary">% </span>
            )}
            {line.type === "command" && (
              <span className="text-foreground">{line.content}</span>
            )}
            {line.type === "error" && (
              <span className="text-destructive">{line.content}</span>
            )}
            {line.type === "thinking" && (
              <span className="text-muted-foreground italic flex items-center gap-2">
                {line.content}
                <span className="flex gap-1">
                  <span className="inline-block w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0ms' }}></span>
                  <span className="inline-block w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '200ms' }}></span>
                  <span className="inline-block w-1 h-1 bg-primary rounded-full animate-pulse" style={{ animationDelay: '400ms' }}></span>
                </span>
              </span>
            )}
            {line.type === "output" && (
              <span className="text-primary font-medium">{line.content}</span>
            )}
          </div>
        ))}
        {currentIndex < demoSequence.length && (
          <span className="inline-block w-2 h-4 bg-primary cursor-blink ml-1"></span>
        )}
      </div>
    </div>
  );
};
