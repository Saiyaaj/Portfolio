import { motion } from "framer-motion";
import DeveloperCore from "../three/DeveloperCore";

const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#08080c] px-[5%] pt-28 pb-20 text-white lg:px-[8%]"
    >
      {/* BACKGROUND GLOWS */}
      <div className="pointer-events-none absolute left-[-15%] top-[15%] h-[420px] w-[420px] rounded-full bg-violet-600/15 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[450px] w-[450px] rounded-full bg-blue-600/10 blur-[150px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1400px] items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-8">
        {/* LEFT CONTENT */}
        <div className="max-w-2xl">
          <motion.div
            className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-200"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="h-2 w-2 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
            Available for opportunities
          </motion.div>

          <motion.p
            className="mb-3 text-base text-zinc-400 sm:text-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            👋 Hello, I'm
          </motion.p>

          <motion.h1
            className="mb-3 text-5xl font-black leading-none tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Saiyaaj
          </motion.h1>

          <motion.h2
            className="mb-6 bg-gradient-to-r from-violet-300 via-violet-400 to-blue-400 bg-clip-text text-2xl font-bold text-transparent sm:text-3xl md:text-4xl"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            Full Stack Web Developer
          </motion.h2>

          <motion.p
            className="max-w-xl text-base leading-8 text-zinc-400 sm:text-lg"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            I create modern, responsive and interactive web applications using
            React, Node.js, Express.js and MongoDB. I enjoy building clean user
            experiences and turning ideas into real products.
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="mt-8 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55 }}
          >
            <motion.button
              type="button"
              onClick={scrollToProjects}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.97 }}
              className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_15px_35px_rgba(124,58,237,0.35)] transition"
            >
              View My Work ↓
            </motion.button>

            <motion.a
              href="mailto:saiyajkhan786s@gmail.com"
              whileHover={{ y: -3 }}
              className="rounded-full border border-violet-400/25 bg-white/[0.03] px-6 py-3.5 text-sm font-semibold text-white transition hover:border-violet-400/50 hover:bg-violet-500/10"
            >
              Contact Me ✉
            </motion.a>
          </motion.div>

          {/* SOCIAL LINKS */}
          <motion.div
            className="mt-9 flex items-center gap-5 text-sm text-zinc-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a
              href="https://github.com/Saiyaaj"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-300"
            >
              GitHub
            </a>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <a
              href="https://www.linkedin.com/in/md-saiyaaj-763a36291"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-violet-300"
            >
              LinkedIn
            </a>

            <span className="h-1 w-1 rounded-full bg-zinc-700" />

            <a
              href="mailto:saiyajkhan786s@gmail.com"
              className="transition hover:text-violet-300"
            >
              Email
            </a>
          </motion.div>
        </div>

        {/* RIGHT SIDE 3D */}
        <motion.div
          className="relative h-[420px] w-full sm:h-[500px] lg:h-[620px]"
          initial={{ opacity: 0, scale: 0.8, x: 50 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: "easeOut",
          }}
        >
          <DeveloperCore />
        </motion.div>
      </div>

      {/* SCROLL BUTTON */}
      <motion.button
        type="button"
        onClick={scrollToProjects}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 items-center gap-3 text-xs tracking-[0.15em] text-zinc-500 transition hover:text-violet-300 md:flex"
      >
        <span>SCROLL TO EXPLORE</span>

        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
          className="text-lg"
        >
          ↓
        </motion.span>
      </motion.button>
    </section>
  );
};

export default Hero;