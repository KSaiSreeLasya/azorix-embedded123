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
    image:
      "https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <Lightbulb className="h-5 w-5" />,
    shortDesc: "Wearable device that helps prevent knee injuries during sports",
    realWorldUse:
      "Athletes, physical therapy clinics, and sports medicine professionals use this to monitor knee movements and get instant feedback when motion is about to exceed safe limits - preventing injuries before they happen.",
    fullDesc:
      "This wearable device sits on your knee and continuously monitors how the joint moves. When movements approach unsafe limits, it sends gentle vibrations to alert the wearer. Athletes and physical therapists use this during recovery or training to prevent re-injury.",
    details: [
      "Monitors knee angles in real-time",
      "Sends vibration alerts when movement exceeds safe limits",
      "Works with Android phones via Bluetooth",
      "Integrates multiple sensors for accurate tracking",
      "Optimized for continuous wear during sports",
      "Custom firmware for reliable performance",
      "Connects seamlessly to training apps",
    ],
    technologies: ["BLE", "Wearable", "Android", "Sensors"],
  },
  {
    id: 2,
    category: "Medical & Wearables",
    title: "Smart Fitness Band",
    image:
      "https://images.pexels.com/photos/3962286/pexels-photo-3962286.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <Heart className="h-5 w-5" />,
    shortDesc:
      "Lightweight tracker for heart rate and daily activity monitoring",
    realWorldUse:
      "Fitness enthusiasts, health-conscious individuals, and wellness programs use this band to track daily activity, monitor heart health, and receive notifications on their phones.",
    fullDesc:
      "A sleek wearable band that constantly monitors your heart rate and counts your steps throughout the day. It sends important notifications to your phone - calls, messages, and fitness milestones - keeping you informed without needing to check your phone constantly.",
    details: [
      "Continuous heart rate monitoring",
      "Accurate step and activity counting",
      "Sends phone notifications via Bluetooth",
      "Extremely low power consumption",
      "Days of battery life per charge",
      "Syncs fitness data to mobile apps",
      "Real-time updates on your fitness progress",
    ],
    technologies: ["BLE", "Wearable", "Android", "Fitness"],
  },
  {
    id: 3,
    category: "Medical & Wearables",
    title: "Smart Blood Pressure Monitor",
    image:
      "https://images.pexels.com/photos/17043395/pexels-photo-17043395.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <Zap className="h-5 w-5" />,
    shortDesc:
      "Wireless monitor that sends blood pressure readings to your phone",
    realWorldUse:
      "Hospitals, clinics, and patients managing hypertension use this to track blood pressure remotely. Doctors can monitor multiple patients from anywhere, enabling telemedicine and early intervention.",
    fullDesc:
      "This wireless blood pressure monitor measures your pressure and sends readings directly to your phone via Bluetooth. Perfect for patients who need regular monitoring - no need to visit a clinic every time. Doctors can review your history and spot trends.",
    details: [
      "Measures systolic and diastolic pressure accurately",
      "Sends readings instantly to Android phones",
      "Stores historical data for tracking trends",
      "Medical-grade accuracy and reliability",
      "Real-time alerts if readings are abnormal",
      "Works with telemedicine platforms",
      "Simple one-button operation",
    ],
    technologies: ["BLE", "Medical", "Android", "Healthcare"],
  },
  {
    id: 4,
    category: "IoT & Consumer",
    title: "Smart Home Controller (Dashpod)",
    image:
      "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <RadioIcon className="h-5 w-5" />,
    shortDesc: "Smart controller that detects motion and controls home devices",
    realWorldUse:
      "Smart home enthusiasts use this to automate their homes - automatically turning on lights when you enter a room, adjusting temperature, or triggering security alerts.",
    fullDesc:
      "This intelligent controller uses radar to sense motion and presence in rooms. It can automatically control lights, thermostats, and other devices. LED feedback shows status, and updates happen automatically over the internet.",
    details: [
      "Radar-based motion and presence detection",
      "Detects which direction people are moving",
      "Controls smart lights, thermostats, and devices",
      "LED feedback shows device status",
      "Automatic updates without user intervention",
      "Works in dark conditions (unlike cameras)",
      "Energy-efficient operation",
    ],
    technologies: ["IoT", "Motion Sensing", "Automation", "Smart Home"],
  },
  {
    id: 5,
    category: "IoT & Consumer",
    title: "Smart Lock System",
    image:
      "https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <Lightbulb className="h-5 w-5" />,
    shortDesc: "Control your door lock from anywhere - phone or computer",
    realWorldUse:
      "Homeowners, landlords, and property managers use this to lock/unlock doors remotely. You can give access to guests without being home, track who entered and when.",
    fullDesc:
      "This smart lock lets you control your door from your phone or computer. Whether you're at work or traveling, you can unlock doors for guests, receive notifications when someone enters, and track all access. Multiple people can have different access levels.",
    details: [
      "Lock/unlock from Android app or web browser",
      "Works from anywhere in the world",
      "Set access times for different users",
      "See a log of who accessed the door and when",
      "Secure authentication prevents unauthorized entry",
      "Receive instant notifications on access",
      "No keys to lose or copy",
    ],
    technologies: ["IoT", "Smart Home", "Security", "Mobile App"],
  },
  {
    id: 6,
    category: "IoT & Consumer",
    title: "Smart Home Hub",
    image:
      "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <WifiIcon className="h-5 w-5" />,
    shortDesc: "Central hub that controls all your smart home devices",
    realWorldUse:
      "Smart home owners use this hub to connect and control all their devices - lights, thermostats, door locks - from one place. Works even without internet connection.",
    fullDesc:
      "This is the brain of your smart home. It connects all your smart devices together and lets you control them from your phone. It also acts as a WiFi booster and works offline so you're never without control.",
    details: [
      "Connects and controls all smart home devices",
      "Central control from your mobile app",
      "Boosts WiFi signal throughout your home",
      "Works without internet for critical devices",
      "Schedule automations - lights, temperature, etc.",
      "Monitor energy usage of devices",
      "Create zones for different areas of home",
    ],
    technologies: ["IoT Hub", "WiFi", "Smart Home", "Automation"],
  },
  {
    id: 7,
    category: "Automotive & Industrial",
    title: "Connected Motorcycle Helmet",
    image:
      "https://images.pexels.com/photos/4386366/pexels-photo-4386366.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <Monitor className="h-5 w-5" />,
    shortDesc: "Smart helmet with GPS, camera, and Bluetooth communication",
    realWorldUse:
      "Motorcycle enthusiasts and professional racers use this helmet for navigation, recording rides, communicating with team members, and safety monitoring.",
    fullDesc:
      "This advanced helmet has everything a rider needs - built-in GPS for navigation, a camera to record the journey, a display for speed and directions, and Bluetooth to communicate with your phone and other riders.",
    details: [
      "Clear display showing speed and navigation",
      "Built-in GPS for turn-by-turn directions",
      "Camera records your ride",
      "Bluetooth for phone calls and team chat",
      "Voice commands for hands-free control",
      "Emergency alerts to contacts if needed",
      "Connect with other riders wirelessly",
    ],
    technologies: ["Automotive", "GPS", "Bluetooth", "Camera"],
  },
  {
    id: 8,
    category: "Automotive & Industrial",
    title: "Smart Water Purification System",
    image:
      "https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <Cpu className="h-5 w-5" />,
    shortDesc:
      "Industrial water system that monitors quality and alerts about maintenance",
    realWorldUse:
      "Hospitals, industrial facilities, and commercial buildings use this to ensure water quality, track consumption, and get alerts before problems occur.",
    fullDesc:
      "This intelligent water purification system continuously monitors water quality, measures consumption, and predicts maintenance needs. Managers can check status from anywhere and get alerts if water quality drops or filters need replacement.",
    details: [
      "Continuously monitors water quality",
      "Tracks how much water is being used",
      "Alerts when filters need replacement",
      "GPS location tracking of the system",
      "Works with cellular, WiFi, and satellite",
      "Stores data for analysis and trending",
      "Prevents problems before they start",
    ],
    technologies: ["IoT", "Industrial", "Sensors", "Monitoring"],
  },
  {
    id: 9,
    category: "Automotive & Industrial",
    title: "Smart Yoga Mat",
    image:
      "https://images.pexels.com/photos/6246246/pexels-photo-6246246.jpeg?auto=compress&cs=tinysrgb&w=600",
    icon: <Lightbulb className="h-5 w-5" />,
    shortDesc:
      "Intelligent mat that guides your yoga form and prevents injuries",
    realWorldUse:
      "Yoga practitioners, fitness instructors, and physical therapists use this mat to get real-time feedback on their form, preventing common mistakes and injuries.",
    fullDesc:
      "This smart yoga mat has sensors embedded throughout to detect your body position. It sends real-time feedback to your phone about your posture - telling you if you're aligned correctly or need to adjust. Perfect for learning proper technique.",
    details: [
      "Detects body position on the mat",
      "Provides real-time posture feedback",
      "Alerts if you're misaligned",
      "Guides you through poses correctly",
      "Records your sessions for review",
      "Prevents common yoga injuries",
      "Works with yoga training apps",
    ],
    technologies: ["Fitness", "Sensors", "Bluetooth", "Wellness"],
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
                From smart wearables to IoT systems and connected vehicles -
                explore real products we've built. Click any project to discover
                what it does and who uses it.
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
              "Devices that help people stay healthy - from fitness trackers to medical-grade monitors. All built with precision and care."}
            {category === "IoT & Consumer" &&
              "Smart devices that make life easier - controlling homes, securing doors, and automating daily tasks."}
            {category === "Automotive & Industrial" &&
              "Connected systems for vehicles and industry - from smart helmets to water treatment systems with predictive maintenance."}
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

                {(selectedProjectData as any).realWorldUse && (
                  <div className="rounded-lg bg-primary/10 border border-primary/30 p-4">
                    <h3 className="text-sm font-bold text-primary mb-2">
                      💡 Real-World Use
                    </h3>
                    <p className="text-sm text-foreground leading-relaxed">
                      {(selectedProjectData as any).realWorldUse}
                    </p>
                  </div>
                )}

                <div>
                  <h3 className="text-lg font-semibold mb-2">What It Does</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {selectedProjectData.fullDesc}
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
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
                        className="px-3 py-1.5 rounded-full border bg-gradient-to-r from-primary/15 to-accent/15 text-foreground text-xs font-semibold hover:border-primary/50 transition-colors"
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
          Complete Partnership Example
        </h2>
        <p className="text-muted-foreground mb-8">
          How we partner with a major global chipset company - handling
          everything from concept to market.
        </p>
        <div className="rounded-lg border p-8 bg-card/60 backdrop-blur">
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h3 className="font-bold text-lg mb-4">
                What We Do for Our Clients
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Build new features and capabilities",
                  "Test features with real customers",
                  "Complete quality assurance",
                  "Provide customer support and help",
                  "Create detailed documentation and guides",
                  "Analyze competitor products",
                  "Design circuit boards and layouts",
                  "Manufacture and test samples",
                  "Optimize designs for reliability",
                  "Assembly and quality control",
                  "Help clients launch products",
                  "Ongoing technical support",
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
                className="rounded-lg border bg-gradient-to-br from-primary/20 via-accent/10 to-transparent p-8 text-center w-full hover:shadow-lg transition-all"
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-3">
                  360°
                </div>
                <div className="font-bold text-foreground text-lg">
                  Complete Engineering Partnership
                </div>
                <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                  We handle the complete journey - from your idea through
                  design, development, testing, manufacturing, and support.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Trusted By Section */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            Trusted by Global Technology Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Fortune 500 companies and innovators worldwide rely on us to bring
            their embedded systems to life
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {clientLogos.map((logo) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.1)" }}
              transition={{ duration: 0.4 }}
              className={`rounded-lg border p-8 flex items-center justify-center min-h-32 bg-gradient-to-br ${logo.color} opacity-25 hover:opacity-40 transition-all cursor-default`}
            >
              <span className="font-bold text-foreground text-center text-sm">
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
      whileHover={{ y: -6, boxShadow: "0 12px 32px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.4 }}
      className={`relative overflow-hidden rounded-2xl border text-left transition-all flex flex-col h-full ${
        isSelected
          ? "ring-2 ring-primary shadow-xl bg-primary/5"
          : "hover:shadow-lg bg-card/40"
      }`}
    >
      <div className="relative h-48 w-full overflow-hidden bg-secondary/50 flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      <div className="flex flex-col justify-between flex-1 p-5 md:p-6">
        <div>
          <div className="flex items-start gap-3 mb-3">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground flex-shrink-0 shadow-md">
              {project.icon}
            </span>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-bold text-primary/90 uppercase tracking-wide">
                {project.category}
              </div>
              <h3 className="font-bold text-foreground text-base mt-1 line-clamp-2">
                {project.title}
              </h3>
            </div>
          </div>
          <p className="text-sm text-foreground/75 leading-relaxed mb-4 line-clamp-2">
            {project.shortDesc}
          </p>
        </div>

        <motion.div
          className="inline-flex items-center gap-1 w-fit rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 px-3 py-1.5 text-xs font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all"
          whileHover={{ x: 2 }}
        >
          <span>View Details</span>
          <span className="transition-transform">→</span>
        </motion.div>
      </div>
    </motion.button>
  );
}
