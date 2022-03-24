/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('identification_types').del();
  await knex('identification_types').insert([
    {
      code: 'PASSPORT',
      label: 'Passport',
      description: 'Philippine Passport',
      is_default: true,
    },
    {
      code: 'DRIVERS_LICENSE',
      label: "Driver's License",
      description: 'Land Transportation Office (LTO) Driver’s License',
      is_default: false,
    },
    {
      code: 'UMID',
      label: 'Unified Multi-Purpose Identification',
      description: 'Unified Multi-Purpose Identification Card',
      is_default: false,
    },
    {
      code: 'SSS',
      label: 'Social Security System',
      description: 'Social Security System (SSS) Card',
      is_default: false,
    },
    ,
    {
      code: 'GSIS',
      label: 'Government Service Insurance System',
      description: 'Government Service Insurance System (GSIS) Card',
      is_default: false,
    },
  ]);
};
