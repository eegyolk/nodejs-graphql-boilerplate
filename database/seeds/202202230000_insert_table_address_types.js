/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('address_types').del();
  await knex('address_types').insert([
    {
      code: 'HOME',
      label: 'Home',
      description: 'Home address',
      is_default: true,
    },
    {
      code: 'WORK',
      label: 'Work',
      description: 'Work address',
      is_default: false,
    },
    {
      code: 'TEMP',
      label: 'Temp',
      description: 'Temp address',
      is_default: false,
    },
    {
      code: 'BILLING',
      label: 'Billing',
      description: 'Billing address',
      is_default: false,
    },
  ]);
};
