import React from "react";
import { PROJECTS } from "../utils/data";
import ProjectCard from "../components/ProjectCard";

const MyProjects = () => {
  return (
    <section id="projects" className="bg-background mt-20">
      <div className="container mx-auto px-8 md:px-10">
        <div className="w-full lg:w-[60vw] mx-auto">
          <h4 className="section-title">Recent Projects</h4>
          <p className="text-sm text-center leading-6">
            From concept to deployment , these projects showcase my technical
            experties , I focus on clean code , perfomance and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-14 pb-8">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              tags={project.tags}
              description={project.description}
              code={project.github}
              demo={project.demo}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
