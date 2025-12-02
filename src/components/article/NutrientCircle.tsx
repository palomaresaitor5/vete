import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NutrientCircleProps {
  value: number;
  label: string;
  unit?: string;
  color: "protein" | "fat" | "fiber" | "carbs";
  size?: "sm" | "md" | "lg";
}

const colorMap = {
  protein: { bg: "bg-primary/20", text: "text-primary", ring: "ring-primary" },
  fat: { bg: "bg-accent/20", text: "text-accent", ring: "ring-accent" },
  fiber: { bg: "bg-rating-good/20", text: "text-rating-good", ring: "ring-rating-good" },
  carbs: { bg: "bg-rating-average/20", text: "text-rating-average", ring: "ring-rating-average" },
};

const sizeMap = {
  sm: "h-20 w-20",
  md: "h-24 w-24",
  lg: "h-28 w-28",
};

export function NutrientCircle({ value, label, unit = "%", color, size = "md" }: NutrientCircleProps) {
  const colors = colorMap[color];
  
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center gap-2"
    >
      <div className={cn(
        "rounded-full flex flex-col items-center justify-center ring-4",
        sizeMap[size],
        colors.bg,
        colors.ring
      )}>
        <span className={cn("text-2xl font-bold", colors.text)}>
          {value}
          <span className="text-sm">{unit}</span>
        </span>
      </div>
      <span className="text-sm font-medium text-muted-foreground">{label}</span>
    </motion.div>
  );
}
