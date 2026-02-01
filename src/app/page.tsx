import { HeroSection } from '@/components/sections/HeroSection';
import { ValuePropsSection } from '@/components/sections/ValuePropsSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';

export default function Home() {
  return (
    <main className="bg-bg text-fg min-h-screen">
      <div className="max-w-container mx-auto px-8">
        <HeroSection />
        <ValuePropsSection />
        <CaseStudiesSection />
      </div>
    </main>
  );
}
