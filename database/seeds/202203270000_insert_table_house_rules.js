/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('house_rules').del();
  await knex('house_rules').insert([
    {
      code: 'KIDS_ALLOWED',
      label: 'Visitors Allowed',
      description: '',
    },
    {
      code: 'COOKING_ALLOWED',
      label: 'Cooking Allowed',
      description: '',
    },
    {
      code: 'VISITORS_ALLOWED',
      label: 'Visitors Allowed',
      description: '',
    },
    {
      code: 'PETS_ALLOWED',
      label: 'Pets Allowed',
      description: '',
    },
    {
      code: 'SMOKING_ALLOWED',
      label: 'Smoking Allowed',
      description: '',
    },
  ]);
};
