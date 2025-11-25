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
                Enabling global companies with product and engineering services.
                Start-to-finish embedded systems expertise across hardware,
                software, testing, and support.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="mt-8 flex flex-wrap gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    size="lg"
                    className="h-12 px-8 text-base font-semibold rounded-lg shadow-lg hover:shadow-2xl transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
                  >
                    <a href="/contact">Get Started</a>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="h-12 px-8 text-base font-semibold rounded-lg border-2 border-primary/50 hover:border-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <a href="/capabilities">Explore Capabilities</a>
                  </Button>
                </motion.div>
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
              whileHover={{ y: -8 }}
              className="relative group"
            >
              <motion.div
                className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-primary rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300" />
              <img
                src="https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200&h=800"
                alt="Embedded device PCB and components"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="relative rounded-2xl border-2 border-primary/30 shadow-2xl object-cover w-full h-[280px] md:h-[360px] lg:h-[480px] group-hover:border-primary/50 transition-all duration-300"
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Company Overview */}
      <Section className="bg-gradient-to-b from-background to-secondary/30">
        <div className="mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            About Embinsys
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-foreground/70 max-w-3xl leading-relaxed font-medium"
          >
            For over 25 years, Embinsys has been enabling global companies with
            comprehensive product and engineering services. With dual offices in
            Troy, Michigan (USA) and Hyderabad, India, and a team of 80+
            experienced engineers, we deliver end-to-end embedded systems
            solutions with a focus on quality, reliability, and innovation.
          </motion.p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <OverviewCard
            icon={<Rocket className="h-5 w-5" />}
            title="Full-Stack Expertise"
            desc="Hardware design, firmware, software, testing, and support"
            index={0}
          />
          <OverviewCard
            icon={<Shield className="h-5 w-5" />}
            title="Reliable Execution"
            desc="Quality and technology-focused with proven track record"
            index={1}
          />
          <OverviewCard
            icon={<Globe className="h-5 w-5" />}
            title="Global Reach"
            desc="Serving multinational companies and startups worldwide"
            index={2}
          />
          <OverviewCard
            icon={<Zap className="h-5 w-5" />}
            title="Extended Teams"
            desc="Resource augmentation and flexible engagement models"
            index={3}
          />
        </div>
      </Section>

      {/* Quick links */}
      <Section>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4"
          >
            Explore Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto font-medium"
          >
            Discover our capabilities, view our work, or get in touch with our
            team
          </motion.p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <LinkCard
            to="/capabilities"
            title="Capabilities"
            desc="End‑to‑end product engineering across hardware, software, and test."
            icon={<Layers className="h-5 w-5" />}
            delay={0}
          />
          <LinkCard
            to="/projects"
            title="Projects"
            desc="Selected work across medical, industrial, consumer and automotive."
            icon={<Award className="h-5 w-5" />}
            delay={0.1}
          />
          <LinkCard
            to="/contact"
            title="Contact"
            desc="Talk to our team about your product or resource needs."
            icon={<Wrench className="h-5 w-5" />}
            delay={0.2}
          />
        </div>
      </Section>

      {/* Centers of Excellence */}
      <Section className="bg-gradient-to-b from-background to-secondary/30">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
          >
            Specialized Teams for Every Market
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Expert centers focused on specific industries - each with deep
            knowledge and proven track records
          </motion.p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link to="/teams/handheld-iot">
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
              index={0}
            />
          </Link>
          <Link to="/teams/medical">
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
              index={1}
            />
          </Link>
          <Link to="/teams/automotive">
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
              index={2}
            />
          </Link>
          <Link to="/teams/silicon">
            <CoECard
              emoji="⚙️"
              icon={<Cpu className="h-6 w-6" />}
              title="Silicon & SoC"
              highlight="Chip Design"
              desc="Enabling next-generation processors"
              topics={["Bootloaders", "Drivers", "Performance", "Validation"]}
              index={3}
            />
          </Link>
        </div>
      </Section>

      {/* Expertise Capabilities */}
      <Section>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4"
          >
            Four Pillars of Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Complete end-to-end engineering solutions from hardware to
            deployment
          </motion.p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <Link to="/pillars/product">
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
              index={0}
            />
          </Link>
          <Link to="/pillars/software">
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
              index={1}
            />
          </Link>
          <Link to="/pillars/testing">
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
              index={2}
            />
          </Link>
          <Link to="/pillars/support">
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
              index={3}
            />
          </Link>
        </div>
      </Section>

      {/* Engagement Models */}
      <Section className="bg-gradient-to-b from-background to-secondary/30">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4"
        >
          Engagement Models
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg text-foreground/70 max-w-3xl leading-relaxed mb-12 font-medium"
        >
          Flexible partnerships tailored to your project needs.
        </motion.p>
        <div className="grid gap-6 md:grid-cols-3">
          <Link to="/engagement/project-sow">
            <EngagementCard
              title="Project / SoW"
              desc="Complete project delivery with defined scope of work and timeline"
            />
          </Link>
          <Link to="/engagement/resource-augmentation">
            <EngagementCard
              title="Resource Augmentation"
              desc="Scale your team with skilled engineers working as extended team"
            />
          </Link>
          <Link to="/engagement/bot">
            <EngagementCard
              title="Build Operate Transfer"
              desc="Build capability, operate services, then transfer to your team"
            />
          </Link>
        </div>
      </Section>

      {/* Domains */}
      <Section>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent"
        >
          Domains
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-foreground/70 max-w-3xl leading-relaxed mb-12 font-medium"
        >
          Where we deliver the most impact across industries and technologies.
        </motion.p>
        <div className="rounded-xl border bg-card/60 backdrop-blur p-4 md:p-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DomainCard
              to="/domains/iot"
              title="IoT"
              desc="Firmware design, embedded applications, web services, hardware, mobile apps, platform integration"
              icon={<Wifi className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/medical"
              title="Medical"
              desc="Regulated devices, sensors, connectivity, R&D, clinical processes, firmware"
              icon={<Stethoscope className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/automotive"
              title="Automotive"
              desc="BSP, telematics, CAN/UDS/J1939, firmware, connectivity, compliance"
              icon={<Car className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/soc"
              title="SoC"
              desc="BSP, bootloaders, drivers, connectivity, audio, silicon design"
              icon={<Cpu className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/hardware"
              title="Hardware"
              desc="Schematics, PCB layout, bring‑up, testing, manufacturing support"
              icon={<CircuitBoard className="h-5 w-5" />}
            />
            <DomainCard
              to="/domains/testing"
              title="Testing"
              desc="Automation, stability, verification, functional testing, frameworks"
              icon={<Wrench className="h-5 w-5" />}
            />
          </div>
        </div>
      </Section>

      {/* IoT Applications */}
      <Section className="bg-gradient-to-b from-background to-secondary/30">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4"
          >
            IoT Applications
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-3xl mx-auto leading-relaxed font-medium"
          >
            Smart devices that make everyday tasks smarter, faster, and more
            efficient
          </motion.p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          <Link to="/iot/industrial">
            <IoTAppCard
              title="🏭 Industrial IoT"
              desc="Factories that monitor themselves - machines that predict problems before they happen"
              icon={<Zap className="h-6 w-6" />}
              examples={[
                "Predictive maintenance",
                "Production optimization",
                "Equipment monitoring",
              ]}
              index={0}
            />
          </Link>
          <Link to="/iot/medical">
            <IoTAppCard
              title="🏥 Medical IoT"
              desc="Devices that care for your health - from monitoring your heart to tracking fitness"
              icon={<Stethoscope className="h-6 w-6" />}
              examples={[
                "Health monitoring",
                "Patient alerts",
                "Remote diagnosis",
              ]}
              index={1}
            />
          </Link>
          <Link to="/iot/smart-city">
            <IoTAppCard
              title="🏙️ Smart City"
              desc="Cities that work efficiently - traffic flows better, utilities use less energy"
              icon={<Globe className="h-6 w-6" />}
              examples={["Traffic management", "Energy saving", "Public safety"]}
              index={2}
            />
          </Link>
          <Link to="/iot/automotive">
            <IoTAppCard
              title="🚗 Automotive IoT"
              desc="Cars that are smarter and safer - connected and aware of their surroundings"
              icon={<Car className="h-6 w-6" />}
              examples={["Navigation", "Safety features", "Remote control"]}
              index={3}
            />
          </Link>
          <Link to="/iot/consumer">
            <IoTAppCard
              title="📱 Consumer IoT"
              desc="Home devices that listen and respond - making life simpler and more connected"
              icon={<Smartphone className="h-6 w-6" />}
              examples={["Smart home", "Wearables", "Personal devices"]}
              index={4}
            />
          </Link>
        </div>
      </Section>

      {/* Client Partners */}
      <Section>
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent mb-4"
          >
            Trusted by Global Leaders
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-foreground/70 max-w-2xl mx-auto font-medium"
          >
            Our expertise is trusted by Fortune 500 companies and leading
            innovators worldwide
          </motion.p>
        </div>
        <div className="marquee-container">
          <div className="marquee-content animate-marquee">
            {[
              {
                name: "Qualcomm",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2Febf2ef164d994b569d71f886ae6009ac?format=webp&width=800",
                size: "max-h-16",
              },
              {
                name: "Intel",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2F1fe0861a53234f258ae05b386a218919?format=webp&width=800",
                size: "max-h-16",
              },
              {
                name: "Bosch",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2Fd561fc3109de4576ab82554c59cbf464?format=webp&width=800",
                size: "max-h-16",
              },
              {
                name: "Ford",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2F4ba3011410274053ae9c2ac7560f311a?format=webp&width=800",
                size: "max-h-16",
              },
              {
                name: "Thermo Fisher Scientific",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2Fc33c02f95c7e4e5a9dafd9e8f214ac20?format=webp&width=800",
                size: "max-h-24",
              },
              {
                name: "AMD",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2Fb04649cc615a496a856fe43a6b580976?format=webp&width=800",
                size: "max-h-24",
              },
              {
                name: "Tech Mahindra",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2F4a8685ebce2c4f1784f5b8bb8245e7ce?format=webp&width=800",
                size: "max-h-24",
              },
              {
                name: "OnePlus",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2F0e0f616b739c44a594f103a1b958f321?format=webp&width=800",
                size: "max-h-24",
              },
              {
                name: "Qualcomm",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2Febf2ef164d994b569d71f886ae6009ac?format=webp&width=800",
                size: "max-h-16",
              },
              {
                name: "Intel",
                logo: "https://cdn.builder.io/api/v1/image/assets%2Fd7c7391d30904ea7881376e6ef9502a6%2F1fe0861a53234f258ae05b386a218919?format=webp&width=800",
                size: "max-h-16",
              },
            ].map((client, idx) => (
              <div
                key={`${client.name}-${idx}`}
                className="relative rounded-2xl border border-primary/20 p-6 flex flex-col items-center justify-center min-h-40 min-w-40 bg-gradient-to-br from-primary/5 to-accent/5 transition-all duration-300 group overflow-hidden flex-shrink-0"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center justify-center h-full w-full">
                  <img
                    src={client.logo}
                    alt={client.name}
                    loading="lazy"
                    decoding="async"
                    className={`${client.size} max-w-[85%] object-contain opacity-90 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA band */}
      <Section container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden rounded-3xl border border-primary/30 p-10 md:p-16 bg-gradient-to-br from-primary/15 via-background to-accent/10 shadow-xl"
        >
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -bottom-32 -left-40 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="relative flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div>
              <h3 className="text-2xl md:text-3xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Ready to build your next product?
              </h3>
              <p className="text-foreground/65 mt-3 text-lg font-medium">
                Collaborate with a dependable engineering partner with 25+ years
                of expertise.
              </p>
            </div>
            <Button
              asChild
              size="lg"
              className="md:flex-shrink-0 h-12 px-8 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
            >
              <a href="/contact">Start a conversation</a>
            </Button>
          </div>
        </motion.div>
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
        <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          {kpi}
        </div>
        <div className="text-sm md:text-base font-semibold text-foreground/60 mt-2">
          {label}
        </div>
      </div>
    </motion.div>
  );
}

function OverviewCard({
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
      whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-7 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div className="absolute top-0 right-0 h-40 w-40 bg-gradient-to-bl from-primary/20 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <motion.div
          className="flex items-center gap-3 font-bold mb-3 text-lg"
          whileHover={{ x: 4 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="grid h-10 w-10 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ duration: 0.2 }}
          >
            {icon}
          </motion.span>
          {title}
        </motion.div>
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
  index = 0,
}: {
  emoji: string;
  icon: React.ReactNode;
  title: string;
  highlight: string;
  desc: string;
  topics: string[];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-8 shadow-lg hover:shadow-xl hover:border-primary/40 transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div className="absolute -top-10 -right-10 h-40 w-40 bg-gradient-to-bl from-accent/20 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <motion.div
          className="text-5xl mb-4 inline-block"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          {emoji}
        </motion.div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-sm font-semibold text-primary/80 mb-3 uppercase tracking-wide">
          {highlight}
        </p>
        <p className="text-base text-foreground/65 mb-5 leading-relaxed">
          {desc}
        </p>
        <div className="flex flex-wrap gap-2">
          {topics.map((topic, idx) => (
            <motion.span
              key={topic}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              whileHover={{
                scale: 1.05,
                backgroundColor: "rgba(var(--primary-rgb), 0.2)",
              }}
              className="text-xs px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 text-foreground/75 font-medium border border-primary/20 hover:border-primary/40 transition-colors"
            >
              {topic}
            </motion.span>
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
  index = 0,
}: {
  icon: string;
  title: string;
  subtitle: string;
  desc: string;
  items: string[];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-2xl border border-primary/15 p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 backdrop-blur hover:shadow-xl hover:border-primary/40 transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div className="absolute -bottom-10 -right-10 h-40 w-40 bg-gradient-to-tl from-primary/20 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <motion.div
          className="text-5xl mb-4"
          whileHover={{ scale: 1.15, rotate: -5 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-sm font-semibold text-primary/80 mb-4 uppercase tracking-wide">
          {subtitle}
        </p>
        <p className="text-base text-foreground/65 mb-6 leading-relaxed">
          {desc}
        </p>
        <ul className="space-y-3">
          {items.map((item, idx) => (
            <motion.li
              key={item}
              className="flex items-start gap-3 text-sm"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
            >
              <motion.span
                className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0"
                whileInView={{ scale: [0, 1.2, 1] }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 + 0.2 }}
              />
              <span className="text-foreground/70 font-medium">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

function EngagementCard({ title, desc }: { title: string; desc: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-primary/15 p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 backdrop-blur hover:shadow-lg transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <h3 className="font-bold text-xl mb-3">{title}</h3>
        <p className="text-base text-foreground/65 leading-relaxed">{desc}</p>
      </div>
    </motion.div>
  );
}

function LinkCard({
  to,
  title,
  desc,
  icon,
  delay = 0,
}: {
  to: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <Link
        to={to}
        className="group relative rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-7 shadow-lg hover:shadow-xl transition-all overflow-hidden block"
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
      </Link>
    </motion.div>
  );
}

function DomainCard({
  to,
  title,
  desc,
  icon,
}: {
  to: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={to}
        className="group relative rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-accent/5 p-7 shadow-lg hover:shadow-xl transition-all overflow-hidden block"
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
      </Link>
    </motion.div>
  );
}

function IoTAppCard({
  title,
  desc,
  icon,
  examples,
  index = 0,
}: {
  title: string;
  desc: string;
  icon: React.ReactNode;
  examples?: string[];
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8, boxShadow: "0 32px 64px rgba(0,0,0,0.15)" }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-2xl border border-primary/15 p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 hover:shadow-xl hover:border-primary/40 transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <motion.div className="absolute -top-10 -left-10 h-40 w-40 bg-gradient-to-br from-accent/20 via-transparent to-transparent rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <motion.div
          className="mb-4 flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg"
          whileHover={{ scale: 1.2, rotate: 10 }}
          transition={{ duration: 0.3 }}
        >
          {icon}
        </motion.div>
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <p className="text-base text-foreground/65 mb-5 leading-relaxed">
          {desc}
        </p>
        {examples && (
          <ul className="text-sm space-y-2.5">
            {examples.map((ex, idx) => (
              <motion.li
                key={ex}
                className="flex items-center gap-2 text-foreground/70 font-medium"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
              >
                <motion.span
                  className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0"
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.05 + 0.1 }}
                />
                {ex}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
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
    <motion.span
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur px-4 py-2 text-sm font-semibold text-foreground hover:border-primary/50 hover:bg-gradient-to-r hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md"
    >
      {icon && <span className="text-primary">{icon}</span>}
      {children}
    </motion.span>
  );
}
