import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/portfolio/Header";
import { Hero } from "@/components/portfolio/Hero";
import { Services } from "@/components/portfolio/Services";
import { CaseStudies } from "@/components/portfolio/CaseStudies";
import { Stats } from "@/components/portfolio/Stats";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { CTA } from "@/components/portfolio/CTA";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Net Quest Software | Enterprise Software Consulting" },
      {
        name: "description",
        content:
          "Net Quest Software designs, builds, and scales cloud-native systems for enterprises that need speed without sacrificing stability.",
      },
      {
        property: "og:title",
        content: "Net Quest Software | Enterprise Software Consulting",
      },
      {
        property: "og:description",
        content:
          "Net Quest Software designs, builds, and scales cloud-native systems for enterprises that need speed without sacrificing stability.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Services />
        <CaseStudies />
        <Stats />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
