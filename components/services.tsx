import { Card } from "@/components/ui/card"
import {
  Globe,
  Layout,
  Palette,
  CreditCard,
  Bot,
  MessageSquare,
  Sparkles,
  Mail,
  Smartphone,
  Zap,
  Pen,
} from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Landing Pages",
    description: "High-converting landing pages designed to capture attention and drive action.",
    color: "from-orange-500 to-orange-600",
    borderColor: "border-orange-500/50",
    iconBg: "bg-orange-500/10",
    iconColor: "text-orange-500",
  },
  {
    icon: Layout,
    title: "Front-End Development",
    description: "Modern, responsive interfaces built with the latest web technologies.",
    color: "from-yellow-500 to-yellow-600",
    borderColor: "border-yellow-500/50",
    iconBg: "bg-yellow-500/10",
    iconColor: "text-yellow-500",
  },
  {
    icon: Smartphone,
    title: "Full Website Development",
    description: "Complete website solutions from concept to deployment and beyond.",
    color: "from-cyan-500 to-cyan-600",
    borderColor: "border-cyan-500/50",
    iconBg: "bg-cyan-500/10",
    iconColor: "text-cyan-500",
  },
  {
    icon: Palette,
    title: "Logo & Brand Design",
    description: "Memorable brand identities that make your business stand out.",
    color: "from-purple-500 to-purple-600",
    borderColor: "border-purple-500/50",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    icon: CreditCard,
    title: "Business Cards",
    description: "Professional business cards that leave a lasting impression.",
    color: "from-green-500 to-green-600",
    borderColor: "border-green-500/50",
    iconBg: "bg-green-500/10",
    iconColor: "text-green-500",
  },
  {
    icon: Bot,
    title: "AI Chatbots",
    description: "Intelligent chatbots that engage customers 24/7 with natural conversations.",
    color: "from-pink-500 to-pink-600",
    borderColor: "border-pink-500/50",
    iconBg: "bg-pink-500/10",
    iconColor: "text-pink-500",
  },
  {
    icon: MessageSquare,
    title: "Auto-Reply Systems",
    description: "Automated responses for Instagram and WhatsApp to never miss a message.",
    color: "from-blue-500 to-blue-600",
    borderColor: "border-blue-500/50",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    icon: Sparkles,
    title: "Customer FAQ Bots",
    description: "AI-powered FAQ systems that instantly answer customer questions.",
    color: "from-indigo-500 to-indigo-600",
    borderColor: "border-indigo-500/50",
    iconBg: "bg-indigo-500/10",
    iconColor: "text-indigo-500",
  },
  {
    icon: Pen,
    title: "Social Media AI",
    description: "AI that generates engaging weekly social media posts automatically.",
    color: "from-rose-500 to-rose-600",
    borderColor: "border-rose-500/50",
    iconBg: "bg-rose-500/10",
    iconColor: "text-rose-500",
  },
  {
    icon: Mail,
    title: "Task Automation",
    description: "Automate email sorting, data entry, and repetitive tasks to save time.",
    color: "from-teal-500 to-teal-600",
    borderColor: "border-teal-500/50",
    iconBg: "bg-teal-500/10",
    iconColor: "text-teal-500",
  },
  {
    icon: Zap,
    title: "Website Design",
    description: "Beautiful, user-centered website designs that convert visitors.",
    color: "from-amber-500 to-amber-600",
    borderColor: "border-amber-500/50",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
  {
    icon: Smartphone,
    title: "App & UX Design",
    description: "Intuitive app interfaces and seamless user experiences.",
    color: "from-lime-500 to-lime-600",
    borderColor: "border-lime-500/50",
    iconBg: "bg-lime-500/10",
    iconColor: "text-lime-500",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-4xl font-bold md:text-5xl">Comprehensive Digital Services</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Everything you need to build, grow, and automate your digital presence in one place.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden border-2 ${service.borderColor} bg-card/50 backdrop-blur-sm p-6 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-${service.iconColor}/20`}
            >
              <div
                className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl ${service.iconBg} border ${service.borderColor}`}
              >
                <service.icon className={`h-7 w-7 ${service.iconColor}`} strokeWidth={1.5} />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
