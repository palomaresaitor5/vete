import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { RatingStars } from "./RatingStars";
import { motion } from "framer-motion";

interface Brand {
  id: string;
  name: string;
  logo: string;
  rating: number;
  description: string;
  country: string;
  priceRange: string;
  articleCount: number;
}

interface BrandCardProps {
  brand: Brand;
  index?: number;
}

export function BrandCard({ brand, index = 0 }: BrandCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/marca/${brand.id}`}>
        <div className="bg-card rounded-2xl p-6 card-hover border border-border h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start gap-4 mb-4">
            <div className="h-16 w-16 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-4xl group-hover:scale-110 transition-transform duration-300">
              {brand.logo}
            </div>
            <div className="flex-1">
              <h3 className="font-heading font-semibold text-lg group-hover:text-primary transition-colors">
                {brand.name}
              </h3>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-xs text-muted-foreground">{brand.country}</span>
                <span className="text-muted-foreground">•</span>
                <span className="text-xs text-primary font-medium">{brand.priceRange}</span>
              </div>
            </div>
          </div>

          {/* Rating */}
          <div className="mb-4">
            <RatingStars rating={brand.rating} />
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
            {brand.description}
          </p>

          {/* Footer */}
          <div className="flex items-center justify-between pt-4 border-t border-border">
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <FileText className="h-3 w-3" />
              {brand.articleCount} reviews
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
              Ver marca
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
