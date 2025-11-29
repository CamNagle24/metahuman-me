import { Card } from "@/components/ui/card";

export const HonestNote = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Card className="p-8 md:p-12 bg-gradient-to-br from-card/50 to-muted/30 border-border/50 backdrop-blur-sm">
          <div className="space-y-6 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              🛠️ A Small, <span className="text-gradient">Honest Note</span>
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                MetaHuman Me is a hands-on, creator-driven process.
                Every MetaHuman is crafted individually — this isn't an instant AI filter.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 text-xl font-display">
                <span className="text-foreground">Quality over speed.</span>
                <span className="hidden sm:inline text-primary">•</span>
                <span className="text-foreground">Care over clicks.</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
