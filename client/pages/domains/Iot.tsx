import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Wifi, Smartphone, Cloud, Zap, Radio, Lock } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";

export default function Iot() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="IoT Development Services | Embinsys"
        description="End-to-end IoT solutions: firmware design, embedded applications, web services, hardware, mobile apps, and cloud platform integration."
        canonicalPath="/domains/iot"
      />
      <Section container>
        <DomainHero
          title="Internet of Things (IoT)"
          subtitle="Complete IoT solutions spanning firmware design, embedded applications, web services, hardware design, mobile apps, and cloud platform integration."
          image="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg"
          icon={<Wifi className="h-5 w-5" />}
        />
      </Section>

      {/* Core Capabilities */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Core Capabilities
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <CapabilityCard
            icon={<Zap className="h-6 w-6" />}
            title="Firmware Design"
            desc="Device firmware, bootloaders, RTOS integration, power management, OTA updates"
            index={0}
          />
          <CapabilityCard
            icon={<Radio className="h-6 w-6" />}
            title="Embedded Applications"
            desc="Edge computing logic, sensor interfaces, data processing, real-time control"
            index={1}
          />
          <CapabilityCard
            icon={<Cloud className="h-6 w-6" />}
            title="Web Services & APIs"
            desc="RESTful APIs, cloud integration, data pipelines, dashboard development"
            index={2}
          />
          <CapabilityCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Mobile Apps"
            desc="iOS/Android development, BLE connectivity, user interfaces"
            index={3}
          />
          <CapabilityCard
            icon={<Lock className="h-6 w-6" />}
            title="Security"
            desc="Secure provisioning, encryption, authentication, data protection"
            index={4}
          />
          <CapabilityCard
            icon={<Wifi className="h-6 w-6" />}
            title="Connectivity"
            desc="WiFi, BLE, Zigbee, Z-Wave, cellular, MQTT, CoAP protocols"
            index={5}
          />
        </div>
      </Section>

      {/* Connectivity & Protocols */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Wireless Connectivity
        </h2>
        <p className="text-muted-foreground mb-8">
          Multi-protocol support for diverse IoT deployments.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Short-Range Protocols">
            <ul className="space-y-2">
              {[
                "Bluetooth & BLE (low-power mesh networks)",
                "WiFi (11ac/6E with power optimization)",
                "Zigbee (mesh networking, home automation)",
                "Z-Wave (interoperable smart home)",
                "Thread (IPv6 mesh, low-power)",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Long-Range Protocols">
            <ul className="space-y-2">
              {[
                "Cellular (LTE-M, NB-IoT, 4G/5G)",
                "LoRaWAN (wide-area sensor networks)",
                "Sigfox (ultra-narrow-band)",
                "Satellite (remote locations)",
              ].map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{p}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Cloud Platforms */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Cloud Platform Integration
        </h2>
        <p className="text-muted-foreground mb-8">
          Integration with leading IoT platforms and data analytics.
        </p>
        <div className="grid gap-6 md:grid-cols-4">
          <PlatformCard
            name="AWS IoT"
            features={["Device Shadow", "Greengrass", "IoT Analytics"]}
          />
          <PlatformCard
            name="Azure IoT"
            features={["Device Provisioning", "Event Hub", "Stream Analytics"]}
          />
          <PlatformCard
            name="Google Cloud IoT"
            features={["Cloud Pub/Sub", "Dataflow", "BigQuery"]}
          />
          <PlatformCard
            name="TronX"
            features={["Real-time Platform", "Custom Logic", "Integration Hub"]}
          />
        </div>
      </Section>

      {/* IoT Applications */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Application Domains
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ApplicationCard
            title="Industrial IoT"
            desc="Predictive maintenance, asset tracking, production optimization, supply chain visibility"
          />
          <ApplicationCard
            title="Smart Home & Building"
            desc="Lighting, HVAC, security systems, energy management, occupancy sensing"
          />
          <ApplicationCard
            title="Smart City"
            desc="Traffic management, public safety, environmental monitoring, utility management"
          />
          <ApplicationCard
            title="Consumer Devices"
            desc="Wearables, smart appliances, fitness trackers, home entertainment systems"
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
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-primary/15 p-6 bg-card/60 backdrop-blur hover:border-primary/40 hover:shadow-lg transition-all group overflow-hidden"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center gap-3 mb-3">
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            {icon}
          </motion.span>
          <h3 className="font-semibold text-foreground">{title}</h3>
        </div>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </motion.div>
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
    <AnimatedCard variant="hover-glow" index={index}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </AnimatedCard>
  );
}

function PlatformCard({
  name,
  features,
  index = 0,
}: {
  name: string;
  features: string[];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="rounded-lg border border-primary/15 p-5 bg-card/60 backdrop-blur hover:border-primary/40 hover:shadow-lg transition-all group overflow-hidden"
    >
      <motion.div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <h4 className="font-semibold text-foreground mb-3">{name}</h4>
        <ul className="space-y-1">
          {features.map((f, idx) => (
            <motion.li
              key={f}
              className="flex items-center gap-2 text-xs text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <motion.span
                className="h-1.5 w-1.5 rounded-full bg-primary"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 + 0.1 }}
              />
              {f}
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function ApplicationCard({
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
