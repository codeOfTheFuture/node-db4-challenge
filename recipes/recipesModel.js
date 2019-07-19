const db = require('../data/dbConfig');

module.exports = {
  getRecipes,
  getShoppingList,
  // getInstructions,
};

function getRecipes() {
  return db('recipes');
}

function getShoppingList(id) {
  return db('recipes')
    .innerJoin(
      'ingredient_details',
      'recipes.id',
      'ingredient_details.recipe_id',
    )
    .innerJoin(
      'ingredients',
      'ingredient_details.ingredient_id',
      'ingredients.id',
    )
    .where({ recipe_id: id })
    .select('ingredient_details.quantity', 'ingredients.ingredient_name');
}
