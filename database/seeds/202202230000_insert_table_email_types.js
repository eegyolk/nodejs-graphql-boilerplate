/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('email_types').del();
  await knex('email_types').insert([
    {
      code: 'HOME',
      label: 'Home',
      description: 'Home email',
      is_default: true,
    },
    {
      code: 'WORK',
      label: 'Work',
      description: 'Work email',
      is_default: false,
    },
    {
      code: 'TEMP',
      label: 'Temp',
      description: 'Temp email',
      is_default: false,
    },
  ]);
};
