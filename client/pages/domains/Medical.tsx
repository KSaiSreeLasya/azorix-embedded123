import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Stethoscope, Shield, TestTube, Zap, BarChart3 } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";

export default function Medical() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Medical Device Development | Embinsys"
        description="Regulated medical device development: firmware, sensors, connectivity, R&D support, clinical/regulatory processes, and end-to-end IoT solutions."
        canonicalPath="/domains/medical"
      />
      <Section container>
        <DomainHero
          title="Medical Devices"
          subtitle="From R&D to compliance: regulated firmware, sensor integration, connectivity and data flows for clinical, laboratory and monitoring devices."
          image="https://images.pexels.com/photos/7108177/pexels-photo-7108177.jpeg"
          icon={<Stethoscope className="h-5 w-5" />}
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
            title="Firmware Development"
            desc="Real-time firmware with sensor interfaces and signal processing"
          />
          <CapabilityCard
            index={1}
            icon={<Shield className="h-6 w-6" />}
            title="Regulatory Compliance"
            desc="FDA, CE marks, clinical documentation and validation"
          />
          <CapabilityCard
            index={2}
            icon={<TestTube className="h-6 w-6" />}
            title="Sensor Integration"
            desc="Acquisition, calibration, noise filtering, data accuracy"
          />
          <CapabilityCard
            index={3}
            icon={<Stethoscope className="h-6 w-6" />}
            title="Connectivity"
            desc="BLE, WiFi, HIPAA-aware cloud ingestion and dashboards"
          />
        </div>
      </Section>

      {/* Services & Support */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Engineering Services
        </h2>
        <p className="text-muted-foreground mb-8">
          Comprehensive support from concept through commercialization.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ServiceCard
            index={0}
            title="R&D Support"
            items={[
              "Concept feasibility studies",
              "Prototype development",
              "Technology selection",
              "Risk assessment",
            ]}
          />
          <ServiceCard
            index={1}
            title="Development"
            items={[
              "Firmware engineering",
              "Hardware design",
              "Software architecture",
              "Integration testing",
            ]}
          />
          <ServiceCard
            index={2}
            title="Compliance & Validation"
            items={[
              "Clinical/regulatory documentation",
              "Quality systems (ISO 13485)",
              "Verification & validation",
              "Traceability matrices",
            ]}
          />
        </div>
      </Section>

      {/* Medical Applications */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Device Categories
        </h2>
        <p className="text-muted-foreground mb-8">
          Expertise across diverse medical device types.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ApplicationCard
            index={0}
            title="Diagnostic Devices"
            desc="MRI/CT scanners, spectrometers, analyzers, medical imaging equipment"
            icon={<TestTube className="h-5 w-5" />}
          />
          <ApplicationCard
            index={1}
            title="Monitoring Devices"
            desc="Patient vital signs, ECG monitors, glucose meters, wearable sensors"
            icon={<BarChart3 className="h-5 w-5" />}
          />
          <ApplicationCard
            index={2}
            title="Therapeutic Devices"
            desc="Infusion pumps, electrosurgical units, ventilators, surgical instruments"
            icon={<Zap className="h-5 w-5" />}
          />
          <ApplicationCard
            index={3}
            title="Laboratory Equipment"
            desc="Flow cytometers, centrifuges, liquid handling systems, test platforms"
            icon={<Stethoscope className="h-5 w-5" />}
          />
        </div>
      </Section>

      {/* Sensors & Data */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Sensor Technologies & Data Management
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <Card index={0} title="Sensor Integration">
            <ul className="space-y-2">
              {[
                "ECG, EEG, EMG signal processing",
                "Blood pressure, temperature, oxygen sensors",
                "Pressure transducers and flow sensors",
                "Optical and infrared sensors",
                "Acceleration and motion sensors",
                "Chemical and biosensors",
              ].map((s) => (
                <li key={s} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{s}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card index={1} title="Data Security & Privacy">
            <ul className="space-y-2">
              {[
                "HIPAA compliance for patient data",
                "Encrypted data transmission",
                "Secure cloud storage (AWS, Azure)",
                "Access control and audit trails",
                "Data retention and archival",
                "Privacy-by-design principles",
              ].map((d) => (
                <li key={d} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{d}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Portfolio */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Project Portfolio
        </h2>
        <div className="grid gap-6 md:grid-cols-3 text-sm">
          <PortfolioCard
            index={0}
            title="BP Monitor"
            desc="Wireless blood pressure monitor with BLE and mobile app"
          />
          <PortfolioCard
            index={1}
            title="Smart Knee Monitor"
            desc="Wearable joint angle monitoring with haptic feedback"
          />
          <PortfolioCard
            index={2}
            title="Smart Band"
            desc="Fitness wearable with heart rate and activity tracking"
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

function ServiceCard({
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

function ApplicationCard({
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
          className="grid h-9 w-9 place-items-center rounded-lg bg-primary/15 text-primary"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {icon}
        </motion.span>
        <h3 className="font-semibold text-foreground">{title}</h3>
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

function PortfolioCard({
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
      <h4 className="font-semibold text-foreground mb-1">{title}</h4>
      <p className="text-xs text-muted-foreground">{desc}</p>
    </AnimatedCard>
  );
}
