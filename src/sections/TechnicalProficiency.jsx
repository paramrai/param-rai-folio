import React, { useState } from "react";
import { SKILL_TABS, SKILLS } from "../utils/data";
import Tabs from "../components/Tabs";
import { motion } from "framer-motion";

const TechnicalProficiency = () => {
  const [tabData, setTabData] = useState(SKILLS);
  const [activeTab, setActiveTab] = useState("all");

  const handleTabValueChange = (value) => {
    if (value === "all") {
      setTabData(SKILLS);
      setActiveTab("all");
      return;
    }

    const updatedList = SKILLS.filter((skill) => skill.type === value);
    setTabData(updatedList);
    setActiveTab(value);
  };

  return (
    <section id="skills" className="bg-background mt-20">
      <div className="container mx-auto px-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Technical Proficiency</h4>

          <div className="text-center mt-4">
            <h5 className="text-base font-semibold text-black">The right technology. The right solution. Real business value.</h5>
            <p className="text-sm mt-2 leading-6">
              I use technology to solve problems, not just to add tools to my stack. With 6+ years of experience, I build
              applications that are fast, secure, easy to maintain, and ready to grow with your business.
            </p>
            <p className="text-sm mt-2 leading-6">
              Whether it's a responsive frontend, a reliable backend, or a complete full-stack application, I focus on
              clean code, thoughtful architecture, and a great user experience.
            </p>
          </div>
        </div>

        <Tabs
          tabList={SKILL_TABS}
          activeTab={activeTab}
          onChange={handleTabValueChange}
        />

        <div className="flex flex-wrap gap-4 justify-center items-center">
          {tabData.map((skill, i) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              style={{ backgroundColor: skill.color }}
              className="group relative p-4 rounded-xl cursor-default"
            >
              <skill.icon className="w-6 h-6 text-white" />

              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 transition-all duration-200 ease-in-out pointer-events-none">
                <div
                  style={{ backgroundColor: skill.color }}
                  className="text-white text-[10px] font-medium px-2 py-1 rounded-md shadow-lg whitespace-nowrap border border-white/20"
                >
                  {skill.skill}
                  <div
                    style={{ backgroundColor: skill.color }}
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalProficiency;
