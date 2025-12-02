import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface OverallScoreProps {
  score: number;
  maxScore?: number;
}

export function OverallScore({ score, maxScore = 5 }: OverallScoreProps) {
  const percentage = (score / maxScore) * 100;
  const circumference = 2 * Math.PI * 45;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const getScoreColor = () => {
    if (score >= 4.5) return { stroke: "stroke-rating-excellent", text: "text-rating-excellent", label: "EXCELENTE" };
    if (score >= 4.0) return { stroke: "stroke-rating-good", text: "text-rating-good", label: "MUY BUENO" };
    if (score >= 3.0) return { stroke: "stroke-rating-average", text: "text-rating-average", label: "BUENO" };
    return { stroke: "stroke-rating-poor", text: "text-rating-poor", label: "MEJORABLE" };
  };

  const colors = getScoreColor();

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <svg className="w-32 h-32 transform -rotate-90">
          {/* Background circle */}
          <circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-secondary"
          />
          {/* Progress circle */}
          <motion.circle
            cx="64"
            cy="64"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeLinecap="round"
            className={colors.stroke}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              strokeDasharray: circumference,
            }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <motion.span 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, type: "spring" }}
            className={cn("text-3xl font-bold", colors.text)}
          >
            {score.toFixed(1)}
          </motion.span>
          <span className="text-xs text-muted-foreground">/ {maxScore}</span>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="mt-3 flex flex-col items-center gap-1"
      >
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(score)
                  ? "text-rating-star fill-rating-star"
                  : i < score
                  ? "text-rating-star fill-rating-star/50"
                  : "text-muted-foreground/30"
              )}
            />
          ))}
        </div>
        <span className={cn("text-xs font-bold tracking-wider", colors.text)}>
          {colors.label}
        </span>
      </motion.div>
    </div>
  );
}
