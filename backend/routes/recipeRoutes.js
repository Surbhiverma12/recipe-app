const express = require("express");
const router = express.Router();
const recipeController = require("../controllers/recipeController");
const { addRecipe } = require("../controllers/recipeController");

router.post("/add", addRecipe);

// CRUD routes
router.get("/", recipeController.getAllRecipes);
router.get("/:id", recipeController.getRecipeById);
router.post("/", recipeController.createRecipe);
router.put("/:id", recipeController.updateRecipe);
router.delete("/:id", recipeController.deleteRecipe);

module.exports = router;
