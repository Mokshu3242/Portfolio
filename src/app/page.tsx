// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThemeDebug from "@/components/ThemeDebug"; // Add this import
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Qualifications from "@/components/Qualification";
import Experience from "@/components/Experience";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <main className="max-w-4xl mx-auto">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Qualifications />
        <Experience />
        <ContactForm />
      </main>
      <Footer />
      <ThemeDebug /> {/* Add this component */}
    </div>
  );
}
