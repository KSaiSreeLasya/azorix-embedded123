import { motion } from "framer-motion";
import { useRef } from "react";

export default function DomainHero({
  title,
  subtitle,
  image,
  icon,
}: {
  title: string;
  subtitle: string;
  image: string;
  icon?: React.ReactNode;
}) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative overflow-hidden rounded-2xl border shadow-sm group">
      <motion.img
        src={image}
        alt=""
        className="absolute inset-0 h-full w-full object-cover opacity-70"
        initial={{ scale: 1 }}
        whileInView={{ scale: 1.05 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/55 to-background/25"
        initial={{ opacity: 0.7 }}
        whileHover={{ opacity: 0.9 }}
        transition={{ duration: 0.4 }}
      />
      <motion.div
        ref={containerRef}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative p-8 md:p-12"
      >
        <motion.div
          className="flex items-center gap-3 text-primary font-semibold"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <motion.span
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            {icon}
          </motion.span>
          <span>{title}</span>
        </motion.div>
        <motion.h1
          className="mt-2 text-3xl md:text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {title}
        </motion.h1>
        <motion.p
          className="mt-4 text-muted-foreground max-w-2xl leading-relaxed"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          {subtitle}
        </motion.p>
      </motion.div>
    </div>
  );
}
