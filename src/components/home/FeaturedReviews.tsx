import { ArticleCard } from "@/components/shared/ArticleCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import articlesData from "@/data/articles.json";

export function FeaturedReviews() {
  const featuredArticles = articlesData.filter(article => article.featured).slice(0, 4);

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
              Destacados
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Reviews Populares
            </h2>
            <p className="text-muted-foreground mt-2 max-w-xl">
              Los análisis más completos y consultados por nuestra comunidad de amantes de las mascotas.
            </p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link to="/articulos">
              Ver todos
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredArticles.map((article, index) => (
            <ArticleCard 
              key={article.id} 
              article={article as any} 
              index={index} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
