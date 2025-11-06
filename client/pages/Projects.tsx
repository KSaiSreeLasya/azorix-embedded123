import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";

export default function Projects() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Embedded Systems Projects & Case Studies | Azorix Technologies"
        description="Explore real-world projects spanning IoT, medical, automotive, and silicon at Azorix Technologies."
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
                and silicon domains.
              </p>
            </div>
            <img
              className="rounded-xl border shadow-sm hidden md:block"
              alt="Project showcase"
              src="https://images.pexels.com/photos/7652069/pexels-photo-7652069.jpeg"
            />
          </div>
        </div>
      </Section>
      <Section container className="pt-6 pb-8">
        <div className="grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <Proj
            title="Smart Knee Joint Monitor"
            points={[
              "DA14682 BLE SoC with haptics",
              "Custom HW/FW/Android app",
              "I2C/SPI/ADC/BLE drivers",
            ]}
          />
          <Proj
            title="Dashpod Module"
            points={[
              "nRF52833 DK",
              "OTA via nRF Connect",
              "A111 radar, 6D accel, LEDs",
            ]}
          />
          <Proj
            title="Commercial RO"
            points={[
              "TI MSP432E401Y",
              "I2C TDS, ADC temp, GPIO flow",
              "UART GSM/GPS/Wi‑Fi drivers",
            ]}
          />
          <Proj
            title="IoT Controller"
            points={[
              "ESP32",
              "Schematics, risk mgmt, placement, routing, test",
            ]}
          />
          <Proj
            title="Wi‑Fi Bridge"
            points={["MXChip MX3239", "Schematics→Testing"]}
          />
          <Proj
            title="Smart Helmet"
            points={["TI OMAP4430", "BT3→BT4, camera, brightness, navigation"]}
          />
          <Proj
            title="Smart Band"
            points={["nRF51822", "HR/steps, Android BLE client, notifications"]}
          />
          <Proj
            title="BP Monitor"
            points={["BLE BP notifications, Android client, UI"]}
          />
          <Proj
            title="Smart Lock"
            points={[
              "Quectel EC25 + nRF52832",
              "BLE GATT server & Android/Web",
            ]}
          />
        </div>
      </Section>
      <SiteFooter />
    </div>
  );
}

function Proj({ title, points }: { title: string; points: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2, boxShadow: "0 8px 24px rgba(0,0,0,0.08)" }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-5 bg-card/60 backdrop-blur hover:shadow-md transition-shadow"
    >
      <div className="font-semibold mb-2 text-foreground">{title}</div>
      <ul className="list-disc pl-5 space-y-1">
        {points.map((p) => (
          <li key={p} className="text-sm text-muted-foreground">
            {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
