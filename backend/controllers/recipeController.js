const Recipe = require("../models/Recipe");
const translateText = require("../utils/translate"); // your working translate function

// Add a new recipe
exports.addRecipe = async (req, res) => {
  console.log("add is called")
  try {
    const { title, description, ingredients, steps, image } = req.body;

    // Translate to Hindi and Spanish
    const hiTitle = await translateText(title, "hi");
    const hiDescription = await translateText(description, "hi");
    const hiIngredients = await Promise.all(
      ingredients.map((ing) => translateText(ing, "hi"))
    );
    const hiSteps = await Promise.all(steps.map((step) => translateText(step, "hi")));

    const esTitle = await translateText(title, "es");
    const esDescription = await translateText(description, "es");
    const esIngredients = await Promise.all(
      ingredients.map((ing) => translateText(ing, "es"))
    );
    const esSteps = await Promise.all(steps.map((step) => translateText(step, "es")));

    const recipe = new Recipe({
      title,
      description,
      ingredients,
      steps,
      image,
      translations: {
        hi: {
          title: hiTitle,
          description: hiDescription,
          ingredients: hiIngredients,
          steps: hiSteps,
        },
        es: {
          title: esTitle,
          description: esDescription,
          ingredients: esIngredients,
          steps: esSteps,
        },
      },
    });

    await recipe.save();
    res.status(201).json({ success: true, recipe });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: "Server error" });
  }
};


// Get all recipes
exports.getAllRecipes = async (req, res) => {
  try {
    const lang = req.query.lang; // e.g., "hi" or "es"
    const recipes = await Recipe.find();

    const result = recipes.map(recipe => {
      if (lang && recipe.translations && recipe.translations[lang]) {
        const translation = recipe.translations[lang];
        return {
          title: translation.title || recipe.title,
          description: translation.description || recipe.description,
          ingredients: translation.ingredients.length ? translation.ingredients : recipe.ingredients,
          steps: translation.steps.length ? translation.steps : recipe.steps,
          image: recipe.image,
          createdAt: recipe.createdAt
        };
      }
      return recipe; // default English
    });

    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get single recipe
exports.getRecipeById = async (req, res) => {
  try {
    const { id } = req.params;
    const lang = req.query.lang || "en";
    const recipe = await Recipe.findById(id);

    if (!recipe) return res.status(404).json({ message: "Recipe not found" });

    const formattedRecipe = {
      id: recipe._id,
      title: recipe.translations?.[lang]?.title || recipe.title,
      description: recipe.translations?.[lang]?.description || recipe.description,
      ingredients: recipe.translations?.[lang]?.ingredients || recipe.ingredients,
      steps: recipe.translations?.[lang]?.steps || recipe.steps,
      image: recipe.image,
    };

    res.json(formattedRecipe);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Create new recipe
exports.createRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps, image } = req.body;
    const recipe = new Recipe({ title, description, ingredients, steps, image });
    await recipe.save();
    res.status(201).json(recipe);
  } catch (err) {
    res.status(500).json({ message: "Server Error", error: err.message });
  }
};

// Update recipe
exports.updateRecipe = async (req, res) => {
  try {
    const { title, description, ingredients, steps } = req.body;
    const recipeId = req.params.id;

    // Find the recipe
    const recipe = await Recipe.findById(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    // Update English version
    if (title) recipe.title = title;
    if (description) recipe.description = description;
    if (ingredients) recipe.ingredients = ingredients;
    if (steps) recipe.steps = steps;

    // Translate to Hindi and Spanish
    recipe.translations = recipe.translations || {};

    if (title || description) {
      recipe.translations.hi = {
        title: title ? await translateText(title, "hi") : recipe.translations.hi?.title,
        description: description ? await translateText(description, "hi") : recipe.translations.hi?.description,
      };
      recipe.translations.es = {
        title: title ? await translateText(title, "es") : recipe.translations.es?.title,
        description: description ? await translateText(description, "es") : recipe.translations.es?.description,
      };
    }

    await recipe.save();
    res.json(recipe);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
}

// Delete recipe
exports.deleteRecipe = async (req, res) => {
  try {
    const recipeId = req.params.id;

    const recipe = await Recipe.findByIdAndDelete(recipeId);
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }

    res.json({ message: "Recipe deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server Error" });
  }
}
