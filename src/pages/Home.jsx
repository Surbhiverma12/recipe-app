import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PlusCircle, Eye } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      {/* Background gradient with overlay */}
      <div className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-100 via-pink-50 to-amber-100">
        {/* Decorative blurred circles */}
        <div className="absolute top-10 left-20 w-64 h-64 bg-orange-300/40 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 right-20 w-72 h-72 bg-pink-300/40 blur-3xl rounded-full animate-pulse"></div>

        <div className="relative text-center px-6 py-12 sm:px-8 max-w-4xl mx-auto">
          {/* Title Section */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-10"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow-sm">
              🍲 {t("home.welcome")}
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              {t("home.subtitle")}
            </p>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10"
          >
            <Link
              to="/add"
              className="px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all"
            >
              <PlusCircle className="w-5 h-5" />
              <span>{t("home.addRecipeBtn")}</span>
            </Link>

            <Link
              to="/recipes"
              className="px-6 py-3 border-2 border-orange-400 text-orange-600 font-semibold rounded-full flex items-center space-x-2 hover:bg-orange-50 hover:shadow-md transform hover:-translate-y-1 transition-all"
            >
              <Eye className="w-5 h-5" />
              <span>{t("home.viewRecipesBtn")}</span>
            </Link>
          </motion.div>

          {/* Decorative emojis */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6"
          >
            {["🍝", "🍛", "🍕", "🥘"].map((emoji, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 8 }}
                className="bg-white/70 backdrop-blur-md shadow-md rounded-2xl flex items-center justify-center p-6 cursor-pointer transition-all hover:bg-orange-100/70"
              >
                <span
                  className="text-5xl sm:text-6xl"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {emoji}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Home;
