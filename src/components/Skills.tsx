import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code2, Database, Users, Globe } from "lucide-react";

const categories = [
  {
    icon: Code2,
    title: "Frontend Development",
    skills: ["React 18", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "React Router DOM", "State Management", "Testing & Debugging", "Responsive Design"],
  },
  {
    icon: Code2,
    title: "Backend Development",
    skills: ["Node.js", "Express", "Django", "Python", "REST APIs", "Git", "Back-end Architecture"],
  },
  {
    icon: Brain,
    title: "Machine Learning & AI",
    skills: ["Deep Learning (VAE)", "NLP", "TensorFlow", "Scikit-learn", "Python", "Data Scraping", "Data Visualization"],
  },
  {
    icon: Database,
    title: "Databases & APIs",
    skills: ["MongoDB", "REST APIs", "Database Design", "API Integration", "Data Modeling"],
  },
  {
    icon: Users,
    title: "Soft Skills",
    skills: ["Communication", "Leadership", "Teamwork", "Problem Solving", "UI/UX Design", "Project Management"],
  },
  {
    icon: Globe,
    title: "Languages",
    skills: ["Bangla (Native)", "English (Fluent)", "Hindi (Conversational)", "Japanese (Basic)", "French (Basic)"],
  },
];

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">My Expertise</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card-hover p-6 rounded-2xl"
              >
                <cat.icon className="text-primary mb-4" size={28} />
                <h3 className="font-display font-semibold text-foreground mb-4">{cat.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
