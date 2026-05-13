import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-7xl px-6 py-10 md:px-10">
      <SectionTitle title="Education" subtitle="My academic background and qualifications." />

      <div className="grid gap-5 md:grid-cols-3">
        {portfolioData.education.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08 }}
            className="rounded-[2rem] border border-white/10 bg-white/5 p-6"
          >
            <GraduationCap className="mb-4 text-cyan-400" />
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-slate-300">{item.institute}</p>
            <p className="mt-2 text-sm text-slate-400">
              {item.extra} • {item.year}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}