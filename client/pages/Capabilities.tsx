import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { Package, Code2, LifeBuoy, CheckCircle2 } from "lucide-react";

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Software Development, AI & IoT Solutions | Azorix Technologies Hyderabad"
        description="Discover innovative software, AI, and IoT services by Azorix Technologies. From web apps to enterprise automation — we build scalable, secure, and smart digital systems."
        canonicalPath="/capabilities"
      />
      <Section container className="pt-12 pb-8">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-teal-950/30 dark:via-slate-950 dark:to-emerald-950/20">
          <div className="grid gap-6 md:grid-cols-2 p-8 md:p-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-primary font-semibold">
                <span>What we do</span>
              </div>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
                Capabilities
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                End‑to‑end embedded product engineering across hardware,
                software, testing and support.
              </p>
            </div>
            <img
              className="rounded-xl border shadow-sm hidden md:block"
              alt="Embedded engineering"
              src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg"
            />
          </div>
        </div>
      </Section>
      <Section container className="pt-6 pb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Card
            icon={<Package className="h-5 w-5" />}
            title="Product"
            items={[
              "Requirements & reviews",
              "System & schematic design",
              "PCB layout & reviews",
              "BOM analysis & cleansing",
              "Project planning & management",
            ]}
          />
          <Card
            icon={<Code2 className="h-5 w-5" />}
            title="Software"
            items={[
              "Board bring‑up, bootloader, BSP, drivers",
              "RTOS/Linux/QNX/VxWorks/Android",
              "CAN, UDS, J1939, Autosar; telematics; RF/Network stacks",
              "Multimedia & UI; Android",
              "Debugging crashes/races/memory",
              "Build/Integration/CI‑CD; system integration",
            ]}
          />
          <Card
            icon={<LifeBuoy className="h-5 w-5" />}
            title="Testing & Support"
            items={[
              "Framework development & automation",
              "Test case creation/execution & failure analysis",
              "Black‑box, functional, stability, verification",
              "In‑house embedded lab",
              "ODC/SoW & resource augmentation",
              "Leadership and hands‑on training",
            ]}
          />
        </div>
      </Section>
      <SiteFooter />
    </div>
  );
}

function Card({
  title,
  items,
  icon,
}: {
  title: string;
  items: string[];
  icon?: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur"
    >
      <div className="flex items-center gap-2 font-semibold mb-3 text-foreground">
        <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <ul className="space-y-2 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
