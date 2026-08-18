import { motion } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "Full Stack Development",
    description:
      "Building modern, responsive and scalable web applications from frontend interfaces to backend systems.",
    tags: ["React", "Node.js", "MongoDB"],
  },
  {
    number: "02",
    title: "Problem Solving",
    description:
      "Transforming ideas and requirements into clean, functional and user-focused digital products.",
    tags: ["DSA", "OOP", "DBMS"],
  },
  {
    number: "03",
    title: "Continuous Learning",
    description:
      "Exploring new technologies, improving development skills and building better products every day.",
    tags: ["Web Dev", "AI", "Cloud"],
  },
];

const stats = [
  {
    value: "3+",
    label: "Major Projects",
  },
  {
    value: "MERN",
    label: "Tech Stack",
  },
  {
    value: "2026",
    label: "CSE Graduate",
  },
];

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#08080c] px-[5%] py-24 text-white lg:px-[8%] lg:py-32"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[400px] w-[400px] rounded-full bg-violet-600/10 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-[1400px]">
        {/* SECTION HEADER */}
        <motion.div
          className="mb-16 max-w-3xl lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-block text-xs font-bold tracking-[0.2em] text-violet-400">
            01 — ABOUT ME
          </span>

          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Turning ideas into
            <span className="block bg-gradient-to-r from-violet-300 to-blue-400 bg-clip-text text-transparent">
              digital experiences.
            </span>
          </h2>
        </motion.div>

        {/* MAIN GRID */}
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-20">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-xs font-bold tracking-[0.2em] text-violet-400">
              WHO I AM
            </span>

            <h3 className="mt-5 max-w-xl text-3xl font-bold leading-tight text-white sm:text-4xl">
              Building experiences that are
              <span className="block text-violet-300">
                simple, useful & impactful.
              </span>
            </h3>

            <div className="mt-8 max-w-xl space-y-5 text-base leading-8 text-zinc-400">
              <p>
                I'm <strong className="font-semibold text-white">Saiyaaj</strong>,
                {" "}a passionate Full Stack Web Developer focused on building
                modern, responsive and user-friendly web applications.
              </p>

              <p>
                I work with technologies like{" "}
                <strong className="font-semibold text-violet-200">
                  React, Node.js, Express.js and MongoDB
                </strong>{" "}
                to create complete web experiences—from interactive frontend
                interfaces to scalable backend systems.
              </p>

              <p>
                I enjoy turning ideas into real products and continuously
                improving my skills by building projects and exploring new
                technologies.
              </p>
            </div>

            {/* STATS */}
            <div className="mt-10 grid grid-cols-3 gap-3 border-y border-violet-400/10 py-6 sm:gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="flex flex-col gap-1"
                >
                  <strong className="text-xl font-black text-white sm:text-2xl">
                    {stat.value}
                  </strong>

                  <span className="text-[10px] uppercase tracking-wider text-zinc-500 sm:text-xs">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#contact"
              whileHover={{ x: 5 }}
              className="mt-10 inline-flex items-center gap-3 text-sm font-semibold text-violet-300 transition hover:text-white"
            >
              Let's build something together
              <span className="text-lg">↗</span>
            </motion.a>
          </motion.div>

          {/* RIGHT SIDE - HIGHLIGHTS */}
          <div className="flex flex-col gap-5">
            {highlights.map((item, index) => (
              <motion.article
                key={item.number}
                initial={{
                  opacity: 0,
                  x: 50,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -6,
                }}
                className="group relative overflow-hidden rounded-2xl border border-violet-400/10 bg-white/[0.025] p-6 transition-colors duration-300 hover:border-violet-400/30 hover:bg-violet-500/[0.05] sm:p-8"
              >
                {/* TOP */}
                <div className="mb-8 flex items-center justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-violet-400">
                    {item.number}
                  </span>

                  <span className="text-xl text-zinc-500 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-violet-300">
                    ↗
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {item.title}
                </h3>

                <p className="mt-3 max-w-lg text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>

                {/* TAGS */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-violet-400/15 bg-violet-500/[0.07] px-3 py-1.5 text-xs text-violet-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* PROGRESS LINE */}
                <div className="mt-7 h-px w-full overflow-hidden bg-violet-400/10">
                  <motion.span
                    className="block h-full w-full origin-left bg-gradient-to-r from-violet-500 to-blue-500"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.15 + 0.3,
                    }}
                  />
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;