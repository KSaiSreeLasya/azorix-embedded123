import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import DomainHero from "@/components/DomainHero";
import {
  Target,
  FileCheck,
  Calendar,
  DollarSign,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import SEO from "@/components/SEO";
import { AnimatedCard } from "@/components/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function ProjectSow() {
  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Project / Scope of Work Model | Embinsys"
        description="Complete project delivery with defined scope, timeline, and budget. Perfect for specific features or complete products."
        canonicalPath="/engagement/project-sow"
      />
      <Section container>
        <DomainHero
          title="Project / Scope of Work"
          subtitle="Complete project delivery with clear scope, timeline, and budget. Perfect when you know exactly what you need built."
          image="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"
          icon={<Target className="h-5 w-5" />}
        />
      </Section>

      {/* Overview */}
      <Section container>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          What Is This Model?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-3xl">
          You define what needs to be built. We estimate the effort, agree on a
          timeline and budget, and deliver the complete solution. This works
          great when requirements are clear and the scope is well-defined.
        </p>
      </Section>

      {/* Best For */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Best For</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <UseCase
            icon="✓"
            title="Specific Features"
            desc="Building one or more well-defined features"
          />
          <UseCase
            icon="✓"
            title="Complete Products"
            desc="Delivering an entire product or device"
          />
          <UseCase
            icon="✓"
            title="Fixed Budget"
            desc="When you have a specific budget in mind"
          />
          <UseCase
            icon="✓"
            title="Clear Requirements"
            desc="When requirements are well understood"
          />
        </div>
      </Section>

      {/* How It Works */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">How It Works</h2>
        <div className="space-y-6">
          <ProcessStep
            step="1"
            title="Requirements Gathering"
            desc="We work with you to understand exactly what you need and your constraints"
          />
          <ProcessStep
            step="2"
            title="Scope & Estimate"
            desc="We define the scope, estimate effort, and create a project plan"
          />
          <ProcessStep
            step="3"
            title="Agreement"
            desc="We agree on timeline, budget, milestones, and deliverables"
          />
          <ProcessStep
            step="4"
            title="Execution"
            desc="Our team delivers the project with regular updates and reviews"
          />
          <ProcessStep
            step="5"
            title="Delivery & Support"
            desc="Final delivery, training, and transition to your team"
          />
        </div>
      </Section>

      {/* Advantages */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">Advantages</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <BenefitBox
            title="Clear & Predictable"
            items={[
              "Fixed scope and timeline",
              "Budget certainty",
              "Clear milestones",
              "Defined deliverables",
            ]}
          />
          <BenefitBox
            title="Professional Delivery"
            items={[
              "Experienced project management",
              "Regular communication",
              "Quality assurance throughout",
              "Support and training included",
            ]}
          />
        </div>
      </Section>

      {/* What's Included */}
      <Section>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">What's Included</h2>
        <div className="grid gap-6 md:grid-cols-2">
          <IncludedBox
            title="Development"
            items={[
              "Full design and development",
              "Code and design reviews",
              "Testing and quality assurance",
              "Documentation",
              "Regular status meetings",
            ]}
          />
          <IncludedBox
            title="Support & Transition"
            items={[
              "Technical documentation",
              "Knowledge transfer sessions",
              "Post-delivery support",
              "Training for your team",
              "Bug fixes and adjustments",
            ]}
          />
        </div>
      </Section>

      {/* Success Metrics */}
      <Section className="bg-secondary/40">
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Success Criteria
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <SuccessMetric
            icon="📅"
            title="On Time"
            desc="Project delivered by the agreed deadline"
          />
          <SuccessMetric
            icon="💰"
            title="On Budget"
            desc="Delivered within agreed financial parameters"
          />
          <SuccessMetric
            icon="✨"
            title="High Quality"
            desc="Thoroughly tested and meets all requirements"
          />
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-r from-primary/10 to-accent/10">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Project?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your requirements and create a plan for successful
            delivery.
          </p>
          <Button asChild size="lg">
            <Link to="/contact">Request a Quote</Link>
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

function IncludedBox({ title, items }: { title: string; items: string[] }) {
  return (
    <AnimatedCard variant="default">
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

function SuccessMetric({
  icon,
  title,
  desc,
}: {
  icon: string;
  title: string;
  desc: string;
}) {
  return (
    <AnimatedCard variant="hover-lift">
      <div className="text-center">
        <div className="text-3xl mb-3">{icon}</div>
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground">{desc}</p>
      </div>
    </AnimatedCard>
  );
}
