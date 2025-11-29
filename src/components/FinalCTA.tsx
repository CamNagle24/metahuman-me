import { Button } from "@/components/ui/button";
import { Upload, Mail } from "lucide-react";

export const FinalCTA = () => {
  const emailAddress = "hello@metahuman.me";

  return (
    <section className="py-32 px-6 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
      
      <div className="relative max-w-4xl mx-auto text-center space-y-12">
        <h2 className="text-5xl md:text-6xl font-display font-bold">
          🚀 Ready to Meet <span className="text-gradient">MetaHuman You</span>?
        </h2>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button 
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all duration-300 text-lg px-8 py-6"
          >
            <Upload className="mr-2 h-6 w-6 group-hover:scale-110 transition-transform" />
            Upload Your Video
          </Button>
          
          <span className="text-muted-foreground text-lg font-display">or</span>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-secondary/50 hover:bg-secondary/10 hover:border-secondary transition-all duration-300 text-lg px-8 py-6"
            onClick={() => window.location.href = `mailto:${emailAddress}`}
          >
            <Mail className="mr-2 h-6 w-6" />
            Email to {emailAddress}
          </Button>
        </div>

        <p className="text-xl text-muted-foreground font-light pt-8">
          Let's bring you into Unreal.
        </p>
      </div>
    </section>
  );
};
