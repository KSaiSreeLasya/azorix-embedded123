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
                <Button
                  asChild
                  size="lg"
                  className="h-12 px-8 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200"
                >
                  <a href="/contact">Get Started</a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 px-8 text-base font-semibold rounded-lg border-2 hover:border-primary"
                >
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
            image="https://images.pexels.com/photos/3938016/pexels-photo-3938016.jpeg"
            icon={<Layers className="h-5 w-5" />}
            delay={0}
          />
          <LinkCard
            to="/projects"
            title="Projects"
            desc="Selected work across medical, industrial, consumer and automotive."
            image="https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg"
            icon={<Award className="h-5 w-5" />}
            delay={0.1}
          />
          <LinkCard
            to="/contact"
            title="Contact"
            desc="Talk to our team about your product or resource needs."
            image="https://images.pexels.com/photos/8728429/pexels-photo-8728429.jpeg"
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
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Qualcomm",
              logo: "https://cdn.builder.io/api/v1/image/assets%2F94c98e5ba7184650a99abe5e5bc2b664%2Ff84798c90742499b9c530c34302a27b3?format=webp&width=800",
            },
            {
              name: "Intel",
              logo: "https://cdn.builder.io/api/v1/image/assets%2F94c98e5ba7184650a99abe5e5bc2b664%2F996e70ded31f47c0ad70d8d408240e3e?format=webp&width=800",
            },
            {
              name: "Bosch",
              logo: "https://cdn.builder.io/api/v1/image/assets%2F94c98e5ba7184650a99abe5e5bc2b664%2F9c77ee4533c644ab8f645e74e4f5aeaf?format=webp&width=800",
            },
            {
              name: "Ford",
              logo: "https://cdn.builder.io/api/v1/image/assets%2F94c98e5ba7184650a99abe5e5bc2b664%2F9b867ed044cb4aa085cf221997f72ba8?format=webp&width=800",
            },
            {
              name: "Thermo Fisher Scientific",
              logo: "https://cdn.builder.io/api/v1/image/assets%2F94c98e5ba7184650a99abe5e5bc2b664%2Fb473361533db46029fe8b7f3fc44f72a?format=webp&width=800",
            },
            {
              name: "AMD",
              logo: "https://cdn.builder.io/api/v1/image/assets%2F94c98e5ba7184650a99abe5e5bc2b664%2Fb643fb8d25fb44678335e1d7ba418785?format=webp&width=800",
            },
            {
              name: "Tech Mahindra",
              logo: "https://cdn.builder.io/api/v1/image/assets%2F94c98e5ba7184650a99abe5e5bc2b664%2Fb7a7a132b1ad476a9b2f284c78b16c73?format=webp&width=800",
            },
            {
              name: "OnePlus",
              logo: "https://cdn.builder.io/api/v1/image/assets%2F94c98e5ba7184650a99abe5e5bc2b664%2F59a2e39f5e6a4c40a41d63ccc182a06c?format=webp&width=800",
            },
          ].map((client) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: "0 24px 48px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl border border-primary/20 p-8 flex flex-col items-center justify-center min-h-48 bg-gradient-to-br from-primary/5 to-accent/5 hover:from-primary/10 hover:to-accent/10 transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative flex items-center justify-center h-full w-full">
                <img
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  decoding="async"
                  className="max-h-20 max-w-[90%] object-contain opacity-75 group-hover:opacity-100 transition-opacity duration-300 filter grayscale group-hover:grayscale-0"
                />
              </div>
            </motion.div>
          ))}
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
        <div className="text-5xl mb-4 inline-block transform group-hover:scale-110 transition-transform duration-300">
          {emoji}
        </div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-sm font-semibold text-primary/80 mb-3 uppercase tracking-wide">
          {highlight}
        </p>
        <p className="text-base text-foreground/65 mb-5 leading-relaxed">
          {desc}
        </p>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-primary/15 p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 backdrop-blur hover:shadow-xl transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="font-bold text-2xl mb-2">{title}</h3>
        <p className="text-sm font-semibold text-primary/80 mb-4 uppercase tracking-wide">
          {subtitle}
        </p>
        <p className="text-base text-foreground/65 mb-6 leading-relaxed">
          {desc}
        </p>
        <ul className="space-y-3">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-sm">
              <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent mt-2 flex-shrink-0" />
              <span className="text-foreground/70 font-medium">{item}</span>
            </li>
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
  image,
  icon,
  delay = 0,
}: {
  to: string;
  title: string;
  desc: string;
  image: string;
  icon: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, type: "spring", stiffness: 100 }}
    >
      <Link
        to={to}
        className="group relative overflow-hidden rounded-3xl border-2 border-primary/30 h-64 hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-background to-background/80"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <img
          src={image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-50 transition-transform duration-500 group-hover:scale-120"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/98 via-background/60 to-background/5 group-hover:from-background/99 group-hover:via-background/70 transition-all duration-300" />
        <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-br from-primary/40 via-transparent to-accent/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 h-full p-7 md:p-10 flex flex-col justify-end">
          <div className="flex items-center gap-4 font-bold text-xl">
            <motion.span
              className="grid h-14 w-14 place-items-center rounded-xl bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg group-hover:shadow-2xl transition-all"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              {icon}
            </motion.span>
            <span className="group-hover:text-primary transition-colors duration-300">
              {title}
            </span>
          </div>
          <p className="mt-4 text-base text-foreground/70 leading-relaxed font-medium">
            {desc}
          </p>
          <motion.div
            className="mt-5 inline-flex items-center gap-2 w-fit rounded-lg bg-gradient-to-r from-primary/25 to-accent/25 px-5 py-2.5 text-sm font-bold text-primary border-2 border-primary/50 hover:border-primary/80 transition-all"
            whileHover={{ x: 4 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <span className="group-hover:text-primary/90">Learn more</span>
            <span
              aria-hidden
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </motion.div>
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link
        to={to}
        className="group relative overflow-hidden rounded-2xl border border-primary/20 h-56 hover:shadow-2xl transition-all duration-300"
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover opacity-60 transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/10 group-hover:from-background/97 group-hover:via-background/60 transition-all" />
        <div className="relative z-10 h-full p-6 md:p-8 flex flex-col justify-end">
          <div className="flex items-center gap-3 font-bold text-lg">
            <span className="grid h-12 w-12 place-items-center rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg group-hover:shadow-xl transition-all">
              {icon}
            </span>
            <span className="group-hover:text-primary transition-colors">
              {title}
            </span>
          </div>
          <p className="mt-3 text-base text-foreground/75 leading-relaxed">
            {desc}
          </p>
          <div className="mt-4 inline-flex items-center gap-2 w-fit rounded-lg bg-gradient-to-r from-primary/20 to-accent/20 px-4 py-2 text-sm font-bold text-primary border border-primary/30 hover:border-primary/60 transition-all">
            <span className="group-hover:text-primary/90">Learn more</span>
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-1"
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
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6, boxShadow: "0 24px 48px rgba(0,0,0,0.12)" }}
      transition={{ duration: 0.5 }}
      className="relative rounded-2xl border border-primary/15 p-8 bg-gradient-to-br from-primary/5 via-background to-accent/5 hover:shadow-xl transition-all group overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative">
        <div className="mb-4 flex items-center justify-center h-14 w-14 rounded-lg bg-gradient-to-br from-primary to-accent text-primary-foreground shadow-lg transform group-hover:scale-110 transition-transform">
          {icon}
        </div>
        <h3 className="font-bold text-lg mb-3">{title}</h3>
        <p className="text-base text-foreground/65 mb-5 leading-relaxed">
          {desc}
        </p>
        {examples && (
          <ul className="text-sm space-y-2.5">
            {examples.map((ex) => (
              <li
                key={ex}
                className="flex items-center gap-2 text-foreground/70 font-medium"
              >
                <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent flex-shrink-0" />
                {ex}
              </li>
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
