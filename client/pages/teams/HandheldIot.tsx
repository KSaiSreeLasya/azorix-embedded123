import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Smartphone, Zap, Wifi, Cpu, Battery, Shield } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function HandheldIot() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Handheld & IoT Team | Embinsys"
        description="Specialized team for smart handheld devices and IoT solutions. Building Android devices, smartwatches, wearables, and connected smart home devices."
        canonicalPath="/teams/handheld-iot"
      />
      <Section container>
        <DomainHero
          title="Handheld & IoT"
          subtitle="Expert team building smart phones, watches, wearables, and connected home devices that people love and trust."
          image="https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg"
          icon={<Smartphone className="h-5 w-5" />}
        />
      </Section>

      {/* What We Do */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Our Handheld & IoT team specializes in creating smart devices that
          people carry with them every day. From Android phones to smartwatches,
          fitness trackers to smart home devices, we design devices that are
          intuitive, responsive, and reliable.
        </p>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Build</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            index={0}
            icon={<Smartphone className="h-6 w-6" />}
            title="Android Devices"
            desc="Phones and tablets with fast performance and long battery life"
          />
          <CapabilityCard
            index={1}
            icon={<Battery className="h-6 w-6" />}
            title="Wearables"
            desc="Smartwatches and fitness trackers that work all day"
          />
          <CapabilityCard
            index={2}
            icon={<Wifi className="h-6 w-6" />}
            title="Smart Home"
            desc="Connected devices that make homes intelligent and convenient"
          />
          <CapabilityCard
            index={3}
            icon={<Zap className="h-6 w-6" />}
            title="Power Management"
            desc="Technology to make devices run longer on one charge"
          />
          <CapabilityCard
            index={4}
            icon={<Shield className="h-6 w-6" />}
            title="Security"
            desc="Keeping your personal data safe and private"
          />
          <CapabilityCard
            index={5}
            icon={<Cpu className="h-6 w-6" />}
            title="Performance"
            desc="Fast, responsive devices that never lag"
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
            title="Fitness Wearables"
            desc="Watches that track your steps, heart rate, and sleep. Keep you motivated with notifications and coaching."
          />
          <ExampleCard
            title="Smart Home Hubs"
            desc="Central devices that control lights, temperature, and security. Voice-activated and easy to use."
          />
          <ExampleCard
            title="Health Monitors"
            desc="Devices that check your blood pressure, oxygen levels, and send alerts to your phone."
          />
          <ExampleCard
            title="Smart Speakers"
            desc="Listen to music, answer questions, and control your home with just your voice."
          />
        </div>
      </Section>

      {/* Technologies */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">How We Do It</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TechCard
            title="Platforms We Support"
            items={[
              "Android",
              "Bluetooth",
              "WiFi 6E",
              "Cellular LTE/5G",
              "Edge AI",
            ]}
          />
          <TechCard
            title="Key Focus Areas"
            items={[
              "Long battery life",
              "Fast processors",
              "Wireless connectivity",
              "User interfaces",
              "Cloud services",
            ]}
          />
          <TechCard
            title="Our Expertise"
            items={[
              "Low-power design",
              "Sensor integration",
              "Real-time software",
              "Mobile apps",
              "Device testing",
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
          Our specialists have years of experience with major consumer device
          brands. They understand what makes devices successful - from hardware
          that doesn't overheat to software that's snappy and responsive.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Hardware Engineers"
            items={[
              "PCB design for wearables",
              "Power management circuits",
              "Sensor integration",
              "Thermal design",
            ]}
          />
          <ExpertiseBox
            title="Software Engineers"
            items={[
              "Android system optimization",
              "Real-time firmware",
              "Bluetooth connectivity",
              "User application development",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Smart Devices?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our Handheld & IoT team is ready to help you create the next
            generation of smart devices.
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
