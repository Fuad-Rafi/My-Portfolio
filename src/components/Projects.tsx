import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, X } from "lucide-react";

const projects = [
  {
    title: "MERN Book Management Web Application",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    desc: "Full CRUD operations with a Node.js/Express REST API, MongoDB document modeling, React frontend with Tailwind CSS, scalable client-server architecture, and component reusability with routing.",
    github: "https://github.com/Fuad-Rafi/mern-book-store",
    details: [
      "Full CRUD operations",
      "Node.js/Express REST API",
      "MongoDB document modeling",
      "React frontend with Tailwind CSS",
      "Scalable client-server architecture",
      "Component reusability and routing",
    ],
  },
  {
    title: "Django Blog Web Application",
    tags: ["Django", "Python", "Django ORM", "Authentication"],
    desc: "A blog platform with authentication, session handling, CRUD operations, Django ORM, backend–frontend integration, and deployment-ready architecture.",
    github: "https://github.com/Fuad-Rafi/Aniverse",
    details: [
      "Authentication & session handling",
      "CRUD operations",
      "Django ORM",
      "Backend–frontend integration",
      "Deployment-ready architecture",
    ],
  },
  {
    title: "Hybrid Multimodal Music Clustering via Joint VAE",
    tags: ["Deep Learning", "VAE", "NLP", "Clustering", "Python"],
    desc: "Multimodal VAE combining audio spectrograms & lyric embeddings from 3835 clips across 600+ songs with missing-modality handling and advanced clustering evaluation.",
    github: "https://github.com/Fuad-Rafi/Multimodal-VAE-Music",
    details: [
      "Multimodal VAE combining audio spectrograms & lyric embeddings",
      "3835 clips from 600+ songs",
      "Missing-modality handling",
      "KMeans, Agglomerative, DBSCAN",
      "Evaluated using Silhouette, Davies-Bouldin, Calinski-Harabasz",
      "UMAP/t-SNE visualization",
    ],
  },
];

const Projects = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="section-padding relative">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase mb-2">My Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-12">
            Featured <span className="gradient-text">Projects</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card-hover p-6 rounded-2xl cursor-pointer group"
                onClick={() => setSelected(i)}
              >
                <h3 className="font-display font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                >
                  GitHub <ExternalLink size={14} />
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      {selected !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="glass-card p-8 rounded-2xl max-w-lg w-full border border-primary/20 glow-box"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-display text-xl font-bold text-foreground">{projects[selected].title}</h3>
              <button onClick={() => setSelected(null)} className="text-muted-foreground hover:text-foreground">
                <X size={20} />
              </button>
            </div>
            <ul className="space-y-2 mb-6">
              {projects[selected].details.map((d, i) => (
                <li key={i} className="text-muted-foreground text-sm flex gap-2">
                  <span className="text-primary mt-1">•</span> {d}
                </li>
              ))}
            </ul>
            <a
              href={projects[selected].github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
            >
              View on GitHub <ExternalLink size={16} />
            </a>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
