"use client";

import { useEffect, useState } from "react";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Certificates", href: "#certificates" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) =>
        document.querySelector(item.href),
      );

      let currentSection = "";
      sections.forEach((section) => {
        if (section) {
          const sectionTop = (section as HTMLElement).offsetTop;
          if (window.scrollY >= sectionTop - 100) {
            currentSection = section.id;
          }
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="hidden lg:block mt-16">
      <ul className="flex flex-col gap-4 w-max">
        {navItems.map((item) => {
          const isActive = activeSection === item.href.substring(1);

          return (
            <li key={item.name}>
              <a
                href={item.href}
                className="group flex items-center py-2 transition-all"
              >
                <span
                  className={`
                  mr-4 h-px transition-all duration-300
                  ${
                    isActive
                      ? "w-16 bg-pink-500"
                      : "w-8 bg-slate-600 group-hover:w-16 group-hover:bg-pink-500"
                  }
                `}
                ></span>

                <span
                  className={`
                  text-sm font-bold uppercase tracking-widest transition-all
                  ${
                    isActive
                      ? "text-pink-500"
                      : "text-slate-500 group-hover:text-pink-500"
                  }
                `}
                >
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
