import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Car, Zap, Shield, Radio } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";

export default function Automotive() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Automotive Embedded Software | Embinsys"
        description="In-vehicle software, BSPs, telematics, CAN/UDS/J1939, Autosar, MISRA compliance, and automotive QA testing."
        canonicalPath="/domains/automotive"
      />
      <Section container>
        <DomainHero
          title="Automotive"
          subtitle="In-vehicle software, bootloaders, telematics, diagnostics and QA with strong focus on safety, reliability and MISRA compliance."
          image="https://images.pexels.com/photos/18968756/pexels-photo-18968756.jpeg"
          icon={<Car className="h-5 w-5" />}
        />
      </Section>

      {/* Core Capabilities */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Core Capabilities
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CapabilityCard
            icon={<Zap className="h-6 w-6" />}
            title="BSP & Bootloaders"
            desc="Board support packages, bootloaders, and system initialization"
          />
          <CapabilityCard
            icon={<Radio className="h-6 w-6" />}
            title="Communication Protocols"
            desc="CAN, CAN FD, UDS, J1939, Autosar, LIN, FlexRay"
          />
          <CapabilityCard
            icon={<Shield className="h-6 w-6" />}
            title="Safety & Compliance"
            desc="MISRA C/C++, ISO 26262, functional safety, diagnostics"
          />
          <CapabilityCard
            icon={<Car className="h-6 w-6" />}
            title="Connectivity"
            desc="Telematics, V2X, cellular (LTE/5G), WiFi, Bluetooth"
          />
        </div>
      </Section>

      {/* Protocol Expertise */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Communication Protocols
        </h2>
        <p className="text-muted-foreground mb-8">
          Deep expertise in automotive communication standards.
        </p>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ProtocolCard
            title="CAN Family"
            items={[
              "CAN",
              "CAN FD",
              "CAN XL",
              "Timing and arbitration",
              "Error handling",
            ]}
          />
          <ProtocolCard
            title="Diagnostics"
            items={[
              "UDS (ISO 14229)",
              "OBD-II",
              "Kwp2000",
              "Bootloader protocols",
              "Security access",
            ]}
          />
          <ProtocolCard
            title="Industrial"
            items={[
              "J1939 (Heavy duty)",
              "Autosar stack",
              "LIN",
              "FlexRay",
              "MOST",
            ]}
          />
          <ProtocolCard
            title="Telematics"
            items={[
              "GPRS/3G/LTE",
              "5G-ready",
              "GPS/GNSS",
              "Vehicle data extraction",
              "Remote services",
            ]}
          />
        </div>
      </Section>

      {/* Software & Tools */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Software & Development
        </h2>
        <p className="text-muted-foreground mb-8">
          Automotive-grade development practices and tools.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <SoftwareCard
            title="RTOS & OS"
            items={[
              "Linux (custom BSP)",
              "FreeRTOS",
              "QNX",
              "VxWorks",
              "ThreadX",
            ]}
          />
          <SoftwareCard
            title="Languages & Standards"
            items={[
              "C/C++ with MISRA compliance",
              "ISO 26262 (functional safety)",
              "Autosar specification",
              "AUTOSAR Classic/Adaptive",
            ]}
          />
          <SoftwareCard
            title="Development Tools"
            items={[
              "Vector CANoe & CANalyzer",
              "NXP S32 Design Studio",
              "Lauterbach TRACE32",
              "GIT version control",
              "CI/CD pipelines",
            ]}
          />
        </div>
      </Section>

      {/* Testing & QA */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Quality Assurance & Testing
        </h2>
        <p className="text-muted-foreground mb-8">
          Comprehensive automotive testing and validation.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <Card title="Hardware Testing">
            <ul className="space-y-2">
              {[
                "CAN message analysis and validation",
                "Hardware-in-the-loop (HIL) testing",
                "ECU bench testing",
                "System integration testing",
                "Environmental & stress testing",
                "Compliance verification",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="Functional Testing">
            <ul className="space-y-2">
              {[
                "Automated test case development",
                "Functional verification",
                "Stability & stress testing",
                "Regression testing",
                "Performance benchmarking",
                "Documentation & traceability",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </Section>

      {/* Applications */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          ECU Applications & Systems
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ApplicationCard
            title="Engine Control"
            desc="Fuel injection, ignition timing, emission control, diagnostics"
          />
          <ApplicationCard
            title="Transmission Control"
            desc="Gear selection, shift logic, torque management, adaptive learning"
          />
          <ApplicationCard
            title="Body & Comfort"
            desc="Lighting, climate control, door locks, seat adjustment, infotainment"
          />
          <ApplicationCard
            title="Powertrain"
            desc="Battery management, motor control, hybrid/EV power conversion"
          />
          <ApplicationCard
            title="Autonomous Driving"
            desc="Sensor fusion, perception, path planning, vehicle control"
          />
          <ApplicationCard
            title="Connected Services"
            desc="OTA updates, cloud connectivity, telematics, V2X communication"
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

function ProtocolCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SoftwareCard({ title, items }: { title: string; items: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
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
