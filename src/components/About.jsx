import { motion } from "framer-motion";
import { User, Code2, Layers3 } from "lucide-react";
import SectionTitle from "./SectionTitle";

const cards = [
  {
    icon: User,
    title: "About Me",
    text: "I like turning ideas into beautiful and responsive frontend interfaces. My goal is to become a strong React developer and work on real-world web applications.",
  },
  {
    icon: Layers3,
    title: "What I Do",
    text: "I build landing pages, portfolio sites, dashboards, and ecommerce frontend layouts with focus on design, usability, and clean structure.",
  },
  {
    icon: Code2,
    title: "Career Goal",
    text: "I am looking for opportunities to learn, improve my frontend skills, and contribute to projects where I can grow as a developer.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionTitle
        title="About Me"
        subtitle="A short introduction about who I am and what I want to achieve."
      />

      <div className="grid gap-6 lg:grid-cols-3">
        {cards.map((card, index) => {
          const Icon = card.icon;
          return (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-7"
            >
              <Icon className="mb-4 text-cyan-400" />
              <h3 className="text-xl font-semibold">{card.title}</h3>
              <p className="mt-3 leading-7 text-slate-300">{card.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}