import Link from 'next/link';

const caseStudies = [
  {
    tag: 'e-commerce platform',
    title: 'Rebuilt checkout flow, increased conversion by 34%',
    problem: 'Abandoned cart rates were high due to a complex, multi-page checkout process.',
    decision: 'Migrated to Next.js with a single-page checkout and optimized form validation.',
    outcome: 'Checkout completion increased by 34%, reducing cart abandonment significantly.',
    slug: 'ecommerce-checkout',
  },
  {
    tag: 'SaaS Dashboard',
    title: 'Redesigned analytics dashboard for better insights',
    problem: 'Users struggled to find key metrics in the cluttered analytics interface.',
    decision:
      'Implemented a modular dashboard system with customizable widgets and data visualization.',
    outcome: 'User engagement increased by 42%, and time-to-insight decreased by 60%.',
    slug: 'saas-dashboard',
  },
  {
    tag: 'Mobile App',
    title: 'Optimized performance for 10x faster load times',
    problem: 'App load times exceeded 5 seconds, leading to high bounce rates.',
    decision: 'Refactored component architecture, implemented code-splitting and lazy loading.',
    outcome: 'Load times reduced to under 500ms, bounce rate dropped by 55%.',
    slug: 'mobile-app-optimization',
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="mb-12">
        <h2 className="font-heading mb-4 text-3xl font-bold md:text-4xl">Featured Case Studies</h2>
        <p className="text-muted text-lg">
          Real Problems. Strategic Decisions. Measurable Outcomes.
        </p>
      </div>
      <div className="space-y-12 md:space-y-16">
        {caseStudies.map((study, index) => (
          <div key={index} className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            <div className="w-full space-y-4 md:w-1/2">
              <span className="text-muted text-xs font-medium tracking-wide uppercase">
                {study.tag}
              </span>
              <h3 className="font-heading text-2xl leading-tight font-semibold md:text-3xl">
                {study.title}
              </h3>
              <div className="space-y-3">
                <div>
                  <strong className="font-semibold">Problem:</strong>{' '}
                  <span className="text-muted">{study.problem}</span>
                </div>
                <div>
                  <strong className="font-semibold">Decision:</strong>{' '}
                  <span className="text-muted">{study.decision}</span>
                </div>
                <div>
                  <strong className="font-semibold">Outcome:</strong>{' '}
                  <span className="text-muted">{study.outcome}</span>
                </div>
              </div>
              <Link
                href={`/case-studies/${study.slug}`}
                className="text-primary mt-4 inline-block font-medium hover:underline"
              >
                Read full case study →
              </Link>
            </div>
            <div className="w-full md:w-1/2">
              <div className="bg-surface-2 border-border flex aspect-video items-center justify-center rounded-lg border">
                <span className="text-muted text-sm">Case Study Placeholder</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
