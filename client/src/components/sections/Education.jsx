import { motion } from "framer-motion";

const education = [
  {
    number: "01",
    title: "Bachelor of Technology",
    subtitle: "Computer Science & Engineering",
    institution: "Bansal Institute of Engineering & Technology, Lucknow",
    period: "2022 — 2026",
    description:
      "Focused on software development, programming, web technologies, databases, and core computer science concepts.",
    icon: "🎓",
    type: "EDUCATION",
  },
];

const certifications = [
  {
    title: "Java Web Development with AI",
    organization: "HCLTech",
    period: "Nov 2024 — Mar 2025",
    icon: "☕",
    accent: "purple",
  },
  {
    title: "Full Stack Web Development",
    organization: "PW Skills",
    period: "MERN Stack",
    icon: "💻",
    accent: "blue",
  },
];

const certificationStyles = {
  purple: {
    icon: "border-violet-400/20 bg-violet-500/10",
    hover: "hover:border-violet-400/40",
    glow: "bg-violet-600/10",
  },
  blue: {
    icon: "border-blue-400/20 bg-blue-500/10",
    hover: "hover:border-blue-400/40",
    glow: "bg-blue-600/10",
  },
};

function Education() {
  return (
    <section
      id="education"
      className="relative overflow-hidden bg-[#08080c] px-[5%] py-24 text-white lg:px-[8%] lg:py-32"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-20 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto max-w-[1200px]">
        {/* HEADER */}
        <motion.div
          className="mx-auto mb-16 max-w-3xl text-center lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-block text-xs font-bold tracking-[0.2em] text-violet-400">
            05 — EDUCATION
          </span>

          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            Learning, growing and
            <span className="block bg-gradient-to-r from-violet-300 to-blue-400 bg-clip-text text-transparent">
              achieving more.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            My academic journey, professional training, certifications, and
            achievements that continue to shape my career as a developer.
          </p>
        </motion.div>

        {/* EDUCATION CARD */}
        <div className="mx-auto max-w-4xl">
          {education.map((item) => (
            <motion.article
              key={item.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.65 }}
              whileHover={{ y: -7 }}
              className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 hover:border-violet-400/40 sm:p-8"
            >
              {/* CARD GLOW */}
              <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-violet-600/10 blur-[90px]" />

              <div className="relative z-10">
                {/* TOP */}
                <div className="flex items-start justify-between">
                  <span className="text-xs font-bold tracking-[0.2em] text-violet-400">
                    {item.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-400/20 bg-violet-500/10 text-2xl">
                    {item.icon}
                  </div>
                </div>

                <span className="mt-8 inline-block text-[10px] font-bold tracking-[0.22em] text-zinc-600">
                  {item.type}
                </span>

                <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
                  {item.title}
                </h3>

                <h4 className="mt-2 text-base font-medium text-violet-300 sm:text-lg">
                  {item.subtitle}
                </h4>

                <p className="mt-4 text-sm font-medium text-zinc-400 sm:text-base">
                  {item.institution}
                </p>

                <span className="mt-5 inline-flex rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">
                  {item.period}
                </span>

                <p className="mt-6 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                  {item.description}
                </p>

                {/* PROGRESS */}
                <div className="mt-8 h-px w-full overflow-hidden bg-white/[0.06]">
                  <motion.span
                    className="block h-full w-full origin-left bg-gradient-to-r from-violet-500 via-purple-400 to-transparent"
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* CERTIFICATIONS */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-8">
            <span className="text-xs font-bold tracking-[0.2em] text-violet-400">
              PROFESSIONAL TRAINING
            </span>

            <h3 className="mt-3 text-2xl font-bold text-white sm:text-3xl">
              Certifications & Learning
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {certifications.map((certificate, index) => {
              const style =
                certificationStyles[certificate.accent];

              return (
                <motion.article
                  key={certificate.title}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12,
                  }}
                  whileHover={{ y: -6 }}
                  className={`group relative flex items-center gap-5 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 transition-all duration-300 ${style.hover}`}
                >
                  {/* GLOW */}
                  <div
                    className={`pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full blur-[70px] ${style.glow}`}
                  />

                  {/* ICON */}
                  <div
                    className={`relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-2xl ${style.icon}`}
                  >
                    {certificate.icon}
                  </div>

                  {/* CONTENT */}
                  <div className="relative z-10 min-w-0 flex-1">
                    <h4 className="text-base font-bold text-white sm:text-lg">
                      {certificate.title}
                    </h4>

                    <p className="mt-1 text-sm text-zinc-400">
                      {certificate.organization}
                    </p>

                    <span className="mt-2 inline-block text-xs text-zinc-500">
                      {certificate.period}
                    </span>
                  </div>

                  {/* ARROW */}
                  <span className="relative z-10 text-lg text-zinc-500 transition group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-white">
                    ↗
                  </span>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        {/* ACHIEVEMENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          whileHover={{ y: -6 }}
          className="group relative mt-16 overflow-hidden rounded-2xl border border-amber-400/20 bg-gradient-to-r from-amber-500/[0.08] via-yellow-500/[0.04] to-transparent p-6 sm:p-8"
        >
          {/* GLOW */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-amber-400/10 blur-[90px]" />

          <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-center">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-amber-400/20 bg-amber-400/10 text-3xl">
              🏆
            </div>

            <div className="flex-1">
              <span className="text-[10px] font-bold tracking-[0.2em] text-amber-300/80">
                ACHIEVEMENT
              </span>

              <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                First Prize — Idea Presentation
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-400">
                Won First Prize for presenting the Dwell Discover project idea
                and solution.
              </p>
            </div>

            <div className="text-3xl text-amber-300/60 transition duration-300 group-hover:rotate-12 group-hover:scale-110">
              ✦
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Education;