import { Mail, MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useEffect } from "react";

const Contact = () => {
  // initialize EmailJS once on client
  useEffect(() => {
    // public key (you can move to env var later)
    emailjs.init("Hx7KrrbQGNixXeGRB");
  }, []);

  /**
   * Simple client-side toast implementation (no external dependency).
   * - Creates a container at top-right if not present.
   * - Appends a toast element, animates it in, auto-removes after timeout.
   *
   * Kept inline so we don't change project dependencies or CSS.
   */
  const showToast = (message: string, options?: { duration?: number; variant?: "success" | "error" }) => {
    if (typeof window === "undefined") return;
    const duration = options?.duration ?? 3000;
    const variant = options?.variant ?? "success";

    const containerId = "custom-toast-container";
    let container = document.getElementById(containerId);
    if (!container) {
      container = document.createElement("div");
      container.id = containerId;
      // use Tailwind utility classes (no global CSS change)
      container.className = "fixed top-6 right-6 z-50 flex flex-col gap-2 items-end";
      document.body.appendChild(container);
    }

    const toast = document.createElement("div");
    // Tailwind classes to match project look (no CSS file edits)
    const baseClasses =
      "max-w-xs w-full px-4 py-2 rounded-lg shadow-lg text-sm font-medium";
    const variantClasses =
      variant === "success" ? "bg-green-600 text-white" : "bg-red-600 text-white";
    toast.className = `${baseClasses} ${variantClasses}`;
    toast.style.opacity = "0";
    toast.style.transform = "translateY(-8px)";
    toast.style.willChange = "opacity, transform";
    toast.innerText = message;

    container.appendChild(toast);

    // animate in
    requestAnimationFrame(() => {
      toast.style.transition = "opacity 220ms ease, transform 220ms ease";
      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";
    });

    // remove after timeout
    setTimeout(() => {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(-8px)";
      // remove after transition
      setTimeout(() => {
        toast.remove();
        if (container && container.childElementCount === 0) {
          container.remove();
        }
      }, 240);
    }, duration);
  };

  const sendmail = (
    e?: React.MouseEvent<HTMLButtonElement> | React.FormEvent<HTMLFormElement>
  ) => {
    // prevent default if event present (button click or form submit)
    e?.preventDefault();

    // safe element retrieval
    const nameEl = document.getElementById("name") as HTMLInputElement | null;
    const emailEl = document.getElementById("email") as HTMLInputElement | null;
    const subjectEl = document.getElementById(
      "subject"
    ) as HTMLInputElement | null;
    const messageEl = document.getElementById(
      "message"
    ) as HTMLTextAreaElement | null;

    const params = {
      name: nameEl?.value ?? "",
      email: emailEl?.value ?? "",
      subject: subjectEl?.value ?? "",
      message: messageEl?.value ?? "",
    };

    emailjs
      .send("service_yh8rnoi", "template_reezwcq", params)
      .then((res) => {
        console.log("Email sent successfully!", res);
        // show success toast
        showToast("Message sent successfully !!", { variant: "success" });

        // optional: clear the form fields after send (unobtrusive)
        if (nameEl) nameEl.value = "";
        if (emailEl) emailEl.value = "";
        if (subjectEl) subjectEl.value = "";
        if (messageEl) messageEl.value = "";
      })
      .catch((err) => {
        console.error("Failed to send email:", err);
        // show error toast
        showToast("Failed to send message. Please try again later.", { variant: "error" });
      });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "janijeet50@gmail.com",
      // href: 'mailto:hello@alexdev.com'
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7043569445",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Mahesana, Gujarat, India",
      href: "#",
    },
  ];

  return (
    <motion.div
      className="min-h-screen bg-card/10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <section className="py-10 ">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-7"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Have a project in mind? Let's discuss how we can work together to
              bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Card className="p-8 card-shadow group">
                  <motion.h3
                    className="text-2xl font-semibold mb-6"
                    whileHover={{ color: "hsl(var(--primary))" }}
                    transition={{ duration: 0.2 }}
                  >
                    Send Me a Message
                  </motion.h3>

                  {/* kept form element (no styling changes) */}
                  <form className="space-y-6" onSubmit={(e) => sendmail(e)}>
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium mb-2">
                          Name
                        </label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          className="bg-background border-border focus:border-primary"
                        />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15 }}
                        viewport={{ once: true }}
                      >
                        <label className="block text-sm font-medium mb-2">
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="your@email.com"
                          className="bg-background border-border focus:border-primary"
                        />
                      </motion.div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="Project discussion"
                        className="bg-background border-border focus:border-primary"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.25 }}
                      viewport={{ once: true }}
                    >
                      <label className="block text-sm font-medium mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your project..."
                        rows={6}
                        className="bg-background border-border focus:border-primary resize-none"
                      />
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      viewport={{ once: true }}
                    >
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* use type="button" so click doesn't double-submit; onClick uses sendmail */}
                        <Button
                          type="button"
                          className="w-full gradient-primary text-primary-foreground"
                          onClick={(e) => sendmail(e)}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </motion.div>
                  </form>
                </Card>
              </motion.div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <motion.h3
                  className="text-2xl font-semibold mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Let's Connect
                </motion.h3>
                <motion.p
                  className="text-muted-foreground leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  viewport={{ once: true }}
                >
                  I'm always excited to work on new projects and collaborate
                  with creative minds. Whether you have a specific project in
                  mind or just want to chat about possibilities, I'd love to
                  hear from you.
                </motion.p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="p-4 card-shadow cursor-pointer group">
                      <a
                        href={info.href}
                        className="flex items-center gap-4 group"
                      >
                        <motion.div
                          className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ type: "spring", stiffness: 200 }}
                        >
                          <info.icon className="w-6 h-6 text-primary-foreground" />
                        </motion.div>
                        <div>
                          <div className="font-medium text-sm text-muted-foreground">
                            {info.title}
                          </div>
                          <motion.div
                            className="font-semibold"
                            whileHover={{ color: "hsl(var(--primary))" }}
                            transition={{ duration: 0.2 }}
                          >
                            {info.value}
                          </motion.div>
                        </div>
                      </a>
                    </Card>
                  </motion.div>
                ))}
              </div>

              <motion.div
                className="mt-8 p-6 gradient-primary rounded-2xl card-shadow"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-semibold text-primary-foreground mb-2">
                  Available for Freelance
                </h4>
                <p className="text-primary-foreground/80 mb-4">
                  Currently accepting new projects and collaborations. Let's
                  build something amazing together!
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                  >
                    Schedule a Call
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Contact;
