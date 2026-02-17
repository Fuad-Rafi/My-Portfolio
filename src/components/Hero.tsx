import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import profileImg from "@/assets/profile.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center neural-bg overflow-hidden">
      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/5 blur-[100px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 md:px-8 pt-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-primary font-medium mb-3 text-sm tracking-widest uppercase">Welcome to my portfolio</p>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              Hi, I'm{" "}
              <span className="gradient-text">MD Fuyad Ibnay Rafi</span>
            </h1>
            <h2 className="font-display text-xl md:text-2xl text-muted-foreground mb-6">
              Machine Learning Enthusiast & Full-Stack Developer
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              A Computer Science graduate from BRAC University with a strong passion for Machine Learning and Web Development. Experienced in Python, MERN stack, Django, and ML research projects including NLP and Deep Learning (VAE). Driven by continuous learning and innovation.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View Projects <ArrowDown size={16} />
              </a>
              <a
                href="/Fuad-CV.pdf"
                download="Fuad-CV.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card-hover text-foreground font-medium"
              >
                <Download size={16} /> Download CV
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass-card-hover text-foreground font-medium"
              >
                <Mail size={16} /> Contact Me
              </a>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-primary/20 blur-[60px] animate-glow-pulse" />
              <div className="relative glass-card p-3 rounded-3xl glow-box">
                <img
                  src={profileImg}
                  alt="MD Fuyad Ibnay Rafi"
                  className="w-72 h-72 md:w-80 md:h-80 object-cover rounded-2xl"
                />
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-primary/40 animate-float" />
              <div className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full border-2 border-primary/30 animate-float" style={{ animationDelay: "2s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
