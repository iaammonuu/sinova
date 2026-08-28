"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "heat" | "freeze";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Use a function to initialize state so it runs once during the initial render on client side.
  // We can't rely on localStorage during SSR, so we default to "heat" and update after mount.
  const [theme, setTheme] = useState<Theme>("heat");

  useEffect(() => {
    // Check local storage or default to heat
    const savedTheme = localStorage.getItem("app-theme") as Theme;
    if (savedTheme === "heat" || savedTheme === "freeze") {
      if (theme !== savedTheme) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setTheme(savedTheme);
      }
      document.documentElement.setAttribute("data-theme", savedTheme);
    } else {
      document.documentElement.setAttribute("data-theme", "heat");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "heat" ? "freeze" : "heat";
    setTheme(newTheme);
    localStorage.setItem("app-theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
