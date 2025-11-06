import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Software Development, AI & IoT Solutions | Azorix Technologies Hyderabad"
        description="Discover innovative software, AI, and IoT services by Azorix Technologies. From web apps to enterprise automation — we build scalable, secure, and smart digital systems."
        canonicalPath="/capabilities"
      />
      <Section container>
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Capabilities
        </h1>
        <p className="mt-3 text-muted-foreground max-w-3xl">
          End‑to‑end embedded product engineering across hardware, software,
          testing and support.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
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

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6"
    >
      <div className="font-semibold mb-2">{title}</div>
      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </motion.div>
  );
}
