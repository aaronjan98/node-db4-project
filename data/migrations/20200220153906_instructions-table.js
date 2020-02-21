
exports.up = function(knex) {
  return knex.schema.createTable('instructions', tbl => {
      tbl.increments();
      tbl.text('instructions', 225)
        .notNullable();
        
      // Foreign Key
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onUpdate('CASCADE')
        .onDelete('RESTRICT');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('instructions');
};
