import Lottie from "lottie-react";
import education from "../assets/lottie/Education.json";
import lead from "../assets/leadlogo.png";
import Kerala from "../assets/universityofkerala.png";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Education = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section
      id="education"
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins']  max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl   ">
          Education
        </h1>

        <div
          className="EDUCATION flex gap-7 justify-between flex-row-reverse max-sm:flex-col"
          data-aos="fade-right"
        >
                    <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={Kerala}
                alt="University Of Kerala"
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">
              University Of Kerala
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                Bachelor Of Computer Applications
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                June 2019 - April 2022
              </p>

              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
              </p>
            </div>
          </div>
          <div className="max-w-[520px] mt-[52px] p-7 max-sm:p-3">
            <div className="flex gap-5">
              <img
                src={lead}
                alt="LEAD College of Management"
                className="w-[90px] h-[90px]"
              />
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r max-sm:text-[17px] from-amber-500 via-orange-600 to-yellow-500 dark:from-[#ff6600] dark:to-slate-100 font-semibold text-2xl w-[300px] h-[100px] tracking-wider ">
              LEAD College of Management (Autonomous)
              </h1>
            </div>

            <div className="mt-7 flex flex-col gap-5 text-left pl-4">
              <h3 className="capitalize  text-slate-800 dark:text-slate-300 text-xl max-sm:text-lg">
                Master Of Computer Applications
              </h3>
              <p className="italic capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
                September 2024 - Present
              </p>

              <p className="capitalize text-gray-500 dark:text-slate-500 text-xl max-sm:text-lg leading-9">
              </p>
            </div>
          </div>
          <Lottie
            animationData={education}
            loop={true}
            className="max-w-[500px] rounded-xl "
          />
        </div>
      </div>
    </section>
  );
};
export default Education;
