import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedReviews } from "@/components/home/FeaturedReviews";
import { BrandsShowcase } from "@/components/home/BrandsShowcase";
import { AboutAuthor } from "@/components/home/AboutAuthor";
import { BreedsPreview } from "@/components/home/BreedsPreview";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturedReviews />
      <BrandsShowcase />
      <BreedsPreview />
      <AboutAuthor />
    </Layout>
  );
};

export default Index;
