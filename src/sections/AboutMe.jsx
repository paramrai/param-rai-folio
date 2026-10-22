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
            I'm Param Rai, a Full-Stack Engineer with <strong>6+ years of experience</strong> building digital products with JavaScript, React, Node.js, and modern backend technologies.

            I enjoy solving problems that matter—whether that's building a product from scratch, improving an existing application, fixing performance bottlenecks, or designing a backend that can handle future growth.

            I understand that businesses need more than code. They need software that works reliably, customers who enjoy using it, and systems that are easy to improve as the business grows.

            That's how I approach every project: understand the problem first, choose the right solution, and build with performance, security, maintainability, and business goals in mind.
          </p>

          <div className="mt-6">
            <h5 className="text-base font-semibold mb-3">What you can expect from working with me:</h5>
            <ul className="text-sm space-y-2 list-disc list-inside leading-6">
              <li><strong>Ownership:</strong> I take responsibility for solving problems, not just completing assigned tasks.</li>
              <li><strong>Practical thinking:</strong> I look for solutions that make sense for your users, team, timeline, and budget.</li>
              <li><strong>Scalable development:</strong> I build with future growth in mind, without adding unnecessary complexity.</li>
              <li><strong>Clear communication:</strong> I keep technical decisions understandable and work collaboratively with the team.</li>
              <li><strong>Continuous improvement:</strong> I look for ways to make products faster, more reliable, and easier to maintain.</li>
            </ul>
          </div>
          <p className="text-sm mt-6 font-medium">
            Let's turn your next big idea into a product people love to use.
          </p>

          <div className="flex gap-4 mt-6">
            {ABOUT_ME.socialLinks.map((link) => {
              return (
                <a key={link.label} className="cursor-pointer group" onClick={(e) => e.preventDefault()}>
                  {
                    <link.icon
                      className="text-2xl transition-all duration-300 group-hover:rotate-12 group-hover:scale-110 group-hover:translate-y-[-2px]"
                      style={{
                        color: '#8B4513', // Brown color
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.color = link.color}
                      onMouseLeave={(e) => e.currentTarget.style.color = '#8B4513'}
                    />
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
