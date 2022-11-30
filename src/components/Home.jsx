import React from "react";
import HeroImage from "../assets/heroImage.png";
import { IoIosArrowForward } from "react-icons/io";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={20} />
          Linkedin
        </>
      ),
      href: "https://www.linkedin.com/in/rosalialey/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaGithub size={20} />
          GitHub
        </>
      ),
      href: "https://github.com/RosaliaLey",
    },
    {
      id: 3,
      child: (
        <>
          <HiOutlineMail size={20} />
          rosalialey@outlook.com
        </>
      ),
      href: "mailto:rosalialey@outlook.com",
    },
    {
      id: 4,
      child: (
        <>
          <BsFillPersonLinesFill size={20} />
          Download CV
        </>
      ),
      href: "/resume.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <main
      name="home"
      className="h-screen w-full  pt-10 bg-[#171717] md:pt-15 lg:pt-0">
      <section className=" mx-auto flex flex-col items-center justify-center h-full px-10">
        <div>
          <figure>
            <img
              src={HeroImage}
              alt="my profile"
              className="rounded-full w-1/4 -mb-3 md:w-1/6 "
            />
          </figure>
          <div className="flex flex-col justify-center h-full">
            <h2 className="text-3xl mb-1 font-medium leading-normal md:text-5xl md:leading-normal md:mb-5 md:max-w-5xl lg:text-7xl lg:leading-normal bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              Front-end web developer, and digital artist.
            </h2>
            <p className="text-[#B5B5B5] py-4 text-lg max-w-4xl font-light leading-relaxed md:text-xl md:max-w-xl md:leading-loose md:pb-10">
              I focus primarily on coding and building what is visible, mainly
              on web applications or websites. I have developed a great passion
              for frontend development as it allows me to combine my artistic
              side and be able to program.
            </p>

            <div>
              <ul className="flex flex-col gap-3 pt-10 pb-5 lg:hidden">
                {links.map(({ id, child, href, download }) => (
                  <li key={id}>
                    <a
                      href={href}
                      className="flex items-center gap-4 w-full ml-2 text-sm text-[#B5B5B5] hover:opacity-50 transition duration-300 ease-in-out"
                      download={download}
                      target="_blank"
                      rel="noreferrer">
                      {child}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <Link
                to="projects"
                smooth
                duration={500}
                type="button"
                className="group w-fit px-6 py-2.5 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-[#ededed] text-sm font-wide tracking-wider cursor-pointer shadow-lg shadow-blue-500/50 transition duration-150 ease-in-out">
                Projects
                <span className="group-hover:translate-x-2 duration-300">
                  <IoIosArrowForward size={18} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
