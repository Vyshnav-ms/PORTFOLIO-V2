/* eslint-disable react/no-unescaped-entities */
import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import {
  SiGithub,
  SiLinkedin,
  SiInstagram,
  SiX,
  SiGmail,
} from "react-icons/si";
import AOS from "aos";
import "aos/dist/aos.css";
import Vyshnav from "../assets/vyshnavnew.png";
import resume from "../assets/VYSHNAV_MS_2025_RESUME.pdf";

// Modal Component
const FeedbackModal = ({ show, message, type, onClose }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md">
      <div className="bg-white/10 dark:bg-white/10 border border-cyan-400/30 p-8 rounded-2xl shadow-[0_0_20px_rgba(0,255,255,0.3)] w-full max-w-md mx-4 text-center animate-fade-in backdrop-blur-lg transition-all duration-300">
        <h4
          className={`text-xl font-extrabold mb-3 tracking-wide ${
            type === "success"
              ? "text-green-400 drop-shadow-glow-green"
              : "text-red-400 drop-shadow-glow-red"
          }`}
        >
          {type === "success" ? "✅ Success" : "❌ Error"}
        </h4>
        <p className="text-slate-200 text-sm mb-6">{message}</p>
        <button
          onClick={onClose}
          className="relative inline-flex items-center justify-center px-6 py-2 bg-cyan-500 hover:bg-cyan-600 text-white font-medium rounded-lg shadow-lg overflow-hidden transition-all duration-300 transform hover:scale-105 hover:shadow-cyan-500/50"
        >
          <span className="z-10">Close</span>
          <span className="absolute inset-0 bg-cyan-400 opacity-20 blur-md"></span>
        </button>
      </div>
    </div>
  );
};

const Contact = () => {
  const form = useRef();
  const [modal, setModal] = useState({ show: false, message: "", type: "" });

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_wqstda1",
        "template_9jx3128",
        form.current,
        "Iks1-55yHB_lLfUpb"
      )
      .then(() => {
        setModal({
          show: true,
          message: "Message sent successfully!",
          type: "success",
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        setModal({
          show: true,
          message: "Failed to send message. Please try again.",
          type: "error",
        });
      });
  };

  return (
    <section
      id="contact"
      className="CONTACT p-5 mx-20 min-h-[80vh] font-['Poppins'] max-sm:p-2 max-sm:mx-5 dark:bg-[#00040f] dark:text-slate-300"
    >
      <h1
        className="text-[#00040f] dark:text-slate-300 text-center font-extrabold text-5xl mb-5 max-sm:text-4xl"
        data-aos="fade-down"
      >
        Contact
      </h1>
      {/* Modal */}
      <FeedbackModal
        show={modal.show}
        message={modal.message}
        type={modal.type}
        onClose={() => setModal({ ...modal, show: false })}
      />

      <div
        className="bg-white dark:bg-[#0f172a] shadow-2xl rounded-3xl mx-auto p-8 flex flex-col lg:flex-row justify-between gap-10 max-w-7xl"
        data-aos="fade-up"
      >
        {/* Profile Info */}
        <div
          className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          data-aos="fade-right"
        >
          <img
            src={Vyshnav}
            alt="Vyshnav M S"
            className="w-36 h-36 rounded-full object-cover border-4 border-cyan-500 mb-4 shadow-md"
          />
          <h2 className="text-gray-900 dark:text-white font-bold text-2xl mb-2">
            Vyshnav M S
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-md">
            Freelance Web Developer | MCA Candidate (2024 - 2026) <br />
            LEAD College of Management
          </p>

          <div className="flex gap-5 text-2xl text-gray-700 dark:text-gray-100 mb-6">
            <a
              href="https://github.com/Vyshnav-ms/"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/vyshnav-m-s/"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://www.instagram.com/vyshnav.ms.26/"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <SiInstagram />
            </a>
            <a
              href="https://x.com/ms_vyshnav/"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <SiX />
            </a>
            <a
              href="mailto:vyshnams1@gmail.com"
              className="hover:text-cyan-400 transition transform hover:scale-110"
            >
              <SiGmail />
            </a>
          </div>

          <div className="flex gap-4">
            <a
              href={resume}
              className="bg-gradient-to-tr from-cyan-500 to-blue-600 text-white py-2 px-5 rounded-lg shadow hover:opacity-90 text-sm font-medium"
            >
              Resume
            </a>
            <a
              href="https://github.com/Vyshnav-ms/"
              className="bg-gradient-to-tr from-cyan-500 to-blue-600 text-white py-2 px-5 rounded-lg shadow hover:opacity-90 text-sm font-medium flex items-center gap-2"
            >
              <SiGithub /> Star
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="w-full lg:w-1/2 bg-gray-50 dark:bg-slate-800 rounded-xl p-6 shadow-xl"
          data-aos="fade-left"
        >
          <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4 drop-shadow-glow-cyan">
            Let's Connect!
          </h3>

          <input
            type="text"
            name="user_name"
            required
            placeholder="Your Name"
            className="w-full mb-3 p-3 rounded-md bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Your Email"
            className="w-full mb-3 p-3 rounded-md bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            required
            rows="5"
            placeholder="Your Message"
            className="w-full mb-4 p-3 rounded-md bg-white dark:bg-slate-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>

          <button
            type="submit"
            className="w-full bg-gradient-to-tr from-cyan-500 to-blue-600 text-white py-3 rounded-md font-semibold hover:opacity-90 transition"
          >
            Send Message
          </button>
        </form>
      </div>
      <div className="mt-16 text-center">
        <p className="text-gray-800 dark:text-slate-300 text-sm py-4">
          Made with 💙 by <strong>Vyshnav M S</strong> &copy;{" "}
          {new Date().getFullYear()} All Rights Reserved
        </p>
      </div>
    </section>
  );
};

export default Contact;
