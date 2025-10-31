import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowLeft, UtensilsCrossed } from "lucide-react";
import { motion } from "framer-motion";
import PageTransition from "../components/PageTransition";
import axios from "axios";

const Recipes = () => {
  const { t, i18n } = useTranslation(); 
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // ✅ Fallback to localhost if env variable missing
  const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:5000";

useEffect(() => {
  const fetchRecipes = async () => {
    try {
      const res = await axios.get(`${backendURL}/api/recipes?lang=${i18n.language}`);
      setRecipes(res.data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch recipes");
      setLoading(false);
    }
  };
  fetchRecipes();
}, [backendURL, i18n.language]);

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-6rem)] px-4 py-12 bg-gradient-to-br from-orange-50 via-amber-100 to-pink-100">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex justify-center mb-4">
              <UtensilsCrossed className="w-14 h-14 text-orange-500 drop-shadow-md" />
            </div>
            <h1 className="text-4xl font-extrabold text-gray-800 mb-2">
              {t("recipes.title") || "Our Recipes"}
            </h1>
            <p className="text-gray-600 text-lg">
              {t("recipes.subtitle") || "Explore delicious recipes below"}
            </p>
          </motion.div>

          {/* Error */}
          {error && !loading && (
            <p className="text-red-500 text-center mb-6">{error}</p>
          )}

          {/* No Recipes */}
          {!loading && !error && recipes.length === 0 && (
            <p className="text-center text-gray-500 mb-6">
              {t("recipes.noRecipes") || "No recipes found. Add one!"}
            </p>
          )}

          {/* Loading skeleton */}
          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-white/60 backdrop-blur-md shadow-lg rounded-3xl overflow-hidden animate-pulse"
                >
                  <div className="h-52 bg-gray-300/60" />
                  <div className="p-5 space-y-3">
                    <div className="h-5 bg-gray-300 rounded w-3/4" />
                    <div className="h-4 bg-gray-300 rounded w-full" />
                    <div className="h-4 bg-gray-300 rounded w-5/6" />
                    <div className="h-8 bg-gray-300 rounded-full w-1/2 mt-4" />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {recipes.map((recipe, index) => (
                <motion.div
                  key={recipe._id || index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 backdrop-blur-md shadow-xl rounded-3xl overflow-hidden transform hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
                >
                  {recipe.image && (
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-52 object-cover"
                    />
                  )}
                  <div className="p-6 text-left">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                      {recipe.title}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm line-clamp-3">
                      {recipe.description || "No description provided."}
                    </p>
                    <Link
                      to={`/recipes/${recipe._id || index}`}
                      state={{ recipe }}
                      className="inline-block px-4 py-2 bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-full text-sm font-semibold hover:shadow-md transition-all"
                    >
                      View Recipe
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Back Button */}
          <div className="text-center mt-12">
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-orange-600 font-semibold hover:underline"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>{t("recipes.backToHome") || "Back to Home"}</span>
            </Link>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Recipes;
