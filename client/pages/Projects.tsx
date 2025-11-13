import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle, Smartphone, Zap, Radio, Lightbulb } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Embedded Systems Projects & Case Studies | Embinsys"
        description="Explore real-world projects spanning IoT, medical devices, automotive, consumer electronics, and industrial applications."
        canonicalPath="/projects"
      />
      <Section container className="pt-12 pb-8">
        <div className="relative overflow-hidden rounded-2xl border bg-gradient-to-br from-teal-50 via-white to-emerald-50 dark:from-teal-950/30 dark:via-slate-950 dark:to-emerald-950/20">
          <div className="grid gap-6 md:grid-cols-2 p-8 md:p-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-md bg-primary/10 px-3 py-1 text-primary font-semibold">
                <span>Case studies</span>
              </div>
              <h1 className="mt-3 text-3xl md:text-5xl font-extrabold tracking-tight">
                Projects
              </h1>
              <p className="mt-3 text-muted-foreground max-w-2xl">
                Selected work across medical, industrial, consumer, automotive
                and silicon domains. From prototype to production-ready solutions.
              </p>
            </div>
            <img
              className="rounded-xl border shadow-sm object-cover w-full h-[240px] md:h-[320px] lg:h-[420px]"
              alt="Project showcase - embedded device and PCB"
              src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800"
              loading="eager"
              fetchpriority="high"
              decoding="async"
            />
          </div>
        </div>
      </Section>

      {/* Medical & Wearables */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Medical & Wearables
        </h2>
        <p className="text-muted-foreground mb-8">
          Regulated medical devices and consumer health monitoring solutions.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Smart Knee Joint Monitor"
            icon={<Lightbulb className="h-5 w-5" />}
            points={[
              "Dialog DA14682 BLE SoC with haptics",
              "Real-time angle monitoring with haptic feedback",
              "Custom hardware, firmware, and Android app",
              "I2C/SPI/ADC/BLE drivers for multiple sensors",
            ]}
          />
          <ProjectCard
            title="Smart Band"
            icon={<Smartphone className="h-5 w-5" />}
            points={[
              "nRF51822 BLE wearable platform",
              "Fitness parameters: heart rate, steps count",
              "Android BLE client with notifications",
              "Call/message alerts over BLE",
            ]}
          />
          <ProjectCard
            title="BP Monitor"
            icon={<Zap className="h-5 w-5" />}
            points={[
              "BLE blood pressure monitoring device",
              "Real-time Systolic/Diastolic/Heart rate",
              "Android app with BLE characteristic notifications",
              "UI parameter display and logging",
            ]}
          />
        </div>
      </Section>

      {/* IoT & Consumer */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          IoT & Consumer Electronics
        </h2>
        <p className="text-muted-foreground mb-8">
          Smart home and IoT connectivity solutions.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Dashpod Module"
            icon={<Radio className="h-5 w-5" />}
            points={[
              "nRF52833 DK with Acconeer A111 Radar",
              "OTA firmware updates via nRF Connect",
              "6-dimensional accelerometer integration",
              "Addressable LED control and feedback",
            ]}
          />
          <ProjectCard
            title="Smart Lock"
            icon={<Lightbulb className="h-5 w-5" />}
            points={[
              "Quectel EC25 + nRF52832 BLE SoC",
              "Command control via Android app and web portal",
              "BLE GATT server protocol stack",
              "Socket-based web communication",
            ]}
          />
          <ProjectCard
            title="IoT Controller (t-Hub)"
            icon={<Zap className="h-5 w-5" />}
            points={[
              "ESP32 controller for zigbee HA profile devices",
              "WiFi repeater for existing networks",
              "Mobile app remote control (online/offline)",
              "Schematic design through full testing",
            ]}
          />
        </div>
      </Section>

      {/* Automotive & Industrial */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Automotive & Industrial
        </h2>
        <p className="text-muted-foreground mb-8">
          Automotive embedded systems and industrial IoT solutions.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Smart Helmet"
            icon={<Smartphone className="h-5 w-5" />}
            points={[
              "TI OMAP 4430 board bring-up",
              "Bluetooth 3 to 4 upgrade",
              "Camera resolution and display optimization",
              "GPS navigation implementation",
            ]}
          />
          <ProjectCard
            title="Commercial RO"
            icon={<Zap className="h-5 w-5" />}
            points={[
              "TI MSP432E401Y microcontroller",
              "I2C TDS sensors and ADC temperature monitoring",
              "GPIO water flow measurement",
              "GSM/GPS/WiFi module integration",
            ]}
          />
          <ProjectCard
            title="Smart YogiFi Yoga Mat"
            icon={<Lightbulb className="h-5 w-5" />}
            points={[
              "MSP432P401R + Raspberry Pi 0 platform",
              "22 ADC channels for mat sensor data",
              "UART communication architecture",
              "Posture analysis via Bluetooth to mobile",
            ]}
          />
        </div>
      </Section>

      {/* Electricity & Infrastructure */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Smart Infrastructure
        </h2>
        <p className="text-muted-foreground mb-8">
          Smart metering and infrastructure management solutions.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <ProjectCard
            title="Smart Electricity Reader"
            icon={<Zap className="h-5 w-5" />}
            points={[
              "Qualcomm MSM8909 chipset",
              "Board bring-up and optimization",
              "UI design and development (C++ QT)",
              "GPS tracking and GSM/WiFi connectivity",
            ]}
          />
          <ProjectCard
            title="IoT Controller"
            icon={<Radio className="h-5 w-5" />}
            points={[
              "Espressif ESP32 chipset",
              "Complete schematic design",
              "BOM analysis and risk management",
              "Layout, routing, and testing",
            ]}
          />
          <ProjectCard
            title="WiFi Bridge"
            icon={<Lightbulb className="h-5 w-5" />}
            points={[
              "MXChip MX3239 chipset",
              "Schematic and layout design",
              "BOM analysis and risk assessment",
              "Full routing and validation testing",
            ]}
          />
        </div>
      </Section>

      {/* Success Story */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Extended End-to-End Engineering
        </h2>
        <p className="text-muted-foreground mb-8">
          Comprehensive success story with a global chipset company.
        </p>
        <div className="rounded-lg border p-8 bg-card/60 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-lg mb-4">
                Global Chipset Company Partnership
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Firmware development and new features",
                  "Customer feature implementation",
                  "SDK testing and release",
                  "Customer support and escalation",
                  "Application notes and documentation",
                  "Product teardown and analysis",
                  "Comparative market analysis",
                  "PCB design, layout, and fabrication",
                  "Engineering samples manufacturing",
                  "Board bring-up and integration",
                  "Industrial design and optimization",
                  "Assembly and sample production",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="rounded-lg border bg-gradient-to-br from-primary/10 to-transparent p-8 text-center"
              >
                <div className="text-5xl font-bold text-primary mb-2">360°</div>
                <div className="font-semibold">
                  Extended End-to-End Embedded Engineering Team
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  From concept through production and beyond
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function ProjectCard({
  title,
  points,
  icon,
}: {
  title: string;
  points: string[];
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <div className="flex items-center gap-2 font-semibold mb-4 text-foreground">
        <span className="grid h-8 w-8 place-items-center rounded-md bg-primary/15 text-primary">
          {icon}
        </span>
        <span>{title}</span>
      </div>
      <ul className="list-none pl-0 space-y-2">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-2 text-sm">
            <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground">{p}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
