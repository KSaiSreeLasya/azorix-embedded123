import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Heart,
  Activity,
  AlertTriangle,
  Users,
  Lock,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function MedicalIoT() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Medical IoT | Embinsys"
        description="Health monitoring devices that save lives - from wearable health monitors to remote patient diagnosis and critical alerts."
        canonicalPath="/iot/medical"
      />
      <Section container>
        <DomainHero
          title="Medical IoT"
          subtitle="Devices that care for your health - from monitoring your heart to tracking fitness and enabling remote diagnosis and care."
          image="https://images.pexels.com/photos/7974366/pexels-photo-7974366.jpeg"
          icon={<Heart className="h-5 w-5" />}
        />
      </Section>

      {/* Overview */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Connected Healthcare
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Medical IoT devices are making healthcare smarter and more accessible.
          Wearables track vital signs, smart devices alert doctors to problems,
          and connected systems enable remote patient monitoring. These devices
          can literally save lives by catching problems early.
        </p>
      </Section>

      {/* Key Applications */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Real-World Applications
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ApplicationCard
            index={0}
            icon={<Heart className="h-6 w-6" />}
            title="Health Monitoring"
            desc="Wearables that track heart rate, blood pressure, oxygen levels, sleep quality, and activity"
          />
          <ApplicationCard
            index={1}
            icon={<AlertTriangle className="h-6 w-6" />}
            title="Patient Alerts"
            desc="Smart devices that alert patients and doctors when vital signs go out of normal range"
          />
          <ApplicationCard
            index={2}
            icon={<Users className="h-6 w-6" />}
            title="Remote Monitoring"
            desc="Doctors can monitor patients from anywhere, enabling remote care and early intervention"
          />
          <ApplicationCard
            index={3}
            icon={<Activity className="h-6 w-6" />}
            title="Fitness Tracking"
            desc="Wearables that motivate users with activity tracking, goal setting, and coaching"
          />
          <ApplicationCard
            index={4}
            icon={<Lock className="h-6 w-6" />}
            title="Data Security"
            desc="Protected health information with encryption and compliance with healthcare regulations"
          />
          <ApplicationCard
            index={5}
            icon={<CheckCircle2 className="h-6 w-6" />}
            title="Diagnostics"
            desc="AI-powered analysis of health data to support medical diagnosis and treatment"
          />
        </div>
      </Section>

      {/* Types of Devices */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Types of Devices</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <DeviceBox
            title="Wearable Devices"
            items={[
              "Smartwatches and bands",
              "Chest straps and patches",
              "Ring-based monitors",
              "Continuous glucose monitors",
              "ECG monitors",
            ]}
          />
          <DeviceBox
            title="Fixed Monitoring Systems"
            items={[
              "Bedside patient monitors",
              "Hospital room systems",
              "Telehealth platforms",
              "Emergency alert buttons",
              "Connected medical instruments",
            ]}
          />
        </div>
      </Section>

      {/* Regulated & Compliant */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Regulated & Compliant
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Medical devices are heavily regulated. We understand FDA requirements,
          ISO standards, HIPAA compliance, and cybersecurity needs. Our devices
          are designed from the ground up to meet regulatory requirements.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ComplianceBox
            title="Regulatory Standards"
            items={[
              "FDA approval processes",
              "ISO 13485 quality management",
              "IEC 60601 medical safety",
              "Clinical validation",
              "Post-market surveillance",
            ]}
          />
          <ComplianceBox
            title="Data & Security"
            items={[
              "HIPAA compliance",
              "Data encryption",
              "Secure cloud storage",
              "Access controls",
              "Audit logging",
            ]}
          />
        </div>
      </Section>

      {/* Technology Stack */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Technology Solutions
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TechCard
            title="Sensors & Hardware"
            items={[
              "Medical-grade sensors",
              "Low-power processors",
              "Wireless connectivity",
              "Battery optimization",
              "Biocompatible materials",
            ]}
          />
          <TechCard
            title="Software & Apps"
            items={[
              "Mobile health apps",
              "Real-time data processing",
              "Data visualization",
              "User-friendly interfaces",
              "Cloud synchronization",
            ]}
          />
          <TechCard
            title="Integration & Analytics"
            items={[
              "EHR/EMR integration",
              "Telemedicine platforms",
              "Analytics dashboards",
              "AI and machine learning",
              "Predictive health insights",
            ]}
          />
        </div>
      </Section>

      {/* Our Expertise */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Expertise</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          We've developed Medical IoT solutions from concept to FDA approval.
          We understand sensor integration, medical data handling, regulatory
          requirements, and the importance of reliability in healthcare.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Device Development"
            items={[
              "Wearable sensor design",
              "Biomedical signal processing",
              "Power management for long wear",
              "Comfortable and safe design",
              "Durability testing",
            ]}
          />
          <ExpertiseBox
            title="Healthcare Integration"
            items={[
              "Electronic health record (EHR) APIs",
              "FHIR standards compliance",
              "Telemedicine integration",
              "Provider dashboards",
              "Patient mobile apps",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a Life-Saving Device?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your medical IoT project and how we can help you bring
            it to market safely and quickly.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </Section>

      <SiteFooter />
    </div>
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

function DeviceBox({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="default">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
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

function ComplianceBox({ title, items }: { title: string; items: string[] }) {
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
