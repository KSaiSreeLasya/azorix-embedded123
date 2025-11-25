import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Wrench, Zap, BarChart3, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";

export default function Testing() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Embedded Testing, QA & Automation | Embinsys"
        description="Automated test frameworks, stability testing, verification, and CI/CD pipelines for embedded systems and firmware."
        canonicalPath="/domains/testing"
      />
      <Section container>
        <DomainHero
          title="Testing & QA"
          subtitle="Comprehensive testing strategies: automated frameworks, stability testing, verification, and CI/CD for embedded products."
          image="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg"
          icon={<Wrench className="h-5 w-5" />}
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
            title="Test Automation"
            desc="Harnesses, simulators, automated test execution"
          />
          <CapabilityCard
            index={1}
            icon={<BarChart3 className="h-6 w-6" />}
            title="Stability Testing"
            desc="Long-run testing, stress testing, crash diagnostics"
          />
          <CapabilityCard
            index={2}
            icon={<Shield className="h-6 w-6" />}
            title="Verification"
            desc="Requirements traceability, compliance verification"
          />
          <CapabilityCard
            index={3}
            icon={<Wrench className="h-6 w-6" />}
            title="CI/CD Pipelines"
            desc="Build automation, continuous integration and deployment"
          />
        </div>
      </Section>

      {/* Test Framework */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Test Framework</h2>
        <p className="text-muted-foreground mb-8">
          Comprehensive testing across all levels of embedded systems.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card index={0} title="Unit & Component Testing">
            <ul className="space-y-2">
              {[
                "Module-level testing",
                "Driver validation",
                "Protocol stack testing",
                "Code coverage analysis",
                "Memory and resource testing",
                "Performance profiling",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card index={1} title="Integration & System Testing">
            <ul className="space-y-2">
              {[
                "System-level integration",
                "Hardware-in-the-loop (HIL)",
                "Software-in-the-loop (SIL)",
                "End-to-end functional testing",
                "API and interface validation",
                "Cross-platform compatibility",
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

      {/* Testing Types */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Testing Types</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <TestTypeCard
            index={0}
            title="Functional Testing"
            desc="Verify all features work as specified against requirements"
          />
          <TestTypeCard
            index={1}
            title="Black-Box Testing"
            desc="Test system behavior without internal implementation knowledge"
          />
          <TestTypeCard
            index={2}
            title="Stability Testing"
            desc="Long-run tests, stress testing, reliability under load"
          />
          <TestTypeCard
            index={3}
            title="Verification Testing"
            desc="Confirm compliance with specifications and standards"
          />
          <TestTypeCard
            index={4}
            title="Regression Testing"
            desc="Ensure changes don't break existing functionality"
          />
          <TestTypeCard
            index={5}
            title="Performance Testing"
            desc="Measure throughput, latency, resource utilization"
          />
        </div>
      </Section>

      {/* Test Automation */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Automation & CI/CD
        </h2>
        <p className="text-muted-foreground mb-8">
          Automated testing and continuous deployment pipelines.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <AutomationCard
            index={0}
            title="Test Harnesses"
            items={[
              "Custom test harness development",
              "Mock object creation",
              "Test data generation",
              "Automated test execution",
              "Result reporting and analysis",
            ]}
          />
          <AutomationCard
            index={1}
            title="Build & Integration"
            items={[
              "Automated build systems",
              "Continuous integration (CI)",
              "Unit test automation",
              "Build artifact management",
              "Release automation",
            ]}
          />
          <AutomationCard
            index={2}
            title="Deployment & Monitoring"
            items={[
              "Continuous deployment (CD)",
              "OTA firmware updates",
              "Test environment management",
              "Performance monitoring",
              "Issue tracking and reporting",
            ]}
          />
        </div>
      </Section>

      {/* Specialized Testing */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Specialized Testing Services
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SpecializedCard
            index={0}
            title="Embedded Systems Testing"
            items={[
              "Firmware and bootloader testing",
              "Driver validation",
              "RTOS interaction testing",
              "Memory leak detection",
              "Real-time behavior analysis",
            ]}
          />
          <SpecializedCard
            index={1}
            title="Device-Specific Testing"
            items={[
              "IoT device validation",
              "Medical device compliance",
              "Automotive ECU testing",
              "Connectivity testing (BLE, WiFi)",
              "Power consumption analysis",
            ]}
          />
        </div>
      </Section>

      {/* Tools & Lab */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Testing Infrastructure
        </h2>
        <p className="text-muted-foreground mb-8">
          In-house lab with comprehensive testing equipment.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ToolCard
            index={0}
            title="Hardware Lab"
            items={[
              "Oscilloscopes",
              "Logic analyzers",
              "Power analyzers",
              "Environmental chambers",
            ]}
          />
          <ToolCard
            index={1}
            title="Software Tools"
            items={[
              "Debuggers (JTAG, SWD)",
              "Profilers",
              "Code analyzers",
              "Test frameworks",
            ]}
          />
          <ToolCard
            index={2}
            title="Platforms"
            items={[
              "Development boards",
              "Custom test rigs",
              "HIL simulators",
              "Protocol analyzers",
            ]}
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

function TestTypeCard({
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

function AutomationCard({
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

function SpecializedCard({
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

function ToolCard({
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
