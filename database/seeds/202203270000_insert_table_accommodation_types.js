/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('accommodation_types').del();
  await knex('accommodation_types').insert([
    {
      code: 'FAMILY',
      label: 'Family',
      description: '',
    },
    {
      code: 'COUPLE',
      label: 'Couple',
      description: '',
    },
    {
      code: 'STUDENT',
      label: 'Student',
      description: '',
    },
    {
      code: 'MALE_ONLY',
      label: 'Male Only',
      description: '',
    },
    {
      code: 'FEMALE_ONLY',
      label: 'Female Only',
      description: '',
    },
  ]);
};
