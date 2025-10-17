import { Zap, Shield, Brain, MessageSquare, Lock, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TerminalWindow } from "@/components/TerminalWindow";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import doLogo from "@/assets/do-logo.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundPattern />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-20">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-transparent pointer-events-none"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto text-center mb-12">
          <div className="mb-12 flex justify-center group">
            <img 
              src={doLogo} 
              alt="do>" 
              className="h-20 w-auto transition-all duration-300 drop-shadow-[0_0_20px_hsl(var(--cybermint)/0.3)] group-hover:drop-shadow-[0_0_30px_hsl(var(--cybermint)/0.5)]" 
            />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-display font-bold text-foreground mb-8 tracking-tight leading-tight">
            Your AI Command Line<br />
            <span className="text-primary">Companion</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-xl mx-auto font-sans">
            Stop memorizing syntax. Just tell it what you need.
          </p>

          <div className="flex flex-wrap gap-4 justify-center mb-20">
            <Button 
              size="lg" 
              className="bg-primary text-primary-foreground hover:bg-primary/90 font-display px-8 rounded-sm shadow-[0_0_20px_hsl(var(--cybermint)/0.2)] hover:shadow-[0_0_30px_hsl(var(--cybermint)/0.3)] transition-all"
            >
              Try Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border hover:border-primary/30 hover:bg-primary/5 font-display px-8 rounded-sm industrial-border"
            >
              <Github className="mr-2 h-5 w-5" />
              View GitHub
            </Button>
          </div>

          <TerminalWindow />
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-24 px-4 bg-muted/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
              Core Features
            </h2>
            <p className="text-base text-muted-foreground font-sans">Free forever. No strings attached.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard
              icon={Zap}
              title="Command Fixer"
              description="Auto-detects missing tools and suggests the correct command syntax for your system."
            />
            <FeatureCard
              icon={Brain}
              title="Cross-Platform Resolver"
              description="Works seamlessly across Linux, macOS, and Windows. One tool, all platforms."
            />
            <FeatureCard
              icon={Shield}
              title="Alias Memory"
              description="Learns your habits and remembers your custom shortcuts over time."
            />
          </div>
        </div>
      </section>

      {/* Premium Features Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
              <span className="text-primary">AI</span> Features
            </h2>
            <p className="text-base text-muted-foreground font-sans">Unlock the full power of AI-assisted development.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <FeatureCard
              icon={MessageSquare}
              title="Natural-Language Commands"
              description="Type what you want in plain English. AI translates it into precise shell commands."
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


      {/* Pricing Section */}
      <section className="py-24 px-4 bg-muted/20 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-5">
              Simple Pricing
            </h2>
            <p className="text-base text-muted-foreground font-sans">Choose the plan that fits your workflow.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <PricingCard
              tier="Free"
              price="Free"
              description="Fix command syntax"
              features={[
                "Command fixer",
                "Cross-platform resolver",
                "Alias memory",
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
                "Dedicated support"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-terminal-border/50 py-16 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img src={doLogo} alt="do>" className="h-7 w-auto opacity-80" />
              <span className="text-muted-foreground text-sm font-sans">AI that knows your shell.</span>
            </div>
            
            <div className="flex gap-6">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(var(--cybermint)/0.5)]"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-all duration-300 hover:drop-shadow-[0_0_10px_hsl(var(--cybermint)/0.5)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-10 text-center text-xs text-muted-foreground font-sans">
            <p>&copy; 2025 do. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
