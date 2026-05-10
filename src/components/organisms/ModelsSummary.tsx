import { Target, Clock, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/atoms/ui/button";
import { ModelCard } from "@/components/molecules/ModelCard";

const models = [
  {
    name: "Fixed-Firm",
    subtitle: "Predictable",
    icon: Target,
    description:
      "Best for projects with absolute requirements and high predictability needs. Ideal for legacy migrations and MVP builds with locked requirements.",
    color: "text-brand-green",
    bgColor: "bg-brand-green/10",
  },
  {
    name: "Agile-Flow",
    subtitle: "Fast",
    icon: Clock,
    description:
      "Our fastest model for rapid iteration and pay-as-you-go high-speed pivots. Perfect for early-stage startups and experimental features.",
    color: "text-brand-gold",
    bgColor: "bg-brand-gold/10",
  },
  {
    name: "Hybrid",
    subtitle: "Strategic",
    icon: CheckCircle,
    description:
      "80/20 split between long-term roadmap planning and tactical sprint execution. Best for growing products needing both direction and flexibility.",
    color: "text-brand-red",
    bgColor: "bg-brand-red/10",
  },
];

export const ModelsSummary = () => {
  return (
    <section id="models-summary" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">
            Choose Your Path
          </span>
          <h2 className="text-3xl md:text-5xl font-black mt-4 mb-6 uppercase tracking-tight">
            Engagement Models
          </h2>
          <p className="text-muted-foreground text-lg">
            Select the model that best fits your project maturity, risk profile,
            and timeline requirements.
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {models.map((model) => (
            <ModelCard key={model.name} {...model} />
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Button
            size="xl"
            className="h-auto py-5 px-10 text-xl font-bold"
            asChild
          >
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdzmEVFuly6CHwREg4utCe2GY538E3SQ0SPUBGEHOdqwCAJ6Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book a Technical Scoping
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
