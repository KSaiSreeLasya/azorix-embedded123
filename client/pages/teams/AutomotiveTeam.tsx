import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Car, Zap, Shield, Radio, Gauge, Navigation } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function AutomotiveTeam() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Automotive Team | Embinsys"
        description="Specialized team for automotive embedded systems. Vehicle networks, safety systems, telematics, and autonomous driving technologies."
        canonicalPath="/teams/automotive"
      />
      <Section container>
        <DomainHero
          title="Automotive"
          subtitle="Expert team making cars smarter and safer. From engine control to autonomous driving, we build the intelligence that powers modern vehicles."
          image="https://images.pexels.com/photos/18968756/pexels-photo-18968756.jpeg"
          icon={<Car className="h-5 w-5" />}
        />
      </Section>

      {/* What We Do */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Our Automotive team specializes in vehicle electronics and software.
          We design the systems that control engines, manage safety, enable
          navigation, and make vehicles connected and intelligent.
        </p>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Build</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            index={0}
            icon={<Zap className="h-6 w-6" />}
            title="Engine Control"
            desc="Systems that optimize engine performance, fuel efficiency, and emissions"
          />
          <CapabilityCard
            index={1}
            icon={<Shield className="h-6 w-6" />}
            title="Safety Systems"
            desc="Technology to prevent accidents and protect passengers"
          />
          <CapabilityCard
            index={2}
            icon={<Navigation className="h-6 w-6" />}
            title="Connected Services"
            desc="Navigation, remote control, and in-vehicle entertainment"
          />
          <CapabilityCard
            index={3}
            icon={<Gauge className="h-6 w-6" />}
            title="Diagnostics"
            desc="Systems that monitor vehicle health and alert drivers to issues"
          />
          <CapabilityCard
            index={4}
            icon={<Radio className="h-6 w-6" />}
            title="Vehicle Networks"
            desc="Communication systems that connect all vehicle components"
          />
          <CapabilityCard
            index={5}
            icon={<Car className="h-6 w-6" />}
            title="Autonomous Features"
            desc="Self-driving and advanced driver assistance technologies"
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
            title="Smart Engine Management"
            desc="Systems that automatically adjust engine settings for best performance and fuel efficiency based on driving conditions."
          />
          <ExampleCard
            title="Collision Avoidance"
            desc="Safety systems that warn drivers or automatically apply brakes to prevent crashes."
          />
          <ExampleCard
            title="Smart Infotainment"
            desc="In-vehicle systems for navigation, music, phone calls, and vehicle controls. Voice-activated for safety."
          />
          <ExampleCard
            title="Remote Diagnostics"
            desc="Systems that automatically report problems to service centers before the driver even notices them."
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
            title="Safety & Standards"
            items={[
              "ISO 26262 compliance",
              "Functional safety",
              "Rigorous testing",
              "Quality certification",
              "Regulatory approval",
            ]}
          />
          <TechCard
            title="Key Technologies"
            items={[
              "CAN bus communication",
              "Real-time processing",
              "High reliability",
              "Vehicle sensors",
              "Connectivity systems",
            ]}
          />
          <TechCard
            title="Our Expertise"
            items={[
              "Automotive architecture",
              "Embedded systems",
              "Safety protocols",
              "Performance optimization",
              "Integration testing",
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
          Our automotive engineers have experience with major car manufacturers.
          They understand vehicle architecture, safety requirements, and the
          precision needed for mission-critical systems.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Automotive Hardware Experts"
            items={[
              "ECU design",
              "Signal processing",
              "Power management",
              "Reliability engineering",
            ]}
          />
          <ExpertiseBox
            title="Automotive Software Experts"
            items={[
              "Real-time control software",
              "Vehicle communication protocols",
              "Safety-critical systems",
              "Integration testing",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Smarter Vehicles?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our Automotive team is ready to help you create the next generation
            of intelligent, safe, and connected vehicles.
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
