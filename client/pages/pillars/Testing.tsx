import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  CheckCircle,
  Zap,
  BarChart3,
  Shield,
  Wrench,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Testing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Testing & QA Pillar | Embinsys"
        description="Comprehensive testing and quality assurance. Automated testing, stability testing, compliance verification, and CI/CD pipelines."
        canonicalPath="/pillars/testing"
      />
      <Section container>
        <DomainHero
          title="Testing & Quality"
          subtitle="We make sure everything works perfectly. From automated testing to reliability validation, our QA ensures devices are production-ready."
          image="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg"
          icon={<CheckCircle className="h-5 w-5" />}
        />
      </Section>

      {/* What We Do */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Testing is crucial. We don't just check if things work - we verify
          they work perfectly under all conditions. We run automated tests,
          stress test devices, check for compliance, and ensure reliability
          before devices reach customers.
        </p>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            index={0}
            icon={<Zap className="h-6 w-6" />}
            title="Automated Testing"
            desc="Tests that run automatically to catch problems early and often"
          />
          <CapabilityCard
            index={1}
            icon={<BarChart3 className="h-6 w-6" />}
            title="Stress Testing"
            desc="Pushing devices to their limits to find weaknesses"
          />
          <CapabilityCard
            index={2}
            icon={<Shield className="h-6 w-6" />}
            title="Compliance Verification"
            desc="Ensuring devices meet all required standards and regulations"
          />
          <CapabilityCard
            index={3}
            icon={<Target className="h-6 w-6" />}
            title="Functional Testing"
            desc="Verifying every feature works as designed"
          />
          <CapabilityCard
            index={4}
            icon={<Wrench className="h-6 w-6" />}
            title="CI/CD Pipelines"
            desc="Automated systems that test code as it's developed"
          />
          <CapabilityCard
            index={5}
            icon={<CheckCircle2 className="h-6 w-6" />}
            title="Performance Validation"
            desc="Measuring speed, power usage, and resource consumption"
          />
        </div>
      </Section>

      {/* Testing Levels */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">How We Test</h2>
        <div className="grid gap-6 md:grid-cols-4">
          <TestLevel
            level="Unit Tests"
            desc="Testing individual pieces of code in isolation"
          />
          <TestLevel
            level="Integration Tests"
            desc="Testing how components work together"
          />
          <TestLevel
            level="System Tests"
            desc="Testing the complete device as a whole"
          />
          <TestLevel
            level="Acceptance Tests"
            desc="Testing that device meets all requirements"
          />
        </div>
      </Section>

      {/* Testing Approach */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Our Testing Philosophy
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ApproachBox
            title="Comprehensive Coverage"
            items={[
              "Test normal operation",
              "Test edge cases and errors",
              "Test under stress conditions",
              "Test long-term reliability",
            ]}
          />
          <ApproachBox
            title="Continuous Improvement"
            items={[
              "Automated testing with every change",
              "Quick feedback to developers",
              "Early problem detection",
              "Continuous quality monitoring",
            ]}
          />
        </div>
      </Section>

      {/* Tools & Lab */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Testing Equipment & Tools
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <ToolCard
            title="Hardware Lab"
            items={[
              "Oscilloscopes for signal testing",
              "Logic analyzers for digital signals",
              "Power meters for efficiency measurement",
              "Environmental chambers for temperature testing",
            ]}
          />
          <ToolCard
            title="Software Tools"
            items={[
              "Automated test frameworks",
              "Code coverage analysis",
              "Performance profilers",
              "Debuggers and analyzers",
            ]}
          />
          <ToolCard
            title="Simulation & Emulation"
            items={[
              "Hardware-in-the-loop testing",
              "Software-in-the-loop simulation",
              "Virtual environments",
              "Protocol simulators",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert QA & Testing?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our testing experts ensure your devices are reliable, compliant, and
            perform flawlessly.
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

function TestLevel({ level, desc }: { level: string; desc: string }) {
  return (
    <AnimatedCard variant="default">
      <div className="text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary font-bold mb-4">
          ✓
        </div>
        <h3 className="font-semibold mb-2">{level}</h3>
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

function ToolCard({ title, items }: { title: string; items: string[] }) {
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
