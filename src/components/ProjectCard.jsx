import React from "react";
import { FaGithub } from "react-icons/fa";
import { MdLiveTv } from "react-icons/md";

const ProjectCard = ({ title, description, imgUrl, tags, demo, code }) => {
  return (
    <div className="group h-max bg-white rounded-xl overflow-hidden shadow-md mx-2">
      <div className="relative">
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-72 md:h-80 object-cover rounded-xl"
        />
        <div className="bg-transparent backdrop-blur-sm absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transform-transition duration-300 ease-in-out flex items-center justify-center gap-4">
          <a
            href={code}
            target="_blank"
            className="bg-primary cursor-pointer text-white text-xl rounded-full h-14 w-14 flex items-center justify-center translate-x-[-300px] group-hover:translate-x-0  transform-transition duration-500 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href={demo}
            target="_blank"
            className="bg-primary cursor-pointer text-white text-xl rounded-full h-14 w-14 flex items-center justify-center translate-x-[300px] group-hover:translate-x-0  transform-transition duration-500 ease-in-out"
          >
            <MdLiveTv />
          </a>
        </div>
      </div>

      <div className="px-4 py-5">
        <h3 className="text-base font-semibold line-clamp-2 overflow-hidden text-ellipsis">
          {title}
        </h3>
        <p className="text-sm leading-6">{description}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-xs text-secondary bg-orange-100 px-3 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
