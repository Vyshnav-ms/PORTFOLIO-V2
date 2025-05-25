/* eslint-disable react/prop-types */
import { SiGithub } from "react-icons/si";
import { SlLink } from "react-icons/sl";

const Project_prop = (props) => {
  return (
    <div className="border-[#00040f] shadow-xl bg-[#e1e1e1] dark:bg-transparent dark:border-white border rounded-xl p-5 sm:p-7 hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] dark:from-[#00040F] dark:to-[#0B274C]">
      <div className="flex flex-col sm:flex-row gap-5 items-center">
        {/* Image Section */}
        <div className="flex-shrink-0">
          <img
            src={props.img}
            alt={props.title}
            className="w-[90px] sm:w-[100px] rounded-full border border-[#00040f]"
          />
        </div>

        {/* Title & Tools */}
        <div className="text-center sm:text-left">
          <h1 className="font-semibold tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-cyan-500 dark:to-slate-200 text-xl sm:text-2xl mb-2">
            {props.title}
          </h1>
          <h3 className="text-[#00040f] dark:text-slate-200 text-sm sm:text-base">
            Tools Used
          </h3>
          <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-1 text-xl">
            {props.html5}
            {props.css3}
            {props.javascript}
            {props.typescript}
            {props.tailwindcss}
            {props.react}
            {props.vite}
            {props.python}
            {props.django}
            {props.nextjs}
          </div>
        </div>
      </div>

      {/* Description */}
      <p className="text-slate-600 dark:text-slate-300 mt-5 text-sm sm:text-base px-2 sm:px-5">
        {props.para}
      </p>

      {/* Links */}
      <div className="flex justify-center sm:justify-start gap-4 text-[#00040f] dark:text-slate-200 text-2xl sm:text-3xl mt-5 px-2 sm:px-5">
        <a href={props.github_link} target="_blank" rel="noreferrer">
          <SiGithub />
        </a>
        <a href={props.link} target="_blank" rel="noreferrer">
          <SlLink />
        </a>
      </div>
    </div>
  );
};

export default Project_prop;
