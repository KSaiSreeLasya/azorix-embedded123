import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Stethoscope,
  Heart,
  Shield,
  Zap,
  TestTube,
  BarChart3,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function MedicalDevices() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Medical Devices Team | Embinsys"
        description="Specialized team for medical device development. FDA-compliant devices for monitoring, diagnostics, and treatment with focus on patient safety."
        canonicalPath="/teams/medical-devices"
      />
      <Section container>
        <DomainHero
          title="Medical Devices"
          subtitle="Expert team creating healthcare devices that save lives. From patient monitors to diagnostic equipment, all built to the highest safety standards."
          image="https://images.pexels.com/photos/7108177/pexels-photo-7108177.jpeg"
          icon={<Stethoscope className="h-5 w-5" />}
        />
      </Section>

      {/* What We Do */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Our Medical Devices team specializes in healthcare technology. We
          build devices that doctors trust and patients rely on. Every device
          meets strict FDA safety requirements and is designed with the
          patient's wellbeing as our top priority.
        </p>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Build</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            index={0}
            icon={<Heart className="h-6 w-6" />}
            title="Monitoring Devices"
            desc="Equipment that watches vital signs and alerts doctors to problems"
          />
          <CapabilityCard
            index={1}
            icon={<TestTube className="h-6 w-6" />}
            title="Diagnostic Tools"
            desc="Devices that help doctors understand what's wrong with patients"
          />
          <CapabilityCard
            index={2}
            icon={<Zap className="h-6 w-6" />}
            title="Treatment Equipment"
            desc="Devices that deliver therapy and help patients heal"
          />
          <CapabilityCard
            index={3}
            icon={<BarChart3 className="h-6 w-6" />}
            title="Data Collection"
            desc="Sensors that gather accurate health information"
          />
          <CapabilityCard
            index={4}
            icon={<Shield className="h-6 w-6" />}
            title="Patient Safety"
            desc="Built-in protections to keep patients safe and secure"
          />
          <CapabilityCard
            index={5}
            icon={<Stethoscope className="h-6 w-6" />}
            title="Clinical Integration"
            desc="Devices that work seamlessly with hospital systems"
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
            title="Heart Monitors"
            desc="Devices that watch your heart rhythm and alert doctors if something's wrong. Can be worn on your wrist or chest."
          />
          <ExampleCard
            title="Blood Pressure Monitors"
            desc="Quick, accurate devices for home or clinical use. Data automatically syncs to your doctor's office."
          />
          <ExampleCard
            title="Glucose Meters"
            desc="Small devices for diabetic patients to check blood sugar levels throughout the day."
          />
          <ExampleCard
            title="Diagnostic Scanners"
            desc="Portable ultrasound or imaging devices that doctors use to diagnose conditions quickly."
          />
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          How We Ensure Quality
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TechCard
            title="Safety & Compliance"
            items={[
              "FDA approval process",
              "CE mark certification",
              "Quality testing",
              "Risk management",
              "Documentation",
            ]}
          />
          <TechCard
            title="Key Technologies"
            items={[
              "Accurate sensors",
              "Wireless connectivity",
              "Secure data handling",
              "Real-time monitoring",
              "Cloud integration",
            ]}
          />
          <TechCard
            title="Our Process"
            items={[
              "Regulatory expertise",
              "Rigorous testing",
              "User research",
              "Quality assurance",
              "Post-market support",
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
          Our team includes engineers who have worked on life-saving devices.
          They understand medical requirements, safety standards, and what it
          takes to get a device approved by regulatory bodies.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Medical Hardware Experts"
            items={[
              "Sensor technology",
              "Biomedical circuits",
              "Safety systems",
              "Sterilization compatibility",
            ]}
          />
          <ExpertiseBox
            title="Medical Software Experts"
            items={[
              "FDA-compliant software",
              "Patient data protection",
              "Real-time monitoring",
              "Clinical integrations",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Save Lives?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our Medical Devices team is ready to help you bring your healthcare
            innovation to market safely and efficiently.
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
