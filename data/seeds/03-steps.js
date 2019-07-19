exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('steps')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('steps').insert([
        { step_number: 1, instruction: 'make it', recipe_id: 1 },
        { step_number: 2, instruction: 'bake it', recipe_id: 1 },
        { step_number: 1, instruction: 'make it', recipe_id: 2 },
        { step_number: 2, instruction: 'bake it', recipe_id: 2 },
        { step_number: 1, instruction: 'make it', recipe_id: 3 },
        { step_number: 2, instruction: 'bake it', recipe_id: 3 },
      ]);
    });
};
