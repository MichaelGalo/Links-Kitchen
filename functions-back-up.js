// const { recipes, meals } = require("./database");

// const countOccurrences = (array) => {
//   return array.reduce((acc, item) => {
//     acc[item] = (acc[item] || 0) + 1;
//     return acc;
//   });
// };

// const cook = (myMaterials) => {
// this array only drips below if is actually defined
//   const ingredientsToSearch = myMaterials.filter(Boolean);
//   // invoking the function to count the amount of materials that I have
//   const countMaterials = countOccurrences(ingredientsToSearch);

// this filters recipes with the ingredientsToSearch and only shows the recipe if it strictly includes the passed ingredients
//   const recipesWithIngredients = recipes.filter((recipe) => {
//     const recipeIngredients = recipe.ingredients;
// const recipeCount = countOccurrences(recipeIngredients);

//this is a complex method that essentially returns the ingredient names of the recipeCount array and for each one checks to see if they are the exact same amount as the countMaterials count.

// return Object.keys(recipeCount).every((ingredient) => {
//   return countMaterials[ingredient] === recipeCount[ingredient];
// });

//     if (recipeIngredients.length === ingredientsToSearch.length) {
//       return ingredientsToSearch.every((ingredient) =>
//         recipeIngredients.includes(ingredient)
//       );
//     }
//   });

// Iterates through the newly created recipesWithIngredients to only show the name given, instead of the full array
//   for (const recipe of recipesWithIngredients) {
//     meals.push(recipe.name);
//   }
// };

// module.exports = { cook };
