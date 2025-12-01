import { Card } from "@/components/ui/card";

export const ComparisonFlip = () => {
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Before - Original Person */}
        <Card className="relative overflow-hidden group hover:border-primary/50 transition-all duration-300">
          <div className="relative w-full aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
            <video 
              src={`${import.meta.env.BASE_URL}original.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Failed to load original.mp4');
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          <div className="absolute top-4 left-4 bg-primary/90 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-white font-display font-semibold text-sm">BEFORE</p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white font-display font-semibold text-lg">Original You</p>
          </div>
        </Card>

        {/* After - MetaHuman */}
        <Card className="relative overflow-hidden group hover:border-secondary/50 transition-all duration-300">
          <div className="relative w-full aspect-video bg-gradient-to-br from-secondary/20 to-primary/20">
            <video 
              src={`${import.meta.env.BASE_URL}metahuman.mp4`}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              onError={(e) => {
                console.error('Failed to load metahuman.mp4');
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          
          <div className="absolute top-4 left-4 bg-secondary/90 backdrop-blur-sm px-4 py-2 rounded-lg">
            <p className="text-white font-display font-semibold text-sm">AFTER</p>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
            <p className="text-white font-display font-semibold text-lg">MetaHuman You</p>
          </div>
        </Card>
      </div>

      {/* Comparison indicator */}
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
          <span className="inline-block animate-pulse">✨</span>
          <span>Side-by-side comparison</span>
          <span className="inline-block animate-pulse">✨</span>
        </p>
      </div>
    </div>
  );
};