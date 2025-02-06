import React from "react";

import { FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";
import { Link } from "react-scroll";
import { SiExpress, SiMongodb } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const PROFILE_PIC =
  "https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h1 className="w-full lg:w-[800px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] bg-gradient-primary bg-clip-text text-transparent">
            I Build scalable apps and prioritize users.
          </h1>
          <h3 className="w-full lg:w-[700px] text-xl lg:text-2xl font-medium text-black mt-4">
            👋 "Hi, I'm Param Rai, a skilled Full Stack Engineer passionate
            about crafting seamless and innovative web and mobile applications."
          </h3>
          <p className="w-full lg:w-[700px] text-sm lg:text-base mt-4">
            With a keen eye for detail and a dedication to coding excellence
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <Link
              to="projects"
              smooth
              spy
              className="flex justify-center items-center flex-1 md:flex-none action-btn-outline btn-scale-anim"
            >
              Visit my work
            </Link>
            <button className="flex-1 md:flex-none action-btn action-btn-outline btn-scale-anim">
              Download resume
            </button>
          </div>
        </div>

        <div className="bg-orange-500/50 rounded-3xl w-[250px] h-[250px] md:min-w-[300px] md:min-h-[300px] relative order-1 lg:order-2">
          <div className="rounded-3xl w-[250px] h-[250px] md:min-w-[300px] md:min-h-[300px]">
            <img
              src={PROFILE_PIC}
              alt="profilePic"
              className="profile-pic h-full w-full object-cover rounded-3xl"
            />
          </div>
          <div className="hero-icon top-[20px] left-[-20px] rotate-[15deg] bg-[#61DAFB]">
            <FaReact />
          </div>
          <div className="hero-icon top-[40%] right-[-20px] rotate-[-10deg] bg-[#68A063]">
            <FaNodeJs />
          </div>
          <div className="hero-icon bottom-[35%] left-[-20px] rotate-[8deg] bg-[#47A248]">
            <SiMongodb />
          </div>
          <div className="hero-icon bottom-[-5%] left-[20px] rotate-[8deg] bg-[#000000]">
            <SiExpress />
          </div>
          <div className="hero-icon bottom-[-6%] left-[120px] rotate-[-5deg] bg-[#a200ff]">
            <FaReact />
          </div>
          <div className="hero-icon bottom-[20px] right-[-20px] rotate-[-5deg] bg-[#38b2ac]">
            <RiTailwindCssFill />
          </div>

          {/* //cdsafc */}
        </div>
      </div>

      <div className="flex gap-12 mt-16 md:mt-24 flex-wrap">
        {STATS.map((item) => (
          <StatInfoCard key={item.id} count={item.count} label={item.label} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
