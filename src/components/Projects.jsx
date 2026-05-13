import { portfolioData } from "../data/portfolioData";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-7xl px-6 py-16 md:px-10">
      <SectionTitle
        title="Featured Projects"
        subtitle="Some frontend projects that reflect my design sense and development practice."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {portfolioData.projects.map((project, index) => (
          <div
            key={project.title || index}
            className="group rounded-[2rem] border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="mt-3 leading-7 text-slate-300">
                  {project.description}
                </p>
              </div>

              <div className="rounded-2xl bg-cyan-400/10 p-3 text-cyan-300">
                💼
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {project.tech?.map((item, i) => (
                <span
                  key={i}
                  className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10"
                >
                  Live Demo
                </a>
              )}

              {project.code && project.code !== "#" && (
                <a
                  href={project.code}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-4 py-2 text-sm transition hover:bg-white/10"
                >
                  Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}