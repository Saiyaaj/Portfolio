import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (name) => {
    setActive(name);
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 z-[999] w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#08080f]/95 backdrop-blur-xl border-b border-violet-500/20 shadow-[0_10px_40px_rgba(0,0,0,0.35)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 md:px-8">

        {/* LOGO */}
        <motion.a
          href="#home"
          onClick={() => handleNavClick("Home")}
          className="relative z-50 text-3xl font-bold tracking-tight text-white"
          whileHover={{
            scale: 1.15,
            rotate: -8,
          }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          <motion.span
            animate={{
              textShadow: [
                "0px 0px 0px rgba(139,92,246,0)",
                "0px 0px 20px rgba(139,92,246,1)",
                "0px 0px 0px rgba(139,92,246,0)",
              ],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            S
          </motion.span>

          <span className="text-violet-400">.</span>
        </motion.a>

        {/* DESKTOP NAVIGATION */}
        <div className="relative hidden items-center gap-2 rounded-full border border-white/10 bg-black/30 p-2 shadow-[0_0_40px_rgba(124,58,237,0.15)] backdrop-blur-xl lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.name;
            const isHovered = hovered === link.name;

            return (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={() => handleNavClick(link.name)}
                onMouseEnter={() => setHovered(link.name)}
                onMouseLeave={() => setHovered(null)}
                className={`relative isolate overflow-hidden rounded-full px-4 py-2.5 text-sm font-semibold transition-colors duration-300 ${
                  isActive ? "text-white" : "text-zinc-400"
                }`}
                animate={{
                  y: isHovered ? -4 : 0,
                  scale: isHovered ? 1.08 : 1,
                  color: isHovered
                    ? "#ffffff"
                    : isActive
                    ? "#ffffff"
                    : "#a1a1aa",
                }}
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 20,
                }}
              >
                {/* HOVER COLOR */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.span
                      initial={{
                        opacity: 0,
                        scale: 0.6,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.6,
                      }}
                      transition={{
                        duration: 0.2,
                      }}
                      className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 shadow-[0_0_25px_rgba(139,92,246,0.8)]"
                    />
                  )}
                </AnimatePresence>

                {/* ACTIVE INDICATOR */}
                {isActive && !isHovered && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 -z-20 rounded-full bg-violet-600/50"
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 28,
                    }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-1">
                  {link.name}

                  <motion.span
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      x: isHovered ? 0 : -5,
                    }}
                    transition={{ duration: 0.2 }}
                    className="text-violet-200"
                  >
                    ↗
                  </motion.span>
                </span>
              </motion.a>
            );
          })}
        </div>

        {/* LET'S TALK */}
        <motion.a
          href="#contact"
          onClick={() => handleNavClick("Contact")}
          className="relative hidden overflow-hidden rounded-full border border-violet-400/40 bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_0_25px_rgba(124,58,237,0.4)] md:flex"
          whileHover={{
            scale: 1.08,
            y: -4,
            boxShadow: "0px 0px 35px rgba(139,92,246,0.9)",
          }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span
            className="absolute inset-0 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-blue-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.35 }}
          />

          <span className="relative z-10">
            Let's Talk
          </span>

          <motion.span
            className="relative z-10 ml-2"
            whileHover={{
              x: 5,
              y: -5,
            }}
          >
            ↗
          </motion.span>
        </motion.a>

        {/* MOBILE BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-violet-400/30 bg-violet-500/10 lg:hidden"
        >
          <motion.span
            animate={{
              rotate: menuOpen ? 45 : 0,
              y: menuOpen ? 4 : 0,
            }}
            className="h-[2px] w-5 bg-white"
          />

          <motion.span
            animate={{
              rotate: menuOpen ? -45 : 0,
              y: menuOpen ? -4 : 0,
            }}
            className="h-[2px] w-5 bg-white"
          />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{
              type: "spring",
              stiffness: 220,
              damping: 22,
            }}
            className="absolute left-0 top-full w-full border-b border-violet-500/20 bg-[#08080f] px-6 py-8 lg:hidden"
          >
            <div className="mx-auto flex max-w-md flex-col">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={() => handleNavClick(link.name)}
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.07,
                  }}
                  whileHover={{
                    x: 15,
                    scale: 1.03,
                    color: "#c084fc",
                  }}
                  className="flex items-center gap-4 border-b border-white/10 py-4 text-lg font-medium text-white"
                >
                  <span className="text-xs text-violet-400">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {link.name}

                  <span className="ml-auto text-violet-400">↗</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;