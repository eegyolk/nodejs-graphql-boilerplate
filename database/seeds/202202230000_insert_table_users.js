const { faker } = require('@faker-js/faker');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('users').del();
  await knex('users').insert([
    {
      name: faker.name.findName(),
      email_address: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    },
    {
      name: faker.name.findName(),
      email_address: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    },
  ]);
};
