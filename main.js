// import statements

const { meals, myMaterials } = require("./database");
const { cook } = require("./functions");

cook(myMaterials);

console.log("MEALS:");
console.log("---------------");
for (const meal of meals) {
  console.log(meal);
}
