
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries

      const instructions = [
        { instructions: `Step 1: Cut all vegetables.`, recipe_id: 1 },
        { instructions: 'Step 2: Heat 2-3 tbsp of oil in a large pot. Add onions and saute for 3-5 minutes.', recipe_id: 1 },
        { instructions: 'Step 3:  Add carrots and celery and stir until coated in oil for 2-3 minutes. Then add bay leaves and garlic. Add 2 tbsp of water and stir for 2 minutes. Add 2 tbsp of olive oil and stir. Add the zucchini.', recipe_id: 1 },
        { instructions: 'Step 4: Add the water, add just enough to cover the vegetables plus a little more.', recipe_id: 1 },
        { instructions: 'Step 5: Add tomatoes, potatoes and broccoli stems, and the cabbage.', recipe_id: 1 },
        { instructions: 'Step 1: blah blah blah', recipe_id: 2 }
      ];

      return knex('instructions').insert(instructions);
    });
};
