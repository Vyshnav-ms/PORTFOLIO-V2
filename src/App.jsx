import Navbar from "./components/Navbar";
import About from "./components/About";
// import Experience from "./components/Experience";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import HashLoader from "react-spinners/HashLoader";
import { Link, Element } from "react-scroll"; // Import the necessary components from react-scroll
import "./styles.css";
import { useState, useEffect } from "react";

const override = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "5rem",
  borderColor: "red",
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex h-screen justify-center items-center bg-[#00040f]">
          <HashLoader
            color="#0891b2"
            loading={loading}
            cssOverride={override}
            size={90}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      ) : (
        <div>
          <Navbar />
          {/* Add smooth scrolling links to navigate to sections */}
          <nav>
            <Link to="about" smooth={true} duration={500}>
              About
            </Link>
            <Link to="education" smooth={true} duration={500}>
              Education
            </Link>
            <Link to="skills" smooth={true} duration={500}>
              Skills
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </nav>

          {/* Wrap each section in an Element with a name for smooth scrolling */}
          <Element name="about">
            <About />
          </Element>
          {/* <Element name="experience">
            <Experience />
          </Element> */}
          <Element name="education">
            <Education />
          </Element>
          <Element name="skills">
            <Skills />
          </Element>
          <Element name="projects">
            <Projects />
          </Element>
          <Element name="contact">
            <Contact />
          </Element>
        </div>
      )}
    </>
  );
};

export default App;
