import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail, Instagram, Award, BookOpen, Heart, Users, GraduationCap, ArrowRight } from "lucide-react";
import authorData from "@/data/author.json";
import { motion } from "framer-motion";

const AuthorPage = () => {
  const stats = [
    { icon: BookOpen, value: authorData.stats.reviewsWritten, label: "Reviews escritos" },
    { icon: Award, value: authorData.stats.yearsExperience, label: "Años de experiencia" },
    { icon: Users, value: `${(authorData.stats.petsHelped / 1000).toFixed(0)}k+`, label: "Mascotas ayudadas" },
    { icon: Heart, value: authorData.stats.brandsAnalyzed, label: "Marcas analizadas" },
  ];

  return (
    <Layout>
      {/* Header */}
      <section className="bg-gradient-to-b from-secondary/50 to-background py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center mb-12">
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="h-40 w-40 mx-auto rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-8xl">{authorData.image}</span>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium">
                    Veterinario
                  </div>
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-heading font-bold mb-2">
                {authorData.name}
              </h1>
              <p className="text-xl text-muted-foreground mb-4">
                {authorData.title}
              </p>
              <p className="text-muted-foreground flex items-center justify-center gap-2">
                📍 {authorData.location} • {authorData.experience}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border text-center"
                >
                  <stat.icon className="h-6 w-6 mx-auto mb-3 text-primary" />
                  <p className="text-3xl font-heading font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2 space-y-8">
                {/* Bio */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <h2 className="font-heading font-semibold text-xl mb-4">
                    Mi Historia
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {authorData.bio}
                  </p>
                  <p className="text-foreground leading-relaxed italic border-l-4 border-primary pl-4">
                    "{authorData.mission}"
                  </p>
                </motion.div>

                {/* Credentials */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <h2 className="font-heading font-semibold text-xl mb-4 flex items-center gap-2">
                    <GraduationCap className="h-5 w-5 text-primary" />
                    Credenciales
                  </h2>
                  <ul className="space-y-3">
                    {authorData.credentials.map((credential, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="h-2 w-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground">{credential}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                {/* Specialties */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-6 border border-primary/20"
                >
                  <h2 className="font-heading font-semibold text-xl mb-4">
                    Especialidades
                  </h2>
                  <div className="flex flex-wrap gap-2">
                    {authorData.specialties.map((specialty, i) => (
                      <span 
                        key={i}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-full font-medium"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="space-y-6"
              >
                {/* Contact */}
                <div className="bg-card rounded-2xl p-6 border border-border">
                  <h3 className="font-heading font-semibold mb-4">Contacto</h3>
                  <div className="space-y-3">
                    <a 
                      href={`mailto:${authorData.socialMedia.email}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <Mail className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                      <span className="text-sm truncate">{authorData.socialMedia.email}</span>
                    </a>
                    <a 
                      href="#"
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-secondary transition-colors group"
                    >
                      <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
                      <span className="text-sm">{authorData.socialMedia.instagram}</span>
                    </a>
                  </div>
                </div>

                {/* CTA */}
                <div className="bg-primary/10 rounded-2xl p-6 border border-primary/20">
                  <h3 className="font-heading font-semibold mb-2">¿Tienes dudas?</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Explora mis reviews detallados para encontrar la mejor alimentación para tu mascota.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/articulos">
                      Ver Reviews
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AuthorPage;
