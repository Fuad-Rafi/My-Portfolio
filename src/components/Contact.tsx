import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="section-padding neural-bg relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Contact <span className="gradient-text">Me</span>
          </h2>

          <div className="max-w-xl mx-auto space-y-6">
            <p className="text-muted-foreground leading-relaxed text-center">
              I'm currently looking for internship opportunities in ML, AI, and full-stack development. Feel free to reach out!
            </p>
            <div className="space-y-4">
              {[
                { icon: Mail, label: "firafi75@gmail.com", href: null },
                { icon: Phone, label: "+8801678385950", href: null },
                { icon: Github, label: "github.com/Fuad-Rafi", href: "https://github.com/Fuad-Rafi" },
                { icon: Linkedin, label: "linkedin.com/in/fuad-rafi", href: "https://linkedin.com/in/fuad-rafi" },
              ].map((item, i) => {
                const Element = item.href ? "a" : "div";
                return (
                  <Element
                    key={i}
                    {...(item.href && { href: item.href, target: "_blank", rel: "noopener noreferrer" })}
                    className="flex items-center gap-4 glass-card-hover p-4 rounded-xl group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">
                      {item.label}
                    </span>
                  </Element>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
