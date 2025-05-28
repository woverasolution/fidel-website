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
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900 text-slate-950 transition-bg",
        " min-h-screen ",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden">
        <div
          className={cn(
            // Base aurora styles
            "absolute -inset-[10px] opacity-70 will-change-transform pointer-events-none",
            "filter blur-[20px]",
            // CSS custom properties for gradients
            "[--white-gradient:repeating-linear-gradient(100deg,rgb(255,255,255)_0%,rgb(255,255,255)_7%,transparent_10%,transparent_12%,rgb(255,255,255)_16%)]",
            "[--dark-gradient:repeating-linear-gradient(100deg,rgb(18,28,38)_0%,rgb(18,28,38)_7%,transparent_10%,transparent_12%,rgb(18,28,38)_16%)]",
            "[--aurora:repeating-linear-gradient(100deg,rgb(16,185,129)_10%,rgb(34,197,94)_15%,rgb(132,204,22)_20%,rgb(163,230,53)_25%,rgb(22,163,74)_30%)]",
            // Background images and positioning
            "[background-image:var(--white-gradient),var(--aurora)]",
            "dark:[background-image:var(--dark-gradient),var(--aurora)]",
            "[background-size:300%,_200%]",
            "[background-position:50%_50%,50%_50%]",
            // After pseudo-element with animation
            "after:content-['']",
            "after:absolute",
            "after:inset-0",
            "after:[background-image:var(--white-gradient),var(--aurora)]",
            "after:dark:[background-image:var(--dark-gradient),var(--aurora)]",
            "after:[background-size:200%,_100%]",
            "after:animate-aurora",
            "after:[background-attachment:fixed]",
            "after:mix-blend-soft-light",
            // Optional radial gradient mask
            showRadialGradient &&
              "[mask-image:radial-gradient(ellipse_at_100%_0%,black_20%,transparent_70%)]"
          )}
        />
      </div>
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
