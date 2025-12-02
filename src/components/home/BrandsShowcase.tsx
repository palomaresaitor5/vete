import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import brandsData from "@/data/brands.json";
import { motion } from "framer-motion";

export function BrandsShowcase() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Marcas Analizadas
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Las Mejores Marcas del Mercado
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Analizamos las marcas más populares y premium para ayudarte a encontrar la mejor opción.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {brandsData.slice(0, 8).map((brand, index) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link 
                to={`/marca/${brand.id}`}
                className="group bg-card rounded-xl p-6 flex flex-col items-center justify-center gap-3 card-hover border border-border min-h-[140px]"
              >
                <span className="text-4xl group-hover:scale-110 transition-transform duration-300">
                  {brand.logo}
                </span>
                <span className="font-medium text-sm text-center group-hover:text-primary transition-colors">
                  {brand.name}
                </span>
                <div className="flex items-center gap-1 text-xs">
                  <span className="text-rating-star">★</span>
                  <span className="text-muted-foreground">{brand.rating}</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild variant="outline">
            <Link to="/marcas">
              Ver todas las marcas
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
