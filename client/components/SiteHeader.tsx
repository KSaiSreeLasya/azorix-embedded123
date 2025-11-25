import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";
import { motion } from "framer-motion";

const nav = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "sticky top-0 z-40 w-full transition-all duration-300",
          isScrolled
            ? "border-b border-primary/30 bg-background/95 backdrop-blur-lg supports-[backdrop-filter]:bg-background/90 shadow-lg"
            : "border-b border-primary/20 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60",
        )}
      >
        <div
          className={cn(
            "container flex items-center justify-between transition-all duration-300",
            isScrolled ? "h-14" : "h-16",
          )}
        >
          <div className="flex items-center gap-4">
            {location.pathname !== "/" && (
              <BackButton className="hidden sm:inline-flex" />
            )}
            <Link to="/" className="flex items-center gap-3 group">
              <span className="relative inline-flex">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2F3b9a6b06591c4cdeb476566ddc00c0bc?format=webp&width=800"
                  alt="Azorix Embedded Logo"
                  className={cn(
                    "w-auto object-contain dark:hidden group-hover:opacity-80 transition-all duration-300",
                    isScrolled ? "h-12" : "h-16",
                  )}
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2Fdf131029371243a6bdd4cd7752a9db95%2F1d554e806558473ab1f04a695d01d64c?format=webp&width=800"
                  alt="Azorix Embedded Logo White"
                  aria-hidden
                  className={cn(
                    "w-auto object-contain hidden dark:inline-block group-hover:opacity-80 transition-all duration-300",
                    isScrolled ? "h-12" : "h-16",
                  )}
                />
              </span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center gap-1">
            {nav.map((n, idx) => (
              <motion.div
                key={n.to}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <NavLink
                  to={n.to}
                  className={({ isActive }) =>
                    cn(
                      "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 border border-transparent relative",
                      "hover:bg-primary/10 hover:border-primary/30 hover:text-primary",
                      isActive
                        ? "bg-gradient-to-r from-primary/15 to-accent/10 border-primary/30 text-primary"
                        : "text-foreground/70",
                    )
                  }
                >
                  {({ isActive }) => (
                    <>
                      {n.label}
                      {isActive && (
                        <motion.div
                          layoutId="navIndicator"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </motion.div>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            {location.pathname !== "/" && <BackButton className="sm:hidden" />}
            <ThemeToggle />
            <Button
              asChild
              className={cn(
                "hidden md:inline-flex font-semibold rounded-lg shadow-md transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90",
                isScrolled ? "h-9 px-5 text-sm" : "h-10 px-6 text-sm",
              )}
            >
              <a href="mailto:info@azorixembedded.com">Get in touch</a>
            </Button>
            <motion.button
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>
      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-primary/20 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm"
        >
          <div className="container py-4 flex flex-col gap-2">
            {nav.map((n, idx) => (
              <motion.div
                key={n.to}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
              >
                <NavLink
                  to={n.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      "py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-200 border border-transparent block",
                      isActive
                        ? "bg-primary/15 border-primary/30 text-primary"
                        : "text-foreground/60 hover:bg-primary/10 hover:border-primary/30 hover:text-primary",
                    )
                  }
                >
                  {n.label}
                </NavLink>
              </motion.div>
            ))}
            <motion.a
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2, delay: nav.length * 0.05 }}
              className="py-3 px-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/15 transition-all duration-200"
              href="mailto:info@azorixembedded.com"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>
      )}
    </>
  );
}
