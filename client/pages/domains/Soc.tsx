import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Cpu, Zap, Radio, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";

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
            index={0}
            icon={<Zap className="h-6 w-6" />}
            title="Bootloaders"
            desc="ROM, secure boot, OTA updates, multi-stage loaders"
          />
          <CapabilityCard
            index={1}
            icon={<Shield className="h-6 w-6" />}
            title="BSP Development"
            desc="Board support packages, memory management, clock domains"
          />
          <CapabilityCard
            index={2}
            icon={<Radio className="h-6 w-6" />}
            title="Connectivity"
            desc="Bluetooth, WiFi, USB, Ethernet integration"
          />
          <CapabilityCard
            index={3}
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
            index={0}
            title="ARM Processors"
            items={[
              "Cortex-A (application class)",
              "Cortex-M (microcontroller)",
              "Cortex-R (real-time)",
              "ARMv7/ARMv8 architectures",
            ]}
          />
          <ProcessorCard
            index={1}
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
            index={2}
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
          <Card index={0} title="Firmware & Bootloaders">
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
          <Card index={1} title="Drivers & Connectivity">
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
            index={0}
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
            index={1}
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
            index={0}
            title="Board Bring-Up"
            desc="Initial board validation, peripheral enablement, basic functionality verification"
          />
          <TestingCard
            index={1}
            title="Silicon Validation"
            desc="Functional testing, performance benchmarking, compliance verification"
          />
          <TestingCard
            index={2}
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
  index = 0,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
  index?: number;
}) {
  return (
    <AnimatedCard variant="hover-glow" index={index}>
      <div className="flex items-center gap-3 mb-3">
        <motion.span
          className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </AnimatedCard>
  );
}

function ProcessorCard({
  title,
  items,
  index = 0,
}: {
  title: string;
  items: string[];
  index?: number;
}) {
  return (
    <AnimatedCard variant="hover-glow" index={index}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
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
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </motion.li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

function Card({
  title,
  children,
  index = 0,
}: {
  title: string;
  children: React.ReactNode;
  index?: number;
}) {
  return (
    <AnimatedCard variant="default" index={index}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </AnimatedCard>
  );
}

function FeatureCard({
  title,
  items,
  index = 0,
}: {
  title: string;
  items: string[];
  index?: number;
}) {
  return (
    <AnimatedCard variant="hover-glow" index={index}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
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
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </motion.li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

function TestingCard({
  title,
  desc,
  index = 0,
}: {
  title: string;
  desc: string;
  index?: number;
}) {
  return (
    <AnimatedCard variant="hover-glow" index={index}>
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </AnimatedCard>
  );
}
