exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredient_details')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ingredient_details').insert([
        { quantity: 1, recipe_id: 1, ingredient_id: 1 },
        { quantity: 2, recipe_id: 1, ingredient_id: 2 },
        { quantity: 4, recipe_id: 2, ingredient_id: 3 },
        { quantity: 1, recipe_id: 2, ingredient_id: 1 },
        { quantity: 2, recipe_id: 3, ingredient_id: 2 },
        { quantity: 2, recipe_id: 3, ingredient_id: 3 },
      ]);
    });
};
