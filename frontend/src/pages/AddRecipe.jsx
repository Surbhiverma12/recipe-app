import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ChefHat, BookOpen, ListOrdered, UploadCloud } from "lucide-react";
import PageTransition from "../components/PageTransition";
import { useState } from "react";

const AddRecipe = () => {
  const { t } = useTranslation();
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    steps: "",
    image: "",
  });

  const handleChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Recipe submitted:", recipe);
    alert("Recipe submitted successfully! (Backend integration coming soon 🚀)");
  };

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center bg-gradient-to-br from-orange-100 via-amber-50 to-pink-100 px-4 py-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-3xl bg-white/70 backdrop-blur-lg rounded-3xl shadow-lg p-8 sm:p-10"
        >
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center mb-3"
            >
              <ChefHat className="w-14 h-14 text-orange-500 drop-shadow" />
            </motion.div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-800">
              {t("addRecipe.title")}
            </h1>
            <p className="mt-2 text-gray-600">{t("addRecipe.subtitle")}</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Recipe Title */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="form-group"
            >
              <label className="flex items-center gap-2 font-semibold text-gray-700">
                <BookOpen className="w-5 h-5 text-orange-500" />
                {t("addRecipe.features.addTitle")}
              </label>
              <input
                type="text"
                name="title"
                value={recipe.title}
                onChange={handleChange}
                required
                placeholder="e.g., Spicy Paneer Curry"
                className="w-full mt-2 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 outline-none bg-white/80"
              />
            </motion.div>

            {/* Ingredients */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <label className="flex items-center gap-2 font-semibold text-gray-700">
                <ListOrdered className="w-5 h-5 text-orange-500" />
                {t("addRecipe.features.addIngredients")}
              </label>
              <textarea
                name="ingredients"
                value={recipe.ingredients}
                onChange={handleChange}
                required
                rows="4"
                placeholder="e.g., Paneer, Tomatoes, Spices..."
                className="w-full mt-2 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 outline-none bg-white/80"
              ></textarea>
            </motion.div>

            {/* Steps */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <label className="flex items-center gap-2 font-semibold text-gray-700">
                <ListOrdered className="w-5 h-5 text-orange-500" />
                {t("addRecipe.features.addSteps")}
              </label>
              <textarea
                name="steps"
                value={recipe.steps}
                onChange={handleChange}
                required
                rows="5"
                placeholder="e.g., 1. Heat oil, 2. Add paneer..."
                className="w-full mt-2 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 outline-none bg-white/80"
              ></textarea>
            </motion.div>

            {/* Image Upload */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label className="flex items-center gap-2 font-semibold text-gray-700">
                <UploadCloud className="w-5 h-5 text-orange-500" />
                {t("addRecipe.features.addImage") || "Upload an Image"}
              </label>
              <input
                type="url"
                name="image"
                value={recipe.image}
                onChange={handleChange}
                placeholder="Paste image URL (upload feature coming soon)"
                className="w-full mt-2 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-orange-300 outline-none bg-white/80"
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="w-full mt-6 py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              type="submit"
            >
              {t("addRecipe.submitBtn") || "Add Recipe"}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </PageTransition>
  );
};

export default AddRecipe;
