import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "BSc in Computer Science", school: "BRAC University", year: "2022 – 2026", grade: "CGPA 3.43" },
  { degree: "HSC (Science)", school: "Higher Secondary", year: "2020", grade: "GPA 5.00" },
  { degree: "SSC (Science)", school: "Secondary School", year: "2018", grade: "GPA 5.00" },
];

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding neural-bg relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">About Me</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-8">
            Passionate about building <span className="gradient-text">intelligent solutions</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Computer Science graduate from BRAC University (2022 – February 2026). Began with Python and strong foundations in Data Structures & Algorithms, expanded into JavaScript and C. Worked on Machine Learning, NLP, and full-stack applications using Django and MERN.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                I'm driven by the desire to create meaningful, impactful technology — whether it's building scalable web apps or developing cutting-edge ML models.
              </p>
              <div className="glass-card p-5 rounded-xl">
                <h3 className="font-display font-semibold text-foreground mb-2">Personal Interests</h3>
                <p className="text-muted-foreground text-sm">
                  Traveling, geopolitics, global affairs, anime, and movies.
                </p>
              </div>
            </div>

            {/* Education Timeline */}
            <div>
              <h3 className="font-display text-xl font-semibold mb-6 text-foreground">Education</h3>
              <div className="space-y-6 relative">
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-border" />
                {education.map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: i * 0.15 }}
                    className="flex gap-4 relative"
                  >
                    <div className="w-6 h-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0 mt-1 z-10">
                      <GraduationCap size={12} className="text-primary" />
                    </div>
                    <div className="glass-card p-4 rounded-xl flex-1">
                      <p className="text-sm text-primary mb-1">{edu.year}</p>
                      <h4 className="font-display font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-muted-foreground text-sm">{edu.school} — {edu.grade}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
