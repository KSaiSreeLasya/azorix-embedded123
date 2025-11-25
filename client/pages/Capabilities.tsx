import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useState } from "react";
import { Package, Code2, CheckCircle2, Lightbulb, Zap, Shield, Users } from "lucide-react";

export default function Capabilities() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Embedded Engineering Capabilities | Embinsys"
        description="Complete embedded systems engineering: hardware design, firmware development, software engineering, testing, and support. From concept to production."
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
                software, testing and support. Start-to-finish expertise from
                concept through production.
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
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Card
            icon={<Package className="h-5 w-5" />}
            title="Hardware Design"
            subtitle="Building the Physical Device"
            description="We design and plan what the physical device will look like - from basic sketches to detailed blueprints, component selection, and manufacturing plans."
            items={[
              "Planning and requirements",
              "Design and schematics",
              "Circuit board layout",
              "Component selection",
              "Quality checks",
              "Manufacturing guidance",
            ]}
          />
          <Card
            icon={<Code2 className="h-5 w-5" />}
            title="Software & Firmware"
            subtitle="Making Devices Smart"
            description="We write the code that makes devices work - everything from the core operating system to apps, connectivity, and how the device communicates."
            items={[
              "Core system setup",
              "Operating system selection",
              "Communication standards",
              "Connection capabilities",
              "User interfaces",
              "Integration & optimization",
            ]}
          />
          <Card
            icon={<Shield className="h-5 w-5" />}
            title="Quality Testing"
            subtitle="Ensuring Everything Works"
            description="We test every aspect of the device thoroughly to ensure it works reliably, safely, and meets all required standards before reaching customers."
            items={[
              "Test planning",
              "Automated testing",
              "Manual testing",
              "Problem analysis",
              "Stability verification",
              "Standards compliance",
            ]}
          />
          <Card
            icon={<Users className="h-5 w-5" />}
            title="Support & Training"
            subtitle="Helping You Succeed"
            description="We provide ongoing support, technical expertise, and training to ensure your team can manage and evolve the product long-term."
            items={[
              "Technical lab support",
              "Team augmentation",
              "Project management",
              "Knowledge transfer",
              "Staff training",
              "Long-term guidance",
            ]}
          />
        </div>
      </Section>

      {/* Platform & Processor Expertise */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Devices We Work With
        </h2>
        <p className="text-muted-foreground mb-8">
          We have deep expertise with the leading chip brands and operating systems used to power devices worldwide.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseGroup title="Processor Chips">
            <p className="text-sm text-muted-foreground mb-4">
              The "brains" of devices - the chips that make everything run. We work with all major brands.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Intel",
                "ARM (NXP, Qualcomm)",
                "Texas Instruments",
                "STMicroelectronics",
                "Nordic",
                "Espressif (ESP32)",
                "Microchip",
                "Renesas",
                "Infineon",
              ].map((p) => (
                <span
                  key={p}
                  className="px-3 py-2 rounded-md bg-card/60 text-sm border"
                >
                  {p}
                </span>
              ))}
            </div>
          </ExpertiseGroup>
          <ExpertiseGroup title="Operating Systems & Software Platforms">
            <p className="text-sm text-muted-foreground mb-4">
              The system software that manages how devices work - similar to Windows or Mac for computers.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Linux",
                "Android",
                "Real-Time OS",
                "VxWorks",
                "QNX",
                "Custom RTOS",
              ].map((os) => (
                <span
                  key={os}
                  className="px-3 py-2 rounded-md bg-card/60 text-sm border"
                >
                  {os}
                </span>
              ))}
            </div>
          </ExpertiseGroup>
        </div>
      </Section>

      {/* Connectivity & Communication */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Ways Devices Connect & Communicate
        </h2>
        <p className="text-muted-foreground mb-8">
          Devices need standard ways to talk to each other, follow rules, and connect securely. We expertise in all major standards.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ExpertiseGroup title="Car & Vehicle Systems">
            <p className="text-xs text-muted-foreground mb-3">
              Special standards for automotive safety, diagnostics, and communication.
            </p>
            <ul className="space-y-2">
              {[
                "CAN Network (vehicle data bus)",
                "Diagnostics & troubleshooting",
                "J1939 (heavy trucks)",
                "Safety standards",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </ExpertiseGroup>
          <ExpertiseGroup title="Wireless Connectivity">
            <p className="text-xs text-muted-foreground mb-3">
              Technologies to connect devices wirelessly - like WiFi for phones or Bluetooth for wearables.
            </p>
            <ul className="space-y-2">
              {[
                "Bluetooth (headphones, watches)",
                "Wi-Fi (internet connection)",
                "Cellular (mobile networks)",
                "Long-range wireless (LoRaWAN)",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </ExpertiseGroup>
          <ExpertiseGroup title="Physical Connections">
            <p className="text-xs text-muted-foreground mb-3">
              How components inside devices talk to each other - the physical communication paths.
            </p>
            <ul className="space-y-2">
              {[
                "USB (universal standard)",
                "Ethernet (wired networks)",
                "Serial connections",
                "Sensor communication",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{p}</span>
                </li>
              ))}
            </ul>
          </ExpertiseGroup>
        </div>
      </Section>

      {/* Services & Engagement */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          How We Work With You
        </h2>
        <p className="text-muted-foreground mb-8">
          We offer flexible ways to partner with you based on what your project needs.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            icon="📋"
            title="Project-Based"
            desc="You define what needs to be built, and we deliver it. Perfect when you have a specific goal - like launching a new product feature."
          />
          <ServiceCard
            icon="👥"
            title="Team Expansion"
            desc="Boost your team with our skilled engineers. They work like your own employees - same goals, same team, no separate management needed."
          />
          <ServiceCard
            icon="🚀"
            title="Build & Transfer"
            desc="We build the capability you need, run it for a while, then hand it over completely to your team so you're fully independent."
          />
        </div>
      </Section>

      {/* Quality & Process */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Quality & Execution
        </h2>
        <p className="text-muted-foreground mb-8">
          Our approach ensures reliable, high-quality delivery.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <QualityCard
            title="Quality Focus"
            items={[
              "Reliable execution on every project",
              "Technology and quality-focused",
              "MISRA compliance for automotive",
              "In-house testing lab",
              "Comprehensive documentation",
            ]}
          />
          <QualityCard
            title="Team & Culture"
            items={[
              "25+ years leadership experience",
              "Senior technical expertise",
              "Adapt and embrace client culture",
              "Work as extended team",
              "Hands-on training and mentoring",
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
  subtitle,
  description,
  items,
  icon,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  items: string[];
  icon?: React.ReactNode;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur cursor-pointer overflow-hidden"
      onClick={() => setExpanded(!expanded)}
    >
      <div className="flex items-start gap-3 mb-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex-shrink-0 shadow-md">
          {icon}
        </span>
        <div className="flex-1">
          <h3 className="font-bold text-foreground">{title}</h3>
          {subtitle && <p className="text-xs text-primary font-semibold mt-0.5">{subtitle}</p>}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: expanded ? 1 : 0.7,
          height: expanded ? "auto" : "auto"
        }}
        transition={{ duration: 0.3 }}
        className={expanded ? "block" : "hidden sm:block"}
      >
        {description && (
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
            {description}
          </p>
        )}
        <ul className="space-y-2 text-sm text-muted-foreground">
          {items.map((i) => (
            <li key={i} className="flex items-start gap-2">
              <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      <div className="mt-3 text-xs text-primary font-semibold sm:hidden">
        {expanded ? "Show less" : "Show details"}
      </div>
    </motion.div>
  );
}

function ExpertiseGroup({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur"
    >
      <h3 className="font-semibold mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}

function ServiceCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function QualityCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur"
    >
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
