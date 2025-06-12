import React from "react";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

const EducationTile = ({
  university,
  location,
  degree,
  major,
  minor,
  courses,
  honors
}) => (
  <div className="font-nunito font-semibold bg-slate-300 dark:bg-gray-800 shadow-md rounded-xl px-8 py-6 my-6 w-full max-w-3xl mx-auto">
    <div className="flex justify-between">
      <h2 className="font-bold text-gray-900">{university}</h2>
      <h2>{location}</h2>
    </div>

    <p className="text-gray-700 dark:text-gray-300">
      {degree}, {major} | Minor in {minor}
    </p>
    <h3 className="text-sm mt-4 font-bold text-gray-800 dark:text-gray-200">
      Relevant Coursework:{" "}
    
    <span className="font-medium text-sm list-disc list-inside text-gray-700 dark:text-gray-300">
      {courses.map((course, index) => (
        <span key={index}>
          {course}
          {index < courses.length - 1 && ", "}
        </span>
      ))}
    </span>
    </h3>
    <h3 className="text-sm mt-4 font-bold text-gray-800 dark:text-gray-200">
      Honors:{" "}
    
    <span className="font-medium text-sm list-disc list-inside text-gray-700 dark:text-gray-300">
      {honors.map((honor, index) => (
        <span key={index}>
          {honor}
          {index < honors.length - 1 && ", "}
        </span>
      ))}
    </span>
    </h3>
  </div>
);

export default EducationTile;
