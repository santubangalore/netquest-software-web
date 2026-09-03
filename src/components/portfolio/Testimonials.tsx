import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "Net Quest transformed our architecture in six months. Their engineers think like product owners and ship like operators.",
    author: "Sarah Chen",
    role: "CTO, Apex Financial Group",
  },
  {
    quote:
      "They didn't just write code — they restructured how we build software. Release velocity and reliability both improved dramatically.",
    author: "Marcus Webb",
    role: "VP of Engineering, Meridian Logistics",
  },
  {
    quote:
      "The depth of their cloud and security expertise is rare. Net Quest is our go-to partner for mission-critical systems.",
    author: "Elena Rossi",
    role: "Director of IT, Northwood Health",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Trusted by engineering leaders
          </h2>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.author}
              className="border-border/60 bg-card/60 transition-colors hover:border-primary/30"
            >
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary/40" />
                <p className="mt-4 text-lg font-medium leading-relaxed">{testimonial.quote}</p>
                <div className="mt-6">
                  <p className="font-display font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
