export function HeroSection() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl">
        <h1 className="font-heading mb-6 text-4xl leading-tight font-bold md:text-5xl lg:text-6xl">
          Senior Frontend Engineer -- React, Next.js, Systems-Driven UI
        </h1>
        <p className="text-muted mb-8 max-w-2xl text-lg md:text-xl">
          I design and build frontend systems that scale, convert and don&apos;t rot.
        </p>
        <div className="flex flex-col gap-4 sm:flex-row">
          <button className="bg-primary text-primary-fg rounded-md px-6 py-3 font-medium shadow-sm transition-opacity hover:opacity-90">
            View Case Studies
          </button>
          <button className="border-border hover:bg-surface rounded-md border-2 px-6 py-3 font-medium transition-colors">
            Hire Me
          </button>
        </div>
      </div>
    </section>
  );
}
