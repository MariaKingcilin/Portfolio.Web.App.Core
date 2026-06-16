import { Menu, Moon, Sun, X } from 'lucide-react';
import { useState } from 'react';
import Resume from "../assets/maria_kingcilin.pdf";
import { useTheme } from '../hooks/useTheme';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Work', href: '#work' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gray-50/80 dark:bg-gray-950/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-4xl tracking-tighter satisfy-regular">
              {"Mariya"}
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors font-medium">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="w-px h-6 bg-gray-200 dark:bg-gray-800"></div>
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors cursor-pointer"
                aria-label="Toggle Theme"
              >
                {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
              </button>
              <a
                href={Resume}
                download
                className="bg-gray-900 text-gray-50 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white px-4 py-2 rounded-xl font-medium transition-colors"
              >
                Download CV
              </a>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1.5 rounded-lg text-gray-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-950">
          <ul className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-800"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-4 px-3">
              <a
                href={Resume}
                download
                className="block w-full text-center bg-gray-900 text-gray-50 hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-white px-4 py-3 rounded-xl font-medium transition-colors"
              >
                Download CV
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
