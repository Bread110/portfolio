import { useState } from "react";
import { IoMdCode } from "react-icons/io";
import { FaDatabase } from "react-icons/fa";
import { GrDatabase } from "react-icons/gr";

const Skills = () => {
  const [openTechCard, setOpenTechCard] = useState(null);
  const [openSoftCard, setOpenSoftCard] = useState(null);

  const softSkills = [
    {
      title: "Problem Solving",
      description:
        "I break down complex problems and figure out practical, workable solutions.",
    },

    {
      title: "Product Analysis",
      description:
        "I look at what a product actually needs to succeed, not just what's asked for.",
    },
  ];

  const skillCategories = [
    {
      icon: IoMdCode,
      title: "Frontend",
      skills: ["React", "HTML5", "CSS3", "JavaScript", "Tailwind"],
    },
    {
      icon: FaDatabase,
      title: "Backend",
      skills: ["Laravel", "PHP"],
    },
    {
      icon: GrDatabase,
      title: "Database",
      skills: ["MySQL", "PostgreSQL"],
    },
  ];

  const toggleTechCard = (title) => {
    setOpenTechCard(openTechCard === title ? null : title);
  };

  const toggleSoftCard = (title) => {
    setOpenSoftCard(openSoftCard === title ? null : title);
  };

  return (
    <div id="skills" className="h-max flex flex-col justify-center px-6 py-20">
      {/* Section intro - stays once, covers both */}
      <div className="flex-col flex justify-center items-center mb-12">
        <h1 className="text-4xl font-semibold text-white">What I Do</h1>
        <p className="flex w-full max-w-2xl px-5 py-5 text-center text-gray-100 font-light">
          I care about building things that work well with clean, user friendly
          design and the scalability to grow. I'm always looking for the next
          challenge to learn from.
        </p>
      </div>

      {/* Technical skills */}
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-2xl font-bold text-white mb-2">
          What I Build With
        </h2>
        <p className="text-gray-200 text-sm mb-6">My technical toolkit</p>

        <div className="w-full justify-center flex flex-wrap gap-6 items-start">
          {skillCategories.map(({ title, icon: Icon, skills }) => {
            const isOpen = openTechCard === title;
            return (
              <button
                key={title}
                onClick={() => toggleTechCard(title)}
                className="w-56 bg-[#D8CDBC] rounded-[5px] flex flex-col items-center p-6 border cursor-pointer
                         transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <Icon className="text-white mb-3 w-9 h-9 bg-(--navy) p-2 rounded-full" />
                <span className="text-lg text-black font-bold mb-3">
                  {title}
                </span>
                <ul
                  className={`text-center space-y-1 text-sm text-black overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
              </button>
            );
          })}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-white mb-2">
          How I Approach Problems
        </h2>
        <p className="text-gray-200 text-sm mb-6">Beyond the code</p>

        <div className="w-full justify-center mb-20  flex flex-wrap gap-6 items-start">
          {softSkills.map(({ title, description }) => {
            const isOpen = openSoftCard === title;
            return (
              <button
                key={title}
                onClick={() => toggleSoftCard(title)}
                className="w-56   rounded-[5px] border-[#D8CDBC] flex text-[#D8CDBC] flex-col items-center p-6 border cursor-pointer transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                <span className="text-lg  font-bold mb-3">{title}</span>
                <p
                  className={`text-center text-sm  overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  {description}
                </p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
