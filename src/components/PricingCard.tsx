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
    <div className={`p-8 rounded-sm border transition-all duration-300 matte-reflection ${
      highlighted 
        ? 'bg-card border-primary/40 shadow-[0_0_30px_hsl(var(--cybermint)/0.15)]' 
        : 'bg-card industrial-border'
    }`}>
      <div className="mb-8">
        <h3 className="text-2xl font-display font-bold text-foreground mb-3">{tier}</h3>
        <div className="flex items-baseline gap-2 mb-4">
          <span className="text-4xl font-display font-bold text-primary">{price}</span>
          {price !== "Free" && <span className="text-muted-foreground text-sm">/month</span>}
        </div>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>

      <ul className="space-y-3.5 mb-10">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-sm text-foreground leading-relaxed">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full rounded-sm font-display ${
          highlighted 
            ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_hsl(var(--cybermint)/0.2)] hover:shadow-[0_0_30px_hsl(var(--cybermint)/0.3)]' 
            : 'bg-muted/50 text-foreground hover:bg-muted border border-border'
        }`}
      >
        {highlighted ? 'Get Started' : 'Start Free'}
      </Button>
    </div>
  );
};
