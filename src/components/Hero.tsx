import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";
import { UploadDialog } from "@/components/UploadDialog";
import { ComparisonFlip } from "@/components/ComparisonFlip";

export const Hero = () => {
  const emailAddress = "hello@metahuman.me";
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6 py-20">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-dark">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,hsl(188_100%_50%/0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,hsl(280_80%_56%/0.1),transparent_50%)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full space-y-12 animate-in fade-in duration-1000">
        <div className="text-center space-y-8">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
            <span className="text-gradient">MetaHuman</span> Me
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Turn yourself into a MetaHuman. Upload a short video of yourself, and we'll transform you into a MetaHuman inside Unreal Engine.
          </p>

          <p className="text-lg text-muted-foreground font-light">
            No plugins. No installs. Just you → MetaHuman.
          </p>
        </div>

        {/* Comparison Flip Section */}
        <div className="py-8">
          <ComparisonFlip />
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <UploadDialog />
          
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary transition-all duration-300"
            onClick={() => window.location.href = `mailto:${emailAddress}`}
          >
            <Mail className="mr-2 h-5 w-5" />
            Email Instead
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};