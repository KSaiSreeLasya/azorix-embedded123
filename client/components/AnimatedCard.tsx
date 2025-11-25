import { motion } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedCardProps {
  children: ReactNode;
  index?: number;
  variant?: "default" | "hover-lift" | "hover-glow" | "interactive";
  className?: string;
}

export function AnimatedCard({
  children,
  index = 0,
  variant = "default",
  className = "",
}: AnimatedCardProps) {
  const baseClass =
    "rounded-lg border p-6 bg-card/60 backdrop-blur transition-all";

  const variants = {
    default: {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      whileHover: {},
    },
    "hover-lift": {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      whileHover: { y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" },
    },
    "hover-glow": {
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 },
      whileHover: {
        y: -6,
        boxShadow: "0 16px 40px rgba(0,0,0,0.12)",
        borderColor: "hsl(var(--primary) / 0.4)",
      },
    },
    interactive: {
      initial: { opacity: 0, y: 20, scale: 0.95 },
      whileInView: { opacity: 1, y: 0, scale: 1 },
      whileHover: {
        y: -8,
        boxShadow: "0 20px 50px rgba(0,0,0,0.15)",
      },
      whileTap: { scale: 0.98 },
    },
  };

  const selectedVariant = variants[variant];

  return (
    <motion.div
      initial={selectedVariant.initial}
      whileInView={selectedVariant.whileInView}
      whileHover={selectedVariant.whileHover}
      whileTap={selectedVariant.whileTap || {}}
      viewport={{ once: true }}
      transition={{
        duration: 0.4,
        delay: index * 0.08,
        ease: "easeOut",
      }}
      className={`${baseClass} ${className} group overflow-hidden relative`}
    >
      {variant === "hover-glow" || variant === "interactive" ? (
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        />
      ) : null}
      <div className="relative">{children}</div>
    </motion.div>
  );
}

export function AnimatedCardList({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        staggerChildren: 0.1,
        delayChildren: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}
