import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";

const betaSignupSchema = z.object({
  email: z.string()
    .trim()
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" })
});

export const BetaSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const validated = betaSignupSchema.parse({ email });
      setIsSubmitting(true);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Coming Soon! 🚀",
        description: "Beta signups aren't active yet, but we'll launch soon. Stay tuned!",
      });
      
      setEmail("");
    } catch (error) {
      if (error instanceof z.ZodError) {
        toast({
          title: "Invalid email",
          description: error.errors[0].message,
          variant: "destructive",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div 
      id="beta-signup"
      className="w-full max-w-2xl mx-auto mt-12 bg-card p-8 md:p-10 rounded-sm border border-terminal-border matte-reflection hover:diffused-glow transition-all duration-300"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-display font-bold text-foreground mb-3">
          🧠 Unlock AI Mode.
        </h3>
        <p className="text-base text-muted-foreground font-sans">
          Join our beta and get early access to natural-language commands
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-1 bg-muted/50 border-terminal-border focus:border-primary/50 rounded-sm font-mono"
          required
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-display px-8 rounded-sm shadow-[0_0_20px_hsl(var(--cybermint)/0.2)] hover:shadow-[0_0_30px_hsl(var(--cybermint)/0.3)] transition-all"
        >
          {isSubmitting ? "Joining..." : "Join Beta"}
        </Button>
      </form>
    </div>
  );
};
