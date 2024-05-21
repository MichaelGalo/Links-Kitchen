const { recipes, meals } = require("./database");

const cook = (currentMaterials) => {
  const recipesWithIngredients = recipes.filter((recipe) => {
    const recipeIngredients = recipe.ingredients;

    if (recipeIngredients.length === currentMaterials.length) {
      return currentMaterials.every((ingredient) =>
        recipeIngredients.includes(ingredient)
      );
    }
  });
  for (const recipe of recipesWithIngredients) {
    meals.push(recipe.name);
  }
};

module.exports = { cook };
