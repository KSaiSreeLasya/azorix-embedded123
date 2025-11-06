import "dotenv/config";
import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { handleContactForm } from "./routes/contact";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    const ping = process.env.PING_MESSAGE ?? "ping";
    res.json({ message: ping });
  });

  app.get("/api/demo", handleDemo);
  app.post("/api/contact", handleContactForm);

  // Dynamic sitemap.xml
  app.get("/sitemap.xml", (req, res) => {
    const base = `${req.protocol}://${req.get("host")}`;
    const urls = [
      "/",
      "/capabilities",
      "/projects",
      "/contact",
      "/domains/iot",
      "/domains/medical",
      "/domains/automotive",
      "/domains/soc",
      "/domains/hardware",
      "/domains/testing",
    ];
    const today = new Date().toISOString().slice(0, 10);
    const body =
      `<?xml version="1.0" encoding="UTF-8"?>\n` +
      `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">` +
      urls
        .map(
          (p) =>
            `<url><loc>${base}${p}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq><priority>${p === "/" ? "1.0" : "0.8"}</priority></url>`,
        )
        .join("") +
      `</urlset>`;
    res.set("Content-Type", "application/xml");
    res.send(body);
  });

  return app;
}
