import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ArrowRight, Mail, MapPin } from "lucide-react";

export function CTA() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden bg-surface-elevated">
      <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-indigo-glow/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              Let's build your next competitive advantage.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tell us what you're building. We'll respond within one business day with a clear plan for how we can
              help.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a href="mailto:netquest.software.consultancy@gmail.com" className="font-medium hover:text-primary cursor-pointer">
                    netquest.software.consultancy@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Office</p>
                  <p className="font-medium">Jakkur Road, Bangalore, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm md:p-8">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Jane Doe" className="bg-background/60" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="jane@company.com" className="bg-background/60" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="company">Company</Label>
                <Input id="company" placeholder="Acme Inc." className="bg-background/60" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Project details</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us about your challenge, goals, and timeline..."
                  rows={5}
                  className="bg-background/60"
                />
              </div>
              <Button type="submit" size="lg" className="group w-full glow">
                Send message
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                We'll never share your information. Prefer email?{" "}
                <a href="mailto:netquest.software.consultancy@gmail.com" className="text-primary hover:underline cursor-pointer">
                  Contact us directly.
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
