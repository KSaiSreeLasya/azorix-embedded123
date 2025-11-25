import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import {
  Award,
  Cpu,
  Wrench,
  Layers,
  Wifi,
  Stethoscope,
  Car,
  CircuitBoard,
  Smartphone,
  Zap,
  Shield,
  Globe,
  CheckCircle2,
  Rocket,
} from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <SEO
        title="Embinsys - Engineering & Design Services | Embedded Systems Solutions"
        description="Embinsys delivers innovative embedded systems and engineering services in IoT, medical devices, automotive, and SoC with 25+ years of industry expertise."
        canonicalPath="/"
      />

      {/* Hero */}
      <Section container>
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 dark:from-primary/10 dark:via-background dark:to-accent/10">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
            <div className="absolute -bottom-32 -left-40 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          </div>
          <div className="relative grid gap-12 md:grid-cols-2 p-8 md:p-16 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-xs md:text-sm font-semibold uppercase tracking-widest text-primary"
              >
                Engineering & Design Services
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-4 pb-4 text-5xl md:text-7xl font-black tracking-tighter bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent"
              >
                Innovation. Quality. Reliability.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="mt-6 text-lg md:text-xl text-foreground/70 max-w-lg leading-relaxed font-medium"
              >
                Enabling global companies with product and engineering services. Start-to-finish embedded systems expertise across hardware, software, testing, and support.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Button asChild size="lg" className="h-12 px-8 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200">
                  <a href="/contact">Get Started</a>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-12 px-8 text-base font-semibold rounded-lg border-2 hover:border-primary">
                  <a href="/capabilities">Explore Capabilities</a>
                </Button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <Pill icon={<Wifi className="h-4 w-4" />}>IoT</Pill>
                <Pill icon={<Stethoscope className="h-4 w-4" />}>Medical</Pill>
                <Pill icon={<Car className="h-4 w-4" />}>Automotive</Pill>
                <Pill icon={<Cpu className="h-4 w-4" />}>SoC</Pill>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10 grid grid-cols-3 gap-4"
              >
                <Stat kpi="25+" label="Years Experience" />
                <Stat kpi="80+" label="Team Engineers" />
                <Stat kpi="2" label="Global Offices" />
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.7, delay: 0.2, type: "spring" }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20" />
              <img
                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800"
                alt="Embedded device PCB and components"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="relative rounded-2xl border-2 border-primary/30 shadow-2xl object-cover w-full h-[280px] md:h-[360px] lg:h-[480px]"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Company Overview */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold">About Embinsys</h2>
        <p className="mt-2 text-foreground/80 max-w-3xl leading-relaxed">
          For over 25 years, Embinsys has been enabling global companies with
          comprehensive product and engineering services. With dual offices in
          Troy, Michigan (USA) and Hyderabad, India, and a team of 80+
          experienced engineers, we deliver end-to-end embedded systems
          solutions with a focus on quality, reliability, and innovation.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCard
            icon={<Rocket className="h-5 w-5" />}
            title="Full-Stack Expertise"
            desc="Hardware design, firmware, software, testing, and support"
          />
          <OverviewCard
            icon={<Shield className="h-5 w-5" />}
            title="Reliable Execution"
            desc="Quality and technology-focused with proven track record"
          />
          <OverviewCard
            icon={<Globe className="h-5 w-5" />}
            title="Global Reach"
            desc="Serving multinational companies and startups worldwide"
          />
          <OverviewCard
            icon={<Zap className="h-5 w-5" />}
            title="Extended Teams"
            desc="Resource augmentation and flexible engagement models"
          />
        </div>
      </Section>

      {/* Quick links */}
      <Section>
        <div className="rounded-xl border bg-card/50 backdrop-blur p-4 md:p-6">
          <div className="grid gap-6 md:grid-cols-3">
            <LinkCard
              to="/capabilities"
              title="Capabilities"
              desc="End‑to‑end product engineering across hardware, software, and test."
              image="https://images.pexels.com/photos/3938016/pexels-photo-3938016.jpeg"
              icon={<Layers className="h-5 w-5" />}
            />
            <LinkCard
              to="/projects"
              title="Projects"
              desc="Selected work across medical, industrial, consumer and automotive."
              image="https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg"
              icon={<Award className="h-5 w-5" />}
            />
            <LinkCard
              to="/contact"
              title="Contact"
              desc="Talk to our team about your product or resource needs."
              image="https://images.pexels.com/photos/8728429/pexels-photo-8728429.jpeg"
              icon={<Wrench className="h-5 w-5" />}
            />
          </div>
        </div>
      </Section>

      {/* Centers of Excellence */}
      <Section className="bg-secondary/40">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold">
            Specialized Teams for Every Market
          </h2>
          <p className="mt-2 text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Expert centers focused on specific industries - each with deep
            knowledge and proven track records
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <CoECard
            emoji="📱"
            icon={<Smartphone className="h-6 w-6" />}
            title="Handheld & IoT"
            highlight="Smart Devices"
            desc="Building smart devices - phones, watches, home devices"
            topics={[
              "Android",
              "Connectivity",
              "Low-power design",
              "User apps",
            ]}
          />
          <CoECard
            emoji="🏥"
            icon={<Stethoscope className="h-6 w-6" />}
            title="Medical Devices"
            highlight="Healthcare"
            desc="Medical-grade devices that save lives"
            topics={[
              "Regulatory compliance",
              "Patient safety",
              "Sensor integration",
              "Data security",
            ]}
          />
          <CoECard
            emoji="🚗"
            icon={<Car className="h-6 w-6" />}
            title="Automotive"
            highlight="Connected Vehicles"
            desc="Making cars smarter and safer"
            topics={[
              "Vehicle networks",
              "Safety systems",
              "Telematics",
              "Real-time control",
            ]}
          />
          <CoECard
            emoji="⚙️"
            icon={<Cpu className="h-6 w-6" />}
            title="Silicon & SoC"
            highlight="Chip Design"
            desc="Enabling next-generation processors"
            topics={["Bootloaders", "Drivers", "Performance", "Validation"]}
          />
        </div>
      </Section>

      {/* Expertise Capabilities */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Four Pillars of Expertise
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Complete end-to-end engineering solutions from hardware to
            deployment
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <ExpertiseCard
            icon="🛠️"
            title="Product"
            subtitle="Hardware Design"
            desc="We design the physical hardware - circuits, PCBs, and all components that make devices work"
            items={[
              "Requirements analysis",
              "System design & review",
              "Schematic & PCB design",
              "Component selection",
              "Quality assurance",
            ]}
          />
          <ExpertiseCard
            icon="💻"
            title="Software"
            subtitle="Device Intelligence"
            desc="We write the code that makes devices smart - from firmware to apps"
            items={[
              "Bootloaders and drivers",
              "Operating systems",
              "Communication protocols",
              "User interfaces",
              "Cloud integration",
            ]}
          />
          <ExpertiseCard
            icon="✓"
            title="Testing"
            subtitle="Quality Verification"
            desc="We make sure everything works perfectly - testing and quality assurance"
            items={[
              "Automated testing",
              "Stability testing",
              "Performance validation",
              "Reliability testing",
              "Compliance verification",
            ]}
          />
          <ExpertiseCard
            icon="🤝"
            title="Support"
            subtitle="Expert Guidance"
            desc="We're here to help - training, resources, and ongoing support"
            items={[
              "Team augmentation",
              "Technical training",
              "Troubleshooting",
              "Escalation support",
              "Knowledge transfer",
            ]}
          />
        </div>
      </Section>

      {/* Engagement Models */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Engagement Models
        </h2>
        <p className="text-foreground/80 max-w-3xl leading-relaxed mb-8">
          Flexible partnerships tailored to your project needs.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <EngagementCard
            title="Project / SoW"
            desc="Complete project delivery with defined scope of work and timeline"
          />
          <EngagementCard
            title="Resource Augmentation"
            desc="Scale your team with skilled engineers working as extended team"
          />
          <EngagementCard
            title="Build Operate Transfer"
            desc="Build capability, operate services, then transfer to your team"
          />
        </div>
      </Section>

      {/* Domains */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold">Domains</h2>
        <p className="mt-2 text-foreground/80 max-w-3xl leading-relaxed mb-8">
          Where we deliver the most impact across industries and technologies.
        </p>
        <div className="rounded-xl border bg-card/60 backdrop-blur p-4 md:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DomainCard
              to="/domains/iot"
              title="IoT"
              desc="Firmware design, embedded applications, web services, hardware, mobile apps, platform integration"
              image="https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg"
              icon={<Wifi className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/medical"
              title="Medical"
              desc="Regulated devices, sensors, connectivity, R&D, clinical processes, firmware"
              image="https://images.pexels.com/photos/7108177/pexels-photo-7108177.jpeg"
              icon={<Stethoscope className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/automotive"
              title="Automotive"
              desc="BSP, telematics, CAN/UDS/J1939, firmware, connectivity, compliance"
              image="https://images.pexels.com/photos/18968756/pexels-photo-18968756.jpeg"
              icon={<Car className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/soc"
              title="SoC"
              desc="BSP, bootloaders, drivers, connectivity, audio, silicon design"
              image="https://images.pexels.com/photos/3665442/pexels-photo-3665442.jpeg"
              icon={<Cpu className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/hardware"
              title="Hardware"
              desc="Schematics, PCB layout, bring‑up, testing, manufacturing support"
              image="https://images.pexels.com/photos/6755088/pexels-photo-6755088.jpeg"
              icon={<CircuitBoard className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/testing"
              title="Testing"
              desc="Automation, stability, verification, functional testing, frameworks"
              image="https://images.pexels.com/photos/3913031/pexels-photo-3913031.jpeg"
              icon={<Wrench className="h-5 w-5" />}
            />
          </div>
        </div>
      </Section>

      {/* IoT Applications */}
      <Section className="bg-secondary/40">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            IoT Applications
          </h2>
          <p className="text-foreground/80 max-w-3xl mx-auto leading-relaxed">
            Smart devices that make everyday tasks smarter, faster, and more
            efficient
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <IoTAppCard
            title="🏭 Industrial IoT"
            desc="Factories that monitor themselves - machines that predict problems before they happen"
            icon={<Zap className="h-6 w-6" />}
            examples={[
              "Predictive maintenance",
              "Production optimization",
              "Equipment monitoring",
            ]}
          />
          <IoTAppCard
            title="🏥 Medical IoT"
            desc="Devices that care for your health - from monitoring your heart to tracking fitness"
            icon={<Stethoscope className="h-6 w-6" />}
            examples={[
              "Health monitoring",
              "Patient alerts",
              "Remote diagnosis",
            ]}
          />
          <IoTAppCard
            title="🏙️ Smart City"
            desc="Cities that work efficiently - traffic flows better, utilities use less energy"
            icon={<Globe className="h-6 w-6" />}
            examples={["Traffic management", "Energy saving", "Public safety"]}
          />
          <IoTAppCard
            title="🚗 Automotive IoT"
            desc="Cars that are smarter and safer - connected and aware of their surroundings"
            icon={<Car className="h-6 w-6" />}
            examples={["Navigation", "Safety features", "Remote control"]}
          />
          <IoTAppCard
            title="📱 Consumer IoT"
            desc="Home devices that listen and respond - making life simpler and more connected"
            icon={<Smartphone className="h-6 w-6" />}
            examples={["Smart home", "Wearables", "Personal devices"]}
          />
        </div>
      </Section>

      {/* Client Partners */}
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Trusted by Global Leaders
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our expertise is trusted by Fortune 500 companies and leading
            innovators worldwide
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Qualcomm",
              color: "from-blue-600 to-blue-400",
              desc: "Leading chipset provider",
            },
            {
              name: "Intel",
              color: "from-blue-700 to-blue-500",
              desc: "Global processor leader",
            },
            {
              name: "Bosch",
              color: "from-red-600 to-red-400",
              desc: "Industrial innovation",
            },
            {
              name: "Ford",
              color: "from-blue-800 to-blue-600",
              desc: "Automotive excellence",
            },
            {
              name: "Thermo Fisher",
              color: "from-orange-600 to-orange-400",
              desc: "Medical devices",
            },
            {
              name: "AMD",
              color: "from-red-700 to-red-500",
              desc: "Advanced computing",
            },
            {
              name: "Tech Mahindra",
              color: "from-blue-600 to-cyan-400",
              desc: "Digital transformation",
            },
            {
              name: "OnePlus",
              color: "from-red-600 to-pink-500",
              desc: "Mobile innovation",
            },
          ].map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.4 }}
              className={`rounded-lg border p-6 flex flex-col items-center justify-center text-center min-h-32 bg-gradient-to-br ${client.color} opacity-10 hover:opacity-15 transition-opacity hover:border-primary/50`}
            >
              <div className="font-bold text-foreground text-lg mb-1">
                {client.name}
              </div>
              <div className="text-xs text-muted-foreground">{client.desc}</div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CTA band */}
      <Section container>
        <div className="rounded-xl border p-8 md:p-10 bg-gradient-to-r from-primary/10 to-transparent">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">
                Ready to build your next product?
              </h3>
              <p className="text-muted-foreground mt-1">
                Collaborate with a dependable engineering partner with 25+ years
                of expertise.
              </p>
            </div>
            <Button asChild size="lg">
              <a href="/contact">Start a conversation</a>
            </Button>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function Stat({ kpi, label }: { kpi: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="relative rounded-xl border border-primary/20 bg-gradient-to-br from-primary/5 to-transparent p-6 backdrop-blur shadow-md hover:shadow-lg transition-all"
    >
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{kpi}</div>
        <div className="text-sm md:text-base font-semibold text-foreground/60 mt-2">{label}</div>
      </div>
    </motion.div>
  );
}

function OverviewCard({
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-7 shadow-lg hover:shadow-xl transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="flex items-center gap-3 font-bold mb-3 text-lg">
          <span className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md">
            {icon}
          </span>
          {title}
        </div>
        <p className="text-base text-foreground/65 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function CoECard({
  emoji,
  icon,
  title,
  highlight,
  desc,
  topics,
}: {
  emoji: string;
  icon: React.ReactNode;
  title: string;
  highlight: string;
  desc: string;
  topics: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 shadow-lg hover:shadow-xl transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-5xl mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300">{emoji}</div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-sm font-semibold text-primary/80 mb-3 uppercase tracking-wide">{highlight}</p>
        <p className="text-base text-foreground/65 mb-5 leading-relaxed">{desc}</p>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic) => (
            <span
              key={topic}
              className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-foreground/75 font-medium border border-primary/20 hover:border-primary/40 transition-colors"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function ExpertiseCard({
  icon,
  title,
  subtitle,
  desc,
  items,
}: {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <div className="text-4xl mb-2">{icon}</div>
      <h3 className="font-bold text-lg">{title}</h3>
      <p className="text-xs font-medium text-primary/70 mb-3">{subtitle}</p>
      <p className="text-xs text-muted-foreground mb-4">{desc}</p>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs">
            <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1 flex-shrink-0" />
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function EngagementCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-card/60 backdrop-blur hover:shadow-md transition-all"
    >
      <h3 className="font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </motion.div>
  );
}

function LinkCard({
  to,
  title,
  desc,
  image,
  icon,
}: {
  to: string;
  title: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Link
        to={to}
        className="group relative overflow-hidden rounded-xl border h-48 hover:shadow-lg transition-shadow"
      >
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
        <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-end">
          <div className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/20 text-primary">
              {icon}
            </span>
            <span>{title}</span>
          </div>
          <p className="mt-1 text-sm text-foreground/80 leading-relaxed">
            {desc}
          </p>
          <div className="mt-3 inline-flex items-center gap-1 w-fit rounded-md bg-background/70 px-2 py-1 text-sm font-semibold text-primary">
            <span className="group-hover:underline">Learn more</span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function DomainCard({
  to,
  title,
  desc,
  image,
  icon,
}: {
  to: string;
  title: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
    >
      <Link
        to={to}
        className="group relative overflow-hidden rounded-xl border h-48 hover:shadow-lg transition-shadow"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/60 to-background/20" />
        <div className="relative z-10 h-full p-5 md:p-6 flex flex-col justify-end">
          <div className="flex items-center gap-3 font-semibold">
            <span className="grid h-9 w-9 place-items-center rounded-md bg-primary/20 text-primary">
              {icon}
            </span>
            <span>{title}</span>
          </div>
          <p className="mt-1 text-sm text-foreground/80 leading-relaxed">
            {desc}
          </p>
          <div className="mt-3 inline-flex items-center gap-1 w-fit rounded-md bg-background/70 px-2 py-1 text-sm font-semibold text-primary">
            <span className="group-hover:underline">Learn more</span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

function IoTAppCard({
  title,
  desc,
  icon,
  examples,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  examples?: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
      className="rounded-lg border p-6 bg-background/70 hover:shadow-md transition-all"
    >
      <div className="mb-3 flex items-center justify-center h-12 w-12 rounded-lg bg-primary/15 text-primary">
        {icon}
      </div>
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3">{desc}</p>
      {examples && (
        <ul className="text-xs space-y-1">
          {examples.map((ex) => (
            <li key={ex} className="flex items-center gap-1 text-primary/70">
              <span className="h-1 w-1 rounded-full bg-primary" />
              {ex}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function Pill({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
}) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full border bg-background/80 backdrop-blur px-3 py-1 text-sm">
      {icon}
      {children}
    </span>
  );
}
