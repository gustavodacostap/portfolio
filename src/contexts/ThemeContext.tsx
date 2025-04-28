"use client";

import { createContext, useContext, useEffect, useState } from "react";

// Define o tipo de tema possível
type Theme = "light" | "dark";

// Define a interface para o contexto do tema
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Cria o contexto do tema
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Componente Provider para disponibilizar o tema e o toggle
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>("light");

  // No carregamento inicial, define o tema baseado na preferência salva ou na preferência do sistema
  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;

    if (storedTheme === "dark" || (!storedTheme && prefersDark)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  // Alterna entre tema claro e escuro
  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook personalizado para acessar o contexto de tema
export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
