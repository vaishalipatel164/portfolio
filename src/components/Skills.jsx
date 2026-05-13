import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
      <SectionTitle
        title="Skills"
        subtitle="My technical skills and tools for frontend development."
      />

      <div className="flex flex-wrap gap-3">
        {portfolioData.skills.map((skill, index) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </section>
  );
}