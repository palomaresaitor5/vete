import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface ScoreCardProps {
  score: number;
  label: string;
  icon: LucideIcon;
  description: string;
  index?: number;
}

export function ScoreCard({ score, label, icon: Icon, description, index = 0 }: ScoreCardProps) {
  const getScoreColor = () => {
    if (score >= 4.5) return "from-rating-excellent to-rating-excellent/70";
    if (score >= 4.0) return "from-rating-good to-rating-good/70";
    if (score >= 3.0) return "from-rating-average to-rating-average/70";
    return "from-rating-poor to-rating-poor/70";
  };

  const getScoreLabel = () => {
    if (score >= 4.5) return "Excelente";
    if (score >= 4.0) return "Muy bueno";
    if (score >= 3.0) return "Bueno";
    return "Mejorable";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-card rounded-2xl p-5 border border-border hover:shadow-card transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className={cn(
          "h-14 w-14 rounded-xl bg-gradient-to-br flex items-center justify-center shrink-0",
          getScoreColor()
        )}>
          <Icon className="h-7 w-7 text-white" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-1">
            <h4 className="font-semibold text-sm">{label}</h4>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">{getScoreLabel()}</span>
              <span className="text-lg font-bold">{score.toFixed(1)}</span>
            </div>
          </div>
          <p className="text-xs text-muted-foreground line-clamp-2">{description}</p>
          {/* Mini progress bar */}
          <div className="h-1.5 bg-secondary rounded-full mt-2 overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(score / 5) * 100}%` }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={cn("h-full rounded-full bg-gradient-to-r", getScoreColor())}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
