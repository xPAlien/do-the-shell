import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  isPremium?: boolean;
}

export const FeatureCard = ({ icon: Icon, title, description, isPremium }: FeatureCardProps) => {
  return (
    <div className="group p-6 rounded-sm bg-card border industrial-border matte-reflection transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-sm ${isPremium ? 'bg-primary/10' : 'bg-muted/50'} transition-all duration-300 ${isPremium ? 'group-hover:shadow-[0_0_20px_hsl(var(--cybermint)/0.2)]' : ''}`}>
          <Icon className={`w-6 h-6 ${isPremium ? 'text-primary' : 'text-muted-foreground'} transition-colors`} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2.5 mb-2">
            <h3 className="text-lg font-display font-semibold text-foreground">{title}</h3>
            {isPremium && (
              <span className="text-[10px] px-2 py-0.5 rounded-sm bg-primary/10 text-primary border border-primary/20 font-display tracking-wide">
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
