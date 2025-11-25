import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Users,
  Zap,
  BarChart3,
  Clock,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ResourceAugmentation() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Resource Augmentation Model | Embinsys"
        description="Scale your team with skilled engineers. Flexible engagement for specific timelines or ongoing needs."
        canonicalPath="/engagement/resource-augmentation"
      />
      <Section container>
        <DomainHero
          title="Resource Augmentation"
          subtitle="Scale your team with expert engineers. They work as part of your team, focused on your priorities, for as long as you need."
          image="https://images.pexels.com/photos/3183097/pexels-photo-3183097.jpeg"
          icon={<Users className="h-5 w-5" />}
        />
      </Section>

      {/* Overview */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What Is This Model?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          You need more hands. We provide skilled engineers who join your team
          and work on your projects. They integrate with your team, follow your
          processes, and contribute their expertise. Perfect for scaling
          capacity or getting specific expertise quickly.
        </p>
      </Section>

      {/* Best For */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Best For</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <UseCase
            icon="👥"
            title="Scaling Teams"
            desc="Need more engineers for a period"
          />
          <UseCase
            icon="🎯"
            title="Specific Expertise"
            desc="Need specialists for key areas"
          />
          <UseCase
            icon="⏱️"
            title="Flexible Duration"
            desc="Short-term or long-term flexibility"
          />
          <UseCase
            icon="📈"
            title="Quick Ramp-Up"
            desc="Get started within days"
          />
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">How It Works</h2>
        <div className="space-y-6">
          <ProcessStep
            step="1"
            title="Skill Assessment"
            desc="We understand what skills and expertise you need"
          />
          <ProcessStep
            step="2"
            title="Team Formation"
            desc="We assemble the right team members for your needs"
          />
          <ProcessStep
            step="3"
            title="Integration"
            desc="Engineers onboard to your team and processes"
          />
          <ProcessStep
            step="4"
            title="Contribution"
            desc="They work directly on your projects alongside your team"
          />
          <ProcessStep
            step="5"
            title="Ongoing Support"
            desc="We manage, support, and adjust the team as needed"
          />
        </div>
      </Section>

      {/* Flexibility */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Ultimate Flexibility
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <FlexibilityOption
            title="Duration"
            desc="From a few weeks to years, based on your needs"
          />
          <FlexibilityOption
            title="Engagement"
            desc="Onsite, remote, or hybrid - whatever works for you"
          />
          <FlexibilityOption
            title="Scale"
            desc="One engineer or a full team - adjust as you go"
          />
        </div>
      </Section>

      {/* Types of Resources */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Types of Resources
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <ResourceBox
            title="Technical Specialists"
            items={[
              "Firmware engineers",
              "Hardware designers",
              "Software architects",
              "Systems engineers",
              "IoT specialists",
            ]}
          />
          <ResourceBox
            title="Team Roles"
            items={[
              "Project leads",
              "Technical mentors",
              "QA and testing specialists",
              "Integration engineers",
              "Support engineers",
            ]}
          />
        </div>
      </Section>

      {/* Advantages */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Advantages</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <BenefitBox
            title="Cost Efficient"
            items={[
              "No hiring overhead",
              "Pay only for what you use",
              "No long-term commitments",
              "No HR administration",
            ]}
          />
          <BenefitBox
            title="Quick & Easy"
            items={[
              "Start within days",
              "Experienced team members",
              "Minimal onboarding time",
              "Immediate productivity",
            ]}
          />
        </div>
      </Section>

      {/* Success Factors */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          For Maximum Success
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <SuccessFactor
            icon="🎯"
            title="Clear Direction"
            desc="Help your team understand the project goals and priorities"
          />
          <SuccessFactor
            icon="📞"
            title="Regular Communication"
            desc="Keep everyone aligned and address blockers quickly"
          />
          <SuccessFactor
            icon="🤝"
            title="Team Integration"
            desc="Integrate augmented team members into your process and culture"
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Scale Your Team?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your needs and find the right engineers to augment
            your team.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Talk to Us</Link>
          </Button>
        </div>
      </Section>

      <SiteFooter />
    </div>
  );
}

function UseCase({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="hover-glow">
      <div className="text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </AnimatedCard>
  );
}

function ProcessStep({
  step,
  title,
  desc,
}: {
  step: string;
  title: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="default">
      <div className="flex gap-4">
        <div className="flex-shrink-0">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/20 text-primary font-bold">
            {step}
          </div>
        </div>
        <div>
          <h3 className="font-semibold mb-2">{title}</h3>
          <p className="text-muted-foreground">{desc}</p>
        </div>
      </div>
    </AnimatedCard>
  );
}

function FlexibilityOption({ title, desc }: { title: string; desc: string }) {
  return (
    <AnimatedCard variant="hover-lift">
      <h3 className="font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm">{desc}</p>
    </AnimatedCard>
  );
}

function ResourceBox({ title, items }: { title: string; items: string[] }) {
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

function SuccessFactor({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="default">
      <div className="text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </AnimatedCard>
  );
}
