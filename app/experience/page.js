"use client";
import { useEffect, useState } from "react";
import educationData from "../data/education.json";
import skillsData from "../data/skills.json";
import experienceData from "../data/experience.json";
import Header from "../components/header";
import EducationTile from "../components/education-tile";
import SkillsTile from "../components/skills-tile";
import ExperienceTile from "../components/experience-tile";
import Footer from "../components/footer";

export default function Experience() {
  const [currentSection, setCurrentSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setCurrentSection(visible.target.dataset.title);
      },
      {
        threshold: 0.6, // Adjust this as needed
      }
    );

    const headings = document.querySelectorAll("h1[data-title]");
    headings.forEach((h) => observer.observe(h));

    return () => headings.forEach((h) => observer.unobserve(h));
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow bg-slate-900 dark:bg-foreground text-foreground dark:text-background">
        <Header currentSection={currentSection} />

        <h1
          className="font-bold font-poppins text-gray-100 text-3xl text-center my-6"
          data-title="EDUCATION"
        >
          EDUCATION
        </h1>
        {educationData.map((edu, idx) => (
          <EducationTile key={idx} {...edu} />
        ))}

        <h1
          className="font-bold font-poppins text-gray-100 text-3xl text-center my-6"
          data-title="TECHNICAL EXPERIENCE"
        >
          TECHNICAL EXPERIENCE
        </h1>
        {experienceData.map((exp, idx) => (
          <ExperienceTile key={idx} {...exp} />
        ))}

        <h1
          className="font-bold font-poppins text-3xl text-gray-100 text-center my-6"
          data-title="TECHNICAL SKILLS"
        >
          TECHNICAL SKILLS
        </h1>
        <SkillsTile {...skillsData} />

        <a
          href="/criticalthinking.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h1
            className="font-bold font-poppins text-3xl text-gray-100 text-center my-6 hover:text-slate-400"
            data-title="TECHNICAL SKILLS"
          >VIEW RESUME AS PDF</h1>
        </a>


      </div>
      <Footer />
    </div>
  );
}
