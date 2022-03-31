/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('unit_types').del();
  await knex('unit_types').insert([
    {
      code: 'ENTIRE_UNIT',
      label: 'Entire Unit',
      description: '',
    },
    {
      code: 'PRIVATE_ROOM',
      label: 'Private Room',
      description: '',
    },
    {
      code: 'BEDSPACE',
      label: 'Bedspace',
      description: '',
    },
  ]);
};
