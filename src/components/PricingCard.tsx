import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingCardProps {
  tier: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const PricingCard = ({ tier, price, description, features, highlighted }: PricingCardProps) => {
  return (
    <div className={`p-8 rounded-lg border transition-all duration-300 ${
      highlighted 
        ? 'bg-card border-primary shadow-lg shadow-primary/20 scale-105' 
        : 'bg-card border-terminal-border hover:border-primary/30'
    }`}>
      <div className="mb-6">
        <h3 className="text-2xl font-display font-bold text-foreground mb-2">{tier}</h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-4xl font-display font-bold text-primary">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground">/month</span>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full ${
          highlighted 
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 glow-green' 
            : 'bg-muted text-foreground hover:bg-muted/80'
        }`}
      >
        {highlighted ? 'Get Started' : 'Start Free'}
      </Button>
    </div>
  );
};
