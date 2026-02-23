import React from "react";
import { FiGithub, FiLinkedin, FiInstagram, FiMail } from "react-icons/fi";

interface Contact {
  name: string;
  link: string;
  icon: React.ReactNode;
}

const contacts: Contact[] = [
  {
    name: "GitHub",
    link: "https://github.com/salwatsa",
    icon: <FiGithub className="h-6 w-6" />,
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/salwatsa/",
    icon: <FiLinkedin className="h-6 w-6" />,
  },
  {
    name: "Email",
    link: "mailto:salwa130703@gmail.com",
    icon: <FiMail className="h-6 w-6" />,
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/salwatsa/",
    icon: <FiInstagram className="h-6 w-6" />,
  },
];

const Contacts = () => {
  return (
    <div>
      <ul
        className="mt-8 flex items-center gap-5 ml-1 md:mt-16 lg:mt-0"
        aria-label="Social media"
      >
        {contacts.map((item) => (
          <li key={item.name}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Profile ${item.name}`}
              className="block text-slate-400 transition-all duration-300 hover:-translate-y-1 hover:text-slate-200 focus:outline-none focus-visible:ring focus-visible:ring-teal-300 rounded-md"
            >
              {item.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
