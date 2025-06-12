import React from "react";
import { FaGithub, FaVideo } from "react-icons/fa";
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiFlask,
  SiExpress,
  SiNodedotjs,
  SiNextdotjs,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  // add more icons as needed
} from "react-icons/si";

const techIconMap = {
  Reactjs: SiReact,
  JavaScript: SiJavascript,
  TailwindCSS: SiTailwindcss,
  Nextjs: SiNextdotjs,
  Nodejs: SiNodedotjs,
  HTML: SiHtml5,
  CSS: SiCss3,
  Python: SiPython,
  Flask: SiFlask,
  Express: SiExpress,
  TypeScript: SiTypescript,
  // add more mappings here as needed
};

const ProjectTile = ({
  title,
  blurb,
  github,
  demo,
  technologies = [],
  image,
}) => {
  return (
    <div className="font-poppins bg-slate-300 shadow-md rounded-xl my-6 w-full max-w-4xl mx-auto flex overflow-hidden">
      
      <div className="flex flex-col flex-1 p-8">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="mb-4">{blurb}</p>

        <div className="mb-6 flex items-center space-x-3">
          <span className="font-semibold">Made with:</span>
          {technologies.map((tech) => {
            const Icon = techIconMap[tech];
            return Icon ? (
              <Icon
                key={tech}
                title={tech}
                className="text-xl text-gray-700 hover:scale-110 transition-transform"
                aria-label={tech}
              />
            ) : (
              <span
                key={tech}
                className="text-sm text-gray-700 border rounded px-1"
                title={tech}
              >
                {tech}
              </span>
            );
          })}
        </div>

        <div className="flex space-x-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full hover:scale-110 transition transform"
            >
              <FaGithub />
              <span>GitHub</span>
            </a>
          )}
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-white text-black px-4 py-2 rounded-full hover:scale-110 transition transform"
            >
              <FaVideo />
              <span>Demo</span>
            </a>
          )}
        </div>
      </div>

      {image && (
        <div className="w-1/2 h-auto">
          <img
            src={image}
            alt={`${title} screenshot`}
            className="w-full h-full object-cover rounded-r-xl"
          />
        </div>
      )}
    </div>
  );
};

export default ProjectTile;
