import { motion } from "framer-motion";

const skillCategories = [
  {
    id: "frontend",
    number: "01",
    title: "Frontend",
    description:
      "Creating responsive, interactive and user-friendly web interfaces.",
    skills: [
      { name: "HTML5", short: "HTML" },
      { name: "CSS3", short: "CSS" },
      { name: "JavaScript", short: "JS" },
      { name: "React.js", short: "⚛" },
    ],
  },
  {
    id: "backend",
    number: "02",
    title: "Backend",
    description:
      "Building server-side applications, APIs and application logic.",
    skills: [
      { name: "Node.js", short: "ND" },
      { name: "Express.js", short: "EX" },
      { name: "Java", short: "JV" },
    ],
  },
  {
    id: "database",
    number: "03",
    title: "Databases",
    description:
      "Working with databases to manage, organize and retrieve application data.",
    skills: [
      { name: "MongoDB", short: "MG" },
      { name: "MySQL", short: "SQL" },
    ],
  },
  {
    id: "ai-tools",
    number: "04",
    title: "AI Tools",
    description:
      "Using AI-powered tools to improve productivity, development and problem solving.",
    skills: [
      { name: "ChatGPT", short: "AI" },
      { name: "GitHub Copilot", short: "CP" },
      { name: "Gemini", short: "GM" },
    ],
  },
  {
    id: "tools",
    number: "05",
    title: "Tools & Platforms",
    description:
      "Using modern development tools for coding, testing and collaboration.",
    skills: [
      { name: "GitHub", short: "GH" },
      { name: "VS Code", short: "VS" },
      { name: "Postman", short: "PM" },
    ],
  },
  {
    id: "core",
    number: "06",
    title: "Core Concepts",
    description:
      "Strong foundations in computer science and software development concepts.",
    skills: [
      { name: "DSA", short: "DS" },
      { name: "OOP", short: "OP" },
      { name: "DBMS", short: "DB" },
      { name: "Computer Networks", short: "CN" },
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-[#08080c] px-[5%] py-24 text-white lg:px-[8%] lg:py-32"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* HEADER */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-block text-xs font-bold tracking-[0.2em] text-violet-400">
            02 — TECH STACK
          </span>

          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Technologies I use to
            <span className="block bg-gradient-to-r from-violet-300 to-blue-400 bg-clip-text text-transparent">
              build great products.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            A growing collection of technologies, AI tools and development
            platforms I use to turn ideas into modern applications.
          </p>
        </motion.div>

        {/* CATEGORY CARDS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {skillCategories.map((category, categoryIndex) => (
            <motion.article
              key={category.id}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: categoryIndex * 0.1,
              }}
              whileHover={{ y: -8 }}
              className="group relative overflow-hidden rounded-2xl border border-violet-400/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.05] sm:p-8"
            >
              {/* TOP */}
              <div className="mb-7 flex items-center justify-between">
                <span className="text-xs font-bold tracking-[0.2em] text-violet-400">
                  {category.number}
                </span>

                <span className="text-xl text-zinc-600 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300">
                  ↗
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">
                {category.title}
              </h3>

              <p className="mt-3 min-h-[56px] text-sm leading-7 text-zinc-400">
                {category.description}
              </p>

              {/* SKILLS */}
              <div className="mt-7 flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay:
                        categoryIndex * 0.1 +
                        skillIndex * 0.08 +
                        0.2,
                    }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-2 transition hover:border-violet-400/30 hover:bg-violet-500/[0.08]"
                  >
                    <span className="flex h-8 min-w-8 items-center justify-center rounded-lg bg-violet-500/10 px-1 text-[10px] font-bold text-violet-300">
                      {skill.short}
                    </span>

                    <span className="text-xs font-medium text-zinc-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* BOTTOM LINE */}
              <div className="mt-8 h-px w-full overflow-hidden bg-violet-400/10">
                <motion.span
                  className="block h-full w-full origin-left bg-gradient-to-r from-violet-500 to-blue-500"
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.8,
                    delay: categoryIndex * 0.1 + 0.3,
                  }}
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* BOTTOM MESSAGE */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3 text-center text-sm text-zinc-500"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_#a78bfa]" />

          <span>
            Always learning, building and exploring new technologies.
          </span>
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;