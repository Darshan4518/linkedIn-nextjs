"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const darkModePreference = localStorage.getItem("darkMode");
    if (darkModePreference === "true") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="flex items-center justify-center p-2 rounded-full bg-gray-200 dark:bg-gray-700"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDarkMode ? (
        <Sun className="w-4 h-4 text-yellow-500" />
      ) : (
        <Moon className="w-4 h-4 text-gray-800" />
      )}
    </button>
  );
}
