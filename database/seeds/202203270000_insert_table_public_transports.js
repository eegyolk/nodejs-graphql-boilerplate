/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('public_transports').del();
  await knex('public_transports').insert([
    {
      code: 'LRT1',
      label: 'LRT Line 1',
      description: '',
    },
    {
      code: 'LRT2',
      label: 'LRT Line 2',
      description: '',
    },
    {
      code: 'MRT',
      label: 'MRT Line 3',
      description: '',
    },
    {
      code: 'BUS',
      label: 'Bus Station',
      description: '',
    },
    {
      code: 'TAXI',
      label: 'Taxi',
      description: '',
    },
    {
      code: 'JEEPNEY',
      label: 'Jeepney',
      description: '',
    },
    {
      code: 'TRICYCLE',
      label: 'Tricycle',
      description: '',
    },
    {
      code: 'PEDICAB',
      label: 'Pedicab',
      description: '',
    },
  ]);
};
