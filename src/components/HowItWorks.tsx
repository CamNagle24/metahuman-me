import { Card } from "@/components/ui/card";
import { Video, Send, Sparkles, Download } from "lucide-react";

const steps = [
  {
    icon: Video,
    title: "Record a short video",
    description: "Front-facing, good lighting, neutral expression + slight head movement. 10–30 seconds is perfect.",
  },
  {
    icon: Send,
    title: "Send it to us",
    description: "Upload directly on this page or email it to us.",
  },
  {
    icon: Sparkles,
    title: "We turn you into a MetaHuman",
    description: "Built using Unreal Engine MetaHuman tools. Carefully crafted by hand + pipeline magic.",
  },
  {
    icon: Download,
    title: "You get the result",
    description: "A MetaHuman version of you. Ready for Unreal Engine, games, cinematics, or just bragging rights.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          🎥 How It <span className="text-gradient">Works</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card 
                key={index}
                className="relative p-6 bg-card border-border hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="absolute top-4 right-4 text-5xl font-display font-bold text-muted/20">
                  {index + 1}
                </div>
                
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  
                  <h3 className="text-xl font-display font-semibold">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
