
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('instructions').truncate()
    .then(function () {
      // Inserts seed entries

      const instructions = [
        { instructions: 'Cut all vegetable Heatbsp of oil \n in a large po Add onions and saute for  minute Add carrots and celery and stir until coated in oil forminute Then add bay leaves and garli tbsp of olive oil and sti Add the zucchin Add the water, add just enough to cover the vegetables plus a little mor Add tomatoes, potatoes and broccoli stems, and the cabbag Bring pot to a boil then reduce to medium heat and simmer with a lid covered for minute Add beans, salt, pepper, and herbs and simmer for anotheminute Taste and adjust the seasoning Before serving stir in the broccoli floret', 
          recipe_id: 1 },
        { instructions: 'Cut all vegetable Heatbsp of oil \n in a large po Add onions and saute for  minute Add carrots and celery and stir until coated in oil forminute Then add bay leaves and garli tbsp of olive oil and sti Add the zucchin Add the water, add just enough to cover the vegetables plus a little mor Add tomatoes, potatoes and broccoli stems, and the cabbag Bring pot to a boil then reduce to medium heat and simmer with a lid covered for minute Add beans, salt, pepper, and herbs and simmer for anotheminute Taste and adjust the seasoning Before serving stir in the broccoli floret', 
          recipe_id: 2 }
      ];

      return knex('instructions').insert(instructions);
    });
};
