import { Link } from "react-router-dom";
import { ArrowRight, Heart, Dumbbell, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Breed {
  id: string;
  name: string;
  image: string;
  origin: string;
  size: string;
  lifespan: string;
  exerciseNeeds: string;
}

interface BreedCardProps {
  breed: Breed;
  type: "dog" | "cat";
  index?: number;
}

export function BreedCard({ breed, type, index = 0 }: BreedCardProps) {
  const isDog = type === "dog";
  
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/raza/${type}/${breed.id}`}>
        <div className="bg-card rounded-2xl overflow-hidden card-hover border border-border">
          {/* Image */}
          <div className={cn(
            "relative h-40 flex items-center justify-center",
            isDog 
              ? "bg-gradient-to-br from-dog/10 to-dog/5" 
              : "bg-gradient-to-br from-cat/10 to-cat/5"
          )}>
            <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
              {breed.image}
            </span>
            <div className={cn(
              "absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium",
              isDog ? "bg-dog-light text-dog" : "bg-cat-light text-cat"
            )}>
              {breed.size}
            </div>
          </div>

          {/* Content */}
          <div className="p-4">
            <h3 className="font-heading font-semibold text-base mb-2 group-hover:text-primary transition-colors">
              {breed.name}
            </h3>
            
            <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Heart className="h-3 w-3" />
                {breed.lifespan}
              </span>
              <span className="flex items-center gap-1">
                <Dumbbell className="h-3 w-3" />
                {breed.exerciseNeeds}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-xs text-muted-foreground">{breed.origin}</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium text-primary group-hover:gap-2 transition-all">
                Ver más
                <ArrowRight className="h-3 w-3" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
