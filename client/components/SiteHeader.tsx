import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import BackButton from "@/components/BackButton";
import ThemeToggle from "@/components/ThemeToggle";

const nav = [
  { to: "/", label: "Home" },
  { to: "/capabilities", label: "Capabilities" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  return (
    <header className="sticky top-0 z-40 w-full border-b border-primary/20 bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-4">
          {location.pathname !== "/" && (
            <BackButton className="hidden sm:inline-flex" />
          )}
          <Link to="/" className="flex items-center gap-3 group">
            <span className="relative inline-flex">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdf131029371243a6bdd4cd7752a9db95%2F1ea1a5551abe4a9abfb9506ae0f1ecaf?format=webp&width=800"
                alt="Azorix Embedded Logo"
                className="h-16 w-auto object-contain dark:hidden group-hover:opacity-80 transition-opacity"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdf131029371243a6bdd4cd7752a9db95%2F1d554e806558473ab1f04a695d01d64c?format=webp&width=800"
                alt="Azorix Embedded Logo White"
                aria-hidden
                className="h-16 w-auto object-contain hidden dark:inline-block group-hover:opacity-80 transition-opacity"
              />
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                cn(
                  "px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-200 border border-transparent",
                  "hover:bg-primary/10 hover:border-primary/30 hover:text-primary",
                  isActive
                    ? "bg-gradient-to-r from-primary/15 to-accent/10 border-primary/30 text-primary"
                    : "text-foreground/70",
                )
              }
            >
              {n.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {location.pathname !== "/" && <BackButton className="sm:hidden" />}
          <ThemeToggle />
          <Button asChild className="hidden md:inline-flex h-10 px-6 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
            <a href="mailto:info@azorixembedded.com">Get in touch</a>
          </Button>
          <button
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-200"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
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
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-primary/20 bg-gradient-to-b from-background to-background/80 backdrop-blur-sm">
          <div className="container py-4 flex flex-col gap-2">
            {nav.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "py-3 px-4 text-sm font-semibold rounded-lg transition-all duration-200 border border-transparent",
                    isActive ? "bg-primary/15 border-primary/30 text-primary" : "text-foreground/60 hover:bg-primary/10 hover:border-primary/30 hover:text-primary",
                  )
                }
              >
                {n.label}
              </NavLink>
            ))}
            <a
              className="py-3 px-4 text-sm font-semibold text-primary bg-primary/10 border border-primary/30 rounded-lg hover:bg-primary/15 transition-all duration-200"
              href="mailto:info@azorixembedded.com"
            >
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
