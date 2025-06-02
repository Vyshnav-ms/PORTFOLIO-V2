import React from "react";
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = ({ img, title, tools = [], para, github_link, link }) => {
  return (
    <div
      className="
        bg-white dark:bg-transparent
        rounded-xl p-6
        shadow-[0_0_15px_3px_rgba(59,130,246,0.6)]
        dark:shadow-[0_0_15px_3px_rgba(14,165,233,0.8)]
        hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1]
        dark:from-[#00040F] dark:to-[#0B274C]
        transition-all duration-300
      "
    >
      <div className="flex flex-col sm:flex-row gap-5 items-center mb-4">
        {/* Image Section */}
        <img
          src={img}
          alt={title}
          className="w-[90px] sm:w-[100px] rounded-full border border-[#00040f]"
        />

        {/* Title & Tools */}
        <div className="text-center sm:text-left">
          <h1 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl sm:text-2xl mb-2">
            {title}
          </h1>
          <h3 className="text-[#00040f] dark:text-slate-200 text-sm sm:text-base">
            Tools Used
          </h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-1 text-xl">
            {tools.map((ToolIcon, idx) => (
              <span key={idx}>{ToolIcon}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-300 mt-5 text-sm sm:text-base px-2 sm:px-5">
        {para}
      </p>

      {/* Links */}
      <div className="flex justify-center sm:justify-start gap-4 text-[#00040f] dark:text-slate-200 text-2xl sm:text-3xl mt-5 px-2 sm:px-5">
        <a href={github_link} target="_blank" rel="noopener noreferrer" aria-label={`${title} GitHub`}>
          <SiGithub />
        </a>
        <a href={link} target="_blank" rel="noopener noreferrer" aria-label={`${title} Live Link`}>
          <SlLink />
        </a>
      </div>
    </div>
  );
};

export default Project_prop;
