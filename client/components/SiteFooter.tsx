import { Link } from "react-router-dom";

export default function SiteFooter() {
  return (
    <footer className="border-t border-primary/20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container py-16 md:py-20 grid gap-10 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="relative inline-flex opacity-80 hover:opacity-100 transition-opacity">
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2F3b9a6b06591c4cdeb476566ddc00c0bc?format=webp&width=800"
                alt="Azorix Embedded Logo"
                className="h-20 w-auto object-contain dark:hidden"
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets%2Fdf131029371243a6bdd4cd7752a9db95%2F1d554e806558473ab1f04a695d01d64c?format=webp&width=800"
                alt="Azorix Embedded Logo White"
                aria-hidden
                className="h-20 w-auto object-contain hidden dark:inline-block"
              />
            </span>
          </div>
          <p className="text-sm text-foreground/65 mt-3 max-w-sm leading-relaxed font-medium">
            Innovation. Quality. Reliability. Partnering with clients to deliver
            end‑to‑end embedded engineering solutions.
          </p>
        </div>
        <div>
          <div className="font-bold text-lg mb-4 text-foreground">Offices</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="hover:text-primary transition-colors">
              Hyderabad, India
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-lg mb-4 text-foreground">Contact</div>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li className="hover:text-primary transition-colors">
              www.azorixembedded.com
            </li>
            <li className="hover:text-primary transition-colors">
              info@azorixembedded.com
            </li>
          </ul>
        </div>
        <div>
          <div className="font-bold text-lg mb-4 text-foreground">Legal</div>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/privacy"
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/terms"
                className="text-foreground/70 hover:text-primary transition-colors font-medium"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/20 py-6 text-center text-sm text-foreground/60 bg-gradient-to-r from-transparent via-primary/5 to-transparent font-medium">
        © 2024 Azorix Embedded. All rights reserved.
      </div>
    </footer>
  );
}
