import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Cpu, Zap, Layout, Wrench, TestTube, Settings } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Product Design Pillar | Embinsys"
        description="Hardware design expertise spanning schematics, PCB layout, component selection, bring-up, and manufacturing support."
        canonicalPath="/pillars/product"
      />
      <Section container>
        <DomainHero
          title="Product Design"
          subtitle="We design the physical hardware - from circuits and PCBs to components and manufacturing. Building devices that work reliably in the real world."
          image="https://images.pexels.com/photos/6755088/pexels-photo-6755088.jpeg"
          icon={<Cpu className="h-5 w-5" />}
        />
      </Section>

      {/* What We Do */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Product design is the foundation of every hardware project. We design
          circuits, layout circuit boards, select components, and prepare for
          manufacturing. Our goal: devices that work every time, under all
          conditions.
        </p>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            index={0}
            icon={<Layout className="h-6 w-6" />}
            title="Circuit Design"
            desc="Creating the electrical schematics and designs that power devices"
          />
          <CapabilityCard
            index={1}
            icon={<Zap className="h-6 w-6" />}
            title="PCB Layout"
            desc="Designing circuit boards for optimal performance and reliability"
          />
          <CapabilityCard
            index={2}
            icon={<Wrench className="h-6 w-6" />}
            title="Component Selection"
            desc="Choosing the right parts for performance, cost, and availability"
          />
          <CapabilityCard
            index={3}
            icon={<TestTube className="h-6 w-6" />}
            title="Prototyping"
            desc="Building and testing working prototypes of your designs"
          />
          <CapabilityCard
            index={4}
            icon={<Settings className="h-6 w-6" />}
            title="Manufacturing Support"
            desc="Preparing designs for mass production and coordinating manufacturing"
          />
          <CapabilityCard
            index={5}
            icon={<Cpu className="h-6 w-6" />}
            title="Board Bring-Up"
            desc="Getting new hardware boards working correctly in the first place"
          />
        </div>
      </Section>

      {/* Process */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Our Design Process
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          <ProcessStep
            step="1"
            title="Requirements"
            desc="Understanding what the device needs to do"
          />
          <ProcessStep
            step="2"
            title="Design"
            desc="Creating schematics and selecting components"
          />
          <ProcessStep
            step="3"
            title="Prototype"
            desc="Building and testing physical boards"
          />
          <ProcessStep
            step="4"
            title="Production"
            desc="Preparing for manufacturing at scale"
          />
        </div>
      </Section>

      {/* Key Focus */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What Makes Us Different
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <FocusBox
            title="Reliability First"
            items={[
              "Devices that work under stress",
              "Extensive testing and validation",
              "Temperature and humidity testing",
              "Long-term stability verification",
            ]}
          />
          <FocusBox
            title="Manufacturing Smart"
            items={[
              "Design for manufacturability",
              "Cost optimization without compromising quality",
              "Supply chain management",
              "Quality assurance testing",
            ]}
          />
        </div>
      </Section>

      {/* Technologies */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Tools & Technologies
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TechCard
            title="Design Tools"
            items={[
              "Professional schematic capture",
              "Multi-layer PCB design",
              "Signal integrity analysis",
              "3D visualization",
              "Design simulation",
            ]}
          />
          <TechCard
            title="Testing Equipment"
            items={[
              "Oscilloscopes",
              "Logic analyzers",
              "Power analysis tools",
              "Thermal cameras",
              "Environmental chambers",
            ]}
          />
          <TechCard
            title="Manufacturing Partners"
            items={[
              "Trusted PCB manufacturers",
              "Component suppliers",
              "Assembly partners",
              "Quality test labs",
              "Logistics providers",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Hardware Design?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our product design experts are ready to help you create reliable,
            manufacturable hardware.
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

function ProcessStep({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="default">
      <div className="text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary font-bold mb-4">
          {step}
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </AnimatedCard>
  );
}

function FocusBox({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>
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
