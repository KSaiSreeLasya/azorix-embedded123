import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";

export default function PageLoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <motion.div
      initial={{ scaleX: 0, transformOrigin: "left" }}
      animate={{ scaleX: isLoading ? 0.6 : 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary z-50"
    />
  );
}
