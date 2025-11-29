export const WhatIsIt = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            ✨ What Is <span className="text-gradient">MetaHuman Me</span>?
          </h2>
          
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              MetaHuman Me is a simple way to see yourself re-imagined as a high-fidelity MetaHuman.
            </p>
            
            <div className="grid gap-4 text-left max-w-xl mx-auto pt-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p>You send us a video of your face.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-secondary mt-2" />
                <p>We take care of everything else.</p>
              </div>
            </div>

            <p className="pt-4 text-xl font-light">
              A little tech.<br />
              A little art.<br />
              A lot of "wait…that's me?!"
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
