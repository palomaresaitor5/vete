import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { RatingStars } from "@/components/shared/RatingStars";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Globe, Calendar, Award } from "lucide-react";
import brandsData from "@/data/brands.json";
import articlesData from "@/data/articles.json";
import { motion } from "framer-motion";

const BrandDetailPage = () => {
  const { id } = useParams();
  const brand = brandsData.find(b => b.id === id);
  const brandArticles = articlesData.filter(a => a.brandId === id);

  if (!brand) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Marca no encontrada</h1>
          <Button asChild>
            <Link to="/marcas">Volver a marcas</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12">
        <div className="container">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/marcas">
              <ArrowLeft className="h-4 w-4" />
              Volver a marcas
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-3 gap-8 items-center"
          >
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-5xl">
                  {brand.logo}
                </div>
                <div>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold">
                    {brand.name}
                  </h1>
                  <div className="flex items-center gap-4 mt-2">
                    <RatingStars rating={brand.rating} />
                    <span className="text-sm text-primary font-medium bg-primary/10 px-3 py-1 rounded-full">
                      {brand.priceRange}
                    </span>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">
                {brand.description}
              </p>
            </div>

            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-heading font-semibold mb-4">Información</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Globe className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{brand.country}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">Fundada en {brand.founded}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm">{brand.specialty}</span>
                </div>
              </div>
              
              <div className="flex gap-2 mt-4 pt-4 border-t border-border">
                {brand.petTypes.map(type => (
                  <span 
                    key={type}
                    className="text-xs px-2 py-1 rounded-full bg-secondary"
                  >
                    {type === "perro" ? "🐕 Perros" : "🐈 Gatos"}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Brand Articles */}
      <section className="py-12">
        <div className="container">
          <h2 className="text-2xl font-heading font-bold mb-6">
            Reviews de {brand.name}
          </h2>
          
          {brandArticles.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brandArticles.map((article, index) => (
                <ArticleCard 
                  key={article.id} 
                  article={article as any} 
                  index={index} 
                />
              ))}
            </div>
          ) : (
            <p className="text-muted-foreground text-center py-8">
              Aún no hay reviews de esta marca. ¡Próximamente!
            </p>
          )}
        </div>
      </section>
    </Layout>
  );
};

export default BrandDetailPage;
