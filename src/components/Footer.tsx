"use client";

import { Heart } from "lucide-react";
import { FiArrowUp } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { HiMail } from "react-icons/hi";

export default function Footer() {

  const quickLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
  ];

  const moreLinks = [
    { name: "Education", href: "#education" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "/Resume.pdf" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-white dark:bg-black transition-colors duration-300">
      {/* Main Footer Content */}
      <div className="w-full bg-white dark:bg-black py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="sm:col-span-2 md:col-span-2">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                Mokshad Sankhe
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4 max-w-md">
                Building intelligent systems that bridge data, automation, and human decision-making through scalable AI solutions and seamless user experiences.
              </p>
              
              {/* Social Links */}
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="https://github.com/Mokshu3242"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full transition-all duration-300 border border-gray-300 dark:border-gray-700"
                  aria-label="GitHub"
                >
                  <FaGithub className="w-5 h-5" />
                </a>

                <a
                  href="https://www.linkedin.com/in/mokshad-sankhe"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-blue-50 dark:bg-blue-900/30 hover:bg-blue-100 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-400 rounded-full transition-all duration-300 border border-blue-200 dark:border-blue-800"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>

                <a
                  href="https://leetcode.com/u/mokshu3242/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-sky-50 dark:bg-sky-900/30 hover:bg-sky-100 dark:hover:bg-sky-900/50 text-sky-700 dark:text-sky-400 rounded-full transition-all duration-300 border border-sky-200 dark:border-sky-800"
                  aria-label="LeetCode"
                >
                  <SiLeetcode className="w-5 h-5" />
                </a>

                <a
                  href="mailto:mokshadsankhe@gmail.com"
                  className="group flex items-center gap-2 px-5 py-2.5 bg-purple-50 dark:bg-purple-900/30 hover:bg-purple-100 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-400 rounded-full transition-all duration-300 border border-purple-200 dark:border-purple-800"
                  aria-label="Email"
                >
                  <HiMail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* More Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                More
              </h3>
              <ul className="space-y-2">
                {moreLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('/') ? "_blank" : undefined}
                      rel={link.href.startsWith('/') ? "noopener noreferrer" : undefined}
                      className="text-gray-600 dark:text-gray-400 hover:text-yellow-400 dark:hover:text-yellow-400 transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Full Width */}
      <div className="w-full bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-2">
        <div className="max-w-7xl mx-auto px-2">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1 text-center sm:text-left">
              © {new Date().getFullYear()} Mokshad Sankhe. 
            </p>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-gray-800 dark:hover:bg-gray-200 transition-all duration-300 group"
              aria-label="Scroll to top"
            >
              <span className="text-sm font-medium">Back to Top</span>
              <FiArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
