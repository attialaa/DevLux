import { Code2, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <Code2 className="h-6 w-6" />
              <span className="text-xl font-semibold">DevLuX</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Your partner in digital transformation. Building the future, one project at a time.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Services</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Design Services
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  AI Automation
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Consulting
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="transition-colors hover:text-foreground">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold">Contact</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@devlux.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>San Francisco, CA</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DevLuX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
