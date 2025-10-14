import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X, ChefHat, Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const location = useLocation();

  const languages = [
    { code: "en", label: "EN" },
    { code: "hi", label: "HI" },
    { code: "es", label: "ES" },
  ];

  const navLinks = [
    { path: "/", label: t("nav.home") },
    { path: "/recipes", label: t("nav.recipes") },
    { path: "/add", label: t("nav.addRecipe") },
    { path: "/about", label: t("nav.about") },
  ];

  const changeLanguage = (langCode) => {
    i18n.changeLanguage(langCode);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="backdrop-blur-lg bg-white/40 border-b border-orange-200/50 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 sm:space-x-3 group"
          >
            <div className="relative">
              <ChefHat className="w-8 h-8 sm:w-9 sm:h-9 text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
              <div className="absolute -inset-1 blur-lg bg-gradient-to-r from-orange-400 to-amber-300 opacity-40 group-hover:opacity-60 rounded-full"></div>
            </div>
            <span className="text-lg sm:text-xl font-extrabold text-gray-800">
              Global Recipe Hub
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-semibold transition-all ${
                  isActive(link.path)
                    ? "text-orange-600 after:absolute after:w-full after:h-[2px] after:bg-orange-500 after:left-0 after:-bottom-1"
                    : "text-gray-700 hover:text-orange-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Language Switcher */}
          <div className="hidden md:flex items-center space-x-2 ml-4">
            <Globe className="w-5 h-5 text-orange-500" />
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-3 py-1.5 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  i18n.language === lang.code
                    ? "bg-gradient-to-r from-orange-400 to-amber-500 text-white shadow-md"
                    : "bg-white/70 text-gray-600 hover:bg-orange-100"
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-orange-100 transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/80 backdrop-blur-md border-t border-orange-200"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 rounded-lg font-semibold transition-all ${
                    isActive(link.path)
                      ? "bg-orange-100 text-orange-700 border-l-4 border-orange-400"
                      : "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Language Switcher */}
              <div className="flex items-center justify-center space-x-2 pt-4 border-t border-orange-200 mt-2">
                <Globe className="w-5 h-5 text-orange-500" />
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => changeLanguage(lang.code)}
                    className={`flex-1 px-3 py-2 rounded-lg text-sm font-semibold transition-all ${
                      i18n.language === lang.code
                        ? "bg-gradient-to-r from-orange-400 to-amber-500 text-white"
                        : "bg-white/60 text-gray-600 hover:bg-orange-100"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
