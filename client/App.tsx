import "./global.css";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Projects from "./pages/Projects";
import Capabilities from "./pages/Capabilities";
import Contact from "./pages/Contact";
import Iot from "./pages/domains/Iot";
import Medical from "./pages/domains/Medical";
import Automotive from "./pages/domains/Automotive";
import Soc from "./pages/domains/Soc";
import Hardware from "./pages/domains/Hardware";
import Testing from "./pages/domains/Testing";
import ScrollToTop from "@/components/ScrollToTop";
import PageLoadingIndicator from "@/components/PageLoadingIndicator";
import Breadcrumbs from "@/components/Breadcrumbs";
import { motion } from "framer-motion";

const queryClient = new QueryClient();

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      <PageLoadingIndicator />
      <ScrollToTop />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto">
          <Breadcrumbs />
        </div>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />

          <Route path="/domains/iot" element={<Iot />} />
          <Route path="/domains/medical" element={<Medical />} />
          <Route path="/domains/automotive" element={<Automotive />} />
          <Route path="/domains/soc" element={<Soc />} />
          <Route path="/domains/hardware" element={<Hardware />} />
          <Route path="/domains/testing" element={<Testing />} />

          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </>
  );
}

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

createRoot(document.getElementById("root")!).render(<App />);
