// src/app/page.tsx
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ThemeDebug from "@/components/ThemeDebug";  // Add this import

export default function Home() {
  return (
    <div className="bg-white dark:bg-black min-h-screen font-sans transition-colors duration-300">
      <Navbar />
      <main className="max-w-4xl mx-auto">
        {/* <Hero /> */}
      </main>
      <ThemeDebug />  {/* Add this component */}
    </div>
  );
}