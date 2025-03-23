"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger} from "@/components/ui/sheet"
import { Menu, X, Home, Layout, Info, Mail, ArrowRight, Sparkles, DollarSign } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState } from "react"


export function SiteHeader({ className }: { className?: string }) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const routes = [
    { href: "/", label: "Home", icon: Home },
    { href: "/features", label: "Features", icon: Layout },
    { href: "/pricing", label: "Pricing", icon: DollarSign },
    { href: "/about", label: "About", icon: Info },
    { href: "/contact", label: "Contact", icon: Mail }
  ]

  const handleLinkClick = () => {
    setIsOpen(false)
  }

  return (
    <header className={cn("sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60", className)}>
      <div className="relative w-full">
        <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-primary/80 via-primary to-primary/80">
          <div className="container flex items-center h-8 px-4 text-sm text-primary-foreground">
            <Sparkles className="w-4 h-4 mr-2" />
            <span className="font-medium">Now available Fidel 2.0</span>
          </div>
        </div>
      </div>
      <div className="container flex h-16 items-center mt-7 md:mt-0">
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
            <Button asChild>
              <Link href="/contact">Request Demo</Link>
            </Button>
          </div>
        </nav>
        <div className="flex flex-1 items-center justify-end md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button 
                variant="ghost" 
                size="icon" 
                className="relative hover:bg-accent transition-colors duration-200"
                aria-label="Toggle Menu"
              >
                <div className="relative p-1">
                  <Menu className={cn(
                    "h-5 w-5 transition-all duration-150 ease-in-out",
                    isOpen ? "opacity-0 rotate-90 scale-95" : "opacity-100 rotate-0 scale-100"
                  )} />
                  <X className={cn(
                    "h-5 w-5 absolute top-1 left-1 transition-all duration-150 ease-in-out",
                    isOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-95"
                  )} />
                </div>
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent 
              side="right" 
              className="w-[280px] sm:w-[350px] border-l p-0"
            >
              <div className="h-full flex flex-col">
                <div className="p-6 bg-primary/5 border-b">
                  <div className="flex items-center space-x-2 text-primary">
                    <Sparkles className="w-4 h-4" />
                    <span className="font-medium text-sm">Now available Fidel 2.0</span>
                  </div>
                </div>
                <nav className="flex-1 flex flex-col px-6">
                  <div className="space-y-2 mt-6">
                    {routes.map((route) => {
                      const Icon = route.icon
                      return (
                        <Link
                          key={route.href}
                          href={route.href}
                          onClick={handleLinkClick}
                          className={cn(
                            "group flex items-center py-3 px-4 rounded-lg transition-all duration-200",
                            "hover:bg-primary/5 hover:text-primary",
                            pathname === route.href 
                              ? "bg-primary/10 text-primary font-semibold" 
                              : "text-muted-foreground"
                          )}
                        >
                          <Icon className="w-5 h-5 mr-3 transition-transform duration-200" />
                          <span className="flex-1 text-base">{route.label}</span>
                          <ArrowRight className={cn(
                            "w-4 h-4 transition-all duration-200 opacity-0 -translate-x-2",
                            "group-hover:opacity-100 group-hover:translate-x-0"
                          )} />
                        </Link>
                      )
                    })}
                  </div>
                  
                  <div className="mt-auto mb-6 pt-6 border-t">
                    <Button className="w-full" size="lg" asChild>
                      <Link href="/contact" onClick={handleLinkClick}>
                        Request Demo
                      </Link>
                    </Button>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}

