import type React from "react"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Fidel - School Management System",
  description: "Transforming school management with innovative technology solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased pt-24 md:pt-22", // pt-24 (6rem) for mobile, md:pt-22 (5.5rem) for desktop
          inter.className
        )}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            {/* Header with subtle border */}
            <SiteHeader className="sticky top-0 z-50 border-b border-border/80 bg-white" />
            
          
            
            {/* Main content */}
            <main className="flex-1 z-10">
              {children}
            </main>
            
            {/* Bottom blue accent line */}
            <div className="w-full blue-pattern"></div>
            
            {/* Footer */}
            <SiteFooter className="z-30 bg-muted" />
            
            {/* Subtle blue glow in corner */}
            <div className="fixed -bottom-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

