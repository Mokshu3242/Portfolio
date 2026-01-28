"use client";

import Image from "next/image";
import { FiAward, FiFolder, FiHeadphones } from "react-icons/fi"; // Import icons

export default function About() {
  function setMenuOpen(arg0: boolean): void {
    throw new Error("Function not implemented.");
  }

  return (
    <section
      id="about"
      className="py-8 sm:py-12 px-4 sm:px-6 md:px-12 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12">
        {/* Left: Image */}
        <div className="shrink-0">
          <Image
            src="/image.png" // replace with your uploaded image path
            alt="Mokshad Sankhe"
            width={320}
            height={400}
            className="rounded-xl shadow-lg w-64 sm:w-80 h-auto"
          />
        </div>

        {/* Right: Info */}
        <div className="flex-1 space-y-4 sm:space-y-6 text-center lg:text-left">
          {/* Heading */}
          <div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              About Me
            </h1>
            <p className="text-gray-500 dark:text-gray-400 mt-1 text-sm sm:text-base">My Introduction</p>
          </div>

          {/* Info Cards */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4">
            <div className="flex flex-col items-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
              <FiAward className="text-xl sm:text-2xl mb-1 text-gray-900 dark:text-white" />
              <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Experience</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Fresher</p>
            </div>
            <div className="flex flex-col items-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
              <FiFolder className="text-xl sm:text-2xl mb-1 text-gray-900 dark:text-white" />
              <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Completed</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">5+ Projects</p>
            </div>
            <div className="flex flex-col items-center px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-sm">
              <FiHeadphones className="text-xl sm:text-2xl mb-1 text-gray-900 dark:text-white" />
              <h3 className="font-medium text-gray-900 dark:text-white text-sm sm:text-base">Support</h3>
              <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm">Online 24/7</p>
            </div>
          </div>

          {/* Intro Paragraph */}
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed mt-4 text-sm sm:text-base text-justify px-2 sm:px-0">
            I'm an AI/ML Engineer who transforms complex problems into intelligent, scalable solutions. My work spans building LLM-based systems, developing full-stack applications, and creating data-driven tools that enhance productivity and user experience. Driven by curiosity and a passion for innovation, I continuously explore emerging technologies to design systems that make a tangible impact in the real world.
          </p>

          {/* Download CV Button */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center gap-2 mt-1 px-5 sm:px-6 py-2.5 sm:py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-black rounded-full font-medium hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}