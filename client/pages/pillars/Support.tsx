import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import { Users, BookOpen, Headphones, Zap, Target, Globe } from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Support() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Support & Expert Guidance Pillar | Embinsys"
        description="Team augmentation, technical training, troubleshooting, and ongoing support. Expert guidance for your engineering challenges."
        canonicalPath="/pillars/support"
      />
      <Section container>
        <DomainHero
          title="Support & Expertise"
          subtitle="We're here to help. Training, troubleshooting, team augmentation, and expert guidance to make your engineering successful."
          image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          icon={<Users className="h-5 w-5" />}
        />
      </Section>

      {/* What We Do */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What We Do</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Support means more than just answering questions. We provide hands-on
          training, troubleshoot complex problems, augment your teams with
          skilled engineers, and provide guidance throughout your project
          lifecycle.
        </p>
      </Section>

      {/* Key Capabilities */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <CapabilityCard
            index={0}
            icon={<Users className="h-6 w-6" />}
            title="Team Augmentation"
            desc="Add skilled engineers to your team as needed to accelerate development"
          />
          <CapabilityCard
            index={1}
            icon={<BookOpen className="h-6 w-6" />}
            title="Technical Training"
            desc="Training your team on new technologies and best practices"
          />
          <CapabilityCard
            index={2}
            icon={<Headphones className="h-6 w-6" />}
            title="Troubleshooting"
            desc="Expert diagnosis and resolution of complex technical problems"
          />
          <CapabilityCard
            index={3}
            icon={<Target className="h-6 w-6" />}
            title="Knowledge Transfer"
            desc="Making sure your team fully understands what we've built"
          />
          <CapabilityCard
            index={4}
            icon={<Zap className="h-6 w-6" />}
            title="Escalation Support"
            desc="Quick access to senior experts when you need them most"
          />
          <CapabilityCard
            index={5}
            icon={<Globe className="h-6 w-6" />}
            title="Global Availability"
            desc="24/7 support across multiple time zones from our global offices"
          />
        </div>
      </Section>

      {/* Support Models */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          How We Support You
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <SupportModel
            title="Onsite Engineers"
            desc="Our team members work directly with your team at your office"
          />
          <SupportModel
            title="Remote Support"
            desc="Guidance and collaboration from our offices using modern tools"
          />
          <SupportModel
            title="Hybrid Model"
            desc="Combination of onsite and remote support tailored to your needs"
          />
        </div>
      </Section>

      {/* Training Topics */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Training Areas</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <TrainingBox
            title="Technology Training"
            items={[
              "Embedded systems fundamentals",
              "Real-time operating systems",
              "Wireless protocols and connectivity",
              "Cloud integration and IoT",
              "Security and cryptography",
            ]}
          />
          <TrainingBox
            title="Process Training"
            items={[
              "Software development best practices",
              "Automated testing and CI/CD",
              "Design reviews and quality assurance",
              "Project management and collaboration",
              "Technical documentation",
            ]}
          />
        </div>
      </Section>

      {/* Engagement Flexibility */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Flexible Engagement
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          Every project is different. We adjust our support model to match your
          needs - whether you need a few hours of consultation, an engineer for
          several months, or long-term strategic guidance.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <EngagementOption
            duration="Short-term"
            desc="Workshops, training, and troubleshooting sessions"
          />
          <EngagementOption
            duration="Medium-term"
            desc="Resource augmentation for specific projects or phases"
          />
          <EngagementOption
            duration="Long-term"
            desc="Ongoing support, mentoring, and strategic guidance"
          />
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Why Partner With Us
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <BenefitBox
            title="Experienced Team"
            items={[
              "25+ years in embedded systems",
              "80+ senior engineers",
              "Experience with major manufacturers",
              "Deep technical expertise",
            ]}
          />
          <BenefitBox
            title="Responsive Support"
            items={[
              "Quick response to issues",
              "Escalation when needed",
              "Global availability",
              "Flexible engagement models",
            ]}
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Need Expert Support?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Our support team is ready to help you succeed with training,
            guidance, and skilled engineers.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
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

function SupportModel({ title, desc }: { title: string; desc: string }) {
  return (
    <AnimatedCard variant="default">
      <div className="text-center">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-primary/20 text-primary font-bold mb-4">
          🤝
        </div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </AnimatedCard>
  );
}

function TrainingBox({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}

function EngagementOption({
  duration,
  desc,
}: {
  duration: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="hover-lift">
      <h3 className="font-semibold mb-2">{duration}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </AnimatedCard>
  );
}

function BenefitBox({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="hover-glow">
      <h3 className="font-semibold text-lg mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2">
            <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
            <span className="text-muted-foreground text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </AnimatedCard>
  );
}
