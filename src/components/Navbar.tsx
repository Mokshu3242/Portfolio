// src\components\Navbar.tsx
"use client";

import { useState } from "react";
import { FiMenu, FiX, FiSun, FiMoon } from "react-icons/fi";
import { useTheme } from "@/contexts/ThemeProvider";
import { 
  Home, 
  User, 
  FileText, 
  Code, 
  Award, 
  Briefcase, 
  Mail 
} from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Skills", href: "#skills", icon: Code },
    { name: "Projects", href: "#projects", icon: FileText },
    { name: "Education", href: "#education", icon: Award },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Contact", href: "#contact", icon: Mail },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-sm shadow-[0_2px_8px_rgba(0,0,0,0.25)] dark:shadow-[0_2px_8px_rgba(255,255,255,0.1)] transition-colors duration-300">


        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          {/* Logo */}
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">
            <a href="#hero">Mokshad Sankhe</a>
          </h1>

          {/* Desktop Links (centered) */}
          <ul className="hidden md:flex gap-3 items-center text-gray-900 dark:text-white absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="hover:text-yellow-400 transition-colors"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Right-side buttons */}
          <div className="flex items-center gap-2">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <FiSun size={20} className="text-yellow-400" />
              ) : (
                <FiMoon size={20} className="text-gray-700" />
              )}
            </button>

            {/* Resume Button (desktop) */}
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-6 py-1.5 border border-gray-900 dark:border-gray-300 text-gray-900 dark:text-gray-300 rounded-full hover:bg-gray-900 hover:text-white dark:hover:bg-gray-300 dark:hover:text-gray-900 transition"
            >
              View Resume
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-900 dark:text-white p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              aria-label="Toggle Menu"
            >
              {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Bottom Sheet */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-black rounded-t-3xl shadow-2xl transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
      >
        {/* Handle bar */}
        <div className="flex justify-center pt-3 pb-2">
          <div className="w-12 h-1 bg-black/20 dark:bg-white/20 rounded-full" />
        </div>

        {/* Menu Grid */}
        <div className="px-6 pb-8 pt-4">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex flex-col items-center gap-2 p-4 bg-black/5 dark:bg-white/5 rounded-2xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
                >
                  <Icon size={24} className="text-black dark:text-white" />
                  <span className="text-sm text-gray-900 dark:text-white font-medium">
                    {link.name}
                  </span>
                </a>
              );
            })}
          </div>

          {/* Resume Button */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="block w-full text-center px-6 py-3 bg-black dark:bg-white text-white dark:text-black rounded-full hover:bg-black/80 dark:hover:bg-white/90 transition font-medium"
          >
            View Resume
          </a>
        </div>
      </div>
    </>
  );
}
