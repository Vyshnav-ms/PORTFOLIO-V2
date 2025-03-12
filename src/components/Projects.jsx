import Project_prop from "./Project_prop.jsx";
import {
  Portfolio,
  WellBeing,
  Travel,
  Typing,
  Lumos,
} from "../constants/Constant";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import {
  SiReact,
  SiTailwindcss,
  SiVite,
  SiHtml5,
  SiTypescript,
  SiPython,
  SiDjango,
  SiCss3,
} from "react-icons/si";

const Projects = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="projects"
      className="EXPERIENCE p-5 mx-20 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10" data-aos="fade-down">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Projects
        </h1>

        <div
          className="PROJECTS mt-16 grid gap-10 grid-cols-2 max-sm:grid-cols-1"
          data-aos="zoom-out-down"
        >
          {/* Portfolio Website */}
          <Project_prop
            title="Portfolio Website"
            para="Personal portfolio website created with react and Tailwind CSS"
            img={Portfolio}
            link="https://vyshnav-portfolio-v2.vercel.app/"
            github_link="https://github.com/Vyshnav-ms/PORTFOLIO-V2"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          {/* Lumos Learning App */}
          <Project_prop
            title="Lumos Learning App"
            para="Lumos Learning App is a website designed to introduce young learners to the English alphabet through interactive and engaging experiences."
            img={Lumos}
            link="https://lumos-learning-app.vercel.app/"
            github_link="https://github.com/Vyshnav-ms/Lumos-learning-app"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            typescript={
              <Tooltip title="Typescript" arrow>
                <IconButton>
                  <SiTypescript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          {/* Shift Keys Typing App */}
          <Project_prop
            title="Shift Keys Typing App"
            para="Shift Keys Typing App is a website designed to improve typing speed and accuracy."
            img={Typing}
            link="https://shiftkeys.netlify.app/"
            github_link="https://github.com/Vyshnav-ms/Typing-test-app"
            react={
              <Tooltip title="React" arrow>
                <IconButton>
                  <SiReact className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            typescript={
              <Tooltip title="Typescript" arrow>
                <IconButton>
                  <SiTypescript className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            tailwindcss={
              <Tooltip title="TailWind CSS" arrow>
                <IconButton>
                  <SiTailwindcss className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            vite={
              <Tooltip title="Vite" arrow>
                <IconButton>
                  <SiVite className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          {/* Mental Health App */}
          <Project_prop
            title="Mental Health App"
            para="MentalPal is a web application built with Django that connects students with mentors for mental health support."
            img={WellBeing}
            link="#"
            github_link="https://github.com/Vyshnav-ms/Mental-pal"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            django={
              <Tooltip title="Django" arrow>
                <IconButton>
                  <SiDjango className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
          {/* Meet and travel */}
          <Project_prop
            title="Meet and Travel"
            para="A web application built with Django that connects people with strangers to plan and travel together."
            img={Travel}
            link="#"
            github_link="https://github.com/Vyshnav-ms/Meet-and-Travel"
            html5={
              <Tooltip title="HTML 5" arrow>
                <IconButton>
                  <SiHtml5 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            python={
              <Tooltip title="Python" arrow>
                <IconButton>
                  <SiPython className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            django={
              <Tooltip title="Django" arrow>
                <IconButton>
                  <SiDjango className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
            css3={
              <Tooltip title="CSS 3" arrow>
                <IconButton>
                  <SiCss3 className="dark:text-slate-200 text-black" />
                </IconButton>
              </Tooltip>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;