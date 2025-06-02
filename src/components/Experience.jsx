"use client";

import Exp_prop from "./Exp_prop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

import {
  GPT4,
} from "../constants/Constant";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid place-items-center gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-1"
            data-aos="zoom-in-up"
          >
            <Exp_prop
              img={GPT4}
              title="UKFCET"
              subtitle="Lab Instructor & Assistant System Manager"
              date="March 2024 - September 2024"
              para="Teaching and Networking"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
