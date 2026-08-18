import { motion } from "framer-motion";

function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      "Thanks for reaching out! This contact form is currently in demo mode."
    );

    event.target.reset();
  };

  return (
    <section
      className="relative overflow-hidden bg-[#080808] px-5 py-24 text-white sm:px-8 lg:px-[8%]"
      id="contact"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-[-10%] top-[10%] h-72 w-72 rounded-full bg-purple-600/10 blur-[120px]" />

      <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* SECTION HEADER */}
        <motion.div
          className="mb-16 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-block text-xs font-semibold tracking-[0.25em] text-purple-400">
            06 — CONTACT
          </span>

          <h2 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block bg-gradient-to-r from-purple-400 via-fuchsia-400 to-blue-400 bg-clip-text text-transparent">
              amazing together.
            </span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            Have a project, opportunity, or idea in mind? Let's connect and
            create something meaningful together.
          </p>
        </motion.div>

        {/* CONTACT GRID */}
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* LEFT SIDE */}
          <motion.div
            className="flex flex-col justify-center"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            {/* STATUS */}
            <div className="mb-8 inline-flex w-fit items-center gap-3 rounded-full border border-purple-500/20 bg-purple-500/5 px-4 py-2 text-sm text-zinc-300">
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-green-400" />
              Open to opportunities
            </div>

            <p className="mb-10 max-w-xl text-lg leading-8 text-zinc-400">
              I'm always interested in discussing web development
              opportunities, exciting projects, collaborations, and innovative
              ideas.
            </p>

            {/* CONTACT DETAILS */}
            <div className="space-y-4">
              {/* EMAIL */}
              <a
                href="mailto:saiyajkhan786s@gmail.com"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/5"
              >
                <div>
                  <span className="block text-xs font-semibold tracking-[0.2em] text-zinc-500">
                    EMAIL
                  </span>

                  <span className="mt-2 block text-sm text-zinc-200 sm:text-base">
                    saiyajkhan786s@gmail.com
                  </span>
                </div>

                <span className="text-xl text-purple-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              {/* GITHUB */}
              <a
                href="https://github.com/Saiyaaj"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/5"
              >
                <div>
                  <span className="block text-xs font-semibold tracking-[0.2em] text-zinc-500">
                    GITHUB
                  </span>

                  <span className="mt-2 block text-sm text-zinc-200 sm:text-base">
                    github.com/Saiyaaj
                  </span>
                </div>

                <span className="text-xl text-purple-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              {/* LINKEDIN */}
              <a
                href="https://www.linkedin.com/in/md-saiyaaj-763a36291"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition duration-300 hover:-translate-y-1 hover:border-purple-500/40 hover:bg-purple-500/5"
              >
                <div>
                  <span className="block text-xs font-semibold tracking-[0.2em] text-zinc-500">
                    LINKEDIN
                  </span>

                  <span className="mt-2 block text-sm text-zinc-200 sm:text-base">
                    Md Saiyaaj
                  </span>
                </div>

                <span className="text-xl text-purple-400 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl sm:p-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
          >
            {/* FORM HEADER */}
            <div className="mb-8 flex items-center gap-4">
              <span className="whitespace-nowrap text-xs font-semibold tracking-[0.2em] text-purple-400">
                START A CONVERSATION
              </span>

              <div className="h-px w-full bg-gradient-to-r from-purple-500/50 to-transparent" />
            </div>

            {/* NAME */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="mb-3 block text-xs font-semibold tracking-[0.15em] text-zinc-400"
              >
                YOUR NAME
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your name"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
              />
            </div>

            {/* EMAIL */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="mb-3 block text-xs font-semibold tracking-[0.15em] text-zinc-400"
              >
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                required
                className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
              />
            </div>

            {/* MESSAGE */}
            <div className="mb-8">
              <label
                htmlFor="message"
                className="mb-3 block text-xs font-semibold tracking-[0.15em] text-zinc-400"
              >
                MESSAGE
              </label>

              <textarea
                id="message"
                name="message"
                placeholder="Tell me about your project or opportunity..."
                rows="6"
                required
                className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-500/60 focus:ring-2 focus:ring-purple-500/10"
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/20 active:translate-y-0"
            >
              <span>Send Message</span>

              <span className="text-lg transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                ↗
              </span>
            </button>
          </motion.form>
        </div>

        {/* BOTTOM STATUS */}
        <motion.div
          className="mt-16 flex items-center justify-center gap-3 text-center text-sm text-zinc-500"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <span className="h-2 w-2 rounded-full bg-purple-400" />
          Usually available for new opportunities and collaborations.
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;