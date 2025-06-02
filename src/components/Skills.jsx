import {
  HTML,
  CSS,
  Github,
  Git,
  Vite,
  TailwindCSS,
  react,
  Python,
  Javascript,
  CPP,
  C,
  typescript,
  Django,
} from "../constants/Constant";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "./Img_prop";

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const skills = [
    HTML,
    CSS,
    Javascript,
    react,
    TailwindCSS,
    typescript,
    CPP,
    C,
    Python,
    Vite,
    Git,
    Github,
    Django,
  ];

  return (
    <>
      <section
        id="skills"
        className="EXPERIENCE p-5 mx-20 mb-10 font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center max-sm:text-4xl">
          SKILLS
        </h1>
        <div
          className="IMG grid place-content-center p-5 grid-cols-3 gap-6 max-sm:p-2 mt-10"
          data-aos="zoom-out-up"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="filter drop-shadow-[0_0_8px_rgba(59,130,246,0.8)] dark:drop-shadow-[0_0_10px_rgba(14,165,233,0.9)] transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(59,130,246,1)]"
            >
              <Image img={skill} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Skills;
