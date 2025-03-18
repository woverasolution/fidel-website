"use client";
import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <main>
      <div
        className={cn(
          "relative flex flex-col h-[100vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
          className
        )}
        {...props}
      >
        <div className="absolute inset-0 overflow-hidden">
          <div
            className={cn(
              `
            [--white-gradient:repeating-linear-gradient(100deg,rgb(255,255,255)_0%,rgb(255,255,255)_7%,transparent_10%,transparent_12%,rgb(255,255,255)_16%)]
            [--dark-gradient:repeating-linear-gradient(100deg,rgb(18,28,38)_0%,rgb(18,28,38)_7%,transparent_10%,transparent_12%,rgb(18,28,38)_16%)]
            [--aurora:repeating-linear-gradient(100deg,rgb(0,85,170)_10%,rgb(0,119,204)_15%,rgb(0,136,238)_20%,rgb(102,178,255)_25%,rgb(51,153,255)_30%)]
            [background-image:var(--white-gradient),var(--aurora)]
            dark:[background-image:var(--dark-gradient),var(--aurora)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[20px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--aurora)] 
            after:dark:[background-image:var(--dark-gradient),var(--aurora)]
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-soft-light
            pointer-events-none
            absolute -inset-[10px] opacity-70 will-change-transform`,
              showRadialGradient &&
                `[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,transparent_70%)]`
            )}
          />
        </div>
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </main>
  );
};
