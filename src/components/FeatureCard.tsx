import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isPremium?: boolean;
}

export const FeatureCard = ({ icon: Icon, title, description, isPremium }: FeatureCardProps) => {
  return (
    <div className="group p-6 rounded-lg bg-card border border-terminal-border hover:border-primary/50 transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-lg ${isPremium ? 'bg-primary/10 glow-green' : 'bg-muted'}`}>
          <Icon className={`w-6 h-6 ${isPremium ? 'text-primary' : 'text-muted-foreground'}`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="text-lg font-semibold text-foreground">{title}</h3>
            {isPremium && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                PRO
              </span>
            )}
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
};
