export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.03]">
      <div className="absolute inset-0" style={{ animation: 'background-shift 20s ease-in-out infinite' }}>
        {/* Grid pattern */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="currentColor" className="text-primary" />
              <line x1="1" y1="1" x2="20" y2="20" stroke="currentColor" strokeWidth="0.5" className="text-primary" opacity="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>

        {/* ASCII art elements */}
        <div className="absolute top-20 left-10 font-mono text-xs text-primary">
          {`┌─────┐
│ >>> │
└─────┘`}
        </div>

        <div className="absolute bottom-40 right-20 font-mono text-xs text-primary">
          {`╔═══╗
║ do║
╚═══╝`}
        </div>

        <div className="absolute top-1/2 left-1/4 font-mono text-xs text-primary">
          {`→ → →`}
        </div>

        <div className="absolute top-1/3 right-1/3 font-mono text-xs text-primary">
          {`{ AI }`}
        </div>
      </div>
    </div>
  );
};
