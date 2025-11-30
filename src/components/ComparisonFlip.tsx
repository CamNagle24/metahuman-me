import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

export const ComparisonFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Auto-flip every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="perspective-1000">
        <Card 
          className={`relative w-full aspect-video overflow-hidden transition-all duration-700 transform-style-3d cursor-pointer ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
          }}
        >
          {/* Front - Original Person */}
          <div 
            className="absolute inset-0 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20">
              {/* Placeholder for original video/gif */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-primary/30 flex items-center justify-center">
                    <svg className="w-16 h-16 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">Original You</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Replace with your video/gif in:<br />
                      <code className="text-xs bg-muted px-2 py-1 rounded">public/original.mp4</code>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Uncomment and use when you add your video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/original.mov" type="video/mov" />
              </video>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-display font-semibold text-lg">Before</p>
            </div>
          </div>

          {/* Back - MetaHuman */}
          <div 
            className="absolute inset-0 backface-hidden"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)',
            }}
          >
            <div className="relative w-full h-full bg-gradient-to-br from-secondary/20 to-primary/20">
              {/* Placeholder for metahuman video/gif */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <div className="w-32 h-32 mx-auto rounded-full bg-secondary/30 flex items-center justify-center">
                    <svg className="w-16 h-16 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-bold text-foreground">MetaHuman You</p>
                    <p className="text-sm text-muted-foreground mt-2">
                      Replace with MetaHuman video/gif in:<br />
                      <code className="text-xs bg-muted px-2 py-1 rounded">public/metahuman.mp4</code>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Uncomment and use when you add your video */}
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/metahuman.MOV" type="video/MOV" />
              </video>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
              <p className="text-white font-display font-semibold text-lg">After → MetaHuman</p>
            </div>
          </div>
        </Card>
      </div>

      {/* Click indicator */}
      <div className="text-center mt-6">
        <p className="text-sm text-muted-foreground">
          <span className="inline-block animate-pulse">✨</span> Click to flip • Auto-flips every 4 seconds
        </p>
      </div>
    </div>
  );
};