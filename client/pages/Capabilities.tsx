import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
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
          Services & Engagement Models
        </h2>
        <p className="text-muted-foreground mb-8">
          Flexible models to support your project needs and business goals.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            title="Project / SoW"
            desc="Complete project delivery with defined scope of work, timeline, and deliverables. Ideal for specific feature development or product launches."
          />
          <ServiceCard
            title="Resource Augmentation"
            desc="Scale your team with skilled engineers working seamlessly as part of your extended team. Flexible duration and skill mix."
          />
          <ServiceCard
            title="Build Operate Transfer"
            desc="Build capability on your product, operate services, then transfer knowledge and responsibility to your team."
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
            <CheckCircle2 className="mt-0.5 h-4 w-4 text-primary flex-shrink-0" />
            <span>{i}</span>
          </li>
        ))}
      </ul>
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
