import { Link } from "react-router-dom";
import { Clock, ArrowRight } from "lucide-react";
import { RatingStars } from "./RatingStars";
import { PetTypeBadge } from "./PetTypeBadge";
import { motion } from "framer-motion";

interface Article {
  id: string;
  title: string;
  slug: string;
  petType: "perro" | "gato";
  category: string;
  rating: number;
  image: string;
  excerpt: string;
  readTime: number;
}

interface ArticleCardProps {
  article: Article;
  index?: number;
}

export function ArticleCard({ article, index = 0 }: ArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/articulo/${article.slug}`}>
        <div className="bg-card rounded-2xl overflow-hidden card-hover border border-border">
          {/* Image Section */}
          <div className="relative h-48 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
            <span className="text-7xl group-hover:scale-110 transition-transform duration-300">
              {article.image}
            </span>
            <div className="absolute top-4 left-4">
              <PetTypeBadge type={article.petType} />
            </div>
            <div className="absolute top-4 right-4">
              <span className="bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-muted-foreground">
                {article.category}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5">
            <div className="flex items-center justify-between mb-3">
              <RatingStars rating={article.rating} size="sm" />
              <span className="flex items-center gap-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {article.readTime} min
              </span>
            </div>
            
            <h3 className="font-heading font-semibold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
              {article.title}
            </h3>
            
            <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
              {article.excerpt}
            </p>

            <span className="inline-flex items-center gap-1 text-sm font-medium text-primary group-hover:gap-2 transition-all">
              Leer análisis
              <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
