import React from "react";
import { works } from "../data/works";

const Works = () => {
  return (
    <section>
      <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-white lg:hidden">
        Experience
      </h3>

      <div className="space-y-6">
        {works.map((item, index) => {
          // Check if the link exists and is not just a placeholder
          const hasValidLink = Boolean(item?.link && item.link !== "#");

          return (
            <div
              key={index}
              className="group flex flex-col gap-2 rounded-lg border border-transparent p-6 transition-all duration-300 hover:border-pink-500/30 hover:bg-pink-500/5 lg:flex-row lg:gap-4"
            >
              {/* Left side */}
              <div className="pt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 lg:w-1/4">
                {item.date}
              </div>

              {/* Right side */}
              <div className="lg:w-3/4">
                <h3 className="font-bold text-slate-100">
                  {/* Conditional rendering for title */}
                  {hasValidLink ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 transition-colors hover:text-pink-400 focus-visible:text-pink-400 group-hover:text-pink-400"
                    >
                      {item.title} · {item.company}
                      {/* arrow icon */}
                      <span className="inline-block transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                        ↗
                      </span>
                    </a>
                  ) : (
                    // if no valid link, just render the title without anchor tag
                    <span className="transition-colors group-hover:text-pink-400">
                      {item.title} · {item.company}
                    </span>
                  )}
                </h3>

                {/* Description */}
                <ul className="mt-2 space-y-2 text-sm text-slate-400">
                  {item.description.map((desc, idx) => (
                    <li key={idx} className="ml-4 list-disc">
                      {desc}
                    </li>
                  ))}
                </ul>

                {/* Technologies */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.technologies.map((tech, id) => (
                    <span
                      key={id}
                      className="rounded-full border border-pink-500/10 bg-pink-500/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-pink-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Works;
