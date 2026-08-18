import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Employee Management System",
    category: "Full Stack Web Application",
    description:
      "A modern Employee Management System designed to efficiently manage employee information through a clean, responsive, and user-friendly interface.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/Saiyaaj/employee-management-system",
    live: "",
    accent: "purple",
    icon: "💼",
  },

{
  number: "03",
  title: "Dwell Discover",
  category: "Property Discovery Platform",
  description:
    "A modern property discovery platform that helps users discover nearby PGs and hostels through an intuitive and responsive interface, making accommodation searching easier and more accessible.",
  tech: ["React", "Node.js", "Express.js", "MongoDB"],
  github: "https://github.com/Shailavi04/dwell-discover",
  live: "",
  accent: "pink",
  icon: "🏠",
},

  {
    number: "03",
    title: "Tic Tac Toe Arena",
    category: "Interactive Web Game",
    description:
      "An interactive Tic Tac Toe game featuring a modern interface, engaging gameplay, responsive interactions, and structured game logic.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/Saiyaaj/TicTacToe",
    live: "",
    accent: "pink",
    icon: "🎮",
  },
];

function Projects() {
  return (
    <section className="projects section" id="projects">
      {/* BACKGROUND */}
      <div className="projects-background">
        <div className="projects-glow projects-glow-one"></div>
        <div className="projects-glow projects-glow-two"></div>
      </div>

      {/* HEADER */}
      <motion.div
        className="section-header projects-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
      >
        <span className="section-label">03 — PROJECTS</span>

        <h2>
          Selected work and
          <span> digital experiences.</span>
        </h2>

        <p>
          A selection of projects where I turn ideas into functional,
          responsive and user-focused digital experiences.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.article
            key={project.number}
            className={`
              project-card
              project-${project.accent}
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/[0.03]
              p-6
              transition-all
              duration-500
              hover:border-purple-400/50
              hover:bg-white/[0.06]
              hover:shadow-2xl
              hover:shadow-purple-500/10
              md:p-8
            `}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.65,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
              scale: 1.01,
            }}
          >
            {/* CURSOR HOVER GLOW */}
            <div
              className="
                pointer-events-none
                absolute
                -right-24
                -top-24
                h-56
                w-56
                rounded-full
                bg-purple-500/10
                blur-3xl
                transition-all
                duration-700
                group-hover:scale-150
                group-hover:bg-purple-500/20
              "
            />

            {/* TOP */}
            <div className="project-top relative z-10">
              <span className="project-number">
                {project.number}
              </span>

              <div className="project-top-right">
                <span className="project-category">
                  {project.category}
                </span>

                <span
                  className="
                    project-icon
                    relative
                    flex
                    h-14
                    w-14
                    items-center
                    justify-center
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/5
                    text-2xl
                    transition-all
                    duration-500
                    group-hover:rotate-6
                    group-hover:scale-110
                    group-hover:bg-purple-500/20
                  "
                >
                  {project.icon}
                </span>
              </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="project-main relative z-10">
              <div className="project-content">
                <span className="project-mini-label">
                  FEATURED PROJECT
                </span>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* TECH STACK */}
                <div className="project-tech">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="
                        transition-all
                        duration-300
                        hover:-translate-y-1
                        hover:border-purple-400/50
                        hover:bg-purple-500/10
                      "
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* ACTION BUTTONS */}
              <div className="project-actions">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="
                    project-link
                    group/link
                    inline-flex
                    items-center
                    gap-3
                    rounded-full
                    border
                    border-white/15
                    bg-white/5
                    px-5
                    py-3
                    text-sm
                    font-medium
                    transition-all
                    duration-300
                    hover:border-purple-400
                    hover:bg-purple-500
                    hover:text-white
                    hover:shadow-lg
                    hover:shadow-purple-500/30
                  "
                >
                  <span>View Code</span>

                  <span
                    className="
                      project-link-arrow
                      transition-transform
                      duration-300
                      group-hover/link:translate-x-1
                      group-hover/link:-translate-y-1
                    "
                  >
                    ↗
                  </span>
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      project-link
                      project-live-link
                      group/live
                      inline-flex
                      items-center
                      gap-3
                      rounded-full
                      border
                      border-purple-400/40
                      bg-purple-500/10
                      px-5
                      py-3
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      hover:bg-purple-500
                      hover:text-white
                      hover:shadow-lg
                      hover:shadow-purple-500/30
                    "
                  >
                    <span>Live Demo</span>

                    <span
                      className="
                        project-link-arrow
                        transition-transform
                        duration-300
                        group-hover/live:translate-x-1
                        group-hover/live:-translate-y-1
                      "
                    >
                      ↗
                    </span>
                  </a>
                )}
              </div>
            </div>

            {/* BOTTOM PROGRESS LINE */}
            <div className="project-progress relative z-10">
              <span className="transition-all duration-700 group-hover:w-full" />
            </div>
          </motion.article>
        ))}
      </div>

      {/* FOOTER */}
      <motion.div
        className="projects-footer"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.7,
          delay: 0.2,
        }}
      >
        <span>More projects available on</span>

        <a
          href="https://github.com/Saiyaaj"
          target="_blank"
          rel="noreferrer"
          className="
            transition-all
            duration-300
            hover:text-purple-400
            hover:tracking-wide
          "
        >
          GitHub ↗
        </a>
      </motion.div>
    </section>
  );
}

export default Projects;