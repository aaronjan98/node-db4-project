
exports.up = function(knex) {
  return knex.schema.createTable('recipe_ingredients', tbl => {
      tbl.primary(['recipe_id', 'ingredient_id']);
      tbl.float('quantity')
        .notNullable();

    // Foreign Keys
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
      tbl.integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })
  .createTable('ingredients', tbl => {
      tbl.increments();
      tbl.string('name', 225)
        .notNullable();
  });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipe_ingredients')
    .dropTableIfExists('ingredients');
};
