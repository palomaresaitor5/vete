import { useParams, Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { RatingStars } from "@/components/shared/RatingStars";
import { PetTypeBadge } from "@/components/shared/PetTypeBadge";
import { Button } from "@/components/ui/button";
import { ArticleRadarChart } from "@/components/article/RadarChart";
import { StatBar } from "@/components/article/StatBar";
import { NutrientCircle } from "@/components/article/NutrientCircle";
import { ScoreCard } from "@/components/article/ScoreCard";
import { OverallScore } from "@/components/article/OverallScore";
import { 
  ArrowLeft, Clock, Calendar, CheckCircle2, XCircle, Award, Utensils, 
  TrendingUp, Wallet, Sparkles, Target, AlertTriangle, ThumbsUp, 
  ThumbsDown, Beaker, Scale, Droplets, Flame, Leaf, Fish, Pill
} from "lucide-react";
import articlesData from "@/data/articles.json";
import brandsData from "@/data/brands.json";
import { motion } from "framer-motion";

const ArticleDetailPage = () => {
  const { slug } = useParams();
  const article = articlesData.find(a => a.slug === slug);

  if (!article) {
    return (
      <Layout>
        <div className="container py-20 text-center">
          <h1 className="text-2xl font-bold mb-4">Artículo no encontrado</h1>
          <Button asChild>
            <Link to="/articulos">Volver a reviews</Link>
          </Button>
        </div>
      </Layout>
    );
  }

  const brand = brandsData.find(b => b.id === article.brandId);

  const scoreDescriptions = {
    ingredients: "Calidad y origen de los ingredientes utilizados en la fórmula.",
    nutrition: "Equilibrio nutricional y adecuación a las necesidades del animal.",
    palatability: "Aceptación y sabor según pruebas con animales reales.",
    priceQuality: "Relación entre el precio y la calidad ofrecida.",
  };

  return (
    <Layout>
      {/* Hero Header */}
      <section className="relative bg-gradient-to-br from-primary/5 via-background to-accent/5 py-8 overflow-hidden">
        <div className="absolute inset-0 paw-pattern opacity-30" />
        <div className="container relative">
          <Button asChild variant="ghost" className="mb-6">
            <Link to="/articulos">
              <ArrowLeft className="h-4 w-4" />
              Volver a reviews
            </Link>
          </Button>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <PetTypeBadge type={article.petType as any} />
                <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                  {article.category}
                </span>
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4">
                {article.title}
              </h1>
              
              <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full">
                  <Calendar className="h-4 w-4" />
                  {new Date(article.publishDate).toLocaleDateString('es-ES', { 
                    year: 'numeric', month: 'long', day: 'numeric' 
                  })}
                </span>
                <span className="flex items-center gap-1.5 bg-secondary/50 px-3 py-1.5 rounded-full">
                  <Clock className="h-4 w-4" />
                  {article.readTime} min de lectura
                </span>
                {brand && (
                  <Link 
                    to={`/marca/${brand.id}`}
                    className="flex items-center gap-2 bg-primary/10 text-primary px-3 py-1.5 rounded-full hover:bg-primary/20 transition-colors"
                  >
                    <span>{brand.logo}</span>
                    {brand.name}
                  </Link>
                )}
              </div>
            </motion.div>

            {/* Score Card - PES Style */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-3xl p-6 border border-border shadow-card"
            >
              <div className="text-center mb-4">
                <span className="text-6xl block mb-3 animate-bounce">{article.image}</span>
                <OverallScore score={article.rating} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Radar Chart & Quick Stats */}
      <section className="py-8 bg-secondary/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {/* Radar Chart */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Análisis Visual de Puntuaciones
              </h3>
              <ArticleRadarChart scores={article.scores} />
            </div>

            {/* Score Cards */}
            <div className="space-y-3">
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Puntuaciones Detalladas
              </h3>
              <ScoreCard 
                score={article.scores.ingredients} 
                label="Ingredientes" 
                icon={Utensils}
                description={scoreDescriptions.ingredients}
                index={0}
              />
              <ScoreCard 
                score={article.scores.nutrition} 
                label="Nutrición" 
                icon={TrendingUp}
                description={scoreDescriptions.nutrition}
                index={1}
              />
              <ScoreCard 
                score={article.scores.palatability} 
                label="Palatabilidad" 
                icon={Sparkles}
                description={scoreDescriptions.palatability}
                index={2}
              />
              <ScoreCard 
                score={article.scores.priceQuality} 
                label="Calidad/Precio" 
                icon={Wallet}
                description={scoreDescriptions.priceQuality}
                index={3}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Nutritional Analysis */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-card rounded-3xl p-8 border border-border mb-8"
          >
            <h2 className="font-heading font-bold text-2xl mb-8 flex items-center gap-3">
              <Beaker className="h-6 w-6 text-primary" />
              Composición Nutricional
            </h2>

            {/* Nutrient Circles */}
            <div className="flex flex-wrap justify-center gap-8 mb-10">
              <NutrientCircle value={article.ingredients.protein} label="Proteína" color="protein" size="lg" />
              <NutrientCircle value={article.ingredients.fat} label="Grasa" color="fat" size="lg" />
              <NutrientCircle value={article.ingredients.fiber} label="Fibra" color="fiber" size="lg" />
              <NutrientCircle value={article.ingredients.carbs} label="Carbohidratos" color="carbs" size="lg" />
            </div>

            {/* Detailed Stats */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Macronutrientes
                </h4>
                <StatBar label="Proteína" value={article.ingredients.protein} maxValue={50} icon={<Scale className="h-4 w-4 text-primary" />} showPercentage />
                <StatBar label="Grasa" value={article.ingredients.fat} maxValue={30} icon={<Droplets className="h-4 w-4 text-accent" />} showPercentage />
                <StatBar label="Fibra" value={article.ingredients.fiber} maxValue={10} icon={<Leaf className="h-4 w-4 text-rating-good" />} showPercentage />
                <StatBar label="Humedad" value={article.ingredients.moisture} maxValue={15} icon={<Droplets className="h-4 w-4 text-blue-500" />} showPercentage />
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                  Ácidos Grasos y Otros
                </h4>
                <StatBar label="Omega-3" value={article.ingredients.omega3} maxValue={2} icon={<Fish className="h-4 w-4 text-blue-500" />} showPercentage />
                <StatBar label="Omega-6" value={article.ingredients.omega6} maxValue={5} icon={<Fish className="h-4 w-4 text-orange-500" />} showPercentage />
                <StatBar label="Ceniza" value={article.ingredients.ash} maxValue={12} icon={<Flame className="h-4 w-4 text-gray-500" />} showPercentage />
                <StatBar label="Carbohidratos" value={article.ingredients.carbs} maxValue={60} icon={<Pill className="h-4 w-4 text-rating-average" />} showPercentage />
              </div>
            </div>
          </motion.div>

          {/* Ingredients Lists */}
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
                <Utensils className="h-4 w-4 text-primary" />
                Ingredientes Principales
              </h4>
              <div className="space-y-2">
                {article.ingredients.mainIngredients.map((ingredient, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary" />
                    <span className="text-sm">{ingredient}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
                <Pill className="h-4 w-4 text-rating-good" />
                Aditivos y Vitaminas
              </h4>
              <div className="flex flex-wrap gap-2">
                {article.ingredients.additives.map((additive, i) => (
                  <span key={i} className="bg-rating-good/10 text-rating-good text-xs px-2 py-1 rounded-full">
                    {additive}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
                <Beaker className="h-4 w-4 text-accent" />
                Conservantes
              </h4>
              <div className="flex flex-wrap gap-2">
                {article.ingredients.preservatives.map((preservative, i) => (
                  <span key={i} className="bg-accent/10 text-accent text-xs px-2 py-1 rounded-full">
                    {preservative}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Analysis */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <h2 className="font-heading font-bold text-2xl mb-8 flex items-center gap-3">
            <Beaker className="h-6 w-6 text-primary" />
            Análisis Profesional Detallado
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {article.detailedAnalysis && (
              <>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Utensils className="h-5 w-5 text-primary" />
                    </div>
                    <h3 className="font-heading font-semibold">Análisis de Ingredientes</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.detailedAnalysis.ingredientsAnalysis}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-rating-good/10 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-rating-good" />
                    </div>
                    <h3 className="font-heading font-semibold">Análisis Nutricional</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.detailedAnalysis.nutritionAnalysis}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-accent/10 flex items-center justify-center">
                      <Sparkles className="h-5 w-5 text-accent" />
                    </div>
                    <h3 className="font-heading font-semibold">Análisis de Palatabilidad</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.detailedAnalysis.palatabilityAnalysis}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="bg-card rounded-2xl p-6 border border-border"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="h-10 w-10 rounded-xl bg-rating-average/10 flex items-center justify-center">
                      <Wallet className="h-5 w-5 text-rating-average" />
                    </div>
                    <h3 className="font-heading font-semibold">Análisis de Precio</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {article.detailedAnalysis.priceAnalysis}
                  </p>
                </motion.div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Pros & Cons */}
      <section className="py-12">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-rating-excellent/5 rounded-3xl p-8 border border-rating-excellent/20"
            >
              <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-3 text-rating-excellent">
                <div className="h-12 w-12 rounded-2xl bg-rating-excellent/20 flex items-center justify-center">
                  <ThumbsUp className="h-6 w-6" />
                </div>
                Ventajas
              </h3>
              <ul className="space-y-4">
                {article.pros.map((pro, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-rating-excellent shrink-0 mt-0.5" />
                    <span className="text-foreground">{pro}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-destructive/5 rounded-3xl p-8 border border-destructive/20"
            >
              <h3 className="font-heading font-bold text-xl mb-6 flex items-center gap-3 text-destructive">
                <div className="h-12 w-12 rounded-2xl bg-destructive/20 flex items-center justify-center">
                  <ThumbsDown className="h-6 w-6" />
                </div>
                Desventajas
              </h3>
              <ul className="space-y-4">
                {article.cons.map((con, i) => (
                  <motion.li 
                    key={i} 
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <XCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
                    <span className="text-foreground">{con}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recommendations */}
      <section className="py-12 bg-secondary/30">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2 text-rating-good">
                <CheckCircle2 className="h-5 w-5" />
                Recomendado para
              </h3>
              <ul className="space-y-3">
                {article.recommendedFor?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="h-2 w-2 rounded-full bg-rating-good" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl p-6 border border-border"
            >
              <h3 className="font-heading font-semibold text-lg mb-4 flex items-center gap-2 text-rating-poor">
                <AlertTriangle className="h-5 w-5" />
                No recomendado para
              </h3>
              <ul className="space-y-3">
                {article.notRecommendedFor?.map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm">
                    <span className="h-2 w-2 rounded-full bg-rating-poor" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final Verdict */}
      <section className="py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
            
            <div className="relative">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="font-heading font-bold text-2xl">Veredicto Final</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <RatingStars rating={article.rating} size="md" />
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-foreground leading-relaxed max-w-3xl">
                {article.verdict}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg">
                  <Link to="/articulos">Ver más reviews</Link>
                </Button>
                {brand && (
                  <Button asChild variant="outline" size="lg">
                    <Link to={`/marca/${brand.id}`}>
                      Ver más de {brand.name}
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default ArticleDetailPage;
