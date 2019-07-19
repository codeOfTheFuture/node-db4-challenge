exports.up = function(knex) {
  return knex.schema.createTable('steps', tbl => {
    tbl.increments();

    tbl
      .integer('step_number')
      .unsigned()
      .notNullable();

    tbl.string('instruction', 128).notNullable();

    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
