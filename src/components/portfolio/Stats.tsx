const stats = [
  { value: "12+", label: "Years in business" },
  { value: "180+", label: "Projects shipped" },
  { value: "50+", label: "Enterprise clients" },
  { value: "35", label: "Cloud certifications" },
];

export function Stats() {
  return (
    <section className="border-y border-border/50 bg-background py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-4xl font-bold text-gradient md:text-5xl">{stat.value}</div>
              <div className="mt-2 text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
