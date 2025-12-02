import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface StatBarProps {
  label: string;
  value: number;
  maxValue?: number;
  icon?: React.ReactNode;
  showPercentage?: boolean;
  color?: "primary" | "accent" | "excellent" | "good" | "average" | "poor";
  size?: "sm" | "md" | "lg";
}

export function StatBar({ 
  label, 
  value, 
  maxValue = 5, 
  icon,
  showPercentage = false,
  color = "primary",
  size = "md"
}: StatBarProps) {
  const percentage = (value / maxValue) * 100;
  
  const getColorClass = () => {
    if (color !== "primary" && color !== "accent") {
      return `bg-rating-${color}`;
    }
    // Auto color based on value
    if (percentage >= 90) return "bg-rating-excellent";
    if (percentage >= 70) return "bg-rating-good";
    if (percentage >= 50) return "bg-rating-average";
    return "bg-rating-poor";
  };

  const sizeClasses = {
    sm: "h-2",
    md: "h-3",
    lg: "h-4",
  };

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 text-sm font-medium">
          {icon}
          {label}
        </span>
        <span className="text-sm font-bold tabular-nums">
          {showPercentage ? `${percentage.toFixed(0)}%` : `${value}/${maxValue}`}
        </span>
      </div>
      <div className={cn("w-full bg-secondary rounded-full overflow-hidden", sizeClasses[size])}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={cn("h-full rounded-full", getColorClass())}
        />
      </div>
    </div>
  );
}
