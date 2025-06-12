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
  SiGit,
  SiSvelte,
  SiDocker,
  SiOcaml,
  SiSwift
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
  Git: SiGit,
  Svelte: SiSvelte,
  Docker: SiDocker,
  OCaml: SiOcaml,
  Swift: SiSwift
};

const ProjectTile = ({
  title,
  blurb,
  github,
  demo,
  technologies = [],
  image,
  imagePosition = "center"
}) => {
  return (
    <div className="font-poppins bg-slate-300 shadow-md rounded-xl w-full max-w-4xl mx-auto flex overflow-hidden">
      
      <div className="flex flex-col flex-1 p-4">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm mb-4">{blurb}</p>

        <div className="mb-4 flex items-center space-x-3">
          <span className="font-semibold text-sm">Made with:</span>
          {technologies.map((tech) => {
            const Icon = techIconMap[tech];
            return Icon ? (
              <Icon
                key={tech}
                title={tech}
                className="text-base text-gray-700 hover:scale-110 transition-transform"
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

        <div className="flex space-x-4 text-sm">
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
        <div className="w-1/2 relative overflow-hidden rounded-r-xl">
          <img
            src={"images/" + image}
            alt={`${title} screenshot`}
            className={`absolute inset-0 w-full h-full object-cover object-${imagePosition}`}
          />
        </div>
      )}
    </div>
  );
};

export default ProjectTile;
