const { faker } = require('@faker-js/faker');

const PasswordHasher = require('../../app/Classes/PasswordHasher');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  const DEFAULT_PASSWORD = 'password';

  // Deletes ALL existing entries
  await knex('users').del();
  for (let i = 0; i <= 4; i++) {
    await knex('users').insert([
      {
        username: faker.internet.userName(),
        email_address: faker.internet.email(),
        password: PasswordHasher.make(DEFAULT_PASSWORD),
        firstname: faker.name.firstName(i % 2),
        lastname: faker.name.lastName(i % 2),
      },
    ]);
  }
};
