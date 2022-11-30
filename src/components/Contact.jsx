import React from "react";
import { IoIosArrowForward } from "react-icons/io";

const Contact = () => {
  return (
    <div name="contact" className="w-full pt-16 bg-[#171717]">
      <div className="max-w-7xl p-10 mx-auto flex flex-col justify-center w-full h-full md:pt-0 md:flex md:flex-row">
        <div>
          <header className="flex items-center pb-7">
            <h3 className="w-24 text-[#ededed] text-xl uppercase tracking-wider text-dark-200 ">
              Contact
            </h3>
            <div className="h-[2px] ml-10 flex-1 bg-gradient-to-r from-blue-400 opacity-50"></div>
            <div></div>
          </header>

          <div className="text-[#B5B5B5]">
            <h4 className="text-xl font-bold leading-relaxed capitalize md:max-w-4xl ">
              Get in touch with me
            </h4>
            <div className="mt-5 mb-6 text-lg font-light leading-relaxed md:text-xl md:leading-loose md:max-w-2xl">
              <p>
                You can contact me through this form or directly by e-mail at
                <a
                  href="mailto:Rosalialey@outlook.com"
                  className="ml-1 underline cursor-pointer pr-1 z-10 text-[#B5B5B5] underline-offset-[6px] hover:opacity-50 transition duration-300 ease-in-out">
                  Rosalialey@outlook.com
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <div className="w-full mt-30 lg:w-1/2 px-4 md:mt-20 xl:w-5/12">
          <div className="background relative rounded-lg p-8 sm:p-12 shadow-lg shadow-blue-500/50">
            <form
              action="https://getform.io/f/2d6cbebf-3a32-48ab-9b0a-b04f95372431"
              method="POST">
              <div className="mb-6">
                <p className="text-[#ededed]">What's your name?</p>
                <input
                  type="text"
                  name="name"
                  placeholder="Rosalia Ley"
                  className="w-full rounded-sm py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                />
              </div>
              <div className="mb-6">
                <p className="text-[#ededed]">Where can I reach you?</p>
                <input
                  type="text"
                  name="email"
                  placeholder="rosalialey@outlook.com"
                  className="w-full rounded-sm py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"
                />
              </div>

              <div className="mb-6">
                <p className="text-[#ededed]">Your message</p>
                <textarea
                  name="message"
                  rows="6"
                  placeholder="Hi Rosalia, let's work!"
                  className="w-full rounded-sm py-3 px-[14px] text-body-color text-base border border-[f0f0f0] outline-none focus-visible:shadow-none focus:border-primary"></textarea>
              </div>
              <button className="group mx-auto w-fit px-6 py-2.5 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-400 to-blue-500 text-[#ededed] text-sm font-wide tracking-wider cursor-pointer shadow-lg shadow-blue-500/50 transition duration-150 ease-in-out">
                Send
                <span className="group-hover:translate-x-2 duration-300">
                  <IoIosArrowForward size={18} className="ml-1" />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
