/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('utilities').del();
  await knex('utilities').insert([
    {
      code: 'MERALCO',
      label: 'Meralco Electric Bill',
      description: '',
    },
    {
      code: 'MAYNILAD',
      label: 'Maynilad Water Bill',
      description: '',
    },
    {
      code: 'MANILA_WATER',
      label: 'Manila Water Bill',
      description: '',
    },
    {
      code: 'HOA',
      label: 'Homeowners Association (HOA) Fee',
      description: '',
    },
  ]);
};
