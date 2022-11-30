import React from "react";
import { IoMdClose, IoIosMenu, IoMdCode } from "react-icons/io";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "projects",
    },
    {
      id: 3,
      link: "about",
    },
    {
      id: 4,
      link: "contact",
    },
  ];

  return (
    <header className="md:container md:mx-auto z-50">
      <nav className="flex justify-between items-center z-10 w-full h-20 px-8 backdrop-blur-md bg-white/3 fixed md:container ">
        <div>
          <a href="index.html" className="flex">
            <IoMdCode
              size={30}
              className="bg-gradient-to-r from-cyan-500 rounded-sm md:self-center md:-translate-y-0.5"
            />
            <h1 className="text-3xl  text-[#EDEDED] ml-2 capitalize tracking-wider">
              Rosalia Ley
            </h1>
          </a>
        </div>

        <ul className="hidden md:flex ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-light text-[#B5B5B5] hover:opacity-50 transition duration-300 ease-in-out md:text-md">
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>

        <div
          onClick={() => setNav(!nav)}
          className="cursor-pointer pr-4 z-10 text-[#B5B5B5] md:hidden hover:opacity-50 transition duration-300 ease-in-out">
          {nav ? <IoMdClose size={30} /> : <IoIosMenu size={30} />}
        </div>

        {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-[#171717] text-[#B5B5B5]">
            {links.map(({ id, link }) => (
              <li
                key={id}
                className="px-4 cursor-pointer capitalize py-3 text-2xl hover:opacity-50 transition duration-300 ease-in-out ">
                <Link
                  onClick={() => setNav(!nav)}
                  to={link}
                  smooth
                  duration={500}>
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
