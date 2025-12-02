import { Link } from "react-router-dom";
import { PawPrint, Heart, Mail, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary/50 border-t border-border mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <PawPrint className="h-7 w-7 text-primary" />
              <span className="font-heading text-xl font-bold">
                <span className="text-primary">Pet</span>
                <span className="text-accent">Food</span>
                <span className="text-foreground"> Expert</span>
              </span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Opiniones honestas y análisis detallados de comidas y piensos para perros y gatos, 
              escritos por un veterinario con más de 35 años de experiencia.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navegación</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/articulos" className="text-muted-foreground hover:text-primary transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link to="/marcas" className="text-muted-foreground hover:text-primary transition-colors">
                  Marcas
                </Link>
              </li>
              <li>
                <Link to="/razas" className="text-muted-foreground hover:text-primary transition-colors">
                  Razas
                </Link>
              </li>
              <li>
                <Link to="/autor" className="text-muted-foreground hover:text-primary transition-colors">
                  Sobre el Autor
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="mailto:contacto@petfoodexpert.es" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Mail className="h-4 w-4" />
                  contacto@petfoodexpert.es
                </a>
              </li>
              <li>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                >
                  <Instagram className="h-4 w-4" />
                  @petfoodexpert_es
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 PetFood Expert. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="h-4 w-4 text-accent fill-accent" /> para los amantes de los animales
          </p>
        </div>
      </div>
    </footer>
  );
}
