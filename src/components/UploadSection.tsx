import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Upload, Mail } from "lucide-react";

export const UploadSection = () => {
  const emailAddress = "hello@metahuman.me";

  return (
    <section className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16">
          💌 How to Send <span className="text-gradient">Your Video</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Upload Option */}
          <Card className="p-8 bg-card border-border hover:border-primary/50 transition-all duration-300 group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors mx-auto">
                <Upload className="w-8 h-8 text-primary" />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-display font-semibold">
                  Option 1
                </h3>
                <p className="text-muted-foreground">
                  Upload directly
                </p>
              </div>

              <Button 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-primary transition-all"
                size="lg"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Your Video
              </Button>
            </div>
          </Card>

          {/* Email Option */}
          <Card className="p-8 bg-card border-border hover:border-secondary/50 transition-all duration-300 group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors mx-auto">
                <Mail className="w-8 h-8 text-secondary" />
              </div>
              
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-display font-semibold">
                  Option 2
                </h3>
                <p className="text-muted-foreground">
                  Email it to us
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm text-center">
                  {emailAddress}
                </div>
                
                <div className="text-sm text-muted-foreground space-y-2">
                  <p>Include:</p>
                  <ul className="space-y-1 pl-4">
                    <li>• Your name</li>
                    <li>• (Optional) What you want to use your MetaHuman for</li>
                  </ul>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
