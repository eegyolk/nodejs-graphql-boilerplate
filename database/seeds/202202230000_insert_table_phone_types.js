/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const MOBILE = 'MOBILE';
  const LANDLINE = 'LANDLINE';

  // Deletes ALL existing entries
  await knex('phone_types').del();
  await knex('phone_types').insert([
    {
      code: 'CELLPHONE',
      label: 'Cellphone',
      sub_type: MOBILE,
      description: 'Cellphone phone number',
      is_default: true,
    },
    {
      code: 'HOME',
      label: 'Home',
      sub_type: LANDLINE,
      description: 'Home landline number',
      is_default: true,
    },
    {
      code: 'WORK',
      label: 'Work',
      sub_type: LANDLINE,
      description: 'Work landline number',
      is_default: true,
    },
  ]);
};
