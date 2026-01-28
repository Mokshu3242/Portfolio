"use client";

import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface Experience {
  id: number;
  role: string;
  company: string;
  duration: string;
  description: string;
  highlights: string[];
  techStack: string[];
}

const experiences: Experience[] = [
  {
    id: 1,
    role: "Software Development Intern — AI & Backend",
    company: "Scogo Networks Pvt. Ltd.",
    duration: "Aug 2024 – Mar 2025",
    description:
      "Worked on building production-grade AI-powered backend systems focused on automation, scalability, and real-time data processing.",
    highlights: [
      "Developed an LLM-based email automation system to extract structured ticket data from emails and attachments (CSV, Excel)",
      "Designed an asynchronous, high-concurrency backend capable of processing large volumes of real-time email data",
      "Implemented semantic data extraction, normalization, and schema validation for CRM and ticketing platforms",
      "Reduced manual ticket creation effort by ~90% through intelligent automation",
    ],
    techStack: [
      "Python",
      "FastAPI",
      "LLMs",
      "Azure OpenAI",
      "AWS SES",
      "AWS S3",
      "MongoDB",
      "Pandas",
    ],
  },
];

export default function Experience() {
  const [selectedExperience, setSelectedExperience] =
    useState<Experience | null>(null);

  const openModal = (experience: Experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedExperience(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="experience"
      className="py-2 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Experience
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Industry experience in AI-powered backend and scalable systems
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.id}
              onClick={() => openModal(exp)}
              className="cursor-pointer bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 group"
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center p-6 gap-6">
                {/* Left Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 rounded-xl bg-linear-to-br from-yellow-400 to-orange-500 dark:from-yellow-600 dark:to-orange-700 flex items-center justify-center text-white text-2xl font-bold shadow-lg">
                    {exp.company.charAt(0)}
                  </div>
                </div>

                {/* Main Info */}
                <div className="grow min-w-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    {exp.role}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {exp.company}
                  </p>
                </div>

                {/* Duration */}
                <div className="shrink-0">
                  <span className="px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full">
                    {exp.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedExperience && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-start">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-1">
                  {selectedExperience.role}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {selectedExperience.company} • {selectedExperience.duration}
                </p>
              </div>
              <button
                onClick={closeModal}
                className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors"
                aria-label="Close modal"
              >
                <FaTimes className="w-5 h-5 text-gray-600 dark:text-gray-400" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6">
              {/* Description */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Overview
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedExperience.description}
                </p>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Key Contributions
                </h4>
                <ul className="space-y-2 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {selectedExperience.highlights.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full border border-yellow-200 dark:border-yellow-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }
      `}</style>
    </section>
  );
}
