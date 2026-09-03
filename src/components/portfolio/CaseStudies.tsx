import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import dashboardImage from "@/assets/case-study-dashboard.jpg";
import cloudImage from "@/assets/case-study-cloud.jpg";

const caseStudies = [
  {
    client: "Apex Financial Group",
    category: "FinTech",
    title: "Real-time risk engine for a global trading desk",
    description:
      "Rebuilt a legacy risk platform into a low-latency, event-driven system that processes 2M+ market events per second.",
    results: ["40% latency reduction", "99.999% uptime"],
    image: dashboardImage,
    alt: "Apex Financial real-time trading dashboard",
  },
  {
    client: "Meridian Logistics",
    category: "Supply Chain",
    title: "Cloud-native supply chain orchestration",
    description:
      "Migrated a monolithic logistics platform to Kubernetes, integrated warehouse APIs, and built predictive ETA models.",
    results: ["60% infra cost reduction", "3x faster releases"],
    image: cloudImage,
    alt: "Meridian cloud infrastructure diagram",
  },
];

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-padding bg-surface-elevated">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Case Studies</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Proven outcomes across industries
            </h2>
          </div>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-indigo-glow"
          >
            Discuss your project
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          {caseStudies.map((study) => (
            <Card
              key={study.client}
              className="group overflow-hidden border-border/60 bg-card/60 transition-colors hover:border-primary/30"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={study.image}
                  alt={study.alt}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                <Badge className="absolute left-4 top-4 bg-background/80 text-foreground backdrop-blur-sm">
                  {study.category}
                </Badge>
              </div>
              <CardContent className="p-6">
                <p className="text-sm font-medium text-muted-foreground">{study.client}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">{study.title}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">{study.description}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {study.results.map((result) => (
                    <span
                      key={result}
                      className="inline-flex items-center rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium text-foreground"
                    >
                      {result}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
