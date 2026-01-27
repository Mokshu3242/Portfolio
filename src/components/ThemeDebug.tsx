// src\components\ThemeDebug.tsx
"use client";

import { useTheme } from "@/contexts/ThemeProvider";
import { useEffect, useState } from "react";

export default function ThemeDebug() {
  const { theme } = useTheme();
  const [htmlClass, setHtmlClass] = useState("");

  useEffect(() => {
    setHtmlClass(document.documentElement.className);
  }, [theme]);

  return (
    <div className="hidden fixed bottom-4 right-4 bg-gray-200 dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-lg text-xs font-mono">
      <div>Theme State: {theme}</div>
      <div>HTML Classes: {htmlClass}</div>
      <div>LocalStorage: {typeof window !== "undefined" ? localStorage.getItem("theme") : "N/A"}</div>
      <div className="mt-2 p-2 bg-white dark:bg-black border border-gray-300 dark:border-gray-700">
        This box should change color
      </div>
    </div>
  );
}