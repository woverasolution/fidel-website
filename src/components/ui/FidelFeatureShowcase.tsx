// FidelFeatureShowcase.tsx
"use client"
import React, { useState } from "react";
import { useId } from "react";
import { 
  BookOpen, 
  Calendar, 
  Users, 
  CreditCard, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  Settings, 
  Badge
} from "lucide-react";

export function FidelFeatureShowcase() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  
  const features = [
    {
      title: "Student Management",
      description: "Comprehensive student profiles, attendance tracking, and academic performance monitoring in one place.",
      icon: <Users className="h-6 w-6" />,
    },
    {
      title: "Course Management",
      description: "Create, organize, and manage courses with ease. Assign teachers and track curriculum progress.",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "Scheduling System",
      description: "Intuitive calendar interface for class scheduling, events, and academic planning.",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "Fee Management",
      description: "Streamline fee collection, generate invoices, and track payment history for all students.",
      icon: <CreditCard className="h-6 w-6" />,
    },
    {
      title: "Analytics Dashboard",
      description: "Gain insights into academic performance, attendance trends, and financial metrics.",
      icon: <BarChart3 className="h-6 w-6" />,
    },
    {
      title: "Communication Tools",
      description: "Built-in messaging system for teachers, students, and parents to stay connected.",
      icon: <MessageSquare className="h-6 w-6" />,
    },
    {
      title: "Notification System",
      description: "Automated alerts for important events, deadlines, and announcements.",
      icon: <Bell className="h-6 w-6" />,
    },
    {
      title: "Customizable Settings",
      description: "Tailor the system to your school's unique requirements and workflows.",
      icon: <Settings className="h-6 w-6" />,
    },
  ];

  return (
    <div className="w-full py-20 bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex gap-4 flex-col items-start">
            <div>
              <Badge>Features</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h2 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-bold text-left">
                Fidel School Management System
              </h2>
              <p className="text-lg max-w-xl lg:max-w-2xl leading-relaxed tracking-tight text-muted-foreground text-left">
                A comprehensive solution designed to streamline school administration, enhance communication, and improve educational outcomes.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10">
            {features.map((feature, index) => (
              <FeatureCard 
                key={feature.title} 
                {...feature} 
                index={index}
                isActive={activeFeature === index}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const FeatureCard = ({
  title,
  description,
  icon,
  index,
  isActive,
  onMouseEnter,
  onMouseLeave,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
  isActive: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) => {
  return (
    <div
      className={`flex flex-col lg:border-r border-b py-10 relative group/feature dark:border-border border-border transition-all duration-300 ${
        (index === 0 || index === 4) && "lg:border-l"
      }`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Grid size={20} />
      
      <div className="mb-4 relative z-10 px-10 text-muted-foreground">
        {icon}
      </div>
      
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className={`absolute left-0 inset-y-0 h-6 ${isActive ? 'h-8' : 'h-6'} w-1 rounded-tr-full rounded-br-full bg-border ${isActive ? 'bg-primary' : ''} transition-all duration-200 origin-center`} />
        <span className={`${isActive ? 'translate-x-2 text-primary' : 'text-foreground'} transition duration-200 inline-block`}>
          {title}
        </span>
      </div>
      
      <p className="text-sm text-muted-foreground max-w-xs relative z-10 px-10">
        {description}
      </p>
      
      {isActive && (
        <div className="absolute inset-0 bg-muted/50 pointer-events-none transition-opacity duration-300" />
      )}
    </div>
  );
};

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: [number, number][];
  size?: number;
}) => {
  const p: [number, number][] = pattern ?? [
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
    [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
  ];
  return (
    <div className="pointer-events-none absolute left-1/2 top-0 -ml-20 -mt-2 h-full w-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] opacity-100">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 h-full w-full mix-blend-overlay dark:fill-white/10 dark:stroke-white/10 stroke-black/10 fill-black/10"
        />
      </div>
    </div>
  );
};

export function GridPattern({ 
  width, 
  height, 
  x, 
  y, 
  squares, 
  ...props 
}: {
  width: number;
  height: number;
  x: string;
  y: string;
  squares: [number, number][];
  className?: string;
  [key: string]: unknown;
}) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([xPos, yPos]: [number, number], index: number) => (
            <rect
              strokeWidth="0"
              key={`square-${index}-${xPos}-${yPos}`}
              width={width + 1}
              height={height + 1}
              x={xPos * width}
              y={yPos * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

export default function FeaturesPage() {
  return (
    <div className="min-h-screen w-full bg-background">
      <FidelFeatureShowcase />
    </div>
  );
}