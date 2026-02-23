import React from "react";
import { Project } from "../data/projects";

const ProjectCard = ({ data }: { data: Project }) => {
  const hasValidLink = Boolean(data.link && data.link !== "#");

  return (
    <article className="group relative flex flex-col gap-2 rounded-lg border border-white/5 bg-white/5 p-6 transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/5">
      <h3 className="text-xl font-bold text-slate-100">
        {hasValidLink ? (
          <a
            href={data.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 transition-colors hover:text-pink-400 focus-visible:text-pink-400 group-hover:text-pink-400"
          >
            {data.title}
            <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
              ↗
            </span>
          </a>
        ) : (
          <span className="transition-colors group-hover:text-pink-400">
            {data.title}
          </span>
        )}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-slate-400">{data.desc}</p>

      {/* Tags Technology */}
      <div className="mt-4 flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-pink-500/10 px-3 py-1 text-xs font-medium text-pink-400"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export default ProjectCard;
