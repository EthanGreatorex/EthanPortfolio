import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(null);
  const [isManual, setIsManual] = useState(false);

  useEffect(() => {
    // Check if user has manually set a theme preference
    const savedTheme = localStorage.getItem('theme-preference');
    if (savedTheme) {
      setIsDark(savedTheme === 'dark');
      setIsManual(true);
    } else {
      // Check system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDark(prefersDark);
      setIsManual(false);
    }
  }, []);

  useEffect(() => {
    // Listen for changes to system preference (only if not manually set)
    if (isManual) return;
    
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e) => setIsDark(e.matches);
    
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [isManual]);

  // Apply theme to document root
  useEffect(() => {
    if (isDark === null) return;
    
    if (isDark) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
    setIsManual(true);
    localStorage.setItem('theme-preference', isDark ? 'light' : 'dark');
  };

  const value = { isDark, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
