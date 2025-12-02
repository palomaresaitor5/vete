import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { ArticleCard } from "@/components/shared/ArticleCard";
import { Button } from "@/components/ui/button";
import articlesData from "@/data/articles.json";
import { motion } from "framer-motion";

type FilterType = "all" | "perro" | "gato";

const ArticlesPage = () => {
  const [filter, setFilter] = useState<FilterType>("all");

  const filteredArticles = filter === "all" 
    ? articlesData 
    : articlesData.filter(a => a.petType === filter);

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Reviews de Comida
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Análisis detallados y honestos de los mejores piensos y alimentos para tu mascota.
            </p>
            
            {/* Filters */}
            <div className="flex justify-center gap-2">
              <Button 
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
              >
                Todos
              </Button>
              <Button 
                variant={filter === "perro" ? "default" : "outline"}
                onClick={() => setFilter("perro")}
                className={filter === "perro" ? "" : "hover:border-dog hover:text-dog"}
              >
                🐕 Perros
              </Button>
              <Button 
                variant={filter === "gato" ? "default" : "outline"}
                onClick={() => setFilter("gato")}
                className={filter === "gato" ? "" : "hover:border-cat hover:text-cat"}
              >
                🐈 Gatos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container">
          <p className="text-muted-foreground mb-6">
            {filteredArticles.length} reviews encontrados
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article, index) => (
              <ArticleCard 
                key={article.id} 
                article={article as any} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticlesPage;
