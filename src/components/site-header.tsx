"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { cn } from "@/lib/utils"

export function SiteHeader({ className }: { className?: string }) {
  const pathname = usePathname()

  const routes = [
    { href: "/", label: "Home" },
    { href: "/features", label: "Features" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/pricing", label: "Pricing" },
  ]

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold text-xl">Fidel</span>
        </Link>
        <nav className="hidden md:flex flex-1 items-center justify-between">
          <div className="flex gap-6">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  pathname === route.href ? "text-primary font-semibold" : "text-muted-foreground"
                }`}
              >
                {route.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
            <Button asChild>
              <Link href="/pricing">Get Started</Link>
            </Button>
          </div>
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {routes.map((route) => (
                  <Link
                    key={route.href}
                    href={route.href}
                    className={`text-sm font-medium transition-colors hover:text-primary ${
                      pathname === route.href ? "text-primary font-semibold" : "text-muted-foreground"
                    }`}
                  >
                    {route.label}
                  </Link>
                ))}
                <Button variant="ghost" className="justify-start px-2" asChild>
                  <Link href="/contact">Request Demo</Link>
                </Button>
                <Button className="mt-2" asChild>
                  <Link href="/pricing">Get Started</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

