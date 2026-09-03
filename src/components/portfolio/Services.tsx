import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cloud, Code2, Layers, Shield, Sparkles, Zap } from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Custom Software Development",
    description:
      "End-to-end engineering of web, mobile, and backend systems tailored to your business logic and compliance needs.",
  },
  {
    icon: Cloud,
    title: "Cloud Architecture & Migration",
    description:
      "Design resilient, cost-efficient cloud infrastructure and migrate legacy workloads with zero-downtime playbooks.",
  },
  {
    icon: Layers,
    title: "System Integration",
    description:
      "Connect disparate platforms, APIs, and data pipelines into a unified architecture that scales cleanly.",
  },
  {
    icon: Shield,
    title: "Security & Compliance",
    description:
      "Embed security-by-design, audit readiness, and industry-specific compliance into every layer of your stack.",
  },
  {
    icon: Sparkles,
    title: "AI & Data Engineering",
    description:
      "Turn raw data into predictive capabilities with ML pipelines, data platforms, and intelligent automation.",
  },
  {
    icon: Zap,
    title: "Performance & Reliability",
    description:
      "Optimize latency, throughput, and resilience so your systems stay fast under real-world load.",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">What we do</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Consulting services built for modern engineering
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From strategy to shipped code, we help teams build software that lasts.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <Card
              key={service.title}
              className="group border-border/60 bg-card/60 transition-colors hover:border-primary/30 hover:bg-card"
            >
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
