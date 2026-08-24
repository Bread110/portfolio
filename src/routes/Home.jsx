import HomeCards from "../components/HomeCards.jsx";
import About from "./About.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";

const HomePage = () => {
  return (
    <div>
      <section id="home" className="min-h-screen snap-start">
        <HomeCards />
      </section>

      <section id="about" className="min-h-screen snap-start">
        <About />
      </section>

      <section id="skills" className="min-h-screen snap-start">
        <Skills />
      </section>

      <section id="projects" className="min-h-screen snap-start">
        <Projects />
      </section>
    </div>
  );
};

export default HomePage;
