import React from "react";
import PROFILE_PIC from "../assets/hero.png";
import { ABOUT_ME } from "../utils/data";

const AboutMe = () => {
  return (
    <section className="container mx-auto px-8 py-16" id="about">
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-6 lg:mb-16">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start justify-between">
        <div className="w-[300px] h-[300px] md:min-w-[300px] md:min-h-[300px] bg-orange-500/50 rounded-3xl relative">
          {/* <img src={PROFILE_PIC} alt="profilePic" className="profile-pic" /> */}
        </div>

        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About Me
          </h4>

          <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            {ABOUT_ME.content}
          </p>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((link) => {
              return (
                <a key={link.label} className="cursor-pointer group">
                  {
                    <link.icon className="text-2xl text-secondary transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px] group-hover:text-primary" />
                  }
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
