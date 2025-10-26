import { useLocation, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import PageTransition from "../components/PageTransition";

const RecipeDetails = () => {
  const { state } = useLocation();
  const recipe = state?.recipe;

  if (!recipe) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-100 via-amber-50 to-pink-100">
        <p className="text-2xl text-gray-700 mb-4">Recipe not found!</p>
        <Link
          to="/recipes"
          className="px-6 py-3 bg-orange-500 text-white rounded-full font-semibold hover:shadow-md"
        >
          Back to Recipes
        </Link>
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-[calc(100vh-6rem)] px-4 py-12 bg-gradient-to-br from-orange-50 via-amber-100 to-pink-100">
        <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="w-full h-72 object-cover"
          />
          <div className="p-8">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {recipe.title}
            </h1>
            <p className="text-gray-600 mb-6">{recipe.description}</p>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-600 mb-6">
              {recipe.ingredients.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>

            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Steps
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              {recipe.steps.map((step, i) => (
                <li key={i}>{step}</li>
              ))}
            </ol>

            <div className="mt-8">
              <Link
                to="/recipes"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Recipes</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default RecipeDetails;
