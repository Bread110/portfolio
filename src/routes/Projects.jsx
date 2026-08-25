import home from "../assets/UqrooLab/home.png";
import books from "../assets/UqrooLab/books.png";
import manual from "../assets/UqrooLab/manual.png";
import videos from "../assets/UqrooLab/videos.png";
import home2 from "../assets/Nemo/home.png";
import login from "../assets/Nemo/login.png";
import project from "../assets/Nemo/projects.png";
import reports from "../assets/Nemo/reports.png";
import shelters from "../assets/Nemo/shelter.png";
import analysis from "../assets/Uqroo/analysis.png";
import motor from "../assets/Uqroo/motor.png";
import SlideShow from "../components/SlideShow";
import CardCarousel from "../components/projectCard";

const projects = [
  {
    title: "Wastewater Treatment Control System",
    year: "2026",
    type: "Internship",
    organization: "Universidad Autónoma Del Estado De Quintana Roo",
    description:
      "Real-time web system for monitoring sensors, controlling treatment motors, and analyzing wastewater data.",
    tags: ["Python", "CSS", "HTML", "JavaScript", "PostgreSQL"],
    image: [analysis, motor],
  },

  {
    title: "Shelter Management System",
    year: "2026",
    type: "Personal",
    organization: "The National Emergency Management Organization (NEMO)",
    description:
      "Registration and budgeting platform for a shelter, streamlining intake and financial tracking.",
    tags: ["Python", "HTML", "CSS", "JavaScript", "PostgreSQL"],
    image: [login, home2, shelters, project, reports],
  },

  {
    title: "Lab Electronics Library",
    year: "2026",
    type: "Internship",
    organization: "Universidad Autónoma Del Estado De Quintana Roo",
    description:
      "A website for managing books and videos for a school's electronics lab.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: [home, books, videos, manual],
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen text-white px-6 py-20">
      <div className="flex flex-col justify-center items-center mb-16">
        <h1 className="font-bold text-4xl sm:text-5xl md:text-7xl lg:text-[100px] text-center">
          My Work
        </h1>
        <p className="max-w-2xl text-center text-sm sm:text-base mt-4">
          Throughout my development journey, I've worked on projects spanning
          academic research, personal initiatives, and professional internships.
          Each project has strengthened my ability to transform ideas into
          functional, well-crafted applications while deepening my understanding
          of modern web development.
        </p>
      </div>

      <CardCarousel>
        {projects.map((project) => (
          <div
            key={project.title}
            className="bg-[#070605] text-white rounded-[5px] overflow-hidden"
          >
            <SlideShow
              images={project.image}
              alt={project.title}
              interval={3000}
            />
            <div className="p-2">
              <div className="p-2">
                <div className="flex mb-2 gap-2">
                  <h3 className="text-lg sm:text-xl font-bold">
                    {project.title}
                  </h3>
                </div>

                <p className="text-sm text-gray-200 mb-2">
                  {project.organization && ` ${project.organization}`},{" "}
                  {project.year}
                </p>

                <span className="text-xs px-2 py-1 absolute top-0 right-2 text-white bg-(--navy)/80 mt-2 rounded-full">
                  {project.type}
                </span>

                <p className="text-gray-400 text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex gap-2 flex-wrap mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-white  text-black px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </CardCarousel>
    </div>
  );
};

export default Projects;
