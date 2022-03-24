/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('social_networks').del();
  await knex('social_networks').insert([
    {
      code: 'FACEBOOK',
      label: 'Facebook',
      description: 'Facebook url',
      is_default: true,
    },
    {
      code: 'INSTAGRAM',
      label: 'Instagram',
      description: 'Instagram url',
      is_default: false,
    },
    {
      code: 'TWITTER',
      label: 'Twitter',
      description: 'Twitter url',
      is_default: false,
    },
  ]);
};
