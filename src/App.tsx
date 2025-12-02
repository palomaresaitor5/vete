import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticlesPage from "./pages/ArticlesPage";
import ArticleDetailPage from "./pages/ArticleDetailPage";
import BrandsPage from "./pages/BrandsPage";
import BrandDetailPage from "./pages/BrandDetailPage";
import BreedsPage from "./pages/BreedsPage";
import BreedDetailPage from "./pages/BreedDetailPage";
import AuthorPage from "./pages/AuthorPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/articulos" element={<ArticlesPage />} />
          <Route path="/articulo/:slug" element={<ArticleDetailPage />} />
          <Route path="/marcas" element={<BrandsPage />} />
          <Route path="/marca/:id" element={<BrandDetailPage />} />
          <Route path="/razas" element={<BreedsPage />} />
          <Route path="/raza/:type/:id" element={<BreedDetailPage />} />
          <Route path="/autor" element={<AuthorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
