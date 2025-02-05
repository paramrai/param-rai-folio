import React from "react";

import PROFILE_PIC from "../assets/hero.png";
import { FaJava, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import { STATS } from "../utils/data";
import StatInfoCard from "../components/StatInfoCard";

const Hero = () => {
  return (
    <section id="hero" className="container mx-auto px-8">
      <div className="flex flex-col lg:flex-row gap-14 items-center justify-between mt-[80px]">
        <div className="order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
          <h3 className="text-xl lg:text-2xl font-medium text-black">
            Hi 👋 Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores,
          </h3>
          <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-gradient-primary bg-clip-text text-transparent">
            Building scalebale Lorem ipsum dolor sit.
          </h1>
          <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            est commodi repellendus facilis perspiciatis earum pariatur maiores
            vitae nulla iure?
          </p>

          <div className="flex justify-center lg:justify-start gap-4 md:gap-8 mt-6">
            <button className="flex-1 md:flex-none action-btn-outline btn-scale-anim">
              Visit my work
            </button>
            <button className="flex-1 md:flex-none action-btn action-btn-outline btn-scale-anim">
              Download resume
            </button>
          </div>
        </div>

        <div className="w-[300px] h-[300px] md:min-w-[300px] md:min-h-[300px] bg-orange-500/50 rounded-3xl relative order-1 lg:order-2">
          {/* <img src={PROFILE_PIC} alt="profilePic" className="profile-pic" /> */}

          <div className="hero-icon top-[20px] left-[-20px] rotate-[15deg]">
            <FaReact />
          </div>
          <div className="hero-icon top-[40%] right-[-20px] rotate-[-10deg]">
            <FaNodeJs />
          </div>
          <div className="hero-icon bottom-[35%] left-[-20px] rotate-[8deg]">
            <FaPython />
          </div>
          <div className="hero-icon bottom-[-5%] left-[20px] rotate-[8deg]">
            <FaPython />
          </div>
          <div className="hero-icon bottom-[-6%] left-[120px] rotate-[-5deg]">
            <FaPython />
          </div>
          <div className="hero-icon bottom-[20px] right-[-20px] rotate-[-5deg]">
            <FaJava />
          </div>
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
