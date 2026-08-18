import { motion } from "framer-motion";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#080808] px-5 py-20 text-white sm:px-8 lg:px-[8%]">
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-[-10%] top-[20%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-15%] right-[-5%] h-80 w-80 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* BIG CTA */}
        <motion.div
          className="mb-20 flex flex-col items-start justify-between gap-8 border-b border-white/10 pb-16 lg:flex-row lg:items-end"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div>
            <p className="mb-5 text-xs font-semibold tracking-[0.25em] text-purple-400">
              HAVE AN IDEA?
            </p>

            <h2 className="max-w-3xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Let's create something
              <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
                extraordinary.
              </span>
            </h2>
          </div>

          <a
            href="mailto:saiyajkhan786s@gmail.com"
            className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20"
          >
            Start a Conversation

            <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
              ↗
            </span>
          </a>
        </motion.div>

        {/* FOOTER GRID */}
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a
              href="#home"
              className="mb-6 inline-block text-5xl font-bold tracking-tight"
            >
              S
              <span className="text-purple-400">.</span>
            </a>

            <p className="max-w-xs text-sm leading-7 text-zinc-400">
              Full Stack Developer focused on building modern, interactive,
              and meaningful digital experiences.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm text-zinc-400">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
              Available for opportunities
            </div>
          </div>

          {/* NAVIGATION */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wide text-white">
              Navigation
            </h3>

            <div className="flex flex-col gap-4">
              {[
                ["Home", "#home"],
                ["About", "#about"],
                ["Skills", "#skills"],
                ["Projects", "#projects"],
                ["Experience", "#experience"],
                ["Education", "#education"],
                ["Contact", "#contact"],
              ].map(([name, link]) => (
                <a
                  key={name}
                  href={link}
                  className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-purple-400"
                >
                  {name}
                </a>
              ))}
            </div>
          </div>

          {/* CONNECT */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wide text-white">
              Connect
            </h3>

            <div className="flex flex-col gap-4">
              <a
                href="https://github.com/Saiyaaj"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-purple-400"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/in/md-saiyaaj-763a36291"
                target="_blank"
                rel="noreferrer"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-purple-400"
              >
                LinkedIn ↗
              </a>

              <a
                href="mailto:saiyajkhan786s@gmail.com"
                className="w-fit text-sm text-zinc-400 transition hover:translate-x-1 hover:text-purple-400"
              >
                Email ↗
              </a>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-sm font-semibold tracking-wide text-white">
              Let's Talk
            </h3>

            <a
              href="mailto:saiyajkhan786s@gmail.com"
              className="text-sm leading-7 text-zinc-300 transition hover:text-purple-400"
            >
              saiyajkhan786s
              <br />
              @gmail.com
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-500">
              Open to exciting projects, collaborations and opportunities.
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-12 h-px w-full bg-white/10" />

        {/* BOTTOM */}
        <div className="flex flex-col justify-between gap-5 text-sm text-zinc-500 sm:flex-row sm:items-center">
          <p>
            © {currentYear}{" "}
            <strong className="font-medium text-zinc-300">Md Saiyaaj</strong>.
            Crafted with React & creativity.
          </p>

          <a
            href="#home"
            className="group flex items-center gap-3 transition hover:text-purple-400"
          >
            <span>Back to top</span>

            <b className="text-base transition-transform duration-300 group-hover:-translate-y-1">
              ↑
            </b>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;