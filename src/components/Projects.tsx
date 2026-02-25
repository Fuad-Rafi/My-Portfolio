import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, X } from "lucide-react";

const isVideoSlide = (slideSrc: string) => {
  return slideSrc.toLowerCase().endsWith(".mp4");
};

const projects = [
  {
    title: "MERN Book Management Web Application",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    desc: "Full CRUD operations with a Node.js/Express REST API, MongoDB document modeling, React frontend with Tailwind CSS, scalable client-server architecture, and component reusability with routing.",
    github: "https://github.com/Fuad-Rafi/mern-book-store",
    readmeLink: "https://github.com/Fuad-Rafi/mern-book-store/blob/master/README.md",
    images: [
      "/mern/Customer%20home.PNG",
      "/mern/Order%20Now.PNG",
      "/mern/Order%20dashboard.PNG",
      "/mern/admin_home.PNG",
      "/mern/Log%20in%20Admin%20anad%20customer.PNG",
    ],
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
    readmeLink: "https://github.com/Fuad-Rafi/Aniverse/blob/main/README.md",
    images: [
      "/Aniverse/REGISTER.PNG",
      "/Aniverse/inbox.PNG",
      "/Aniverse/sEARCH.PNG",
      "/Aniverse/Profile%20page.PNG",
      "/Aniverse/YUSER%20PROFILE.PNG",
      "/Aniverse/FRIEND.PNG",
      "/Aniverse/ScreenRec_2026-02-25%2000-49-05.mp4",
    ],
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
    readmeLink: "https://github.com/Fuad-Rafi/Multimodal-VAE-Music/blob/main/README.md",
    images: [
      "https://placehold.co/1200x800/0f172a/6ee7b7?text=Music+Clustering+-+Pipeline+Overview",
      "https://placehold.co/1200x800/0f172a/6ee7b7?text=Music+Clustering+-+Embedding+Space",
      "https://placehold.co/1200x800/0f172a/6ee7b7?text=Music+Clustering+-+Cluster+Visualization",
      "https://placehold.co/1200x800/0f172a/6ee7b7?text=Music+Clustering+-+Evaluation+Metrics",
    ],
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
  const [activeSlideByProject, setActiveSlideByProject] = useState<Record<number, number>>({});
  const [overlayImage, setOverlayImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    const timers: number[] = [];

    projects.forEach((project, projectIndex) => {
      const slides = project.images;
      if (slides.length === 0) {
        return;
      }

      const activeSlideIndex = activeSlideByProject[projectIndex] ?? 0;
      const activeSlideSrc = slides[activeSlideIndex];
      const durationMs = isVideoSlide(activeSlideSrc) ? 10000 : 3500;

      const timer = window.setTimeout(() => {
        setActiveSlideByProject((prev) => {
          const current = prev[projectIndex] ?? 0;
          return {
            ...prev,
            [projectIndex]: (current + 1) % slides.length,
          };
        });
      }, durationMs);
      timers.push(timer);
    });

    return () => timers.forEach((timer) => window.clearTimeout(timer));
  }, [activeSlideByProject]);

  useEffect(() => {
    if (!overlayImage) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOverlayImage(null);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [overlayImage]);

  const goToSlide = (projectIndex: number, slideIndex: number) => {
    setActiveSlideByProject((prev) => ({ ...prev, [projectIndex]: slideIndex }));
  };

  const goToNextSlide = (projectIndex: number) => {
    setActiveSlideByProject((prev) => {
      const current = prev[projectIndex] ?? 0;
      const total = projects[projectIndex].images.length;
      return { ...prev, [projectIndex]: (current + 1) % total };
    });
  };

  const goToPreviousSlide = (projectIndex: number) => {
    setActiveSlideByProject((prev) => {
      const current = prev[projectIndex] ?? 0;
      const total = projects[projectIndex].images.length;
      return { ...prev, [projectIndex]: (current - 1 + total) % total };
    });
  };

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

          <div className="space-y-8">
            {projects.map((p, i) => {
              const slides = p.images;
              const activeSlide = activeSlideByProject[i] ?? 0;
              const activeSlideSrc = slides[activeSlide] ?? "";

              return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="glass-card-hover p-6 md:p-8 rounded-2xl"
              >
                <div className="grid lg:grid-cols-2 gap-8 items-start">
                  <div>
                    <h3 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-4">
                      {p.title}
                    </h3>
                    <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-5">{p.desc}</p>

                    <ul className="space-y-2.5 mb-6">
                      {p.details.map((d, detailIndex) => (
                        <li key={detailIndex} className="text-muted-foreground text-sm md:text-base flex gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((t) => (
                        <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-wrap items-center gap-3">
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-primary hover:underline"
                      >
                        View on GitHub <ExternalLink size={14} />
                      </a>
                      <a
                        href={p.readmeLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="h-9 px-3 rounded-md bg-primary/10 text-primary text-sm hover:bg-primary/20 transition-colors inline-flex items-center"
                      >
                        Features and details
                      </a>
                    </div>
                  </div>

                  <div className="h-full min-h-[420px] md:min-h-[500px] flex flex-col">
                    <div className="relative overflow-hidden rounded-xl border border-primary/20 bg-card/40 flex-1 min-h-[360px]">
                      {isVideoSlide(activeSlideSrc) ? (
                        <video
                          src={activeSlideSrc}
                          className="w-full h-full object-cover"
                          controls
                          preload="metadata"
                        />
                      ) : (
                        <img
                          src={activeSlideSrc}
                          alt={`${p.title} screenshot ${activeSlide + 1}`}
                          className="w-full h-full object-cover cursor-zoom-in"
                          loading="lazy"
                          onClick={() =>
                            setOverlayImage({
                              src: activeSlideSrc,
                              alt: `${p.title} screenshot ${activeSlide + 1}`,
                            })
                          }
                        />
                      )}
                      <button
                        type="button"
                        onClick={() => goToPreviousSlide(i)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/70 border border-border flex items-center justify-center text-foreground hover:border-primary/40 transition-colors"
                        aria-label="Previous project image"
                      >
                        <ChevronLeft size={18} />
                      </button>
                      <button
                        type="button"
                        onClick={() => goToNextSlide(i)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/70 border border-border flex items-center justify-center text-foreground hover:border-primary/40 transition-colors"
                        aria-label="Next project image"
                      >
                        <ChevronRight size={18} />
                      </button>
                    </div>

                    <div className="flex items-center justify-center gap-2 mt-4">
                      {slides.map((_, slideIndex) => (
                        <button
                          key={slideIndex}
                          type="button"
                          onClick={() => goToSlide(i, slideIndex)}
                          className={`h-2.5 rounded-full transition-all ${
                            activeSlide === slideIndex
                              ? "w-6 bg-primary"
                              : "w-2.5 bg-muted-foreground/40 hover:bg-muted-foreground/70"
                          }`}
                          aria-label={`Go to image ${slideIndex + 1}`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );})}
          </div>
        </motion.div>
      </div>

      {overlayImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-background/90 backdrop-blur-md p-4 md:p-8 flex items-center justify-center"
          onClick={() => setOverlayImage(null)}
        >
          <button
            type="button"
            onClick={() => setOverlayImage(null)}
            className="absolute top-4 right-4 h-10 w-10 rounded-full bg-background/70 border border-border text-foreground hover:border-primary/40 flex items-center justify-center"
            aria-label="Close image overlay"
          >
            <X size={18} />
          </button>

          <img
            src={overlayImage.src}
            alt={overlayImage.alt}
            className="max-w-full max-h-[88vh] object-contain rounded-lg border border-primary/20"
            onClick={(event) => event.stopPropagation()}
          />
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
