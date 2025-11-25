import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Code, Cpu, Zap, Cloud, Radio, Lock } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Software() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Software Development Pillar | Embinsys"
        description="Firmware and software development from bootloaders to cloud integration. Making devices smart, fast, and connected."
        canonicalPath="/pillars/software"
      />
      <Section container>
        <DomainHero
          title="Software Development"
          subtitle="We write the code that makes devices smart. From low-level firmware to cloud connectivity, we create software that's fast, reliable, and secure."
          image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
          icon={<Code className="h-5 w-5" />}
        />
      </Section>

      {/* What We Do */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Software is the intelligence inside devices. We write firmware that
          controls hardware, operating systems that make things run smoothly,
          and applications that users interact with. Our software is optimized
          for speed, efficiency, and reliability.
        </p>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            index={0}
            icon={<Cpu className="h-6 w-6" />}
            title="Firmware"
            desc="Low-level code that directly controls device hardware"
          />
          <CapabilityCard
            index={1}
            icon={<Code className="h-6 w-6" />}
            title="Device Applications"
            desc="Software that runs on embedded systems and handles real-time control"
          />
          <CapabilityCard
            index={2}
            icon={<Radio className="h-6 w-6" />}
            title="Connectivity"
            desc="Building wireless and network communications into devices"
          />
          <CapabilityCard
            index={3}
            icon={<Cloud className="h-6 w-6" />}
            title="Cloud Integration"
            desc="Connecting devices to cloud services for data and remote control"
          />
          <CapabilityCard
            index={4}
            icon={<Lock className="h-6 w-6" />}
            title="Security"
            desc="Protecting device data and preventing unauthorized access"
          />
          <CapabilityCard
            index={5}
            icon={<Zap className="h-6 w-6" />}
            title="Performance"
            desc="Optimizing software for speed and power efficiency"
          />
        </div>
      </Section>

      {/* Software Layers */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Software Architecture
        </h2>
        <div className="grid gap-6 md:grid-cols-4">
          <LayerBox
            layer="Applications"
            desc="User-facing software and services"
          />
          <LayerBox
            layer="Middleware"
            desc="Services connecting apps to hardware"
          />
          <LayerBox
            layer="OS & Drivers"
            desc="Operating system and device control"
          />
          <LayerBox
            layer="Firmware"
            desc="Closest to hardware, controls everything"
          />
        </div>
      </Section>

      {/* Development Approach */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          How We Develop Software
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ApproachBox
            title="Quality & Reliability"
            items={[
              "Automated testing at every step",
              "Code review and verification",
              "Real-time testing and validation",
              "Continuous integration pipelines",
            ]}
          />
          <ApproachBox
            title="Performance & Efficiency"
            items={[
              "Optimized for low power consumption",
              "Fast response times",
              "Minimal memory footprint",
              "Multi-threading and parallel processing",
            ]}
          />
        </div>
      </Section>

      {/* Technologies */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Technology Stack
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TechCard
            title="Languages & Tools"
            items={[
              "C and C++ for firmware",
              "Assembly for optimization",
              "Python for tools and scripting",
              "Rust for safety-critical code",
            ]}
          />
          <TechCard
            title="Operating Systems"
            items={[
              "Linux and Linux variants",
              "Real-time operating systems (RTOS)",
              "Custom bare-metal systems",
              "Embedded databases",
            ]}
          />
          <TechCard
            title="Connectivity"
            items={[
              "WiFi and Bluetooth protocols",
              "Cellular and 5G connectivity",
              "MQTT and cloud protocols",
              "Custom networking solutions",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Expert Software Development?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our software engineers are ready to create intelligent, efficient,
            and secure device software.
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

function LayerBox({ layer, desc }: { layer: string; desc: string }) {
  return (
    <AnimatedCard variant="default">
      <div className="text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary font-bold mb-4">
          📦
        </div>
        <h3 className="font-semibold mb-2">{layer}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </AnimatedCard>
  );
}

function ApproachBox({ title, items }: { title: string; items: string[] }) {
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
