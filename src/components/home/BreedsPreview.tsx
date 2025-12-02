import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import breedsData from "@/data/breeds.json";

export function BreedsPreview() {
  const topDogs = breedsData.dogs.slice(0, 3);
  const topCats = breedsData.cats.slice(0, 3);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
            Guía de Razas
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Conoce Cada Raza
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Descubre las características, necesidades nutricionales y cuidados específicos de cada raza.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Dogs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-dog-light flex items-center justify-center">
                <span className="text-2xl">🐕</span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Razas de Perros</h3>
                <p className="text-sm text-muted-foreground">{breedsData.dogs.length} razas disponibles</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {topDogs.map((breed) => (
                <Link 
                  key={breed.id}
                  to={`/raza/dog/${breed.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-dog-light/50 transition-colors group"
                >
                  <span className="text-2xl">{breed.image}</span>
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-dog transition-colors">{breed.name}</p>
                    <p className="text-xs text-muted-foreground">{breed.origin} • {breed.size}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-dog transition-colors" />
                </Link>
              ))}
            </div>
            
            <Button asChild variant="ghost" className="w-full mt-4 text-dog hover:text-dog hover:bg-dog-light">
              <Link to="/razas?type=perros">
                Ver todas las razas de perros
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Cats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-2xl p-6 border border-border"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-12 w-12 rounded-xl bg-cat-light flex items-center justify-center">
                <span className="text-2xl">🐈</span>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-lg">Razas de Gatos</h3>
                <p className="text-sm text-muted-foreground">{breedsData.cats.length} razas disponibles</p>
              </div>
            </div>
            
            <div className="space-y-3">
              {topCats.map((breed) => (
                <Link 
                  key={breed.id}
                  to={`/raza/cat/${breed.id}`}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-cat-light/50 transition-colors group"
                >
                  <span className="text-2xl">{breed.image}</span>
                  <div className="flex-1">
                    <p className="font-medium group-hover:text-cat transition-colors">{breed.name}</p>
                    <p className="text-xs text-muted-foreground">{breed.origin} • {breed.size}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-cat transition-colors" />
                </Link>
              ))}
            </div>
            
            <Button asChild variant="ghost" className="w-full mt-4 text-cat hover:text-cat hover:bg-cat-light">
              <Link to="/razas?type=gatos">
                Ver todas las razas de gatos
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
