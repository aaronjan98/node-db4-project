
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      const recipe_ingredients =[
        { quantity: 2.56, recipe_id: 1, ingredient_id: 1},
        { quantity: 2.00, recipe_id: 2, ingredient_id: 2}
      ];
      return knex('recipe_ingredients').insert(recipe_ingredients);
    });
};
