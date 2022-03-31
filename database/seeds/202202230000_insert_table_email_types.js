/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('email_types').del();
  await knex('email_types').insert([
    {
      code: 'PERSONAL',
      label: 'Personal',
      description: 'Personal email',
      is_default: true,
    },
    {
      code: 'WORK',
      label: 'Work',
      description: 'Work email',
      is_default: false,
    },
  ]);
};
