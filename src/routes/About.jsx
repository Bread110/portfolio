const About = () => {
  return (
    <div
      id="about"
      className="min-h-screen flex flex-col justify-center px-6 py-20"
    >
      <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[100px] text-white font-bold self-center mb-7 border-b-2 text-center">
        About Me.
      </h2>

      <p className="text-base sm:text-lg text-gray-100 max-w-2xl text-justify self-center leading-relaxed">
        I enjoy building things, learning new technologies, and figuring out how
        things work. I don't consider myself the most talented person, but I'm
        willing to put in the work and keep learning until I get there. I'm
        naturally curious and like exploring different areas, both inside and
        outside of technology. <br />
        <br />I enjoy staying active, taking on new challenges, meeting new
        people, and working on projects that allow me to learn something along
        the way. I'm here to grow, connect, build, and hopefully contribute
        something meaningful to the community around me.
      </p>
    </div>
  );
};

export default About;
