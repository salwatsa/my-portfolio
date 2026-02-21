import React from "react";
import { works } from "../data/works";

const Works = () => {
  return (
    <div>
      <h3 className="text-white font-bold mb-6 lg:hidden uppercase tracking-widest text-sm">
        Experience
      </h3>
      <div className="space-y-6">
        {works.map((item, index) => (
          <a
            key={index}
            href={item?.link}
            target="_blank"
            className="flex flex-col lg:flex-row gap-2 lg:gap-4 p-6 rounded-lg border border-white/5 bg-white/5 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300 group"
          >
            <div className="text-xs font-semibold uppercase tracking-wide text-slate-500 lg:w-1/4 pt-1">
              {item.date}
            </div>
            <div className="lg:w-3/4">
              <h3 className="font-bold text-slate-100 group-hover:text-pink-400 transition-colors">
                {item.company} ·{" "}
                <span className="italic font-medium text-slate-300">
                  {item.title}
                </span>
              </h3>

              <ul className="mt-2 text-sm text-slate-400 space-y-2">
                {item.description.map((desc, idx) => (
                  <li key={idx} className="list-disc ml-4">
                    {desc}
                  </li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="mt-4 flex flex-wrap gap-2">
                {item.technologies.map((tech, id) => (
                  <span
                    key={id}
                    className="text-[10px] font-bold uppercase tracking-wider text-pink-400 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Works;
