import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Car, Zap, Shield, Radio } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";

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
            index={0}
            icon={<Zap className="h-6 w-6" />}
            title="BSP & Bootloaders"
            desc="Board support packages, bootloaders, and system initialization"
          />
          <CapabilityCard
            index={1}
            icon={<Radio className="h-6 w-6" />}
            title="Communication Protocols"
            desc="CAN, CAN FD, UDS, J1939, Autosar, LIN, FlexRay"
          />
          <CapabilityCard
            index={2}
            icon={<Shield className="h-6 w-6" />}
            title="Safety & Compliance"
            desc="MISRA C/C++, ISO 26262, functional safety, diagnostics"
          />
          <CapabilityCard
            index={3}
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
            index={0}
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
            index={1}
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
            index={2}
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
            index={3}
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
            index={0}
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
            index={1}
            title="Languages & Standards"
            items={[
              "C/C++ with MISRA compliance",
              "ISO 26262 (functional safety)",
              "Autosar specification",
              "AUTOSAR Classic/Adaptive",
            ]}
          />
          <SoftwareCard
            index={2}
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
          <Card index={0} title="Hardware Testing">
            <ul className="space-y-2">
              {[
                "CAN message analysis and validation",
                "Hardware-in-the-loop (HIL) testing",
                "ECU bench testing",
                "System integration testing",
                "Environmental & stress testing",
                "Compliance verification",
              ].map((t, idx) => (
                <motion.li
                  key={t}
                  className="flex items-start gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </motion.li>
              ))}
            </ul>
          </Card>
          <Card index={1} title="Functional Testing">
            <ul className="space-y-2">
              {[
                "Automated test case development",
                "Functional verification",
                "Stability & stress testing",
                "Regression testing",
                "Performance benchmarking",
                "Documentation & traceability",
              ].map((t, idx) => (
                <motion.li
                  key={t}
                  className="flex items-start gap-2 text-sm"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <span className="text-muted-foreground">{t}</span>
                </motion.li>
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
            index={0}
            title="Engine Control"
            desc="Fuel injection, ignition timing, emission control, diagnostics"
          />
          <ApplicationCard
            index={1}
            title="Transmission Control"
            desc="Gear selection, shift logic, torque management, adaptive learning"
          />
          <ApplicationCard
            index={2}
            title="Body & Comfort"
            desc="Lighting, climate control, door locks, seat adjustment, infotainment"
          />
          <ApplicationCard
            index={3}
            title="Powertrain"
            desc="Battery management, motor control, hybrid/EV power conversion"
          />
          <ApplicationCard
            index={4}
            title="Autonomous Driving"
            desc="Sensor fusion, perception, path planning, vehicle control"
          />
          <ApplicationCard
            index={5}
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

function ProtocolCard({
  title,
  items,
  index = 0,
}: {
  title: string;
  items: string[];
  index?: number;
}) {
  return (
    <AnimatedCard variant="hover-glow" index={index}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <motion.li
            key={item}
            className="flex items-start gap-2 text-sm"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </motion.li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

function SoftwareCard({
  title,
  items,
  index = 0,
}: {
  title: string;
  items: string[];
  index?: number;
}) {
  return (
    <AnimatedCard variant="hover-glow" index={index}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, idx) => (
          <motion.li
            key={item}
            className="flex items-start gap-2 text-sm"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.05 }}
          >
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </motion.li>
        ))}
      </ul>
    </AnimatedCard>
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
    <AnimatedCard variant="default" index={index}>
      <h3 className="font-semibold text-foreground mb-4">{title}</h3>
      {children}
    </AnimatedCard>
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
