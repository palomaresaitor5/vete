import { Layout } from "@/components/layout/Layout";
import { BrandCard } from "@/components/shared/BrandCard";
import brandsData from "@/data/brands.json";
import { motion } from "framer-motion";

const BrandsPage = () => {
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
              Marcas Analizadas
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Descubre todas las marcas que hemos analizado, desde las más premium hasta las opciones económicas.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="py-12">
        <div className="container">
          <p className="text-muted-foreground mb-6">
            {brandsData.length} marcas disponibles
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {brandsData.map((brand, index) => (
              <BrandCard 
                key={brand.id} 
                brand={brand} 
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BrandsPage;
