import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import {
  CheckCircle,
  Smartphone,
  Zap,
  Radio,
  Lightbulb,
  X,
  Heart,
  Radio as RadioIcon,
  Monitor,
  Wifi as WifiIcon,
  Cpu,
} from "lucide-react";
import { useState } from "react";

const projects = [
  {
    id: 1,
    category: "Medical & Wearables",
    title: "Smart Knee Joint Monitor",
    image: "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg",
    icon: <Lightbulb className="h-5 w-5" />,
    shortDesc: "Real-time knee angle monitoring with haptic feedback",
    fullDesc:
      "A wearable device that monitors knee joint angles in real-time and triggers haptic feedback when movement exceeds comfortable limits. Perfect for rehabilitation and sports medicine applications.",
    details: [
      "Dialog DA14682 BLE SoC with haptics",
      "Real-time angle monitoring with haptic feedback",
      "Custom hardware, firmware, and Android app",
      "I2C/SPI/ADC/BLE drivers for multiple sensors",
      "MPU sensor and ICM sensor integration",
      "Muscle sensor ADC driver",
      "BLE driver for Android app connectivity",
    ],
    technologies: ["BLE", "Firmware", "Android", "Sensors", "Haptics"],
  },
  {
    id: 2,
    category: "Medical & Wearables",
    title: "Smart Band",
    image: "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg",
    icon: <Heart className="h-5 w-5" />,
    shortDesc: "Fitness wearable with heart rate and activity tracking",
    fullDesc:
      "A lightweight wearable device that continuously tracks fitness parameters including heart rate and step count. Provides smartphone notifications and integrates with mobile apps for comprehensive health monitoring.",
    details: [
      "nRF51822 BLE wearable platform",
      "Fitness parameters: heart rate, steps count",
      "Android BLE client with notifications",
      "Call/message alerts over BLE",
      "Long battery life optimization",
      "Low-power sensor integration",
      "Real-time data synchronization",
    ],
    technologies: ["BLE", "Wearable", "Android", "Fitness Tracking"],
  },
  {
    id: 3,
    category: "Medical & Wearables",
    title: "BP Monitor",
    image: "https://images.pexels.com/photos/8367747/pexels-photo-8367747.jpeg",
    icon: <Zap className="h-5 w-5" />,
    shortDesc: "Wireless blood pressure monitoring with BLE connectivity",
    fullDesc:
      "A medical-grade blood pressure monitor with wireless connectivity that transmits real-time Systolic, Diastolic, and heart rate data to mobile devices. Ideal for remote patient monitoring and telemedicine applications.",
    details: [
      "BLE blood pressure monitoring device",
      "Real-time Systolic/Diastolic/Heart rate",
      "Android app with BLE characteristic notifications",
      "UI parameter display and logging",
      "Medical-grade accuracy",
      "Cloud data synchronization",
      "Historical data analytics",
    ],
    technologies: ["BLE", "Medical Device", "Android", "Monitoring"],
  },
  {
    id: 4,
    category: "IoT & Consumer",
    title: "Dashpod Module",
    image: "https://images.pexels.com/photos/3062551/pexels-photo-3062551.jpeg",
    icon: <RadioIcon className="h-5 w-5" />,
    shortDesc: "Advanced IoT controller with radar and motion sensing",
    fullDesc:
      "An advanced IoT control module featuring radar sensing, 6-dimensional motion detection, and addressable LED feedback. Supports OTA firmware updates for seamless remote device management.",
    details: [
      "nRF52833 DK with Acconeer A111 Radar",
      "OTA firmware updates via nRF Connect",
      "6-dimensional accelerometer integration",
      "Addressable LED control and feedback",
      "Real-time motion detection",
      "Range sensing capabilities",
      "Smart automation triggers",
    ],
    technologies: ["IoT", "Radar Sensing", "OTA Updates", "Motion Detection"],
  },
  {
    id: 5,
    category: "IoT & Consumer",
    title: "Smart Lock",
    image: "https://images.pexels.com/photos/5632663/pexels-photo-5632663.jpeg",
    icon: <Lightbulb className="h-5 w-5" />,
    shortDesc: "Remote-controlled smart lock with mobile and web access",
    fullDesc:
      "A secure smart lock system controlled via both Android app (BLE) and web portal. Features robust communication protocols for reliable remote access and integrates with smart home ecosystems.",
    details: [
      "Quectel EC25 + nRF52832 BLE SoC",
      "Command control via Android app and web portal",
      "BLE GATT server protocol stack",
      "Socket-based web communication",
      "Secure authentication",
      "Multi-user access control",
      "Activity logging and audit trails",
    ],
    technologies: ["BLE", "IoT", "Smart Home", "Security"],
  },
  {
    id: 6,
    category: "IoT & Consumer",
    title: "IoT Controller (t-Hub)",
    image: "https://images.pexels.com/photos/3808517/pexels-photo-3808517.jpeg",
    icon: <WifiIcon className="h-5 w-5" />,
    shortDesc: "Zigbee hub for smart home device control and coordination",
    fullDesc:
      "A central hub for Zigbee home automation devices. Controls and coordinates smart devices, provides WiFi repeater functionality, and enables both online and offline remote control via mobile apps.",
    details: [
      "ESP32 controller for Zigbee HA profile devices",
      "WiFi repeater for existing networks",
      "Mobile app remote control (online/offline)",
      "Device pairing and management",
      "Multi-zone support",
      "Scheduled automation",
      "Energy monitoring and reporting",
    ],
    technologies: ["Zigbee", "WiFi", "IoT Hub", "Home Automation"],
  },
  {
    id: 7,
    category: "Automotive & Industrial",
    title: "Smart Helmet",
    image: "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg",
    icon: <Monitor className="h-5 w-5" />,
    shortDesc: "Connected helmet with GPS and communication features",
    fullDesc:
      "An advanced motorcycle/racing helmet with built-in GPS, camera, display, and Bluetooth connectivity. Optimized for navigation, real-time monitoring, and integrated communication with rider safety features.",
    details: [
      "TI OMAP 4430 board bring-up",
      "Bluetooth 3 to 4 upgrade",
      "Camera resolution and display optimization",
      "GPS navigation implementation",
      "Real-time speed and direction display",
      "Voice command integration",
      "Emergency contact notifications",
    ],
    technologies: ["Automotive", "GPS", "Bluetooth", "Display"],
  },
  {
    id: 8,
    category: "Automotive & Industrial",
    title: "Commercial RO",
    image: "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg",
    icon: <Cpu className="h-5 w-5" />,
    shortDesc: "Reverse osmosis system with IoT monitoring",
    fullDesc:
      "An industrial-grade water treatment system with comprehensive IoT connectivity. Monitors water quality parameters, tracks consumption, and enables remote diagnostics and control via GSM/GPS/WiFi.",
    details: [
      "TI MSP432E401Y microcontroller",
      "I2C TDS sensors and ADC temperature monitoring",
      "GPIO water flow measurement",
      "GSM/GPS/WiFi module integration",
      "Real-time water quality metrics",
      "Predictive maintenance alerts",
      "Cloud data logging and analytics",
    ],
    technologies: ["IoT", "Industrial", "Sensors", "Connectivity"],
  },
  {
    id: 9,
    category: "Automotive & Industrial",
    title: "Smart YogiFi Yoga Mat",
    image: "https://images.pexels.com/photos/4498318/pexels-photo-4498318.jpeg",
    icon: <Lightbulb className="h-5 w-5" />,
    shortDesc: "Intelligent yoga mat with posture analysis",
    fullDesc:
      "An innovative yoga mat embedded with sensors for real-time posture analysis. Provides instant feedback via Bluetooth to mobile apps, helping users perfect their yoga technique and prevent injuries.",
    details: [
      "MSP432P401R + Raspberry Pi 0 platform",
      "22 ADC channels for mat sensor data",
      "UART communication architecture",
      "Posture analysis via Bluetooth to mobile",
      "Real-time form correction feedback",
      "Session recording and playback",
      "Integration with yoga training apps",
    ],
    technologies: ["Fitness", "Sensors", "Bluetooth", "AI/ML"],
  },
];

const clientLogos = [
  { name: "Qualcomm", color: "from-blue-600 to-blue-400" },
  { name: "Intel", color: "from-blue-700 to-blue-500" },
  { name: "Bosch", color: "from-red-600 to-red-400" },
  { name: "Ford", color: "from-blue-800 to-blue-600" },
  { name: "Thermo Fisher Scientific", color: "from-orange-600 to-orange-400" },
  { name: "AMD", color: "from-red-700 to-red-500" },
  { name: "Tech Mahindra", color: "from-blue-600 to-cyan-400" },
  { name: "OnePlus", color: "from-red-600 to-pink-500" },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const selectedProjectData = selectedProject
    ? projects.find((p) => p.id === selectedProject)
    : null;

  const categories = [
    "Medical & Wearables",
    "IoT & Consumer",
    "Automotive & Industrial",
  ];

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
                Explore our diverse portfolio of successful embedded systems
                projects. Click on any project to see detailed technical
                specifications and implementation details.
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

      {/* Project Grid */}
      {categories.map((category) => (
        <Section
          key={category}
          className={
            category.includes("Medical")
              ? "bg-secondary/40"
              : category.includes("Consumer")
                ? undefined
                : "bg-secondary/40"
          }
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-2">{category}</h2>
          <p className="text-muted-foreground mb-8">
            {category === "Medical & Wearables" &&
              "Regulated medical devices and consumer health monitoring solutions."}
            {category === "IoT & Consumer" &&
              "Smart home and IoT connectivity solutions."}
            {category === "Automotive & Industrial" &&
              "Automotive embedded systems and industrial IoT solutions."}
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects
              .filter((p) => p.category === category)
              .map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isSelected={selectedProject === project.id}
                  onSelect={() =>
                    setSelectedProject(
                      selectedProject === project.id ? null : project.id,
                    )
                  }
                />
              ))}
          </div>
        </Section>
      ))}

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-2xl border bg-background shadow-2xl"
            >
              <div className="sticky top-0 z-10 flex items-center justify-between p-6 border-b bg-background/95 backdrop-blur">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg bg-primary/15 text-primary">
                    {selectedProjectData.icon}
                  </span>
                  <h2 className="text-2xl font-bold">
                    {selectedProjectData.title}
                  </h2>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="grid h-10 w-10 place-items-center rounded-lg hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                <img
                  src={selectedProjectData.image}
                  alt={selectedProjectData.title}
                  className="w-full h-64 object-cover rounded-lg border"
                />

                <div>
                  <h3 className="text-lg font-semibold mb-2">Overview</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedProjectData.fullDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Technical Details
                  </h3>
                  <ul className="space-y-2">
                    {selectedProjectData.details.map((detail) => (
                      <li
                        key={detail}
                        className="flex items-start gap-2 text-sm"
                      >
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProjectData.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border bg-primary/10 text-primary text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

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
                className="rounded-lg border bg-gradient-to-br from-primary/10 to-transparent p-8 text-center w-full"
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

      {/* Trusted By Section */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
          Trusted by Global Leaders
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {clientLogos.map((logo) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className={`rounded-lg border p-6 flex items-center justify-center h-24 bg-gradient-to-br ${logo.color} opacity-20 hover:opacity-30 transition-opacity`}
            >
              <span className="font-semibold text-foreground text-center text-sm">
                {logo.name}
              </span>
            </motion.div>
          ))}
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function ProjectCard({
  project,
  isSelected,
  onSelect,
}: {
  project: (typeof projects)[0];
  isSelected: boolean;
  onSelect: () => void;
}) {
  return (
    <motion.button
      onClick={onSelect}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-lg border text-left transition-all ${
        isSelected ? "ring-2 ring-primary shadow-lg" : "hover:shadow-md"
      }`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover opacity-60"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/60 to-background/20" />
      <div className="absolute inset-0 p-5 md:p-6 flex flex-col justify-end">
        <div className="flex items-center gap-3 mb-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/20 text-primary">
            {project.icon}
          </span>
          <div>
            <div className="text-xs font-medium text-primary/80">
              {project.category}
            </div>
            <h3 className="font-bold text-foreground">{project.title}</h3>
          </div>
        </div>
        <p className="text-sm text-foreground/80 leading-relaxed mb-3">
          {project.shortDesc}
        </p>
        <div className="inline-flex items-center gap-1 w-fit rounded-md bg-background/70 px-2 py-1 text-xs font-semibold text-primary hover:bg-background transition-colors">
          <span>Click to see details</span>
          <span className="transition-transform group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </div>
    </motion.button>
  );
}
