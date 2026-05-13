import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
// import profileImage from "../assets/profile.jpeg";
import resume from "../assets/resume.pdf";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.10),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(168,85,247,0.12),transparent_30%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:px-10 md:py-24 lg:grid-cols-2">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.12 } },
          }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-medium text-cyan-300"
          >
            ✨ Frontend Portfolio
          </motion.div>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="text-4xl font-bold leading-tight text-white md:text-6xl"
          >
            Hi, I’m{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {portfolioData.name}
            </span>
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-4 text-xl font-medium text-slate-200 md:text-2xl"
          >
            {portfolioData.title}
          </motion.p>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-6 max-w-2xl text-base leading-8 text-slate-300 md:text-lg"
          >
            {portfolioData.about}
          </motion.p>

          {/* 🔥 BUTTON SECTION */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105"
            >
              View Projects →
            </a>

            <a
              href="#contact"
              className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition duration-300 hover:scale-105 hover:bg-white/10"
            >
              Contact Me
            </a>

            {/* ✅ ONLY ADDED THIS */}
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-6 py-3 font-semibold text-cyan-300 transition duration-300 hover:scale-105 hover:bg-cyan-400/20"
            >
              Download Resume
            </a>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-8 flex flex-wrap gap-4 text-sm text-slate-300"
          >
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              📧 {portfolioData.email}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              📞 {portfolioData.phone}
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              📍 {portfolioData.location}
            </div>
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 25 },
              visible: { opacity: 1, y: 0 },
            }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {portfolioData.social.github ? (
              <a
                href={portfolioData.social.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                GitHub
              </a>
            ) : null}

            {portfolioData.social.linkedin ? (
              <a
                href={portfolioData.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:-translate-y-1 hover:bg-white/10"
              >
                LinkedIn
              </a>
            ) : null}

            <a
              href={`mailto:${portfolioData.email}`}
              className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-3 text-sm font-medium text-cyan-300 transition hover:-translate-y-1 hover:bg-cyan-400/20"
            >
              Email Me
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 25 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto w-full max-w-md"
        >
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
            <div className="rounded-[1.7rem] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-purple-500/20 p-4">
              <div className="rounded-[1.5rem] border border-white/10 bg-slate-900/80 p-5">
                {/* <div className="overflow-hidden rounded-[1.3rem] border border-white/10 bg-slate-800">
                  <img
                    src={profileImage}
                    alt={portfolioData.name}
                    className="h-[420px] w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                      e.currentTarget.parentElement.innerHTML = `
                        <div style="height:420px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,rgba(34,211,238,0.2),rgba(59,130,246,0.15));font-size:48px;font-weight:700;color:white;">
                          DS
                        </div>
                      `;
                    }}
                  />
                </div> */}

                <div className="mt-5 text-center">
                  <h3 className="text-2xl font-semibold text-white">
                    {portfolioData.name}
                  </h3>
                  <p className="mt-2 text-slate-300">{portfolioData.title}</p>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  {portfolioData.stats.map((item, index) => (
                    <div
                      key={index}
                      className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                    >
                      <p className="text-2xl font-bold text-cyan-400">
                        {item.value}
                      </p>
                      <p className="text-xs text-slate-400">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}