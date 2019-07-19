exports.up = function(knex) {
  return knex.schema.createTable('steps', tbl => {
    tbl.increments();

    tbl
      .integer('step_number')
      .unsigned()
      .notNullable()
      .unique();

    tbl.string('instruction', 128).notNullable();

    tbl
      .integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('steps');
};
