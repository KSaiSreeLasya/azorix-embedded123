import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";

export default function Index() {
  return (
    <div id="home" className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />

      {/* Hero */}
      <Section container>
        <div className="grid gap-6 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Innovation. Quality. Reliability.
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Engineering & Design Services for embedded, IoT, medical, automotive and
              silicon domains. We partner as an extended team to deliver end‑to‑end
              product outcomes.
            </p>
            <div className="mt-6 flex gap-3">
              <a className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-primary-foreground font-medium shadow hover:opacity-90" href="#contact">
                Contact Us
              </a>
              <a className="inline-flex items-center rounded-md border px-4 py-2 font-medium hover:bg-accent" href="#expertise">
                Explore Expertise
              </a>
            </div>
          </div>
          <div className="rounded-xl border bg-secondary/40 p-6">
            <div className="grid gap-2 text-sm">
              <div className="font-semibold">Embinsys EDS Snapshot</div>
              <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                <li>Enabling global companies with Product and Engineering services</li>
                <li>Start‑to‑finish embedded systems and deep OS expertise</li>
                <li>Industries: SoC, medical, handset, automotive</li>
                <li>Architectures: x86, TI‑OMAP, NXP, Qualcomm, STM32, Nordic, ESP32, ATMEL, Microchip</li>
                <li>Centers of Excellence: Handheld & IoT, Medical devices, Automotive, SoC</li>
                <li>Reliable execution, quality and technology focused</li>
                <li>Engagement models: Project/SoW, Resource Augmentation, Build‑Operate‑Transfer</li>
                <li>25+ years leadership • 12+ years • 80+ team • Troy, MI & Hyderabad, India</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Partnering */}
      <Section>
        <div className="grid gap-6 md:grid-cols-3 items-start">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold">Partnering with Clients</h2>
            <p className="mt-3 text-muted-foreground">
              We build meaningful partnerships to support projects and teams, accelerating
              success by adding value, reducing costs, eliminating pain points and
              complementing technologies.
            </p>
          </div>
          <div className="rounded-lg border p-5 bg-secondary/30">
            <div className="font-semibold mb-2">Start to Finish Product Expertise</div>
            <p className="text-sm text-muted-foreground">
              System design, hardware, software, test, compliance, maintenance delivered by
              a mature technical and management team with 25+ years of industry experience.
            </p>
          </div>
        </div>
      </Section>

      {/* Embedded Expertise */}
      <Section id="expertise">
        <h2 className="text-2xl font-bold">Embedded Expertise</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-6">
            <div className="font-semibold mb-2">Product</div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Requirements, system & schematic design, PCB layout and reviews</li>
              <li>BOM analysis and cleansing</li>
              <li>Project planning and management</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <div className="font-semibold mb-2">Software</div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Board bring‑up, bootloader, BSP, drivers</li>
              <li>RTOS/Linux/QNX/VxWorks/Android</li>
              <li>CAN/UDS/J1939/Autosar, telematics, RF/Network stacks, multimedia, UI</li>
              <li>Debugging crashes, race conditions, memory corruption</li>
              <li>Build & Integration/CI‑CD, system integration</li>
            </ul>
          </div>
          <div className="rounded-lg border p-6">
            <div className="font-semibold mb-2">Testing & Support</div>
            <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
              <li>Framework development, automation, test case creation & execution</li>
              <li>Failure analysis, black‑box, functional, stability, verification</li>
              <li>In‑house embedded lab, ODC/SoW, resource augmentation</li>
              <li>Successful with startups and multinationals, strong leadership, hands‑on training</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Centers of Excellence */}
      <Section id="coes" className="bg-secondary/30">
        <h2 className="text-2xl font-bold">Centers of Excellence (CoE)</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-4">
          <Card title="Handheld devices & IoT" items={[
            "Android apps, framework, HAL",
            "OS expertise, BSP & drivers",
            "RF/Modem/Connectivity, telephony",
            "Multimedia: Audio",
            "QA: test design & automation",
          ]} />
          <Card title="Internet of Things (IoT)" items={[
            "Firmware & embedded app design",
            "Web services & APIs",
            "Hardware & PCB",
            "Mobile apps",
            "Platform integration (AWS/Azure/Thingworx)",
          ]} />
          <Card title="Medical Devices CoE" items={[
            "R&D, clinical/regulatory, documentation",
            "End‑to‑end IoT firmware development",
            "Droplet dispenser, AAS, Gas analyzers",
            "Dual pumps for chromatography, CO2 incubator",
          ]} />
          <Card title="Automotive & SoC" items={[
            "Advanced C/C++/Embedded C, Python, Shell",
            "Linux/FreeRTOS/ThreadX/QNX/Android",
            "BSPs, bootloaders, MISRA C/C++",
            "TCP/IP, UART, I2C, SPI, USB, BLE/Bluetooth/Zigbee/Wi‑Fi",
            "Silicon design & verification",
          ]} />
        </div>
      </Section>

      {/* Applications */}
      <Section>
        <h2 className="text-2xl font-bold">Internet of Things – Applications</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-5 text-sm text-muted-foreground">
          <AppCard title="Industrial IoT" text="Smart manufacturing with direct control, optimization for existing and new equipment." />
          <AppCard title="Medical IoT" text="Sensors for monitoring/diagnosis; MRI, CT, sonography, digital flow, fetal monitoring." />
          <AppCard title="Smart City" text="Use ICTs to improve life, connectivity and service efficiency: INFRA → INTEGRATE SYSTEMS → AUTOMATE." />
          <AppCard title="Automotive IoT" text="Improve efficiency, safety, comfort while managing complexity and reliability." />
          <AppCard title="Consumer IoT" text="Convenience through MEMS, wireless and internet across home and work." />
        </div>
      </Section>

      {/* Projects (sample) */}
      <Section id="projects" className="bg-secondary/30">
        <h2 className="text-2xl font-bold">Projects (Selected)</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3 text-sm text-muted-foreground">
          <Proj title="Smart Knee Joint Monitor" points={[
            "DA14682 BLE SoC, real‑time knee angle monitoring with haptics",
            "Custom HW, firmware, Android app",
            "Drivers: I2C (MPU), SPI (ICM), ADC (muscle), BLE publishing",
          ]} />
          <Proj title="Dashpod Module" points={["nRF52833 DK","OTA using nRF Connect","Acconeer A111 radar","6D accelerometer","Addressable LED"]} />
          <Proj title="Commercial RO" points={["TI MSP432E401Y","I2C for TDS, ADC for temperature","GPIO for flow measurement","UART for GSM/GPS/Wi‑Fi modules"]} />
          <Proj title="Tdot (ESP32)" points={["IoT hub for Zigbee HA devices","Mobile control, Wi‑Fi repeater mode"]} />
          <Proj title="Shifu" points={["Qualcomm IPQ4019","Smart speaker with Bluetooth & Alexa","IoT Gateway (Z‑Wave & Zigbee)","Wi‑Fi SON Mesh router"]} />
          <Proj title="Smart Electricity Reader" points={["Qualcomm MSM8909","Board bring‑up","C++/Qt UI, keyboard & display drivers","GPS/GSM/Wi‑Fi cloud connectivity"]} />
          <Proj title="IoT Controller" points={["ESP32 chipset","Schematics, risk mgmt, placement, routing, testing"]} />
          <Proj title="Wi‑Fi Bridge" points={["MXChip MX3239","Schematics, risk mgmt, placement, routing, testing"]} />
          <Proj title="Smart Band" points={["nRF51822 BLE","HR & steps, Android BLE client, notifications"]} />
          <Proj title="Smart Helmet" points={["TI OMAP4430","BT3→BT4, camera tuning, brightness, navigation"]} />
          <Proj title="Smart YogiFi Yoga Mat" points={["MSP432P401R + Raspberry Pi 0","22‑ch ADC drivers, UART to Pi, posture via BT"]} />
          <Proj title="BP Monitor" points={["BLE BP notifications, Android client, UI display"]} />
          <Proj title="Smart Lock" points={["Quectel EC25 + nRF52832","BLE GATT server & Android/Web clients"]} />
          <Proj title="SMART NFRA" points={["Connectivity, lighting, security, asset & utilities management (HW & SW)"]} />
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact">
        <div className="rounded-lg border p-6">
          <h2 className="text-2xl font-bold">Contact</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-3 text-sm text-muted-foreground">
            <div>
              <div className="font-medium text-foreground">Website</div>
              <a className="underline" href="https://www.embinsys.com" target="_blank" rel="noreferrer">www.embinsys.com</a>
            </div>
            <div>
              <div className="font-medium text-foreground">Email</div>
              <a className="underline" href="mailto:info@embinsys.com">info@embinsys.com</a>
            </div>
            <div>
              <div className="font-medium text-foreground">Address</div>
              <div>3rd Floor, VSSR Square, Vittal Rao Nagar, HITEC City, Hyderabad, Telangana 500081, India</div>
            </div>
          </div>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function Card({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border p-6">
      <div className="font-semibold mb-2">{title}</div>
      <ul className="list-disc pl-5 space-y-1 text-sm text-muted-foreground">
        {items.map((i) => (
          <li key={i}>{i}</li>
        ))}
      </ul>
    </div>
  );
}

function AppCard({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border p-5">
      <div className="font-semibold mb-1">{title}</div>
      <p className="text-sm text-muted-foreground">{text}</p>
    </div>
  );
}

function Proj({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="rounded-lg border p-5">
      <div className="font-semibold mb-2">{title}</div>
      <ul className="list-disc pl-5 space-y-1">
        {points.map((p) => (
          <li key={p} className="text-sm text-muted-foreground">{p}</li>
        ))}
      </ul>
    </div>
  );
}
