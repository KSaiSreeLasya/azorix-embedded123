import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Globe,
  Traffic,
  Lightbulb,
  Droplets,
  Shield,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function SmartCity() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Smart City IoT | Embinsys"
        description="Smart city solutions for traffic management, energy saving, public safety, and efficient urban infrastructure."
        canonicalPath="/iot/smart-city"
      />
      <Section container>
        <DomainHero
          title="Smart City"
          subtitle="Cities that work efficiently - traffic flows better, utilities use less energy, and public services respond faster."
          image="https://images.pexels.com/photos/3992220/pexels-photo-3992220.jpeg"
          icon={<Globe className="h-5 w-5" />}
        />
      </Section>

      {/* Overview */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Intelligent Urban Infrastructure
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Smart cities use connected devices and data analytics to make urban
          living better. Traffic lights that adapt to flow, streetlights that
          dim when not needed, water systems that detect leaks, and emergency
          services that respond faster. Cities become more efficient, cleaner,
          and safer.
        </p>
      </Section>

      {/* Key Applications */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Urban Applications
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ApplicationCard
            index={0}
            icon={<Traffic className="h-6 w-6" />}
            title="Traffic Management"
            desc="Smart traffic lights that optimize flow, reduce congestion, and improve commute times"
          />
          <ApplicationCard
            index={1}
            icon={<Lightbulb className="h-6 w-6" />}
            title="Smart Lighting"
            desc="Streetlights that adjust brightness based on traffic and time of day, saving energy"
          />
          <ApplicationCard
            index={2}
            icon={<Droplets className="h-6 w-6" />}
            title="Water & Utilities"
            desc="Real-time monitoring detects water leaks, gas leaks, and optimizes consumption"
          />
          <ApplicationCard
            index={3}
            icon={<Shield className="h-6 w-6" />}
            title="Public Safety"
            desc="Connected cameras and sensors help police respond faster and prevent crime"
          />
          <ApplicationCard
            index={4}
            icon={<Globe className="h-6 w-6" />}
            title="Air Quality"
            desc="Sensor networks monitor pollution and provide real-time air quality information"
          />
          <ApplicationCard
            index={5}
            icon={<CheckCircle2 className="h-6 w-6" />}
            title="Parking Systems"
            desc="Smart parking guidance helps drivers find available spots, reducing time searching"
          />
        </div>
      </Section>

      {/* Benefits */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Benefits for Cities
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <BenefitCard
            title="Efficiency"
            desc="Reduce resource waste, optimize service delivery, and cut operational costs"
          />
          <BenefitCard
            title="Sustainability"
            desc="Lower energy consumption, reduce pollution, and protect the environment"
          />
          <BenefitCard
            title="Safety"
            desc="Faster emergency response, better crime prevention, and improved public safety"
          />
          <BenefitCard
            title="Quality of Life"
            desc="Better traffic flow, cleaner air, more reliable utilities, and better services"
          />
          <BenefitCard
            title="Economic Growth"
            desc="Attract businesses and talent with modern infrastructure and smart services"
          />
          <BenefitCard
            title="Data Insights"
            desc="Real-time city data enables better planning and decision-making"
          />
        </div>
      </Section>

      {/* Infrastructure */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Smart City Infrastructure
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <InfraBox
            title="Sensors & Connectivity"
            items={[
              "Traffic sensors and cameras",
              "Environmental sensors (air, water, noise)",
              "Smart meters and monitors",
              "Street furniture IoT devices",
              "5G and mesh networks",
            ]}
          />
          <InfraBox
            title="Control & Analytics"
            items={[
              "Central management systems",
              "Real-time dashboards",
              "Traffic signal control",
              "Utility management systems",
              "Emergency response systems",
            ]}
          />
          <InfraBox
            title="Data & Services"
            items={[
              "Cloud data platforms",
              "Mobile apps for citizens",
              "Data sharing and APIs",
              "Citizen notification systems",
              "Service request platforms",
            ]}
          />
          <InfraBox
            title="Security & Resilience"
            items={[
              "Cybersecurity measures",
              "Backup systems",
              "Failover mechanisms",
              "Emergency protocols",
              "Privacy protection",
            ]}
          />
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Real-World Examples
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <UseCaseCard
            title="Traffic Optimization"
            desc="A city reduced average commute times by 15% by implementing smart traffic signal coordination across major intersections"
          />
          <UseCaseCard
            title="Energy Savings"
            desc="Smart street lighting reduced electricity costs by 40% while improving visibility and safety"
          />
          <UseCaseCard
            title="Water Conservation"
            desc="Leak detection systems found and fixed problems quickly, saving millions of gallons of water annually"
          />
          <UseCaseCard
            title="Emergency Response"
            desc="Connected systems enabled emergency vehicles to respond 30% faster by optimizing routing"
          />
        </div>
      </Section>

      {/* Our Expertise */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Expertise</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          We design and implement smart city infrastructure. We understand sensor
          networks, wireless connectivity, data integration, and the challenges
          of managing large-scale IoT deployments across urban areas.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Hardware & Deployment"
            items={[
              "Weatherproof sensor design",
              "Wireless network setup",
              "Installation and integration",
              "Long-term reliability",
              "Maintenance planning",
            ]}
          />
          <ExpertiseBox
            title="Software & Management"
            items={[
              "Central monitoring systems",
              "Real-time data processing",
              "Analytics and reporting",
              "Mobile and web apps",
              "System integration",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build a Smarter City?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your smart city vision and how we can help implement
            it.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get Started</Link>
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

function BenefitCard({ title, desc }: { title: string; desc: string }) {
  return (
    <AnimatedCard variant="hover-lift">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </AnimatedCard>
  );
}

function InfraBox({ title, items }: { title: string; items: string[] }) {
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
      <h3 className="font-semibold text-lg mb-2">{title}</h3>
      <p className="text-muted-foreground">{desc}</p>
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
