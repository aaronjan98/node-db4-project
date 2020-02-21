
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        { 'recipe name': 'SUPER Flavour Veggie Soup (Easy & Vegan)' },
        { 'recipe name': 'Teriyaki Salmon Stir Fry' }
      ]);
    });
};
