import { Button } from "@/components/ui/button";
import { PawPrint, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden paw-pattern">
      {/* Background gradient */}
      <div
        className="absolute inset-0 opacity-90 -z-10"
        style={{ background: "var(--gradient-hero)" }}
      />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-20 z-0 text-primary">
        <PawPrint className="h-20 w-20 animate-float" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 z-0 text-primary">
        <PawPrint className="h-16 w-16 animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 bg-white/80 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-soft">
              <Star className="h-4 w-4 fill-current" />
              +150 Reviews de un experto veterinario
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight"
          >
            Elige la mejor alimentación para tu{" "}
            <span className="relative">
              mascota
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none">
                <path d="M2 8C50 3 150 3 198 8" stroke="hsl(var(--accent))" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Análisis honestos y detallados de piensos y comidas para perros y gatos,
            escritos por un veterinario jubilado con más de 35 años de experiencia.
          </motion.p>

          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button asChild size="xl" variant="accent">
              <a href="/articulos">
                Ver Reviews
                <ArrowRight className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild size="xl" variant="hero-outline">
              <a href="/razas">
                Explorar Razas
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-foreground/10"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary">150+</p>
              <p className="text-sm text-foreground/70">Reviews</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary">50+</p>
              <p className="text-sm text-foreground/70">Marcas</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-heading font-bold text-primary">35</p>
              <p className="text-sm text-foreground/70">Años exp.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
