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
              {/* Image */}
              <img 
                src={`${import.meta.env.BASE_URL}original.jpg`}
                alt="Before - Original person"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Failed to load /original.jpg');
                  e.currentTarget.style.display = 'none';
                }}
              />
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
              {/* Image */}
              <img 
                src={`${import.meta.env.BASE_URL}metahuman.jpg`}
                alt="Before - Original person"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error('Failed to load /original.jpg');
                  e.currentTarget.style.display = 'none';
                }}
              />
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