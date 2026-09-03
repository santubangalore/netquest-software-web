import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-abstract.jpg";

export function Hero() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden pt-20">
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Abstract network of data streams and glowing nodes"
          width={1920}
          height={1088}
          className="h-full w-full object-cover opacity-40"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 md:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/60 px-4 py-1.5 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            <span className="text-xs font-medium text-muted-foreground">
              Available for new partnerships in Q4 2026
            </span>
          </div>

          <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl lg:text-7xl">
            Software engineering that{" "}
            <span className="text-gradient">outpaces the market.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
            Net Quest Software designs, builds, and scales cloud-native systems for enterprises that
            need speed without sacrificing stability.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="glow group px-8">
              <a href="#contact" className="flex items-center gap-2">
                Book a discovery call
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="group">
              <a href="#case-studies" className="flex items-center gap-2">
                <Play className="h-4 w-4 fill-current" />
                See our work
              </a>
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              99.99% uptime delivered
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              50+ enterprise clients
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Cloud-native specialists
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
