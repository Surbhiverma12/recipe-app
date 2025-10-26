import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PlusCircle, Eye } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";

const Home = () => {
  const { t } = useTranslation();

  return (
    <PageTransition>
      <div className="relative min-h-[calc(100vh-6rem)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-orange-200 via-amber-100 to-rose-100">
        {/* Subtle gradient blobs for background depth */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-orange-300/40 blur-3xl rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-300/40 blur-3xl rounded-full animate-pulse"></div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 py-12 sm:px-10 max-w-3xl mx-auto bg-white/40 backdrop-blur-lg rounded-3xl shadow-lg"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-800 leading-tight drop-shadow-sm"
          >
            {t("home.welcome")} 🍽️
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-4 text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed"
          >
            {t("home.subtitle")}
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="flex flex-col sm:flex-row justify-center items-center gap-5 mt-8"
          >
            <Link
              to="/add"
              className="px-7 py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold rounded-full flex items-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <PlusCircle className="w-5 h-5" />
              <span>{t("home.addRecipeBtn")}</span>
            </Link>

            <Link
              to="/recipes"
              className="px-7 py-3 border-2 border-orange-400 text-orange-500 font-semibold rounded-full flex items-center space-x-2 hover:bg-orange-50 hover:shadow-md hover:-translate-y-1 transition-all"
            >
              <Eye className="w-5 h-5" />
              <span>{t("home.viewRecipesBtn")}</span>
            </Link>
          </motion.div>

          {/* Emoji Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-10"
          >
            {["🍝", "🍜", "🍕", "🥗"].map((emoji, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.15, rotate: 6 }}
                className="bg-white/60 backdrop-blur-md shadow-md rounded-2xl flex items-center justify-center p-6 cursor-pointer transition-all hover:bg-orange-100/70"
              >
                <span className="text-5xl sm:text-6xl">{emoji}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default Home;
