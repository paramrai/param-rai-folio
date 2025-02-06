import React from "react";
import { ABOUT_ME } from "../utils/data";

const PROFILE_PIC =
  "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png";

const AboutMe = () => {
  return (
    <section className="container mx-auto px-8 mt-20" id="about">
      <h4 className="block lg:hidden w-[200px] section-title text-left mb-6 lg:mb-16">
        About Me
      </h4>

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 items-start justify-between">
        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] bg-orange-500/50 rounded-3xl relative">
          <div className="rounded-3xl w-[250px] h-[250px] md:min-w-[300px] md:min-h-[300px]">
            <img
              src={PROFILE_PIC}
              alt="profilePic"
              className="profile-pic h-full w-full object-cover rounded-3xl rotate-[-5.75deg]"
            />
          </div>
        </div>

        <div className="flex-1">
          <h4 className="hidden lg:block w-[200px] section-title text-left">
            About Me
          </h4>

          <p className="text-sm text-justify leading-6 whitespace-pre-line mt-4">
            I am a Full-Stack JavaScript Engineer with over
            <strong>3 years of hands-on experience</strong> specializing in
            creating <strong>dynamic and responsive web applications</strong>.
            My recent work demonstrates my proficiency in various cutting-edge
            programming languages, frameworks, and technologies , such as{" "}
            <strong>JavaScript</strong>, <strong>React</strong>,
            <strong>Node.js</strong>, <strong>Express</strong>,
            <strong>MongoDB</strong>, and <strong>React Native</strong>. I am
            passionate about leveraging the latest industry trends and best
            practices to build
            <strong> scalable applications</strong>. Please explore my recent
            work to see the impact I can make. Thank you for your time!
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
