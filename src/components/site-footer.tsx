import Link from "next/link"
import { Linkedin, Phone } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteFooter({ className }: { className?: string }) {
  return (
    <footer className={cn("w-full border-t bg-muted/30", className)}>
      <div className="container px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="font-bold text-xl">Fidel</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Transforming school management with innovative technology solutions.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/company/wovera-solutions" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="https://t.me/wovera" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18.858-.982 4.071-1.387 5.398-.172.563-.336.763-.552.786-.469.05-.826-.309-1.281-.607-.712-.474-1.115-.768-1.808-1.231-.798-.524-.281-.812.174-1.281.119-.123 2.178-1.995 2.217-2.165.005-.021.005-.123-.047-.175-.052-.051-.149-.034-.212-.02-.091.021-1.543 1.041-4.356 3.059-.412.283-.785.421-1.121.412-.369-.009-1.076-.21-1.601-.383-.647-.212-1.158-.324-1.114-.683.023-.186.223-.374.6-.562 2.349-1.078 3.915-1.788 4.697-2.131 2.238-.974 2.708-1.143 3.011-1.149.067-.001.216.015.312.091.081.064.104.148.115.217.033.204.007.452-.045.655z"/>
                </svg>
                <span className="sr-only">Telegram</span>
              </a>
              <a href="tel:+251910428013" className="text-muted-foreground hover:text-foreground transition-colors">
                <Phone className="h-5 w-5" />
                <span className="sr-only">Phone</span>
              </a>
            </div>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium text-sm mb-4">Contact</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Request Demo
                </Link>
              </li>
              <li>
                <a href="mailto:info@fidel.et" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  info@fidel.et
                </a>
              </li>
              <li>
                <p className="text-sm text-muted-foreground">
                  Looking for a membership management software? Check out{' '}
                  <a href="https://www.abal.et" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                    Abal
                  </a>
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-muted-foreground text-center">
            &copy; {new Date().getFullYear()} Wovera Solutions PLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

