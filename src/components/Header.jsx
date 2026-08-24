import { useEffect, useState } from "react";

const sections = ["home", "about", "skills", "projects"];
const footer = ["footer"];

const NavBar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 },
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    footer.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex shadow-sm text-white items-center bg-[#04070e] justify-between w-full py-1 px-4 sm:px-7 fixed top-0 z-1000">
      <span className="font-bold text-xs sm:text-sm"> PORTFOLIO</span>
      <div className="flex items-center gap-2 sm:gap-5 text-white">
        {sections.map((id) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`text-[7px] sm:text-[8px] md:text-[10px] capitalize transition-all hover:text-[#7eb1de] hover:font-bold hover:-translate-y-0.5 ${
              active === id
                ? "text-[#fefefe] underline font-bold"
                : "text-[#fffefe]"
            }`}
          >
            {id}
          </button>
        ))}

        {footer.map((id) => (
          <button
            key={id}
            onClick={() => handleClick(id)}
            className={`rounded-full w-full sm:w-19 h-5 flex justify-center items-center bg-[#000000] text-white gap-2 p-2 hover:-translate-y-0.5 ${
              active === id ? "text-[#004f95] font-bold" : "text-[#070707]"
            }`}
          >
            <span className="font-bold text-[6px] sm:text-[7px]">
              Contact Me
            </span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavBar;
