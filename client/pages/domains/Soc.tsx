import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Cpu, Zap, Radio, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";

export default function Soc() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Silicon and SoC Enablement | Embinsys"
        description="Bootloaders, BSPs, device drivers, connectivity, audio, and silicon validation for ARM/x86/custom SoCs."
        canonicalPath="/domains/soc"
      />
      <Section container>
        <DomainHero
          title="Silicon & SoC"
          subtitle="Complete SoC enablement: bootloaders, BSPs, device drivers, connectivity stacks, and silicon validation."
          image="https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg"
          icon={<Cpu className="h-5 w-5" />}
        />
      </Section>

      {/* Core Capabilities */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Core Capabilities
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CapabilityCard
            icon={<Zap className="h-6 w-6" />}
            title="Bootloaders"
            desc="ROM, secure boot, OTA updates, multi-stage loaders"
          />
          <CapabilityCard
            icon={<Shield className="h-6 w-6" />}
            title="BSP Development"
            desc="Board support packages, memory management, clock domains"
          />
          <CapabilityCard
            icon={<Radio className="h-6 w-6" />}
            title="Connectivity"
            desc="Bluetooth, WiFi, USB, Ethernet integration"
          />
          <CapabilityCard
            icon={<Cpu className="h-6 w-6" />}
            title="Silicon Validation"
            desc="Board bring-up, verification, performance testing"
          />
        </div>
      </Section>

      {/* Processor Support */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Processor & Chipset Expertise
        </h2>
        <p className="text-muted-foreground mb-8">
          Deep experience with leading SoC and processor families.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ProcessorCard
            title="ARM Processors"
            items={[
              "Cortex-A (application class)",
              "Cortex-M (microcontroller)",
              "Cortex-R (real-time)",
              "ARMv7/ARMv8 architectures",
            ]}
          />
          <ProcessorCard
            title="Popular SoCs"
            items={[
              "Qualcomm (Snapdragon)",
              "NXP (i.MX, Kinetis)",
              "TI (OMAP, DM)",
              "Renesas, Infineon",
              "MediaTek, Samsung Exynos",
            ]}
          />
          <ProcessorCard
            title="Custom SoCs"
            items={[
              "ASIC/FPGA integration",
              "Custom processor design",
              "RTL to implementation",
              "Verification and validation",
            ]}
          />
        </div>
      </Section>

      {/* Development Activities */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Development Activities
        </h2>
        <p className="text-muted-foreground mb-8">
          Comprehensive SoC enablement and validation services.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Firmware & Bootloaders">
            <ul className="space-y-2">
              {[
                "ROM bootloader development",
                "Secure boot implementation",
                "OTA firmware update mechanisms",
                "Bootloader optimization",
                "Memory and clock initialization",
                "Peripheral enumeration",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Drivers & Connectivity">
            <ul className="space-y-2">
              {[
                "Device driver development",
                "Bluetooth/BLE stack integration",
                "WiFi (802.11ac/6) enablement",
                "USB host/device controllers",
                "Ethernet and network stacks",
                "I2C, SPI, UART, GPIO drivers",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Audio & Multimedia */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Audio & Multimedia
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FeatureCard
            title="Audio Development"
            items={[
              "DSP optimization",
              "Audio codec integration",
              "Voice processing",
              "Spatial audio support",
              "Low-power audio playback",
            ]}
          />
          <FeatureCard
            title="Video & Graphics"
            items={[
              "Video codec acceleration",
              "Display interface support",
              "GPU driver development",
              "Video encoding/decoding",
              "Color management",
            ]}
          />
        </div>
      </Section>

      {/* Testing & Validation */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Validation & Testing
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TestingCard
            title="Board Bring-Up"
            desc="Initial board validation, peripheral enablement, basic functionality verification"
          />
          <TestingCard
            title="Silicon Validation"
            desc="Functional testing, performance benchmarking, compliance verification"
          />
          <TestingCard
            title="Automated Test Suites"
            desc="Test case development, regression testing, stability validation"
          />
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function CapabilityCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
          {icon}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function ProcessorCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
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

function Card({
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
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}

function FeatureCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
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

function TestingCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}
