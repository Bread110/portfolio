import { FiGithub, FiMail, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#04070e] min-h-screen text-white px-6 sm:px-10 py-20 sm:py-28"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-mono mb-4">
          Let's Build Something
        </h2>
        <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto mb-10">
          I'm always open to talking about ideas, opportunities, or
          collaboration.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=gaelmendez1312@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#D8CDBC] text-black font-semibold px-6 py-3 rounded-full hover:-translate-y-0.5 transition-transform w-full sm:w-auto justify-center"
          >
            <FiMail className="text-lg" />
            gaelmendez1312@gmail.com
          </a>

          <a
            href="https://github.com/Bread110"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:border-[#7ca3e5] hover:text-[#7ca3e5] transition-colors w-full sm:w-auto justify-center"
          >
            <FiGithub className="text-lg" />
            GitHub
          </a>

          <a
            href="tel:+529838392326"
            className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:border-[#7ca3e5] hover:text-[#7ca3e5] transition-colors w-full sm:w-auto justify-center"
          >
            <FiPhone className="text-lg" />
            +52 983 839-2326
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 mt-12 pt-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Gael Jezreal Mendez Cabañas. Built with
        React & Tailwind.
      </div>
    </footer>
  );
};

export default Footer;
