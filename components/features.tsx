import { Card } from "@/components/ui/card"
import { Zap, Shield, Clock, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Optimized performance that keeps your users engaged and search engines happy.",
    metric: "99.9%",
    label: "Uptime",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-level security protocols to protect your data and your customers.",
    metric: "SOC 2",
    label: "Compliant",
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast delivery without compromising quality. Get to market faster.",
    metric: "2-4 weeks",
    label: "Average",
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    description: "Data-driven solutions that deliver measurable business growth.",
    metric: "300%",
    label: "Avg. ROI",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 bg-card/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Why Choose Us</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            We combine technical excellence with business acumen to deliver solutions that drive real results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="border-border bg-card p-8 text-center transition-all hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
                <feature.icon className="h-8 w-8 text-accent" />
              </div>
              <div className="mb-4">
                <div className="text-3xl font-bold">{feature.metric}</div>
                <div className="text-sm text-muted-foreground">{feature.label}</div>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
