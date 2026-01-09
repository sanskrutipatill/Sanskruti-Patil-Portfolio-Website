import {
  Github,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .sendForm(
        "service_426rcfu",        // ✅ Service ID
        "template_isabvcx",       // ✅ Template ID
        e.target,
        "p4vVxYv4z3GhIyfuE"        // ✅ Public Key
      )
      .then(
        () => {
          toast({
            title: "Message sent! ✅",
            description: "Thank you for reaching out. I'll contact you soon.",
          });
          e.target.reset();
          setIsSubmitting(false);
        },
        (error) => {
          console.error(error);
          toast({
            title: "Failed to send ❌",
            description: "Something went wrong. Please try again.",
          });
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-24 px-4 relative overflow-hidden">
      {/* Playful Background Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse-subtle pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-purple-500/20 rounded-full blur-3xl animate-float pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-glow">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto text-lg">
          I’m always excited to explore new opportunities, collaborate on impactful projects,
          and contribute to innovative ideas—feel free to reach out anytime.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">

          {/* LEFT: Structured Contact Info & Socials */}
          <div className="flex flex-col h-full">
            <div className="bg-card/50 backdrop-blur-sm p-8 rounded-2xl border border-white/10 shadow-xl hover:shadow-primary/20 transition-all duration-300 flex-grow flex flex-col justify-between h-full">

              <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-8 text-primary">Contact Information</h3>

                <div className="grid gap-6">
                  {/* Header Row */}
                  <div className="grid grid-cols-[auto_1fr] gap-4 items-center pb-4 border-b border-border/50 text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    <span className="w-12 text-center"></span>
                    <span></span>
                  </div>

                  {/* Email Row */}
                  <div className="group grid grid-cols-[auto_1fr] gap-4 items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <a href="mailto:sanskrutip0205@gmail.com" className="text-lg text-foreground hover:text-primary transition-colors break-all">
                      sanskrutip0205@gmail.com
                    </a>
                  </div>

                  {/* Phone Row */}
                  <div className="group grid grid-cols-[auto_1fr] gap-4 items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Phone className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <a href="tel:+917020834329" className="text-lg text-foreground hover:text-primary transition-colors">
                      +91 7020834329
                    </a>
                  </div>

                  {/* Location Row */}
                  <div className="group grid grid-cols-[auto_1fr] gap-4 items-center p-3 rounded-lg hover:bg-primary/5 transition-colors">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <MapPin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <p className="text-lg text-foreground">
                      Aurangabad, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>

              {/* Socials Section Internal */}
              <div className="pt-8 mt-8 border-t border-border/30">
                <h4 className="font-semibold mb-6 text-xl">Connect With Me</h4>
                <div className="flex gap-6">
                  <a
                    href="https://www.linkedin.com/in/sanskruti-patil-4a79342a0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-blue-600/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-3 bg-card rounded-full shadow-sm group-hover:shadow-blue-500/50 transition-shadow">
                      <Linkedin className="h-6 w-6 text-foreground group-hover:text-blue-600 transition-colors" />
                    </div>
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/sanskrutipatill"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-purple-600/10 transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="p-3 bg-card rounded-full shadow-sm group-hover:shadow-purple-500/50 transition-shadow">
                      <Github className="h-6 w-6 text-foreground group-hover:text-purple-600 transition-colors" />
                    </div>
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT: Form */}
          <div className="flex flex-col h-full">
            <div className="bg-card/80 backdrop-blur-md p-8 md:p-10 rounded-2xl border border-white/10 shadow-2xl relative h-full flex flex-col justify-center">
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/20 rounded-full blur-2xl animate-pulse pointer-events-none" />

              <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                Send a Message
              </h3>

              <form className="space-y-6 flex-grow flex flex-col justify-between" onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div className="group space-y-2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 placeholder:text-muted-foreground/60 shadow-xs"
                    />
                  </div>

                  <div className="group space-y-2">
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      required
                      className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 placeholder:text-muted-foreground/60 shadow-xs"
                    />
                  </div>

                  <div className="group space-y-2">
                    <textarea
                      name="message"
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border border-border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/50 outline-none transition-all duration-300 placeholder:text-muted-foreground/60 resize-none shadow-xs"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 mt-6 rounded-xl bg-primary text-primary-foreground font-bold text-lg",
                    "flex items-center justify-center gap-2",
                    "transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:scale-[1.02] active:scale-[0.98]",
                    "disabled:opacity-70 disabled:cursor-not-allowed"
                  )}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <Send className={cn("w-5 h-5", isSubmitting ? "animate-pulse" : "group-hover:translate-x-1 transition-transform")} />
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
