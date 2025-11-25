import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Home,
  Smartphone,
  Music,
  Settings,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ConsumerIoT() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Consumer IoT | Embinsys"
        description="Smart home devices, wearables, and personal IoT devices that make everyday life smarter and more connected."
        canonicalPath="/iot/consumer"
      />
      <Section container>
        <DomainHero
          title="Consumer IoT"
          subtitle="Home devices that listen and respond - making life simpler and more connected. Smart speakers, wearables, and connected appliances."
          image="https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg"
          icon={<Home className="h-5 w-5" />}
        />
      </Section>

      {/* Overview */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Connected Living</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Consumer IoT devices are becoming part of everyday life. From
          smartwatches that track your health to speakers that play music and
          control your home, these devices make life more convenient, help you
          stay healthy, and keep your home secure. They're personal, practical,
          and increasingly essential.
        </p>
      </Section>

      {/* Product Categories */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Popular Categories
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ProductCard
            index={0}
            icon={<Home className="h-6 w-6" />}
            title="Smart Home"
            desc="Connected lights, thermostats, locks, and security cameras that you control from anywhere"
          />
          <ProductCard
            index={1}
            icon={<Smartphone className="h-6 w-6" />}
            title="Wearables"
            desc="Smartwatches and fitness trackers that monitor your health and keep you connected"
          />
          <ProductCard
            index={2}
            icon={<Music className="h-6 w-6" />}
            title="Smart Speakers"
            desc="Voice-activated speakers that play music, answer questions, and control your home"
          />
          <ProductCard
            index={3}
            icon={<Lightbulb className="h-6 w-6" />}
            title="Smart Appliances"
            desc="Connected ovens, refrigerators, and washing machines that work smarter"
          />
          <ProductCard
            index={4}
            icon={<Settings className="h-6 w-6" />}
            title="Smart Accessories"
            desc="Connected doorbells, plugs, switches, and sensors for home automation"
          />
          <ProductCard
            index={5}
            icon={<Smartphone className="h-6 w-6" />}
            title="Personal Devices"
            desc="Smart rings, glasses, and other wearable personal devices"
          />
        </div>
      </Section>

      {/* Use Cases */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          How People Use Them
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <UseCaseCard
            title="Home Automation"
            desc="Automate your home - lights turn on when you arrive, temperature adjusts before you wake up, doors lock automatically at night"
          />
          <UseCaseCard
            title="Health & Fitness"
            desc="Track your activity, monitor your heart rate, get reminders to move, and achieve your fitness goals"
          />
          <UseCaseCard
            title="Home Security"
            desc="Monitor your home from anywhere with cameras and sensors, get instant alerts if something unusual happens"
          />
          <UseCaseCard
            title="Voice Control"
            desc="Control your home with voice commands - ask for weather, news, music, or to control devices"
          />
          <UseCaseCard
            title="Energy Savings"
            desc="Monitor and reduce energy usage with smart thermostats and appliances"
          />
          <UseCaseCard
            title="Convenience"
            desc="Remote control of lights, locks, and appliances from your phone or watch"
          />
        </div>
      </Section>

      {/* Technology Trends */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What Makes It Work</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TechCard
            title="Smart Hardware"
            items={[
              "Low-power processors",
              "Multiple sensors",
              "Wireless connectivity",
              "Beautiful design",
              "Long battery life",
            ]}
          />
          <TechCard
            title="Smart Software"
            items={[
              "Voice recognition",
              "Machine learning",
              "Cloud integration",
              "Local processing",
              "Smart algorithms",
            ]}
          />
          <TechCard
            title="Smart Services"
            items={[
              "Cloud connectivity",
              "Mobile apps",
              "Voice assistants",
              "Data analytics",
              "Personalization",
            ]}
          />
        </div>
      </Section>

      {/* Design Principles */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What Consumers Want
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <DesignBox
            title="Experience"
            items={[
              "Easy to set up and use",
              "Intuitive interfaces",
              "Fast response times",
              "Beautiful design",
              "Satisfying interactions",
            ]}
          />
          <DesignBox
            title="Reliability"
            items={[
              "Always works when you need it",
              "Consistent performance",
              "Long battery life",
              "Durable construction",
              "Reliable connectivity",
            ]}
          />
          <DesignBox
            title="Privacy & Security"
            items={[
              "Your data is private",
              "Encrypted communication",
              "Control over data sharing",
              "Regular security updates",
              "Transparent data handling",
            ]}
          />
          <DesignBox
            title="Integration"
            items={[
              "Works with other devices",
              "Cloud service integration",
              "App ecosystem",
              "Voice assistant support",
              "Cross-platform compatibility",
            ]}
          />
        </div>
      </Section>

      {/* Market Trends */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Market Trends</h2>
        <div className="grid gap-6 md:grid-cols-3">
          <TrendCard
            title="AI & Automation"
            desc="Devices are getting smarter with AI, learning your preferences and automating tasks"
          />
          <TrendCard
            title="Health Focus"
            desc="More focus on health monitoring, from fitness to medical-grade vital sign tracking"
          />
          <TrendCard
            title="Privacy First"
            desc="Consumers want privacy - local processing and encrypted communication matter"
          />
          <TrendCard
            title="Sustainability"
            desc="Consumers want durable devices with long lifespans and recyclable materials"
          />
          <TrendCard
            title="Energy Efficiency"
            desc="Lower power consumption and longer battery life are top priorities"
          />
          <TrendCard
            title="Open Ecosystems"
            desc="Interoperability standards like Matter are making devices work together"
          />
        </div>
      </Section>

      {/* Our Expertise */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Expertise</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          We've designed and built consumer IoT products for major brands. We
          understand what consumers want - great design, reliable performance,
          battery efficiency, and seamless cloud integration.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <ExpertiseBox
            title="Product Design"
            items={[
              "Beautiful, intuitive design",
              "User experience focus",
              "Manufacturing for consumer scale",
              "Cost optimization",
              "Sustainability considerations",
            ]}
          />
          <ExpertiseBox
            title="Smart Features"
            items={[
              "Voice and AI integration",
              "Sensor fusion and processing",
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
            Ready to Build a Consumer IoT Product?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your product idea and how we can help you create
            something people love.
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

function ProductCard({
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

function UseCaseCard({ title, desc }: { title: string; desc: string }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
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

function DesignBox({ title, items }: { title: string; items: string[] }) {
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

function TrendCard({ title, desc }: { title: string; desc: string }) {
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
