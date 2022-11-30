import React from "react";
import {
  SiJavascript,
  SiReact,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiSass,
  SiFigma,
  SiAdobephotoshop,
} from "react-icons/si";

const About = () => {
  return (
    <div
      name="about"
      className="w-full pt-16 bg-[#171717] text-[#ededed] md:pt-24">
      <div className="max-w-7xl p-10 pt-15 mx-auto flex flex-col justify-center w-full h-full md:pt-0">
        <header className="flex items-center pb-8">
          <h3 className="w-24  text-xl uppercase tracking-wider text-dark-200">
            About
          </h3>
          <div className="h-[2px] flex-1 bg-gradient-to-r from-blue-400 opacity-50"></div>
        </header>
        <article className="text-[#B5B5B5]">
          <h4 className="text-xl font-bold leading-relaxed md:max-w-4xl ">
            I'm Rosalia Ley. I live in Atlanta, Georgia, where I build web
            applications and design surreal contemporary digital art.
          </h4>

          <br />
          <div className="text-lg font-light leading-relaxed md:text-xl md:leading-loose md:max-w-4xl">
            <p>
              I started as a self-taught developer and continued my education at
              Arizona State University.
            </p>

            <br />

            <p>
              Creating things has been a passion of mine for as long as I can
              remember, and designed my first developer template for a
              networking virtual reality site at the age of 12, shortly after my
              father brought home an old desktop that only had Photoshop
              installed.
            </p>

            <br />

            <p>
              Digital design and art have been my focus for many years, working
              with Photoshop amongst other Adobe apps. But a year ago I shifted
              my focus to frontend development.
            </p>

            <br />

            <p>
              I enjoy the constant change in technologies used in this field and
              the challenge that comes with new projects or problems to solve.
              It's like a puzzle to me, and once you put it all together, you
              get to see the result of all your hard work. It's truly rewarding
              for me.
            </p>

            <br />

            <p>
              Aside from programming and tinkering with my tools, my pet
              projects consists of contemporary digital art.
            </p>
          </div>

          <h3 className="text-md uppercase tracking-wider pt-16">
            Technologies I Enjoy
          </h3>
          <div className="mt-6 flex flex-wrap gap-6 text-dark-300">
            <SiHtml5 size={50} />
            <SiReact size={50} />
            <SiTailwindcss size={50} />
            <SiCss3 size={50} />
            <SiJavascript size={50} />
            <SiFigma size={50} />
            <SiAdobephotoshop size={50} />
            <SiSass size={50} />
          </div>
        </article>
      </div>
    </div>
  );
};

export default About;
