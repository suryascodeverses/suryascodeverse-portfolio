'use client';

import { useTheme } from './ThemeProvider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-all flex items-center justify-center"
      aria-label="Toggle theme"
    >
      <span className="text-xl transition-transform duration-300">
        {theme === 'dark' ? '🌙' : '☀️'}
      </span>
    </button>
  );
}