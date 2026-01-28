// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThemeDebug from "@/components/ThemeDebug";  // Add this import
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Qualifications from "@/components/Qualification";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <main className="max-w-4xl mx-auto">
        <Hero />
        <About/>
        <Skills/>
        <Projects/>
        <Qualifications/>
      </main>
      <ThemeDebug />  {/* Add this component */}
    </div>
  );
}