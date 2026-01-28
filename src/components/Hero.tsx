// src/components/Hero.tsx
"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiMail } from "react-icons/hi";

export default function Hero() {
  const { theme } = useTheme();
  const fullName = "Mokshad Sankhe";
  const [displayedName, setDisplayedName] = useState("");
  const [typing, setTyping] = useState(true); // typing or deleting
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typing) {
        // Type letters
        setDisplayedName(fullName.slice(0, index + 1));
        setIndex(index + 1);
        if (index + 1 === fullName.length) setTyping(false); // switch to deleting
      } else {
        // Delete letters
        setDisplayedName(fullName.slice(0, index - 1));
        setIndex(index - 1);
        if (index - 1 === 0) setTyping(true); // switch to typing
      }
    }, 150); // speed per letter (ms)

    return () => clearInterval(interval);
  }, [index, typing]);

  return (
    <section className="min-h-screen flex items-center justify-center px-6 mt-6 transition-colors duration-300 bg-white dark:bg-black">
      <div className="max-w-4xl w-full text-center">
        <div className="space-y-6">
          {/* Greeting */}
          <div className="inline-block">👋 Welcome to my portfolio</div>

          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-gray-900 dark:text-white transition-colors duration-300">
            Hi,
            <br />
            I'm{" "}
            <span className="bg-gradient-to-r from-orange-500 via-yellow-500 to-amber-500 dark:from-yellow-400 dark:to-yellow-600 bg-clip-text text-transparent inline-block">
              {displayedName}
              <span className="inline-block animate-blink">|</span>
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl sm:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed transition-colors duration-300">
            AI/ML Engineer & Full-Stack Developer
          </p>

          <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto transition-colors duration-300">
            Building intelligent systems that bridge data, automation, and human decision-making through scalable AI solutions and seamless user experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <a
              href="#projects"
              className="px-8 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-black font-medium rounded-full hover:scale-105 hover:bg-gray-800 dark:hover:bg-yellow-500 transition-all duration-300 shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border-2 border-gray-900 dark:border-yellow-500 text-gray-900 dark:text-yellow-400 font-medium rounded-full hover:bg-gray-100 dark:hover:bg-yellow-500 dark:hover:text-black transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Media Links */}
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a
              href="https://github.com/Mokshu3242"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 border border-gray-300 dark:border-gray-700"
              aria-label="GitHub"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>

            <a
              href="https://www.linkedin.com/in/mokshad-sankhe"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-400 rounded-full transition-all duration-300 border border-blue-200 dark:border-blue-800"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>

            <a
              href="https://leetcode.com/u/mokshu3242/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-5 py-2.5 bg-sky-50 dark:bg-sky-900/30 hover:bg-sky-100 dark:hover:bg-sky-900/50 text-sky-700 dark:text-sky-400 rounded-full transition-all duration-300 border border-sky-200 dark:border-sky-800"
              aria-label="LeetCode"
            >
              <SiLeetcode className="w-5 h-5" />
              <span className="text-sm font-medium">LeetCode</span>
            </a>

            <a
              href="mailto:mokshadsankhe@gmail.com"
              className="group flex items-center gap-2 px-5 py-2.5 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-400 rounded-full transition-all duration-300 border border-purple-200 dark:border-purple-800"
              aria-label="Email"
            >
              <HiMail className="w-5 h-5" />
              <span className="text-sm font-medium">Email</span>
            </a>
          </div>
        </div>
      </div>

      {/* Blink animation */}
      <style jsx>{`
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        @keyframes blink {
          0%,
          50%,
          100% {
            opacity: 1;
          }
          25%,
          75% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
}