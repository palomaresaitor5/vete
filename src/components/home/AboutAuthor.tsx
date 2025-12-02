import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Award, BookOpen, Heart, Users } from "lucide-react";
import authorData from "@/data/author.json";
import { motion } from "framer-motion";

export function AboutAuthor() {
  const stats = [
    { icon: BookOpen, value: authorData.stats.reviewsWritten, label: "Reviews" },
    { icon: Award, value: authorData.stats.yearsExperience, label: "Años exp." },
    { icon: Users, value: `${(authorData.stats.petsHelped / 1000).toFixed(0)}k`, label: "Mascotas" },
    { icon: Heart, value: authorData.stats.brandsAnalyzed, label: "Marcas" },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl p-8 md:p-12">
              <div className="text-center">
                <span className="text-8xl md:text-9xl block mb-4">{authorData.image}</span>
                <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full">
                  <span className="h-2 w-2 rounded-full bg-rating-excellent animate-pulse" />
                  <span className="text-sm font-medium text-primary">Veterinario Certificado</span>
                </div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-card shadow-card rounded-2xl p-4 border border-border">
                <p className="text-2xl font-bold text-primary">35+</p>
                <p className="text-xs text-muted-foreground">años de exp.</p>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-card shadow-card rounded-2xl p-4 border border-border">
                <p className="text-2xl font-bold text-accent">150+</p>
                <p className="text-xs text-muted-foreground">reviews</p>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
              Sobre el Autor
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              {authorData.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {authorData.bio}
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-4 gap-4 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-3 bg-secondary/50 rounded-xl">
                  <stat.icon className="h-5 w-5 mx-auto mb-2 text-primary" />
                  <p className="font-bold text-lg">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            <Button asChild>
              <Link to="/autor">
                Conoce mi historia
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
