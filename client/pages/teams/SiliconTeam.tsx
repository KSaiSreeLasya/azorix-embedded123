import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Cpu, Zap, Layers, Radio, Database, Gauge } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SiliconTeam() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Silicon & SoC Team | Embinsys"
        description="Specialized team for chip design, bootloaders, drivers, and device enablement. Making processors and SoCs ready for production."
        canonicalPath="/teams/silicon-soc"
      />
      <Section container>
        <DomainHero
          title="Silicon & SoC"
          subtitle="Expert team enabling next-generation processors and chips. From bootloaders to drivers, we make silicon perform at its best."
          image="https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg"
          icon={<Cpu className="h-5 w-5" />}
        />
      </Section>

      {/* What We Do */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Our Silicon & SoC team specializes in chip enablement. We take brand
          new processors from manufacturers and prepare them for real-world use
          - writing the firmware, drivers, and software that unlock their full
          potential.
        </p>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Build</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            index={0}
            icon={<Zap className="h-6 w-6" />}
            title="Bootloaders"
            desc="Startup software that initializes processors and loads the operating system"
          />
          <CapabilityCard
            index={1}
            icon={<Layers className="h-6 w-6" />}
            title="Board Support Packages"
            desc="Complete software frameworks that make new boards work"
          />
          <CapabilityCard
            index={2}
            icon={<Radio className="h-6 w-6" />}
            title="Device Drivers"
            desc="Software that enables connectivity and device control"
          />
          <CapabilityCard
            index={3}
            icon={<Database className="h-6 w-6" />}
            title="Storage Management"
            desc="Firmware for memory, flash, and data handling"
          />
          <CapabilityCard
            index={4}
            icon={<Gauge className="h-6 w-6" />}
            title="Performance Optimization"
            desc="Tuning software to maximize speed and minimize power consumption"
          />
          <CapabilityCard
            index={5}
            icon={<Cpu className="h-6 w-6" />}
            title="Silicon Validation"
            desc="Testing to ensure chips work perfectly in real devices"
          />
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Real-World Examples
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ExampleCard
            title="Processor Launch Support"
            desc="When a new ARM processor launches, we help device makers adopt it by writing the necessary drivers and firmware."
          />
          <ExampleCard
            title="Performance Optimization"
            desc="Taking a new chip design and optimizing its firmware to achieve maximum speed while staying within power budgets."
          />
          <ExampleCard
            title="Wireless Integration"
            desc="Writing drivers that enable WiFi, Bluetooth, and cellular connectivity on new processors."
          />
          <ExampleCard
            title="Power Management"
            desc="Creating firmware that makes processors more battery-efficient for portable devices."
          />
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">How We Work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TechCard
            title="Processor Expertise"
            items={[
              "ARM Cortex processors",
              "x86/x64 architectures",
              "Custom SoCs",
              "Real-time processors",
              "Edge processors",
            ]}
          />
          <TechCard
            title="Key Technologies"
            items={[
              "Linux kernel",
              "Bootloader development",
              "Device tree configuration",
              "Firmware integration",
              "Performance profiling",
            ]}
          />
          <TechCard
            title="Our Process"
            items={[
              "Hardware evaluation",
              "Software integration",
              "Performance testing",
              "Validation and verification",
              "Production deployment",
            ]}
          />
        </div>
      </Section>

      {/* Team Expertise */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Our Team's Expertise
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Our silicon team has experience with every major processor
          manufacturer. They understand chip architectures, kernel optimization,
          and how to squeeze maximum performance from new silicon.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Hardware Enablement"
            items={[
              "Processor architecture",
              "Memory management",
              "Bus interfaces",
              "Peripheral integration",
            ]}
          />
          <ExpertiseBox
            title="Software Enablement"
            items={[
              "Linux kernel porting",
              "Driver development",
              "Bootloader customization",
              "System optimization",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Enable New Silicon?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our Silicon & SoC team is ready to help you bring new processors to
            market quickly and efficiently.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Start Your Project</Link>
          </Button>
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

function ExampleCard({ title, desc }: { title: string; desc: string }) {
  return (
    <AnimatedCard variant="hover-lift">
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
    </AnimatedCard>
  );
}

function TechCard({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="default">
      <h3 className="font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

function ExpertiseBox({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
