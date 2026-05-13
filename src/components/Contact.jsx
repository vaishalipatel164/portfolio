import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionTitle
        title="Contact"
        subtitle="I am open to internships, entry-level roles, and frontend development opportunities."
      />

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-[2.2rem] border border-white/10 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 p-8 text-center md:p-12"
      >
        <h3 className="text-3xl font-bold md:text-5xl">Let’s Build Something Great</h3>
        <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-300">
          I am ready to learn, contribute, and grow in frontend development through real opportunities.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${portfolioData.email}`}
            className="rounded-2xl bg-cyan-400 px-6 py-3 font-semibold text-slate-950 transition hover:scale-105"
          >
            Email Me
          </a>

          <a
            href={portfolioData.social.linkedin}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            LinkedIn
          </a>

          <a
            href={portfolioData.social.github}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl border border-white/15 bg-white/5 px-6 py-3 font-semibold text-white transition hover:scale-105 hover:bg-white/10"
          >
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  );
}