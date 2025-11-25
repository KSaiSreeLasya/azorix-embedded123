import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Factory,
  Zap,
  TrendingUp,
  AlertCircle,
  Wifi,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function IndustrialIoT() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Industrial IoT | Embinsys"
        description="Smart factory solutions with predictive maintenance, production optimization, and equipment monitoring for Industry 4.0."
        canonicalPath="/iot/industrial"
      />
      <Section container>
        <DomainHero
          title="Industrial IoT"
          subtitle="Factories that monitor themselves - machines that predict problems before they happen, optimizing production in real-time."
          image="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg"
          icon={<Factory className="h-5 w-5" />}
        />
      </Section>

      {/* Overview */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Smart Manufacturing
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Industrial IoT transforms factories into intelligent systems. Machines
          talk to each other and to the cloud, predicting failures before they
          happen, optimizing production schedules, and reducing downtime. This
          is Industry 4.0 - the fourth industrial revolution.
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
            icon={<AlertCircle className="h-6 w-6" />}
            title="Predictive Maintenance"
            desc="Sensors detect when equipment is about to fail, so maintenance happens before costly breakdowns"
          />
          <ApplicationCard
            index={1}
            icon={<TrendingUp className="h-6 w-6" />}
            title="Production Optimization"
            desc="Real-time data helps optimize production schedules, reducing waste and increasing efficiency"
          />
          <ApplicationCard
            index={2}
            icon={<Factory className="h-6 w-6" />}
            title="Equipment Monitoring"
            desc="Continuous monitoring of machinery performance, temperature, vibration, and power consumption"
          />
          <ApplicationCard
            index={3}
            icon={<Wifi className="h-6 w-6" />}
            title="Supply Chain Integration"
            desc="Connect production systems with supply chain to optimize material flow"
          />
          <ApplicationCard
            index={4}
            icon={<Zap className="h-6 w-6" />}
            title="Energy Management"
            desc="Monitor and optimize energy usage across the factory floor"
          />
          <ApplicationCard
            index={5}
            icon={<CheckCircle2 className="h-6 w-6" />}
            title="Quality Assurance"
            desc="Automated quality checks and defect detection using sensors and AI"
          />
        </div>
      </Section>

      {/* Technology Solutions */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Technology Solutions
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <SolutionBox
            title="Sensor Networks"
            items={[
              "Temperature and humidity sensors",
              "Vibration and movement sensors",
              "Pressure and flow sensors",
              "Energy consumption monitors",
              "Industrial-grade connectivity",
            ]}
          />
          <SolutionBox
            title="Data & Analytics"
            items={[
              "Real-time data collection",
              "Edge computing and processing",
              "Cloud analytics and storage",
              "Machine learning models",
              "Predictive algorithms",
            ]}
          />
          <SolutionBox
            title="Integration & Control"
            items={[
              "Machine-to-machine communication",
              "MQTT and industrial protocols",
              "Cloud API integration",
              "Control system interfaces",
              "Automated alerts and responses",
            ]}
          />
          <SolutionBox
            title="Security & Reliability"
            items={[
              "Industrial security standards",
              "Data encryption",
              "System redundancy",
              "Compliance with regulations",
              "24/7 monitoring",
            ]}
          />
        </div>
      </Section>

      {/* Benefits */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Key Benefits</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <BenefitCard
            title="Increased Uptime"
            desc="Predict failures before they happen, reducing downtime and lost production"
          />
          <BenefitCard
            title="Cost Savings"
            desc="Reduce maintenance costs, energy waste, and material loss through optimization"
          />
          <BenefitCard
            title="Better Quality"
            desc="Real-time quality monitoring ensures consistent product quality"
          />
          <BenefitCard
            title="Efficiency Gains"
            desc="Optimize production schedules and resource allocation"
          />
          <BenefitCard
            title="Data Insights"
            desc="Make better decisions with real-time visibility into operations"
          />
          <BenefitCard
            title="Competitive Edge"
            desc="Modern factories operate smarter and faster than the competition"
          />
        </div>
      </Section>

      {/* Our Expertise */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Expertise</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          We've built Industrial IoT solutions for factories across the world.
          We understand industrial protocols, sensor integration, cloud
          connectivity, and the challenges of deploying in harsh manufacturing
          environments.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Hardware & Sensors"
            items={[
              "Industrial sensor selection",
              "Robust connectivity solutions",
              "Edge devices and gateways",
              "Environmental hardening",
              "Power management for 24/7 operation",
            ]}
          />
          <ExpertiseBox
            title="Software & Analytics"
            items={[
              "Real-time data processing",
              "Cloud platform integration",
              "Predictive maintenance algorithms",
              "Custom analytics dashboards",
              "Automated alert systems",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Transform Your Factory?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how Industrial IoT can optimize your operations and
            reduce costs.
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

function SolutionBox({ title, items }: { title: string; items: string[] }) {
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

function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <AnimatedCard variant="hover-lift">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
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
