/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('property_types').del();
  await knex('property_types').insert([
    {
      code: 'APARTMENT',
      label: 'Apartment',
      description: '',
    },
    {
      code: 'TOWNHOUSE',
      label: 'Townhouse',
      description: '',
    },
    {
      code: 'CONDOMINIUM',
      label: 'Condominium',
      description: '',
    },
    {
      code: 'BUNGALOW',
      label: 'Bungalow',
      description: '',
    },
    {
      code: 'DUPLEX',
      label: 'Duplex',
      description: '',
    },
    {
      code: 'STUDIO',
      label: 'Studio',
      description: '',
    },
    {
      code: 'DORMITORY',
      label: 'Dormitory',
      description: '',
    },
    {
      code: 'CAPSULE',
      label: 'Capsule',
      description: '',
    },
  ]);
};
