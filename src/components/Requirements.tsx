import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const requirements = [
  "A clear video of your face",
  "Permission to use it only for creating your MetaHuman",
  "A bit of patience while the magic happens",
];

export const Requirements = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          🧠 What We Need <span className="text-gradient">From You</span>
        </h2>

        <Card className="p-8 bg-card/50 border-border backdrop-blur-sm">
          <div className="space-y-4">
            {requirements.map((requirement, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 group"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors mt-1">
                  <Check className="w-4 h-4 text-primary" />
                </div>
                <p className="text-lg text-foreground">
                  {requirement}
                </p>
              </div>
            ))}
          </div>
          
          <p className="text-center text-muted-foreground mt-8 text-lg">
            That's it.
          </p>
        </Card>
      </div>
    </section>
  );
};
