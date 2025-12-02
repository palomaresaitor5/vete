import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { BreedCard } from "@/components/shared/BreedCard";
import { Button } from "@/components/ui/button";
import breedsData from "@/data/breeds.json";
import { motion } from "framer-motion";

type TabType = "perros" | "gatos";

const BreedsPage = () => {
  const [searchParams] = useSearchParams();
  const initialTab = searchParams.get("type") as TabType || "perros";
  const [activeTab, setActiveTab] = useState<TabType>(initialTab);

  const breeds = activeTab === "perros" ? breedsData.dogs : breedsData.cats;

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
              Guía de Razas
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Descubre las características, necesidades nutricionales y consejos de alimentación para cada raza.
            </p>
            
            {/* Tabs */}
            <div className="inline-flex bg-secondary rounded-xl p-1">
              <Button 
                variant={activeTab === "perros" ? "default" : "ghost"}
                onClick={() => setActiveTab("perros")}
                className="gap-2"
              >
                🐕 Perros
              </Button>
              <Button 
                variant={activeTab === "gatos" ? "default" : "ghost"}
                onClick={() => setActiveTab("gatos")}
                className="gap-2"
              >
                🐈 Gatos
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breeds Grid */}
      <section className="py-12">
        <div className="container">
          <p className="text-muted-foreground mb-6">
            {breeds.length} razas de {activeTab}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {breeds.map((breed, index) => (
              <BreedCard 
                key={breed.id} 
                breed={breed} 
                type={activeTab === "perros" ? "dog" : "cat"}
                index={index} 
              />
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BreedsPage;
