// src/components/Education.tsx
"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import { PiGraduationCapFill } from "react-icons/pi";
import { MdCalendarToday } from "react-icons/md";

export default function Education() {
  const { theme } = useTheme();

  const educationData = [
    {
      degree: "Master of Science,",
      field: "AI & Machine Learning",
      institution: "Drexel University, Philadelphia, USA",
      period: "2025 - Present",
    },
    {
      degree: "Bachelor of Engineering,",
      field: "AI & Data Science",
      institution: "Vidyavardhini's College of Engineering, Vasai, India",
      period: "2022 - 2025",
    },
    {
      degree: "Diploma in",
      field: "Information Technology",
      institution: "Thakur Polytechnic, Kandivali, India",
      period: "2019 - 2022",
    },
    {
      degree: "10th",
      field: "(Secondary Examination)",
      institution: "National English High School, Virar, India",
      period: "2019",
    },
  ];

  return (
  <section
    id="education"
    className="min-h-screen flex items-center justify-center py-20 px-6 transition-colors duration-300 bg-white dark:bg-black"
  >
    <div className="max-w-5xl w-full">
      {/* Section Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-3 mb-4">
          <PiGraduationCapFill className="w-10 h-10 text-gray-900 dark:text-white" />
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
            Education
          </h2>
        </div>
      </div>

      {/* Timeline Container - Small Tablet to Desktop */}
      <div className="relative hidden sm:block">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-300 dark:bg-gray-700"></div>

        {/* Education Items */}
        <div className="space-y-16">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`relative flex flex-col sm:flex-row items-center ${
                index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
              }`}
            >
              {/* Content Card */}
              <div
                className={`w-full sm:w-5/12 ${
                  index % 2 === 0 ? "sm:text-right sm:pr-12" : "sm:text-left sm:pl-12"
                }`}
              >
                <div className="space-y-2">
                  <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <h4 className="text-lg sm:text-xl font-medium text-gray-800 dark:text-gray-200">
                    {edu.field}
                  </h4>
                  <p className="text-base text-gray-600 dark:text-gray-400">
                    {edu.institution}
                  </p>
                  <div
                    className={`flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 pt-2 ${
                      index % 2 === 0 ? "sm:justify-end" : ""
                    }`}
                  >
                    <MdCalendarToday className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gray-600 dark:bg-gray-400 border-4 border-white dark:border-black z-10"></div>

              {/* Empty Space on Other Side */}
              <div className="w-full sm:w-5/12"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile View - Stacked Layout (<426px) */}
      <div className="sm:hidden space-y-8 mt-12">
        {educationData.map((edu, index) => (
          <div
            key={index}
            className="relative pl-8 border-l-2 border-gray-300 dark:border-gray-700"
          >
            {/* Mobile Dot */}
            <div className="absolute -left-2.25 top-0 w-4 h-4 rounded-full bg-gray-600 dark:bg-gray-400 border-4 border-white dark:border-black"></div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {edu.degree}
              </h3>
              <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">
                {edu.field}
              </h4>
              <p className="text-base text-gray-600 dark:text-gray-400">{edu.institution}</p>
              <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 pt-2">
                <MdCalendarToday className="w-4 h-4" />
                <span>{edu.period}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}
