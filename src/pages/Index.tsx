import { Hero } from "@/components/Hero";
import { WhatIsIt } from "@/components/WhatIsIt";
import { HowItWorks } from "@/components/HowItWorks";
import { Requirements } from "@/components/Requirements";
import { UploadSection } from "@/components/UploadSection";
import { HonestNote } from "@/components/HonestNote";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsIt />
      <HowItWorks />
      <Requirements />
      <UploadSection />
      <HonestNote />
      <FinalCTA />
    </div>
  );
};

export default Index;
