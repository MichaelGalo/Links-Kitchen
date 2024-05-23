// import statements

// data

const myMaterials = [
  "Cane Sugar",
  "Goat Butter",
  "Goat Butter",
  "Bird Egg",
  "Tabantha Wheat",
];

const materials = [
  "Hylian Rice",
  "Big Hearty Truffle",
  "Tabantha Wheat",
  "Raw Prime Meat",
  "Hateno Cheese",
  "Bird Egg",
  "Goat Butter",
  "Fresh Milk",
  "Cane Sugar",
  "Raw Bird Thigh",
];

const recipes = [
  {
    id: 1,
    name: "Mushroom Rice Balls",
    ingredients: ["Hylian Rice", "Big Hearty Truffle"],
  },
  {
    id: 2,
    name: "Egg Pudding",
    ingredients: ["Fresh Milk", "Cane Sugar", "Bird Egg"],
  },
  {
    id: 3,
    name: "Egg Tart",
    ingredients: ["Tabantha Wheat", "Cane Sugar", "Goat Butter", "Bird Egg"],
  },
  {
    id: 4,
    name: "Chicken Egg Fried Rice",
    ingredients: ["Hylian Rice", "Raw Prime Meat", "Bird Egg"],
  },
  {
    id: 5,
    name: "Poultry Pilaf",
    ingredients: ["Hylian Rice", "Goat Butter", "Bird Egg", "Raw Bird Thigh"],
  },
  {
    id: 6,
    name: "Cheesy Omlette",
    ingredients: ["Hateno Cheese", "Bird Egg"],
  },
  {
    id: 7,
    name: "Cheesy Hylian Pizza",
    ingredients: ["Tabantha Wheat", "Hateno Cheese"],
  },
  {
    id: 8,
    name: "Prime Meat and Rice Bowl",
    ingredients: ["Raw Prime Meat", "Hylian Rice"],
  },
];

const meals = [];

module.exports = { materials, recipes, meals, myMaterials };
