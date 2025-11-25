import { useLocation, Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";

interface BreadcrumbItem {
  label: string;
  path: string;
}

const breadcrumbMap: Record<string, BreadcrumbItem[]> = {
  "/capabilities": [{ label: "Capabilities", path: "/capabilities" }],
  "/projects": [{ label: "Projects", path: "/projects" }],
  "/contact": [{ label: "Contact", path: "/contact" }],
  "/domains/iot": [
    { label: "Domains", path: "/" },
    { label: "IoT", path: "/domains/iot" },
  ],
  "/domains/medical": [
    { label: "Domains", path: "/" },
    { label: "Medical", path: "/domains/medical" },
  ],
  "/domains/automotive": [
    { label: "Domains", path: "/" },
    { label: "Automotive", path: "/domains/automotive" },
  ],
  "/domains/soc": [
    { label: "Domains", path: "/" },
    { label: "SoC", path: "/domains/soc" },
  ],
  "/domains/hardware": [
    { label: "Domains", path: "/" },
    { label: "Hardware", path: "/domains/hardware" },
  ],
  "/domains/testing": [
    { label: "Domains", path: "/" },
    { label: "Testing", path: "/domains/testing" },
  ],
};

export default function Breadcrumbs() {
  const location = useLocation();
  const breadcrumbs = breadcrumbMap[location.pathname];

  if (!breadcrumbs || breadcrumbs.length === 0) {
    return null;
  }

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="py-4 px-4 md:px-0"
      aria-label="Breadcrumb"
    >
      <ol className="flex items-center gap-1 text-sm">
        <li>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors"
          >
            <Home className="h-4 w-4" />
            <span className="hidden sm:inline">Home</span>
          </Link>
        </li>
        {breadcrumbs.map((item, index) => (
          <li key={item.path} className="flex items-center gap-1">
            <ChevronRight className="h-4 w-4 text-muted-foreground" />
            {index === breadcrumbs.length - 1 ? (
              <span className="text-foreground font-medium">{item.label}</span>
            ) : (
              <Link
                to={item.path}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </motion.nav>
  );
}
