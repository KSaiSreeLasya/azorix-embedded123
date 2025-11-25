import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingLabelTextareaProps {
  value: string;
  onChange: (value: string) => void;
  label: string;
  placeholder?: string;
  disabled?: boolean;
  rows?: number;
}

export default function FloatingLabelTextarea({
  value,
  onChange,
  label,
  placeholder,
  disabled = false,
  rows = 4,
}: FloatingLabelTextareaProps) {
  const [isFocused, setIsFocused] = useState(false);
  const hasValue = value.length > 0;

  return (
    <div className="relative">
      <motion.textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={`w-full rounded-lg border bg-background px-4 py-3 text-foreground transition-all duration-200 focus:outline-none resize-none ${
          isFocused
            ? "border-primary/80 ring-2 ring-primary/20 shadow-lg shadow-primary/20"
            : "border-primary/20"
        } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
        animate={{
          boxShadow: isFocused
            ? "0 0 20px rgba(var(--primary-rgb), 0.2)"
            : "0 0 0px rgba(var(--primary-rgb), 0)",
        }}
      />
      <motion.label
        className="absolute left-4 top-3 text-foreground/60 pointer-events-none font-medium"
        animate={{
          y: hasValue || isFocused ? -24 : 0,
          scale: hasValue || isFocused ? 0.85 : 1,
          color:
            hasValue || isFocused
              ? "hsl(var(--primary))"
              : "hsl(var(--foreground) / 0.6)",
        }}
        transition={{ duration: 0.2 }}
      >
        {label}
      </motion.label>
    </div>
  );
}
