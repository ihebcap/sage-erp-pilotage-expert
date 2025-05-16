
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/layout/Layout";
import Index from "./pages/Index";
import Prestations from "./pages/Prestations";
import Packs from "./pages/Packs";
import APropos from "./pages/APropos";
import Contact from "./pages/Contact";
import ContactForm from "./pages/ContactForm";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Index />} />
            <Route path="/prestations" element={<Prestations />} />
            <Route path="/packs" element={<Packs />} />
            <Route path="/apropos" element={<APropos />} />
            {/* Route contact originale conservée mais non accessible par le menu */}
            <Route path="/contact" element={<Contact />} />
            {/* Nouvelle route pour le formulaire */}
            <Route path="/contact-form" element={<ContactForm />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
