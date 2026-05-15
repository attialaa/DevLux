import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl rounded-2xl border border-border bg-card p-8 text-center md:p-12">
          <h2 className="mb-4 text-balance text-3xl font-bold md:text-4xl">Ready to Transform Your Business?</h2>
          <p className="mb-8 text-pretty text-lg leading-relaxed text-muted-foreground">
            Get started today with a free consultation. Let's discuss how we can help you achieve your digital goals.
          </p>

          <form className="mx-auto flex max-w-md flex-col gap-3 sm:flex-row">
            <Input type="email" placeholder="Enter your email" className="flex-1" />
            <Button type="submit" className="group">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>

          <p className="mt-4 text-sm text-muted-foreground">No credit card required. Free consultation included.</p>
        </div>
      </div>
    </section>
  )
}
