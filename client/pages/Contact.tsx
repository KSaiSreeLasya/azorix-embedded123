import { useState } from "react";
import { toast } from "sonner";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Section from "@/components/Section";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "@/components/SEO";
import { supabase } from "@/lib/supabase";
import { Mail, Globe, MapPin, CheckCircle2 } from "lucide-react";
import FloatingLabelInput from "@/components/FloatingLabelInput";
import FloatingLabelTextarea from "@/components/FloatingLabelTextarea";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [message, setMessage] = useState("");
  const [agree, setAgree] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) {
      toast.error("Please fill out all required fields");
      return;
    }
    if (!agree) {
      toast.error("Please accept the privacy notice");
      return;
    }

    setIsLoading(true);
    try {
      const messageCombined = `${message}\n\nCompany: ${company || "N/A"}\nPhone: ${phone || "N/A"}\nBudget: ${budget || "N/A"}\nTimeline: ${timeline || "N/A"}`;
      const { error } = await supabase.from("contact_submissions").insert({
        name,
        email,
        message: messageCombined,
      });

      if (error) {
        console.error("Supabase error:", error);
        toast.error("Failed to submit form. Please try again.");
        return;
      }

      setIsSuccess(true);
      setTimeout(() => {
        toast.success("Thank you! We'll get back to you shortly.");
        setName("");
        setEmail("");
        setCompany("");
        setPhone("");
        setBudget("");
        setTimeline("");
        setMessage("");
        setAgree(false);
        setIsSuccess(false);
      }, 1500);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("An error occurred while submitting the form");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <SEO
        title="Contact Azorix Technologies | Hyderabad | Software, AI & IoT Experts"
        description="Get in touch with Azorix Technologies for software development, AI, IoT, and embedded engineering solutions."
        canonicalPath="/contact"
      />
      <Section container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-2">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-accent/15 border border-primary/30 text-sm font-semibold text-primary mb-4"
            >
              Get In Touch
            </motion.span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent tracking-tight pb-6">
            Let's Build Something Great
          </h1>
          <p className="mt-4 text-lg text-foreground/70 max-w-2xl leading-relaxed font-medium">
            Tell us about your project or resource needs. Our leadership team
            will respond promptly and work with you to find the perfect
            solution.
          </p>
        </motion.div>

        <AnimatePresence>
          {isSuccess && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              className="absolute inset-0 flex items-center justify-center z-50 pointer-events-none"
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="bg-background/95 backdrop-blur border border-primary/30 rounded-2xl p-8 text-center max-w-md mx-4 pointer-events-auto"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="flex justify-center mb-4"
                >
                  <div className="h-16 w-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-primary-foreground" />
                  </div>
                </motion.div>
                <h2 className="text-2xl font-bold mb-2">Message Sent!</h2>
                <p className="text-muted-foreground">
                  Thank you for reaching out. We'll be in touch shortly.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 grid gap-6 max-w-3xl rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-accent/5 backdrop-blur p-6 md:p-10 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <FloatingLabelInput
                label="Name"
                value={name}
                onChange={setName}
                disabled={isLoading}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <FloatingLabelInput
                type="email"
                label="Email"
                value={email}
                onChange={setEmail}
                disabled={isLoading}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
            >
              <FloatingLabelInput
                label="Company"
                value={company}
                onChange={setCompany}
                disabled={isLoading}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <FloatingLabelInput
                type="tel"
                label="Phone"
                value={phone}
                onChange={setPhone}
                disabled={isLoading}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.25 }}
            >
              <div className="relative">
                <label className="text-sm font-semibold text-foreground">
                  Budget
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 px-4 py-3 text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 hover:border-primary/40 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 appearance-none"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  disabled={isLoading}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23888' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "16px 16px",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="">Select range</option>
                  <option value="< $10k">Less than $10k</option>
                  <option value="$10k–$50k">$10k–$50k</option>
                  <option value="$50k–$200k">$50k–$200k</option>
                  <option value="> $200k">More than $200k</option>
                </select>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <div className="relative">
                <label className="text-sm font-semibold text-foreground">
                  Timeline
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-primary/20 bg-gradient-to-r from-primary/5 to-accent/5 px-4 py-3 text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/60 hover:border-primary/40 hover:bg-gradient-to-r hover:from-primary/10 hover:to-accent/10 appearance-none"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  disabled={isLoading}
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23888' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 0.75rem center",
                    backgroundSize: "16px 16px",
                    paddingRight: "2.5rem",
                  }}
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP</option>
                  <option value="1–3 months">1–3 months</option>
                  <option value="3–6 months">3–6 months</option>
                  <option value="> 6 months">More than 6 months</option>
                </select>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.35 }}
          >
            <FloatingLabelTextarea
              label="Message"
              value={message}
              onChange={setMessage}
              disabled={isLoading}
              rows={5}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="flex items-start gap-3 p-4 rounded-lg border border-primary/15 bg-primary/5"
          >
            <motion.input
              id="agree"
              type="checkbox"
              className="h-5 w-5 rounded border border-primary/30 accent-primary cursor-pointer mt-0.5 flex-shrink-0"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              disabled={isLoading}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <label
              htmlFor="agree"
              className="text-sm text-foreground/75 cursor-pointer font-medium leading-relaxed"
            >
              I agree to be contacted about my project and accept the{" "}
              <Link
                to="/privacy"
                className="text-primary hover:underline font-semibold transition-colors"
              >
                privacy notice
              </Link>
              .
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.45 }}
            className="flex items-center gap-4 pt-2"
          >
            <Button
              type="submit"
              className="h-12 px-8 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
              disabled={isLoading}
            >
              {isLoading ? (
                <motion.span
                  animate={{ opacity: [0.6, 1] }}
                  transition={{ duration: 0.6, repeat: Infinity }}
                >
                  Sending...
                </motion.span>
              ) : (
                "Send Message"
              )}
            </Button>
            <motion.p
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-sm text-foreground/60 font-medium"
            >
              We'll get back to you within 24 hours
            </motion.p>
          </motion.div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12 grid gap-6 md:grid-cols-2 text-sm text-muted-foreground"
        >
          <motion.div
            className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-6 hover:border-primary/40 transition-all hover:shadow-xl group overflow-hidden"
            whileHover={{ y: -6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary-foreground" />
                </div>
                <div className="font-semibold text-foreground text-base">
                  Offices
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <motion.div
                  className="flex items-center gap-3 text-foreground/80"
                  whileHover={{ x: 6 }}
                >
                  <div className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                  Hyderabad, India
                </motion.div>
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/10 via-background to-accent/5 p-6 grid gap-5 hover:border-primary/40 transition-all hover:shadow-xl group overflow-hidden"
            whileHover={{ y: -6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="relative">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Globe className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="font-semibold text-foreground text-base">
                    Website
                  </div>
                </div>
                <motion.a
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
                  href="https://www.azorixembedded.com"
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                >
                  www.azorixembedded.com →
                </motion.a>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="font-semibold text-foreground text-base">
                    Email
                  </div>
                </div>
                <motion.a
                  className="inline-flex items-center gap-2 text-foreground/80 hover:text-primary transition-colors font-medium"
                  href="mailto:info@azorixembedded.com"
                  whileHover={{ x: 4 }}
                >
                  info@azorixembedded.com →
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Section>
      <SiteFooter />
    </div>
  );
}
