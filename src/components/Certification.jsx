import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import certifications from "../assets/lottie/certification.json";
import { FaExternalLinkAlt } from "react-icons/fa";

const Certification = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="certifications"
      className="EXPERIENCE p-5 mx-20 mb-10 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="WRAPPER mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Certifications
        </h1>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10"
          data-aos="fade-up"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="
                bg-white dark:bg-transparent rounded-xl p-6
                shadow-[0_0_15px_3px_rgba(59,130,246,0.6)] 
                dark:shadow-[0_0_15px_3px_rgba(14,165,233,0.8)]
                hover:bg-gradient-to-tl from-[#ccc] to-[#e1e1e1] 
                dark:from-[#00040F] dark:to-[#0B274C] 
                transition-all duration-300
              "
            >
              <div className="flex gap-5 items-center mb-4">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-[60px] h-[60px] object-contain rounded-md"
                />
                <div>
                  <h2 className="text-xl font-semibold text-[#00040f] dark:text-slate-200">
                    {cert.title}
                  </h2>
                  <p className="text-sm text-gray-600 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-slate-500">
                    {cert.date}
                  </p>
                </div>
              </div>

              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-t dark:from-cyan-500 dark:to-slate-300 from-blue-600 to-cyan-600 font-medium text-[12px] text-[#e1e1e1] dark:text-black rounded shadow transition-all duration-300 hover:brightness-110"
              >
                View Certificate <FaExternalLinkAlt className="text-xs" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
