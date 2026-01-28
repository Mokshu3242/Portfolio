"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  // Define skills organized by categories
  const skillCategories = [
    {
      title: "Programming Languages",
      gradient: "from-blue-500 to-indigo-600",
      skills: [
        "Python",
        "Java",
        "C",
        "C++",
        "C#",
        "JavaScript",
        "HTML",
        "CSS",
        "SQL",
      ],
    },
    {
      title: "Machine Learning & AI",
      gradient: "from-purple-500 to-pink-600",
      skills: [
        "PyTorch",
        "OpenAI Azure",
        "LLM-based Systems",
        "Generative AI",
        "Semantic Data Extraction",
        "Machine Learning Model Development",
      ],
    },
    {
      title: "Backend Development",
      gradient: "from-orange-500 to-amber-600",
      skills: [
        "FastAPI",
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "Asynchronous Programming",
        "API Integration",
      ],
    },
    {
      title: "Frontend Development",
      gradient: "from-pink-500 to-rose-600",
      skills: ["React.js", "Next.js", "Bootstrap", "Tailwind CSS"],
    },
    {
      title: "Databases",
      gradient: "from-green-500 to-emerald-600",
      skills: ["MongoDB", "SQLite", "SQL"],
    },
    {
      title: "Cloud & DevOps",
      gradient: "from-cyan-500 to-blue-600",
      skills: [
        "AWS (SES, S3)",
        "Cloudflare",
        "Vercel",
        "Virtual Machine Environments",
      ],
    },
    {
      title: "Tools & IDEs",
      gradient: "from-amber-500 to-orange-600",
      skills: ["Git", "VSCode", "Eclipse", "Figma", "Microsoft Office"],
    },
    {
      title: "Data Processing & Analysis",
      gradient: "from-violet-500 to-purple-600",
      skills: [
        "pandas",
        "Data Visualization",
        "pypdfium2",
        "Schema Validation",
        "Data Normalization",
      ],
    },
    {
      title: "Operating Systems",
      gradient: "from-slate-500 to-gray-600",
      skills: ["Ubuntu (Linux)", "Windows"],
    },
    {
      title: "Security & Authentication",
      gradient: "from-red-500 to-rose-600",
      skills: ["JWT (JSON Web Tokens)", "bcrypt", "OTP Verification"],
    },
    {
      title: "Other Technologies",
      gradient: "from-teal-500 to-cyan-600",
      skills: [
        "ElevenLabs (Text-to-Speech)",
        "Audio Transcription",
        "Image Analysis",
        "Video Editing",
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl w-full">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Skills
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400">
            My technical expertise across different domains
          </p>
        </div>

        {/* Pinterest-style Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 sm:gap-6 space-y-4 sm:space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="break-inside-avoid">
              {/* Pinterest Card */}
              <div
                className="group relative bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer"
                onClick={() => {
                  if (window.innerWidth < 768) {
                    setExpandedCategory(
                      expandedCategory === category.title
                        ? null
                        : category.title,
                    );
                  }
                }}
              >
                {/* Gradient Header */}
                <div
                  className={`h-24 sm:h-32 bg-linear-to-br ${category.gradient} relative overflow-hidden`}
                >
                  {/* Decorative circles */}
                  <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                  <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-black/10 rounded-full blur-2xl"></div>

                  {/* Title + mobile toggle */}
                  <div className="absolute inset-0 flex items-center justify-between px-4">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold text-white">
                      {category.title}
                    </h3>

                    {/* Mobile toggle icon */}
                    <button
                      className="md:hidden text-white text-2xl transition-transform duration-300"
                      onClick={(e) => {
                        e.stopPropagation(); // prevent double toggle
                        setExpandedCategory(
                          expandedCategory === category.title
                            ? null
                            : category.title,
                        );
                      }}
                    >
                      {expandedCategory === category.title ? (
                        <FiChevronUp />
                      ) : (
                        <FiChevronDown />
                      )}
                    </button>
                  </div>
                </div>

                {/* Skills Content */}
                <div
                  className={`
                    p-4 sm:p-6
                    ${expandedCategory === category.title ? "block" : "hidden"}
                    md:block
                  `}
                >
                  {/* Skill count badge */}
                  <div className="flex items-center gap-2 mb-3 sm:mb-4">
                    <span className="text-xs font-semibold text-gray-500 dark:text-gray-400">
                      {category.skills.length} SKILLS
                    </span>
                    <div className="flex-1 h-px bg-gray-200 dark:bg-gray-800"></div>
                  </div>

                  {/* Skills chips */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        onMouseEnter={() => setHoveredSkill(skill)}
                        onMouseLeave={() => setHoveredSkill(null)}
                        className={`
                          inline-block px-3 py-1.5 rounded-full text-xs font-medium
                          transition-all duration-200
                          ${
                            hoveredSkill === skill
                              ? `bg-linear-to-r ${category.gradient} text-white shadow-lg scale-110`
                              : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:scale-105"
                          }
                        `}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover overlay effect */}
                <div className="absolute inset-0 bg-linear-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-blue-500 to-indigo-600 bg-clip-text text-transparent mb-2">
              9
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Programming Languages
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-purple-500 to-pink-600 bg-clip-text text-transparent mb-2">
              20+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Frameworks & Tools
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent mb-2">
              11
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Categories
            </div>
          </div>

          <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-6 shadow-md hover:shadow-xl transition-all duration-300 text-center">
            <div className="text-3xl sm:text-4xl font-bold bg-linear-to-r from-orange-500 to-red-600 bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              Total Skills
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
