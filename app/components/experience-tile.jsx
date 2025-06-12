import React from "react";
import { Nunito } from "next/font/google";
const nunito = Nunito({ subsets: ["latin"] });

const ExperienceTile = ({
  position,
  employer,
  employerLink,
  location,
  dates,
  items,
}) => (
  <div className="font-nunito bg-slate-300 dark:bg-gray-800 shadow-md rounded-xl px-8 py-6 my-6 w-full max-w-3xl mx-auto">
    <div className="flex justify-between">
      <h2 className="font-bold text-gray-900">{position}</h2>
      <h2 className="font-semibold">{dates}</h2>
    </div>
    <div className="flex justify-between">
    <a className="text-gray-700 dark:text-gray-300 font-semibold" href={employerLink}>{employer}</a>
    <p className="italic font-semibold">{location}</p>
    </div>
    <ul className="font-medium text-sm list-disc list-inside pl-2 text-gray-700 dark:text-gray-300">
      {items.map((item, index) => (
        <li key={index}>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export default ExperienceTile;