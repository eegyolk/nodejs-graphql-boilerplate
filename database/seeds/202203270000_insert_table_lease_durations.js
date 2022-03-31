/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('lease_durations').del();
  await knex('lease_durations').insert([
    {
      code: 'MONTHLY',
      label: 'Monthly',
      description: '',
    },
    {
      code: 'QUARTERLY',
      label: 'Quarterly',
      description: '',
    },
    {
      code: 'SEMI_ANNUALLY',
      label: 'Semi-Annually',
      description: '',
    },
    {
      code: 'ANNUALLY',
      label: 'Annually',
      description: '',
    },
  ]);
};
