import React from "react";
import Image from "next/image";
import { certificates } from "../data/certificates";

const Certificates = () => {
  return (
    <div>
      <h3 className="text-white font-bold mb-6 lg:hidden">CERTIFICATES</h3>
      {/* mapping */}
      <div className="flex flex-row flex-wrap justify-between gap-5">
        {certificates.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            className="w-full md:w-56 xl:w-60 flex flex-col group p-3 rounded-lg border border-white/5 bg-white/5 hover:border-pink-500/30 hover:bg-pink-500/5 transition-all duration-300"
          >
            <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
              <Image
                src={item.img}
                alt={item.title}
                fill 
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            <div className="flex flex-col grow">
              <h3 className="text-sm font-bold text-slate-100 group-hover:text-pink-400 transition-colors line-clamp-2">
                {item.title}
              </h3>

              <p className="text-xs text-slate-400 mt-2 line-clamp-3">
                {item.description}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
