import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Wifi, Smartphone, Cloud, Zap, Radio, Lock } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";

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
          />
          <CapabilityCard
            icon={<Radio className="h-6 w-6" />}
            title="Embedded Applications"
            desc="Edge computing logic, sensor interfaces, data processing, real-time control"
          />
          <CapabilityCard
            icon={<Cloud className="h-6 w-6" />}
            title="Web Services & APIs"
            desc="RESTful APIs, cloud integration, data pipelines, dashboard development"
          />
          <CapabilityCard
            icon={<Smartphone className="h-6 w-6" />}
            title="Mobile Apps"
            desc="iOS/Android development, BLE connectivity, user interfaces"
          />
          <CapabilityCard
            icon={<Lock className="h-6 w-6" />}
            title="Security"
            desc="Secure provisioning, encryption, authentication, data protection"
          />
          <CapabilityCard
            icon={<Wifi className="h-6 w-6" />}
            title="Connectivity"
            desc="WiFi, BLE, Zigbee, Z-Wave, cellular, MQTT, CoAP protocols"
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
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
          {icon}
        </span>
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function Card({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur"
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </motion.div>
  );
}

function PlatformCard({
  name,
  features,
}: {
  name: string;
  features: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-5 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h4 className="font-semibold text-foreground mb-3">{name}</h4>
      <ul className="space-y-1">
        {features.map((f) => (
          <li
            key={f}
            className="flex items-center gap-2 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            {f}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function ApplicationCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}
