
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('ingredients').truncate()
    .then(function () {
      // Inserts seed entries
      const ingredients = [
        { name: 'tomatoes' },
        { name: 'celery stalks' }
      ];

      return knex('ingredients').insert(ingredients);
    });
};
