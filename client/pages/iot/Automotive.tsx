import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Car,
  Navigation,
  Shield,
  Wifi,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AutomotiveIoT() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Automotive IoT | Embinsys"
        description="Connected vehicles with smart navigation, safety features, remote control, and telematics for modern driving."
        canonicalPath="/iot/automotive"
      />
      <Section container>
        <DomainHero
          title="Automotive IoT"
          subtitle="Cars that are smarter and safer - connected and aware of their surroundings, with navigation, safety, and remote capabilities."
          image="https://images.pexels.com/photos/3862619/pexels-photo-3862619.jpeg"
          icon={<Car className="h-5 w-5" />}
        />
      </Section>

      {/* Overview */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Connected Vehicles</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Modern vehicles are connected computers on wheels. They communicate
          with infrastructure, cloud services, and other cars. This enables
          safety features, smart navigation, predictive maintenance, and
          features that make driving better, safer, and more convenient.
        </p>
      </Section>

      {/* Key Applications */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Connected Car Features
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ApplicationCard
            index={0}
            icon={<Navigation className="h-6 w-6" />}
            title="Smart Navigation"
            desc="Real-time maps, traffic information, and route optimization based on current conditions"
          />
          <ApplicationCard
            index={1}
            icon={<Shield className="h-6 w-6" />}
            title="Safety Features"
            desc="Collision avoidance, lane keeping assistance, blind spot detection, and emergency braking"
          />
          <ApplicationCard
            index={2}
            icon={<Wifi className="h-6 w-6" />}
            title="Connectivity"
            desc="WiFi, cellular connectivity for cloud services, and communication with infrastructure"
          />
          <ApplicationCard
            index={3}
            icon={<Car className="h-6 w-6" />}
            title="Remote Control"
            desc="Lock/unlock, start engine, climate control, and locate your vehicle from your phone"
          />
          <ApplicationCard
            index={4}
            icon={<AlertTriangle className="h-6 w-6" />}
            title="Predictive Maintenance"
            desc="Sensors monitor vehicle health and alert you before problems develop"
          />
          <ApplicationCard
            index={5}
            icon={<CheckCircle2 className="h-6 w-6" />}
            title="Diagnostics"
            desc="Detailed vehicle diagnostics and health monitoring"
          />
        </div>
      </Section>

      {/* Technology Stack */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Technology Stack</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <TechBox
            title="In-Vehicle Systems"
            items={[
              "Vehicle infotainment systems",
              "Telematics control units",
              "Engine control modules",
              "Real-time sensors",
              "Over-the-air update capability",
            ]}
          />
          <TechBox
            title="Connectivity & Cloud"
            items={[
              "4G/5G connectivity",
              "Cloud service integration",
              "Vehicle-to-cloud communication",
              "Real-time data streaming",
              "Secure authentication",
            ]}
          />
          <TechBox
            title="Safety & Security"
            items={[
              "Safety system integration",
              "Cybersecurity protocols",
              "Encrypted communication",
              "Autonomous safety features",
              "Compliance with safety standards",
            ]}
          />
          <TechBox
            title="User Experience"
            items={[
              "Mobile apps for drivers",
              "Smartphone integration",
              "Voice commands",
              "Gesture control",
              "Personalized settings",
            ]}
          />
        </div>
      </Section>

      {/* Use Cases */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Real-World Uses</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <UseCaseCard
            title="Fleet Management"
            desc="Companies can track vehicle locations, monitor driver behavior, and optimize routes for efficiency"
          />
          <UseCaseCard
            title="Insurance"
            desc="Insurance companies use telematics data to offer personalized rates based on actual driving"
          />
          <UseCaseCard
            title="Emergency Services"
            desc="Police and ambulances get real-time traffic data and optimized routing for faster response"
          />
          <UseCaseCard
            title="Urban Mobility"
            desc="Vehicles share data with city infrastructure for intelligent traffic management"
          />
        </div>
      </Section>

      {/* Standards & Compliance */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Standards & Compliance
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Automotive IoT must meet strict international standards for safety,
          security, and reliability. We design systems that comply with all
          relevant automotive standards.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ComplianceBox
            title="Safety Standards"
            items={[
              "ISO 26262 functional safety",
              "Automotive safety integrity levels",
              "Vehicle electronics standards",
              "Crash testing requirements",
              "Stability and handling standards",
            ]}
          />
          <ComplianceBox
            title="Security & Communication"
            items={[
              "Cybersecurity standards (ISO 27001)",
              "Communication protocols (MQTT, CAN)",
              "Over-the-air update security",
              "Data privacy regulations",
              "Secure boot mechanisms",
            ]}
          />
        </div>
      </Section>

      {/* Our Expertise */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Expertise</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          We've built connected vehicle systems for automotive OEMs and
          suppliers. We understand vehicle networks, embedded systems, wireless
          connectivity, and the unique demands of automotive development.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Hardware & Integration"
            items={[
              "Telematics module design",
              "Sensor integration",
              "Vehicle network integration (CAN, LIN)",
              "Power management for vehicles",
              "Environmental compliance",
            ]}
          />
          <ExpertiseBox
            title="Software & Services"
            items={[
              "Embedded firmware",
              "Vehicle control algorithms",
              "Cloud service integration",
              "Mobile app development",
              "Over-the-air updates",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Connected Vehicles?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your automotive IoT project and how we can help you
            create smarter, safer vehicles.
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

function TechBox({ title, items }: { title: string; items: string[] }) {
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

function UseCaseCard({ title, desc }: { title: string; desc: string }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
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
