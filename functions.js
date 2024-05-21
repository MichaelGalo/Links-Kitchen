const { recipes, meals } = require("./database");

const cook = (myMaterials) => {
  // this array only drips below if is actually defined
  const ingredientsToSearch = myMaterials.filter(Boolean);

  // this filters recipes with the ingredientsToSearch and only shows the recipe if it strictly includes the passed ingredients
  const recipesWithIngredients = recipes.filter((recipe) => {
    const recipeIngredients = recipe.ingredients;
    return ingredientsToSearch.every((ingredient) =>
      recipeIngredients.includes(ingredient)
    );
  });

  // Iterates through the newly created recipesWithIngredients to only show the name given, instead of the full array
  for (const recipe of recipesWithIngredients) {
    meals.push(recipe.name);
  }
};

module.exports = { cook };
