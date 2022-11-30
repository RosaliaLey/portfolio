import React from "react";
import GitHubAppImage from "../assets/portfolio/github-user-search-app.png";
import BlogAppImage from "../assets/portfolio/blog-app.png";
import TodoAppImage from "../assets/portfolio/todo-app.png";
import { IoIosArrowForward } from "react-icons/io";

const Projects = () => {
  return (
    <div name="projects" className="w-full pt-16 bg-[#171717]">
      <div className="max-w-7xl p-10 mx-auto flex flex-col justify-center w-full ">
        <header className="flex items-center pb-8">
          <h3 className="w-24 text-[#ededed] text-xl uppercase tracking-wider text-dark-200 ">
            Projects
          </h3>
          <div className="h-[2px] ml-10 flex-1 bg-gradient-to-r from-blue-400 opacity-50"></div>
          <div></div>
        </header>
        <div className="text-[#B5B5B5]">
          <h4 className="text-xl font-bold leading-relaxed md:max-w-4xl ">
            Projects I've created trying to demonstrate my coding capabilities.
          </h4>
          <div className="mt-5 text-lg font-light leading-relaxed md:text-xl md:leading-loose md:max-w-2xl">
            <p>
              I've worked on multiple components and projects over time, but
              these are some of the ones I'm most proud of.
            </p>
          </div>

          <div className="mt-16 sm:mt-20">
            <ul className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
              <li className="group relative flex flex-col items-start">
                <div className="relative z-10">
                  <figure>
                    <img
                      src={GitHubAppImage}
                      alt="GitHub user search app that uses an API"
                      className="rounded-md w-auto hover:drop-shadow-lg"
                    />
                  </figure>
                </div>

                <h4 className="mt-6 text-base font-semibold text-[#ededed]">
                  <div className="absolute -inset-y-8 -inset-x-6  scale-95 rounded-lg bg-gradient-to-br from-cyan-900 to-blue-900 opacity-10 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
                  <a href="https://rosalialey.github.io/github-user-search-app/">
                    <span className="relative ">
                      GitHub User Search App &#40;API&#41;
                    </span>
                  </a>
                </h4>

                <p className="relative mt-2 text-sm text-[#B5B5B5]">
                  Search for GitHub users by their username, and see relevant
                  user information. Switch between light and dark themes.
                </p>
                <p className="relative mt-6 flex items-center text-sm font-semibold text-blue-400">
                  <span className="ml-2 cursor-pointer ">
                    GitHub User Search App
                  </span>
                  <span className="group-hover:translate-x-6 duration-300">
                    <IoIosArrowForward size={18} className="ml-1" />
                  </span>
                </p>
              </li>

              <li className="group relative flex flex-col items-start">
                <div className="relative z-10">
                  <figure>
                    <img
                      src={BlogAppImage}
                      alt="My Blog website"
                      className="rounded-md w-auto hover:drop-shadow-lg"
                    />
                  </figure>
                </div>

                <h4 className="mt-6 text-base font-semibold text-[#ededed]">
                  <div className="absolute -inset-y-8 -inset-x-6 z-0 scale-95 rounded-lg bg-gradient-to-br from-cyan-900 to-blue-900 opacity-10 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
                  <a href="https://rosalialey.github.io/responsive-travel-blog/">
                    <span className="relative">Travel Blog Website</span>
                  </a>
                </h4>

                <p className="relative mt-2 text-sm text-[#B5B5B5]">
                  Browse the blog homepage, and take a peek at relevant content.
                  Toggle light and dark mode.
                </p>
                <p className="relative mt-6 flex items-center text-sm font-semibold text-blue-400">
                  <span className="ml-2 cursor-pointer ">
                    Travel Blog Website
                  </span>
                  <span className="group-hover:translate-x-6 duration-300">
                    <IoIosArrowForward size={18} className="ml-1" />
                  </span>
                </p>
              </li>

              <li className="group relative flex flex-col items-start">
                <div className="relative z-10">
                  <figure>
                    <img
                      src={TodoAppImage}
                      alt="My Todo app"
                      className="rounded-md w-auto hover:drop-shadow-lg"
                    />
                  </figure>
                </div>

                <h4 className="mt-6 text-base font-semibold text-[#ededed]">
                  <div className="absolute -inset-y-8 -inset-x-6 z-0 scale-95 rounded-lg bg-gradient-to-br from-cyan-900 to-blue-900 opacity-10 transition duration-300 group-hover:scale-100 group-hover:opacity-100"></div>
                  <a href="https://rosalialey.github.io/todo-app/">
                    <span className="relative">Todo App</span>
                  </a>
                </h4>

                <p className="relative mt-2 text-sm text-[#B5B5B5]">
                  Add new todos to the list, mark off and delete todos from the
                  list. Toggle light and dark mode.
                </p>
                <p className="relative mt-6 flex items-center text-sm font-semibold text-blue-400">
                  <span className="ml-2 cursor-pointer ">Todo App</span>
                  <span className="group-hover:translate-x-6 duration-300">
                    <IoIosArrowForward size={18} className="ml-1" />
                  </span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
