exports.up = function(knex) {
  return knex.schema
    .createTable('recipes', tbl => {
      tbl.increments();

      tbl
        .string('recipe_name', 128)
        .notNullable()
        .unique();
      tbl
        .interger('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipe_ingredients');
    })
    .createTable('ingredients', tbl => {
      tbl.increments();

      tbl
        .string('ingredient_name', 128)
        .notNullable()
        .unique();

      tbl
        .interger('ingredient_details_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredient_details');
    })
    .createTable('ingredient_details', tbl => {
      tbl.increments();

      tbl
        .float('quantity')
        .unsigned()
        .notNullable();
    })
    .createTable('steps', tbl => {
      tbl.increments();

      tbl
        .interger('step_number')
        .unsigned()
        .notNullable()
        .unique();
      tbl.string('instruction', 128).notNullable();
      tbl
        .interger('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes');
    });
};

exports.down = function(knex) {};
