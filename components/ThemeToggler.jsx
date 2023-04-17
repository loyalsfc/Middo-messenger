"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

// React-icons
import { HiOutlineMoon, HiOutlineSun } from "react-icons/hi";

const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme;
  return (
    <>
      {currentTheme === "dark" ? (
        <button
          onClick={() => setTheme("light")}
          className="flex items-center gap-3"
        >
          <span className="rounded-full p-2 bg-[#fca311]">
            <HiOutlineSun size={20} />
          </span>{" "}
          Light Mode
        </button>
      ) : (
        <button
          onClick={() => setTheme("dark")}
          className="flex items-center gap-3"
        >
          <span className="rounded-full p-2 bg-[#5632fa]">
            <HiOutlineMoon size={20} />
          </span>{" "}
          Dark Mode
        </button>
      )}
    </>
  );
};

export default ThemeToggler;
