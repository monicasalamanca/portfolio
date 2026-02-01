import { Layers, Zap, Target } from 'lucide-react';

const valueProps = [
  {
    icon: Layers,
    title: 'Architecture over hacks',
    description:
      'I build systems that last. Every decision is documented, every pattern is deliberate, and technical debt is managed—not ignored.',
  },
  {
    icon: Zap,
    title: 'Performance and Scalability',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    icon: Target,
    title: 'Product-Driven Engineer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.',
  },
];

export function ValuePropsSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-12">
        {valueProps.map((prop, index) => {
          const Icon = prop.icon;
          return (
            <div key={index} className="flex flex-col items-start">
              <div className="bg-primary/10 mb-4 rounded-lg p-3">
                <Icon className="text-primary h-8 w-8" aria-hidden="true" />
              </div>
              <h3 className="font-heading mb-3 text-xl font-semibold">{prop.title}</h3>
              <p className="text-muted leading-relaxed">{prop.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
