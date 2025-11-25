import { useState } from "react";
import { toast } from "sonner";
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
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
            Contact
          </h1>
          <p className="mt-3 text-muted-foreground max-w-2xl">
            Tell us about your project or resource needs. Our leadership team
            will respond promptly.
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
          className="mt-8 grid gap-6 max-w-3xl rounded-xl border bg-card/60 backdrop-blur p-6 md:p-8"
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
                placeholder="Your full name"
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
                placeholder="you@company.com"
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
                placeholder="Company or organization"
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
                placeholder="+1 555 000 0000"
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
                <label className="text-sm font-medium text-foreground">
                  Budget
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-primary/20 bg-background px-4 py-3 text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/80"
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  disabled={isLoading}
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
                <label className="text-sm font-medium text-foreground">
                  Timeline
                </label>
                <select
                  className="mt-2 w-full rounded-lg border border-primary/20 bg-background px-4 py-3 text-foreground transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/80"
                  value={timeline}
                  onChange={(e) => setTimeline(e.target.value)}
                  disabled={isLoading}
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
              placeholder="Tell us a bit about your project goals, scope, and timeline"
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
            className="flex items-center gap-3"
          >
            <motion.input
              id="agree"
              type="checkbox"
              className="h-5 w-5 rounded border-primary/20 accent-primary cursor-pointer"
              checked={agree}
              onChange={(e) => setAgree(e.target.checked)}
              disabled={isLoading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            />
            <label
              htmlFor="agree"
              className="text-sm text-muted-foreground cursor-pointer"
            >
              I agree to be contacted and accept the privacy notice.
            </label>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.45 }}
          >
            <Button
              type="submit"
              className="w-full md:w-fit h-12 px-8 text-base font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90"
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
                "Send message"
              )}
            </Button>
          </motion.div>
        </motion.form>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 grid gap-6 md:grid-cols-2 text-sm text-muted-foreground"
        >
          <div className="rounded-xl border bg-card/60 p-5">
            <div className="font-medium text-foreground">Offices</div>
            <div className="mt-2 space-y-1">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Troy, MI, USA
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" /> Hyderabad, India
              </div>
            </div>
          </div>
          <div className="rounded-xl border bg-card/60 p-5 grid gap-3">
            <div>
              <div className="font-medium text-foreground">Website</div>
              <a
                className="inline-flex items-center gap-2 underline"
                href="https://www.azorixembedded.com"
                target="_blank"
                rel="noreferrer"
              >
                <Globe className="h-4 w-4" /> www.azorixembedded.com
              </a>
            </div>
            <div>
              <div className="font-medium text-foreground">Email</div>
              <a
                className="inline-flex items-center gap-2 underline"
                href="mailto:info@azorixembedded.com"
              >
                <Mail className="h-4 w-4" /> info@azorixembedded.com
              </a>
            </div>
          </div>
        </motion.div>
      </Section>
      <SiteFooter />
    </div>
  );
}
