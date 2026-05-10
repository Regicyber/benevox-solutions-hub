import { Navbar } from "@/components/organisms/Navbar";
import { Footer } from "@/components/organisms/Footer";
import { Button } from "@/components/atoms/ui/button";
import { Code, Layout, BarChart, Users, ArrowRight } from "lucide-react";

const Careers = () => {
  const roles = [
    {
      title: "Backend Engineer",
      icon: Code,
      description:
        "Build scalable APIs and system logic transition for scalability.",
      successMetric:
        "By the end of this internship, you will have a deployed production-grade API or system logic transition for scalability in your portfolio.",
      skills: ["Node.js", "Python", "PostgreSQL", "AWS"],
    },
    {
      title: "Frontend Engineer",
      icon: Layout,
      description:
        "Create pixel-perfect responsive components and fully implemented feature sets.",
      successMetric:
        "By the end of this internship, you will have a pixel-perfect responsive component set or a fully implemented feature set in your portfolio.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
    },
    {
      title: "Product Manager",
      icon: BarChart,
      description:
        "Draft PRDs and growth reports backed by data and user insights.",
      successMetric:
        "By the end of this internship, you will have a drafted PRD (Product Requirement Document) or a data-backed growth report in your portfolio.",
      skills: ["Agile", "PRDs", "Data Analysis", "User Research"],
    },
    {
      title: "Sales & Business Dev",
      icon: Users,
      description: "Build qualified lead pipelines and master CRM tools.",
      successMetric:
        "By the end of this internship, you will have a qualified lead pipeline or a mastered set of CRM tools in your portfolio.",
      skills: ["CRM", "Lead Gen", "Negotiation", "Market Research"],
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-20 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-brand-red font-bold uppercase tracking-widest text-sm mb-4 block">
            Join Our Team
          </span>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tighter uppercase">
            Real Work on Real Products
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
            No simulations. Work on live projects that impact real businesses
            and users.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-32">
          {roles.map((role) => (
            <div
              key={role.title}
              className="p-8 rounded-2xl border border-border bg-card hover:border-brand-green/30 transition-all flex flex-col h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center mb-6">
                <role.icon className="h-6 w-6 text-brand-green" />
              </div>
              <h2 className="text-2xl font-bold mb-4">{role.title}</h2>
              <p className="text-muted-foreground mb-8 flex-grow">
                {role.description}
              </p>

              <div className="p-6 rounded-xl bg-muted/50 border border-border mb-8">
                <h3 className="text-xs font-bold text-brand-green uppercase tracking-widest mb-3">
                  Success Metric
                </h3>
                <p className="text-sm font-medium italic">
                  "{role.successMetric}"
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                {role.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1 rounded-full bg-brand-green/5 text-brand-green text-xs font-bold"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <a
                href="https://forms.gle/skdDG4U8EgNwHXvB9"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                <Button variant="outline" className="w-full">
                  Apply Now
                  <ArrowRight className="ml-2 h-4 w-" />
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Ready to Build Section */}
        <div className="max-w-4xl mx-auto text-center py-20 border-t border-border">
          <h2 className="text-4xl font-black mb-6 uppercase">
            Ready to Build Real Products?
          </h2>
          <p className="text-xl text-muted-foreground mb-10">
            Join a team where your work directly impacts business outcomes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="xl" className="px-10 h-16 text-lg font-bold">
              <a
                href="https://forms.gle/skdDG4U8EgNwHXvB9"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer"
              >
                Apply for Internship
              </a>
            </Button>

            <Button
              size="xl"
              variant="outline"
              className="px-10 h-16 text-lg font-bold"
              asChild
            >
              <a
                href="https://forms.gle/skdDG4U8EgNwHXvB9"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Technical Scoping
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Careers;
