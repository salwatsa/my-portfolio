import React from "react";
import { Project } from "../data/projects";

const ProjectCard = ({ data }: { data: Project }) => {
  return (
    <a
      href={data.link}
      target="_blank"
      className="group block p-6 rounded-lg border border-white/5 bg-white/5 hover:border-pink-500/3 hover:bg-pink-500/5 transition-all duration-300"
    >
      <h3 className="text-xl font-bold text-slate-100 group-hover:text-slate-300 transition-colors">
        {data.title}
      </h3>

      <p className="mt-2 text-sm text-slate-400 leading-relaxed">{data.desc}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {data.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs font-medium text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
