import { Terminal, Zap, Shield, Brain, MessageSquare, Code, Globe, Lock, Check, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "@/components/TerminalWindow";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import doLogo from "@/assets/do-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
          <div className="mb-8 flex justify-center">
            <img src={doLogo} alt="do>" className="h-24 w-auto" />
          </div>
          
          <h1 className="text-6xl md:text-8xl font-display font-bold text-foreground mb-6 tracking-tight">
            Stop Guessing.<br />
            <span className="text-primary glow-green">Just Do.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            AI that understands your command line.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-16">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 glow-green font-semibold px-8">
              Try Demo
            </Button>
            <Button size="lg" variant="outline" className="border-primary/30 hover:bg-primary/10 font-semibold px-8">
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
          </div>

          <TerminalWindow />
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Core Features
            </h2>
            <p className="text-lg text-muted-foreground">Free forever. No strings attached.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={Zap}
              title="Command Fixer"
              description="Auto-detects missing tools and suggests the correct command syntax for your system."
            />
            <FeatureCard
              icon={Globe}
              title="OS Awareness"
              description="Works seamlessly across Linux, macOS, and Windows. One tool, all platforms."
            />
            <FeatureCard
              icon={Brain}
              title="Alias Memory"
              description="Learns your habits and remembers your custom shortcuts over time."
            />
            <FeatureCard
              icon={Shield}
              title="Safe by Default"
              description="Preview commands before execution. Never run destructive operations blindly."
            />
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              <span className="text-primary">Premium AI</span> Features
            </h2>
            <p className="text-lg text-muted-foreground">Unlock the full power of AI-assisted development.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FeatureCard
              icon={MessageSquare}
              title="Natural-Language Commands"
              description="Type what you want in plain English. AI translates it into precise shell commands."
              isPremium
            />
            <FeatureCard
              icon={Code}
              title="Explain Mode"
              description="Understand complex commands with detailed, context-aware explanations."
              isPremium
            />
            <FeatureCard
              icon={Terminal}
              title="Cross-Platform Translator"
              description="Convert commands between different shells and operating systems instantly."
              isPremium
            />
            <FeatureCard
              icon={Lock}
              title="Secure Preview Execution"
              description="AI-powered safety checks and sandboxed previews for risky operations."
              isPremium
            />
          </div>
        </div>
      </section>

      {/* Visual Comparison Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                Freemium Example
              </h3>
              <div className="bg-card border border-terminal-border rounded-lg p-6 font-mono text-sm">
                <div className="mb-2">
                  <span className="text-primary">%</span> <span className="text-foreground">ipconfig</span>
                </div>
                <div className="text-destructive mb-3">bash: ipconfig: command not found</div>
                <div className="mb-2">
                  <span className="text-primary">%</span> <span className="text-foreground">do ipconfig</span>
                </div>
                <div className="text-primary font-medium">→ ifconfig</div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font-display font-bold text-foreground mb-4">
                <span className="text-primary">Premium</span> Example
              </h3>
              <div className="bg-card border border-primary/50 rounded-lg p-6 font-mono text-sm terminal-shadow">
                <div className="mb-2">
                  <span className="text-primary">%</span> <span className="text-foreground">do find all node processes using port 3000 and kill them</span>
                </div>
                <div className="text-muted-foreground italic mb-3">AI is analyzing...</div>
                <div className="text-primary font-medium mb-1">→ lsof -ti:3000 | xargs kill -9</div>
                <div className="text-sm text-muted-foreground">
                  <Check className="inline w-4 h-4 mr-1" />
                  Safe to execute
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Simple Pricing
            </h2>
            <p className="text-lg text-muted-foreground">Choose the plan that fits your workflow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <PricingCard
              tier="Free"
              price="Free"
              description="Fix command syntax"
              features={[
                "Command fixer",
                "OS awareness",
                "Alias memory",
                "Basic safety checks",
                "Community support"
              ]}
            />
            
            <PricingCard
              tier="Pro"
              price="$4.99"
              description="AI task execution"
              features={[
                "Everything in Free",
                "Natural-language commands",
                "Explain mode",
                "Cross-platform translator",
                "Secure preview execution",
                "Priority support"
              ]}
              highlighted
            />
            
            <PricingCard
              tier="Enterprise"
              price="$19.99"
              description="API + audit logs"
              features={[
                "Everything in Pro",
                "API access",
                "Audit logs & compliance",
                "Team collaboration",
                "Custom integrations",
                "Dedicated support"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-terminal-border py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src={doLogo} alt="do>" className="h-8 w-auto" />
              <span className="text-muted-foreground font-mono">AI that knows your shell.</span>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 do. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
