import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { useState } from "react";
import {
  Package,
  Code2,
  CheckCircle2,
  Lightbulb,
  Zap,
  Shield,
  Users,
} from "lucide-react";

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
            index={0}
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
            index={1}
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
            index={2}
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
            index={3}
          />
        </div>
      </Section>

      {/* Platform & Processor Expertise */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Devices We Work With
        </h2>
        <p className="text-muted-foreground mb-8">
          We have deep expertise with the leading chip brands and operating
          systems used to power devices worldwide.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseGroup title="Processor Chips" index={0}>
            <p className="text-sm text-muted-foreground mb-4">
              The "brains" of devices - the chips that make everything run. We
              work with all major brands.
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
              ].map((p, idx) => (
                <motion.span
                  key={p}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
                  className="px-3 py-2 rounded-md bg-card/60 text-sm border border-primary/15 hover:border-primary/40 transition-all cursor-pointer"
                >
                  {p}
                </motion.span>
              ))}
            </div>
          </ExpertiseGroup>
          <ExpertiseGroup title="Operating Systems & Software Platforms" index={1}>
            <p className="text-sm text-muted-foreground mb-4">
              The system software that manages how devices work - similar to
              Windows or Mac for computers.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Linux",
                "Android",
                "Real-Time OS",
                "VxWorks",
                "QNX",
                "Custom RTOS",
              ].map((os, idx) => (
                <motion.span
                  key={os}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary-rgb), 0.1)" }}
                  className="px-3 py-2 rounded-md bg-card/60 text-sm border border-primary/15 hover:border-primary/40 transition-all cursor-pointer"
                >
                  {os}
                </motion.span>
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
          Devices need standard ways to talk to each other, follow rules, and
          connect securely. We expertise in all major standards.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ExpertiseGroup title="Car & Vehicle Systems" index={0}>
            <p className="text-xs text-muted-foreground mb-3">
              Special standards for automotive safety, diagnostics, and
              communication.
            </p>
            <ul className="space-y-2">
              {[
                "CAN Network (vehicle data bus)",
                "Diagnostics & troubleshooting",
                "J1939 (heavy trucks)",
                "Safety standards",
              ].map((p, idx) => (
                <motion.li
                  key={p}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <motion.span
                    className="h-4 w-4 text-primary flex-shrink-0 mt-0.5"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 + 0.1 }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </motion.span>
                  <span className="text-sm">{p}</span>
                </motion.li>
              ))}
            </ul>
          </ExpertiseGroup>
          <ExpertiseGroup title="Wireless Connectivity" index={1}>
            <p className="text-xs text-muted-foreground mb-3">
              Technologies to connect devices wirelessly - like WiFi for phones
              or Bluetooth for wearables.
            </p>
            <ul className="space-y-2">
              {[
                "Bluetooth (headphones, watches)",
                "Wi-Fi (internet connection)",
                "Cellular (mobile networks)",
                "Long-range wireless (LoRaWAN)",
              ].map((p, idx) => (
                <motion.li
                  key={p}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <motion.span
                    className="h-4 w-4 text-primary flex-shrink-0 mt-0.5"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 + 0.1 }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </motion.span>
                  <span className="text-sm">{p}</span>
                </motion.li>
              ))}
            </ul>
          </ExpertiseGroup>
          <ExpertiseGroup title="Physical Connections" index={2}>
            <p className="text-xs text-muted-foreground mb-3">
              How components inside devices talk to each other - the physical
              communication paths.
            </p>
            <ul className="space-y-2">
              {[
                "USB (universal standard)",
                "Ethernet (wired networks)",
                "Serial connections",
                "Sensor communication",
              ].map((p, idx) => (
                <motion.li
                  key={p}
                  className="flex items-start gap-2"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <motion.span
                    className="h-4 w-4 text-primary flex-shrink-0 mt-0.5"
                    whileInView={{ scale: [0, 1.2, 1] }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.05 + 0.1 }}
                  >
                    <CheckCircle2 className="h-4 w-4" />
                  </motion.span>
                  <span className="text-sm">{p}</span>
                </motion.li>
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
          We offer flexible ways to partner with you based on what your project
          needs.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            icon="📋"
            title="Project-Based"
            desc="You define what needs to be built, and we deliver it. Perfect when you have a specific goal - like launching a new product feature."
            index={0}
          />
          <ServiceCard
            icon="👥"
            title="Team Expansion"
            desc="Boost your team with our skilled engineers. They work like your own employees - same goals, same team, no separate management needed."
            index={1}
          />
          <ServiceCard
            icon="🚀"
            title="Build & Transfer"
            desc="We build the capability you need, run it for a while, then hand it over completely to your team so you're fully independent."
            index={2}
          />
        </div>
      </Section>

      {/* Quality & Process */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Why You Can Trust Us
        </h2>
        <p className="text-muted-foreground mb-8">
          We're committed to delivering quality work and being a true partner in
          your success.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <QualityCard
            icon="✓"
            title="Quality & Reliability"
            items={[
              "Everything gets tested thoroughly",
              "We follow industry best practices",
              "Safety standards are never compromised",
              "Our own testing lab on-site",
              "Complete documentation for your team",
            ]}
            index={0}
          />
          <QualityCard
            icon="🤝"
            title="Experienced Team"
            items={[
              "25+ years of proven track record",
              "Senior engineers, not junior staff",
              "We adapt to your company culture",
              "Work like your own team members",
              "We invest time in teaching your team",
            ]}
            index={1}
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
  index = 0,
}: {
  title: string;
  subtitle?: string;
  description?: string;
  items: string[];
  icon?: React.ReactNode;
  index?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="rounded-lg border border-primary/15 p-6 bg-card/60 backdrop-blur cursor-pointer overflow-hidden hover:border-primary/40 transition-all group"
      onClick={() => setExpanded(!expanded)}
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-start gap-3 mb-3">
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary to-primary/60 text-primary-foreground flex-shrink-0 shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
          <div className="flex-1">
            <h3 className="font-bold text-foreground">{title}</h3>
            {subtitle && (
              <p className="text-xs text-primary font-semibold mt-0.5">
                {subtitle}
              </p>
            )}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: expanded ? 1 : 0.7,
            height: expanded ? "auto" : "auto",
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
            {items.map((i, idx) => (
              <motion.li
                key={i}
                className="flex items-start gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <motion.span
                  className="mt-0.5 h-4 w-4 text-primary flex-shrink-0"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 + 0.1 }}
                >
                  <CheckCircle2 className="h-4 w-4" />
                </motion.span>
                <span>{i}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <div className="mt-3 text-xs text-primary font-semibold sm:hidden">
          {expanded ? "Show less" : "Show details"}
        </div>
      </div>
    </motion.div>
  );
}

function ExpertiseGroup({
  title,
  children,
  index = 0,
}: {
  title: string;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: "0 16px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-primary/15 p-6 bg-card/60 backdrop-blur hover:border-primary/40 transition-all group"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
      <h3 className="font-semibold mb-4 relative text-foreground">{title}</h3>
      <div className="relative">
        {children}
      </div>
    </motion.div>
  );
}

function ServiceCard({
  icon,
  title,
  desc,
  index = 0,
}: {
  icon?: string;
  title: string;
  desc: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-primary/15 p-6 bg-card/60 backdrop-blur hover:shadow-md hover:border-primary/40 transition-all group overflow-hidden"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        {icon && (
          <motion.div
            className="text-3xl mb-3"
            whileHover={{ scale: 1.2, rotate: 10 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.div>
        )}
        <h3 className="font-bold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function QualityCard({
  icon,
  title,
  items,
  index = 0,
}: {
  icon?: string;
  title: string;
  items: string[];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-primary/15 p-6 bg-card/60 backdrop-blur hover:shadow-md hover:border-primary/40 transition-all group overflow-hidden"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center gap-2 mb-4">
          {icon && (
            <motion.span
              className="text-2xl"
              whileHover={{ scale: 1.15, rotate: -5 }}
              transition={{ duration: 0.3 }}
            >
              {icon}
            </motion.span>
          )}
          <h3 className="font-bold text-foreground">{title}</h3>
        </div>
        <ul className="space-y-2">
          {items.map((item, idx) => (
            <motion.li
              key={item}
              className="flex items-start gap-2 text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <motion.span
                className="h-4 w-4 text-primary mt-0.5 flex-shrink-0"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 + 0.1 }}
              >
                <CheckCircle2 className="h-4 w-4" />
              </motion.span>
              <span className="text-muted-foreground">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
