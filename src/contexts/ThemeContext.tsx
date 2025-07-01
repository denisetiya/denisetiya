import { createContext, useState, useEffect } from "react";
import type { ReactNode } from "react";

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Check for saved theme preference
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('app-theme') as Theme;
      return savedTheme || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    // Apply theme using data-theme attribute for Tailwind v4
    const root = document.documentElement;
    
    // Set data-theme attribute on html element
    root.setAttribute('data-theme', theme);
    
    // Also set class for fallback compatibility
    root.classList.remove('light', 'dark');
    root.classList.add(theme);
    
    // Save theme preference
    if (typeof window !== 'undefined') {
      localStorage.setItem('app-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(newTheme);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Export hook in separate file to avoid fast refresh issues
export { ThemeContext };
