import React from "react";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

const SkillsList = ({heading, group}) => (
    <h2 className="font-bold text-gray-800 dark:text-gray-200">
      {heading}{" "}
      <span className="font-medium list-disc list-inside text-gray-700 dark:text-gray-300">
        {group.map((skill, index) => (
          <span key={index}>
            {skill}
            {index < group.length - 1 && ", "}
          </span>
        ))}
      </span>
    </h2>
)

const SkillsTile = ({ programmingLanguages, frameworks, technologies, tools, spokenLanguages }) => (
  <div className="font-nunito text-sm bg-slate-300 dark:bg-gray-800 shadow-md rounded-xl px-8 py-6 my-6 w-full max-w-3xl mx-auto">
    <SkillsList heading="Programming Languages:" group={programmingLanguages} />
    <SkillsList heading="Frameworks:" group={frameworks} />
    <SkillsList heading="Technologies:" group={technologies} />
    <SkillsList heading="Tools:" group={tools} />
    <SkillsList heading="Spoken Languages:" group={spokenLanguages} />
  </div>
);

export default SkillsTile;