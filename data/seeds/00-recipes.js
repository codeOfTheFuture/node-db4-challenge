exports.seed = function(knex) {
  return knex('recipes')
    .del()
    .then(function() {
      return knex('recipes').insert([
        { recipe_name: 'Fried Chicken' },
        { recipe_name: 'Chef Salad' },
        { recipe_name: 'Tomato Soup' },
      ]);
    });
};
