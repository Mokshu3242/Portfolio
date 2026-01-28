// src/components/Projects.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

interface Project {
  id: number;
  name: string;
  description: string;
  techStack: string[];
  image: string;
  frontendLink?: string;
  backendLink?: string;
  demoLink?: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "Toxic Comments Classification",
    description:
      "Flask-based NLP web application that uses machine learning to detect and classify toxic content in real-time. Features TF-IDF vectorization, advanced preprocessing, and model persistence for automated content moderation.",
    techStack: [
      "Python",
      "Flask",
      "Scikit-learn",
      "NLTK",
      "NLP",
      "Machine Learning",
    ],
    image: "/projects/toxic-comments.jpg",
    backendLink: "https://github.com/Mokshu3242/Toxic-Comments",
  },
  {
    id: 2,
    name: "VCET-NSDC Committee Website (2023-2025)",
    description:
      "Official website for VCET's National Skill Development Corporation committee from 2023-2025. Showcased committee events, achievements, team members, and contact information with responsive design for seamless user experience.",
    techStack: ["React", "JavaScript", "CSS", "Vercel"],
    image: "/projects/vcet-nsdc.jpg",
    frontendLink: "https://github.com/Mokshu3242/vcet-nsdc-old",
    demoLink: "https://vcet-nsdc-old.vercel.app/",
  },
  {
    id: 3,
    name: "MultiGPT - AI Agent with Multi-Modal Capabilities",
    description:
      "Advanced AI agent capable of processing text, audio, images, and documents with visualization support. Features conversational AI with persistent chat history, multi-language support (English, Hindi, Marathi), JWT authentication, YouTube transcript extraction, and data visualization capabilities.",
    techStack: [
      "React",
      "FastAPI",
      "MongoDB",
      "Cloudflare AI",
      "LangChain",
      "ElevenLabs",
      "Whisper",
      "CLIP",
      "Pandas",
      "Plotly",
      "Cloudflare worker AI",
      "Youtube API",
    ],
    image: "/projects/multigpt.jpg",
    frontendLink: "https://github.com/Mokshu3242/MultiModal_Frontend",
    backendLink: "https://github.com/Mokshu3242/Multimodal_Backend",
    demoLink: "https://multi-modal-frontend.vercel.app/",
  },
  {
    id: 4,
    name: "SupeCook - Smart Recipe Finder",
    description:
      "A kitchen helper web application that intelligently matches recipes based on available ingredients. Features ingredient-based recipe search, user authentication with JWT, recipe saving functionality, and aims to reduce food waste by helping users cook with what they already have.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "FastAPI",
      "MongoDB",
      "JWT",
      "Python",
    ],
    image: "/projects/supecook.jpg",
    frontendLink: "https://github.com/Mokshu3242/Supe-Cook-Frontend",
    backendLink: "https://github.com/Mokshu3242/Supe-Cook_backend",
    demoLink: "https://supe-cook-backend.vercel.app/",
  },
  {
    id: 5,
    name: "LLM-Based Email Automation System",
    description:
      "Enterprise-grade automation system for Scogo Networks that intelligently processes incoming emails with attachments, extracting and structuring data for automated ticket creation. Handles high volumes asynchronously with semantic extraction and schema validation, reducing manual processing efforts by 90%.",
    techStack: [
      "FastAPI",
      "Python",
      "OpenAI Azure",
      "AWS SES",
      "AWS S3",
      "Pandas",
      "LLM",
    ],
    image: "/projects/email-automation.jpg",
    backendLink: "https://github.com/Mokshu3242/Email-parser",
  },
  {
    id: 6,
    name: "HypoThyroid - AI-Powered Thyroid Disorder Detection App",
    description:
      "Advanced healthcare mobile application that leverages deep learning to assess thyroid disorder risk based on symptoms and medical history. Features real-time analysis using TensorFlow neural networks, secure user authentication with SHA512 hashing, and comprehensive health record management for early detection and intervention.",
    techStack: [
      "Flutter",
      "Dart",
      "FastAPI",
      "Python",
      "MongoDB",
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "Pandas",
    ],
    image: "/projects/thyrodetect.jpg",
    backendLink: "https://github.com/Mokshu3242/HypoThyroid",
  },
  {
    id: 7,
    name: "PCOS Detection - AI-Powered Women's Health Assessment App",
    description:
      "Innovative mobile healthcare application designed to help women assess their risk of Polycystic Ovary Syndrome (PCOS) through intelligent questionnaire analysis. Features K-Nearest Neighbors machine learning model for accurate risk prediction, secure user authentication with SHA512 encryption, and comprehensive historical tracking to support early diagnosis and empower proactive women's health management.",
    techStack: [
      "Flutter",
      "Dart",
      "FastAPI",
      "Python",
      "MongoDB",
      "Scikit-learn",
      "KNN Algorithm",
      "Pandas",
    ],
    image: "/projects/pcos-detection.jpg",
    backendLink: "https://github.com/Mokshu3242/PCOS-Detection-Backend",
  },
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="projects"
      className="min-h-screen py-2 px-6 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Projects
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A collection of my recent work showcasing AI/ML solutions and
            full-stack applications
          </p>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group border border-gray-200 dark:border-gray-700"
            >
              {/* Horizontal Layout */}
              <div className="flex flex-col sm:flex-row items-start p-6 gap-6">
                {/* Left Side - Icon */}
                <div className="shrink-0">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-linear-to-br from-yellow-400 to-orange-500 dark:from-yellow-600 dark:to-orange-700 flex items-center justify-center text-white text-3xl sm:text-4xl font-bold shadow-lg">
                    {project.name.charAt(0)}
                  </div>
                </div>

                {/* Middle - Content */}
                <div className="grow min-w-0">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-yellow-600 dark:group-hover:text-yellow-400 transition-colors">
                    {project.name}
                  </h3>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 4).map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
                        +{project.techStack.length - 4} more
                      </span>
                    )}
                  </div>
                </div>

                {/* Right Side - Read More Button */}
                <div className="shrink-0 self-center">
                  <button
                    onClick={() => openModal(project)}
                    className="flex items-center gap-2 px-6 py-3 bg-yellow-500 dark:bg-yellow-600 text-white font-medium rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-700 hover:gap-3 transition-all duration-300 whitespace-nowrap"
                  >
                    Read More
                    <FaExternalLinkAlt className="w-3 h-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="bg-white dark:bg-gray-800 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-slideUp"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 flex justify-between items-start z-10">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                  {selectedProject.name}
                </h3>
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
            <div className="p-6">
              {/* Description */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Description
                </h4>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 text-sm font-medium bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400 rounded-full border border-yellow-200 dark:border-yellow-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="space-y-3">
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  Links
                </h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  {selectedProject.frontendLink && (
                    <a
                      href={selectedProject.frontendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      Frontend Code
                    </a>
                  )}
                  {selectedProject.backendLink && (
                    <a
                      href={selectedProject.backendLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-700 text-white rounded-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-colors"
                    >
                      <FaGithub className="w-5 h-5" />
                      Backend Code
                    </a>
                  )}
                  {selectedProject.demoLink && (
                    <a
                      href={selectedProject.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-yellow-500 dark:bg-yellow-600 text-white rounded-lg hover:bg-yellow-600 dark:hover:bg-yellow-700 transition-colors"
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                      Live Demo
                    </a>
                  )}
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
