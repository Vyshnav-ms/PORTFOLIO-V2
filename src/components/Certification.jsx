import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import certifications from "../assets/lottie/certification.json";

const Certification = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      id="certifications"
      className="p-5 mx-20 mb-10 min-h-screen font-['Poppins'] max-sm:p-2 max-sm:mx-5"
    >
      <div className="mt-10">
        <h1 className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl">
          Certifications
        </h1>

        <div
          className="flex flex-wrap gap-7 justify-center"
          data-aos="fade-up"
        >
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="max-w-[520px] mt-[52px] p-7 max-sm:p-3 border rounded-lg shadow-md dark:bg-slate-800"
            >
              <div className="flex items-center gap-5">
                <img
                  src={cert.logo}
                  alt={cert.issuer}
                  className="w-[60px] h-[60px]"
                />
                <div>
                  <h2 className="text-xl font-semibold text-[#00040f] dark:text-slate-300">
                    {cert.title}
                  </h2>
                  <p className="text-gray-500 dark:text-slate-400">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-slate-400">
                    {cert.date}
                  </p>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
