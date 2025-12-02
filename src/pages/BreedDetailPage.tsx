import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Scale, Clock, MapPin, Dumbbell, Sparkles, AlertTriangle, Utensils } from "lucide-react";
import breedsData from "@/data/breeds.json";
import brandsData from "@/data/brands.json";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const BreedDetailPage = () => {
  const { type, id } = useParams();
  const isDog = type === "dog";
  const breeds = isDog ? breedsData.dogs : breedsData.cats;
  const breed = breeds.find(b => b.id === id);

  if (!breed) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Raza no encontrada</h1>
          <Button asChild>
            <Link to="/razas">Volver a razas</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const recommendedBrands = breed.recommendedFood
    .map(foodId => brandsData.find(b => b.id === foodId))
    .filter(Boolean);

  return (
    <Layout>
      {/* Header */}
      <section className={cn(
        "py-12",
        isDog 
          ? "bg-gradient-to-b from-dog/10 to-background" 
          : "bg-gradient-to-b from-cat/10 to-background"
      )}>
        <div className="container">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/razas">
              <ArrowLeft className="h-4 w-4" />
              Volver a razas
            </Link>
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid lg:grid-cols-3 gap-8 items-start"
          >
            {/* Main Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className={cn(
                  "h-24 w-24 rounded-2xl flex items-center justify-center text-6xl",
                  isDog ? "bg-dog-light" : "bg-cat-light"
                )}>
                  {breed.image}
                </div>
                <div>
                  <span className={cn(
                    "text-xs font-medium px-2 py-1 rounded-full",
                    isDog ? "bg-dog-light text-dog" : "bg-cat-light text-cat"
                  )}>
                    {isDog ? "🐕 Perro" : "🐈 Gato"}
                  </span>
                  <h1 className="text-3xl md:text-4xl font-heading font-bold mt-2">
                    {breed.name}
                  </h1>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-6">
                {breed.description}
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <MapPin className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">{breed.origin}</p>
                  <p className="text-xs text-muted-foreground">Origen</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Scale className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">{breed.weight}</p>
                  <p className="text-xs text-muted-foreground">Peso</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Heart className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">{breed.lifespan}</p>
                  <p className="text-xs text-muted-foreground">Esperanza</p>
                </div>
                <div className="bg-card rounded-xl p-4 border border-border text-center">
                  <Dumbbell className="h-5 w-5 mx-auto mb-2 text-muted-foreground" />
                  <p className="text-sm font-medium">{breed.exerciseNeeds}</p>
                  <p className="text-xs text-muted-foreground">Ejercicio</p>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-heading font-semibold mb-4">Temperamento</h3>
              <div className="flex flex-wrap gap-2 mb-6">
                {breed.temperament.map((trait, i) => (
                  <span 
                    key={i}
                    className={cn(
                      "px-3 py-1 rounded-full text-sm",
                      isDog ? "bg-dog-light text-dog" : "bg-cat-light text-cat"
                    )}
                  >
                    {trait}
                  </span>
                ))}
              </div>
              
              <h3 className="font-heading font-semibold mb-3 flex items-center gap-2">
                <Sparkles className="h-4 w-4" />
                Cuidado del pelaje
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Necesidad de cepillado: <span className="font-medium text-foreground">{breed.groomingNeeds}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              {/* Health Issues */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-card rounded-2xl p-6 border border-border"
              >
                <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-accent" />
                  Problemas de Salud Comunes
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {breed.healthIssues.map((issue, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg"
                    >
                      <span className="h-2 w-2 rounded-full bg-accent" />
                      <span className="text-sm">{issue}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Feeding Tips */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20"
              >
                <h3 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                  <Utensils className="h-5 w-5 text-primary" />
                  Consejos de Alimentación
                </h3>
                <p className="text-foreground leading-relaxed">
                  {breed.feedingTips}
                </p>
              </motion.div>
            </div>

            {/* Recommended Brands */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-card rounded-2xl p-6 border border-border sticky top-24">
                <h3 className="font-heading font-semibold text-lg mb-4">
                  Marcas Recomendadas
                </h3>
                <div className="space-y-3">
                  {recommendedBrands.map(brand => brand && (
                    <Link
                      key={brand.id}
                      to={`/marca/${brand.id}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <span className="text-2xl">{brand.logo}</span>
                      <div className="flex-1">
                        <p className="font-medium text-sm group-hover:text-primary transition-colors">
                          {brand.name}
                        </p>
                        <p className="text-xs text-muted-foreground">{brand.priceRange}</p>
                      </div>
                      <div className="flex items-center gap-1 text-xs">
                        <span className="text-rating-star">★</span>
                        <span>{brand.rating}</span>
                      </div>
                    </Link>
                  ))}
                </div>
                
                <Button asChild className="w-full mt-4">
                  <Link to="/articulos">
                    Ver todos los reviews
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BreedDetailPage;
