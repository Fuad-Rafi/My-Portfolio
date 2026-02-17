import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Server, Brain } from "lucide-react";

const services = [
  {
    icon: Server,
    title: "Full Stack Development",
    desc: "End-to-end MERN and Django web application development including scalable architecture, REST APIs, authentication, and responsive UI.",
  },
  {
    icon: Globe,
    title: "Web Application Development",
    desc: "Clean, production-ready web apps with secure backend integration and optimized front-end design.",
  },
  {
    icon: Brain,
    title: "ML Research & Model Development",
    desc: "Development of machine learning pipelines, deep learning architectures (VAE), NLP systems, clustering models, and evaluation with performance metrics.",
  },
];

const Services = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding neural-bg relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">What I Offer</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            My <span className="gradient-text">Services</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card-hover p-8 rounded-2xl group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={26} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
