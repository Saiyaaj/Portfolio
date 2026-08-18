import { motion } from "framer-motion";

const experiences = [
  {
    number: "01",
    role: "Web Developer",
    company: "TripLodge Universe Pvt. Ltd.",
    type: "Remote / Work From Home",
    period: "2026 — Present",
    description:
      "Working on modern and responsive web experiences, contributing to frontend development, UI implementation, website improvements, and interactive user experiences.",
    skills: ["React", "JavaScript", "HTML5", "CSS3"],
    icon: "💻",
    accent: "purple",
  },
  {
    number: "02",
    role: "Java Web Developer Trainee",
    company: "HCLTech",
    type: "Professional Training",
    period: "Nov 2024 — Mar 2025",
    description:
      "Completed hands-on training in Java web development with a focus on programming fundamentals, object-oriented programming, web technologies, and practical application development.",
    skills: ["Java", "Web Development", "OOP"],
    icon: "☕",
    accent: "blue",
  },
];

const accentStyles = {
  purple: {
    number: "text-violet-400",
    dot: "bg-violet-400 shadow-[0_0_18px_rgba(167,139,250,0.8)]",
    line: "bg-gradient-to-b from-violet-400/60 to-transparent",
    icon: "border-violet-400/20 bg-violet-500/10",
    iconText: "text-violet-300",
    tag: "border-violet-400/20 bg-violet-500/[0.08] text-violet-200",
    progress: "from-violet-500 via-purple-400 to-transparent",
    hover: "hover:border-violet-400/40",
    glow: "bg-violet-600/10",
  },
  blue: {
    number: "text-blue-400",
    dot: "bg-blue-400 shadow-[0_0_18px_rgba(96,165,250,0.8)]",
    line: "bg-gradient-to-b from-blue-400/60 to-transparent",
    icon: "border-blue-400/20 bg-blue-500/10",
    iconText: "text-blue-300",
    tag: "border-blue-400/20 bg-blue-500/[0.08] text-blue-200",
    progress: "from-blue-500 via-cyan-400 to-transparent",
    hover: "hover:border-blue-400/40",
    glow: "bg-blue-600/10",
  },
};

function Experience() {
  return (
    <section
      id="experience"
      className="relative overflow-hidden bg-[#08080c] px-[5%] py-24 text-white lg:px-[8%] lg:py-32"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute -left-40 top-40 h-[450px] w-[450px] rounded-full bg-violet-600/10 blur-[150px]" />
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
            04 — EXPERIENCE
          </span>

          <h2 className="text-4xl font-black leading-[1.1] tracking-tight text-white sm:text-5xl md:text-6xl">
            My professional
            <span className="block bg-gradient-to-r from-violet-300 to-blue-400 bg-clip-text text-transparent">
              journey so far.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-zinc-400">
            A journey of learning, building, and gaining practical experience
            through professional work and hands-on training.
          </p>
        </motion.div>

        {/* EXPERIENCE LIST */}
        <div className="space-y-6">
          {experiences.map((experience, index) => {
            const style = accentStyles[experience.accent];

            return (
              <motion.article
                key={experience.number}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.65,
                  delay: index * 0.15,
                }}
                whileHover={{ y: -7 }}
                className={`group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] transition-all duration-300 ${style.hover}`}
              >
                {/* CARD GLOW */}
                <div
                  className={`pointer-events-none absolute -right-24 -top-24 h-48 w-48 rounded-full blur-[90px] ${style.glow}`}
                />

                <div className="relative z-10 flex gap-5 p-6 sm:gap-8 sm:p-8">
                  {/* TIMELINE */}
                  <div className="hidden w-12 flex-col items-center sm:flex">
                    <span
                      className={`text-xs font-bold tracking-[0.2em] ${style.number}`}
                    >
                      {experience.number}
                    </span>

                    <span
                      className={`mt-4 h-2.5 w-2.5 rounded-full ${style.dot}`}
                    />

                    {index !== experiences.length - 1 && (
                      <span
                        className={`mt-3 w-px flex-1 ${style.line}`}
                      />
                    )}
                  </div>

                  {/* CONTENT */}
                  <div className="min-w-0 flex-1">
                    {/* MOBILE NUMBER */}
                    <div className="mb-5 flex items-center justify-between sm:hidden">
                      <span
                        className={`text-xs font-bold tracking-[0.2em] ${style.number}`}
                      >
                        {experience.number}
                      </span>

                      <span
                        className={`h-2.5 w-2.5 rounded-full ${style.dot}`}
                      />
                    </div>

                    {/* HEADER */}
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                      <div className="flex items-start gap-4">
                        <div
                          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border text-2xl ${style.icon} ${style.iconText}`}
                        >
                          {experience.icon}
                        </div>

                        <div>
                          <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-600">
                            PROFESSIONAL EXPERIENCE
                          </span>

                          <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
                            {experience.role}
                          </h3>

                          <p className="mt-1 text-sm font-medium text-zinc-400">
                            {experience.company}
                          </p>
                        </div>
                      </div>

                      {/* META */}
                      <div className="flex flex-wrap gap-2 lg:max-w-[220px] lg:justify-end">
                        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-400">
                          {experience.period}
                        </span>

                        <span className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-zinc-500">
                          {experience.type}
                        </span>
                      </div>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="mt-7 max-w-3xl text-sm leading-7 text-zinc-400 sm:text-base">
                      {experience.description}
                    </p>

                    {/* SKILLS */}
                    <div className="mt-6 flex flex-wrap gap-2">
                      {experience.skills.map((skill) => (
                        <span
                          key={skill}
                          className={`rounded-full border px-3 py-1.5 text-xs font-medium ${style.tag}`}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* BOTTOM PROGRESS */}
                <div className="relative z-10 mx-6 h-px overflow-hidden bg-white/[0.06] sm:mx-8">
                  <motion.span
                    className={`block h-full w-full origin-left bg-gradient-to-r ${style.progress}`}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 1,
                      delay: index * 0.15 + 0.3,
                    }}
                  />
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* CURRENT STATUS */}
        <motion.div
          className="mt-14 flex items-center justify-center gap-3 text-center text-sm text-zinc-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-2 w-2 shrink-0 animate-pulse rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.7)]" />
          Currently growing through real-world development experience.
        </motion.div>
      </div>
    </section>
  );
}

export default Experience;