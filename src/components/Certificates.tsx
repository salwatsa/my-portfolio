import React from "react";
import Image from "next/image";
import { certificates } from "../data/certificates";

const Certificates = () => {
  return (
    <div>
      <h3 className="text-white font-bold mb-6 lg:hidden">CERTIFICATES</h3>
      {/* mapping */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certificates.map((item, index) => {
          const hasValidLink = Boolean(item.link && item.link !== "#");
          const WrapperTag = hasValidLink ? "a" : "div";

          return (
            <WrapperTag
              key={index}
              {...(hasValidLink && {
                href: item.link,
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className={`group block h-full w-full rounded-lg border border-white/5 bg-white/5 p-4 transition-all duration-300 
          ${hasValidLink ? "cursor-pointer hover:-translate-y-1 hover:border-pink-500/30 hover:bg-pink-500/5" : "cursor-default"}`}
            >
              <div className="relative mb-4 aspect-video w-full overflow-hidden rounded-md bg-slate-800">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="flex flex-col">
                <div className="flex items-center justify-between gap-2">
                  <h3
                    className={`text-sm font-bold transition-colors line-clamp-2
              ${hasValidLink ? "text-slate-100 group-hover:text-pink-400" : "text-slate-100"}`}
                  >
                    {item.title}
                  </h3>

                  {hasValidLink && (
                    <span className="text-slate-400 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1">
                      ↗
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs leading-relaxed text-slate-400 line-clamp-3">
                  {item.description}
                </p>
              </div>
            </WrapperTag>
          );
        })}
      </div>
    </div>
  );
};

export default Certificates;
