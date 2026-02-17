import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X, FileText } from "lucide-react";

const Research = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [showDetails, setShowDetails] = useState(false);

  const research = {
    title: "Research Project",
    tags: ["Research", "Analysis", "Documentation"],
    desc: "Comprehensive research project with detailed analysis and findings.",
    github: "https://github.com",
    pdfReport: "#",
    details: [
      "In-depth research and analysis",
      "Detailed methodology",
      "Comprehensive findings",
      "Data-driven insights",
      "Complete documentation",
      "Peer-reviewed results",
    ],
  };

  return (
    <section id="research" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">My Research</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Research <span className="gradient-text">Project</span>
          </h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="glass-card-hover p-8 rounded-2xl cursor-pointer group max-w-3xl"
            onClick={() => setShowDetails(true)}
          >
            <h3 className="font-display font-semibold text-foreground mb-3 text-2xl group-hover:text-primary transition-colors">
              {research.title}
            </h3>
            <p className="text-muted-foreground text-base leading-relaxed mb-6">{research.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {research.tags.map((t) => (
                <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-3">
              <a
                href={research.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                GitHub <ExternalLink size={16} />
              </a>
              <a
                href={research.pdfReport}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
              >
                PDF Report <FileText size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Modal */}
      {showDetails && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setShowDetails(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-8 rounded-2xl max-w-lg w-full border border-primary/20 glow-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display text-xl font-bold text-foreground">{research.title}</h3>
              <button onClick={() => setShowDetails(false)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <ul className="space-y-2 mb-6">
              {research.details.map((d, i) => (
                <li key={i} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary mt-1">•</span> {d}
                </li>
              ))}
            </ul>
            <div className="flex gap-3">
              <a
                href={research.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
              >
                View on GitHub <ExternalLink size={16} />
              </a>
              <a
                href={research.pdfReport}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-primary text-primary font-medium hover:bg-primary/10 transition-colors"
              >
                Download PDF <FileText size={16} />
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Research;
