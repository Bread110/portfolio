import { FiFigma } from "react-icons/fi";
import { TbBrandLaravel } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";
import { BsJavascript } from "react-icons/bs";
import { RiPhpLine } from "react-icons/ri";
import { TbBrandMysql } from "react-icons/tb";
import { IoLogoHtml5 } from "react-icons/io5";
import { RiReactjsLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import ProfileTerminal from "./ProfileTerminal";

const techStack = [
  { icon: FiFigma, label: "Figma" },
  { icon: FaGithub, label: "GitHub" },
  { icon: RiTailwindCssFill, label: "Tailwind" },
  { icon: IoLogoHtml5, label: "HTML" },
  { icon: RiReactjsLine, label: "React" },
  { icon: BsJavascript, label: "JavaScript" },
  { icon: RiPhpLine, label: "PHP" },
  { icon: TbBrandLaravel, label: "Laravel" },
  { icon: TbBrandMysql, label: "MySQL" },
];

const HomeCards = () => {
  return (
    <div className="relative min-h-screen text-gray-100 flex flex-col justify-center items-center px-4 py-24 md:py-32">
      <div className="absolute top-6 sm:top-10 md:top-15 text-center px-4">
        <h1
          className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl inline-block overflow-hidden whitespace-nowrap border-r-2 border-black font-mono
      animate-[typing_3s_steps(24)_infinite_forwards,blink_.8s_6]"
        >
          WELCOME FRIENDS
        </h1>

        <div className="opacity-0 animate-[fadeIn_0.6s_ease_3.2s_forwards]">
          <p className="text-sm sm:text-base md:text-lg text-[#afadad]">
            Lets build and improve the community together!
          </p>
        </div>
      </div>

      <div className="w-full max-w-6xl flex flex-col lg:flex-row justify-center lg:justify-end items-center lg:items-start gap-10 mt-10 lg:mt-30 rounded-2xl">
        <div className="w-full lg:max-w-xl p-4 sm:p-6 lg:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4">Hi, I'm Gael</h2>
          <p className="text-base sm:text-lg text-justify">
            I'm a software engineering student on my way to becoming a
            full-stack developer who enjoys turning ideas into clean, functional
            websites.
          </p>

          <h3 className="text-xl sm:text-2xl font-bold mb-6 mt-12 lg:mt-22">
            TECH STACK
          </h3>
          <div className="overflow-hidden w-full">
            <div className="flex flex-nowrap gap-6 sm:gap-8 md:gap-10 text-2xl sm:text-3xl items-center px-4 py-2 animate-[scroll_20s_linear_infinite] w-max">
              {[...techStack, ...techStack].map(({ icon: Icon, label }, i) => (
                <div
                  key={`${label}-${i}`}
                  className="flex flex-col items-center gap-2 sm:gap-3 shrink-0"
                >
                  <Icon />
                  <span className="text-xs sm:text-sm">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full max-w-md lg:max-w-none lg:w-[45%] mt-4 lg:mt-15 px-4 lg:px-0">
          <ProfileTerminal />
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
