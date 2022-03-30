/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('users', function (table) {
    table.increments('id').primary();
    table
      .string('username', 100)
      .unique({ indexName: 'uniq_users_username' })
      .notNullable();
    table
      .string('email_address', 320)
      .unique({ indexName: 'uniq_users_email_address' })
      .notNullable();
    table.string('password', 100).notNullable();
    table.enum('title', ['', 'Mr', 'Mrs', 'Ms']).defaultTo('');
    table.string('firstname', 250).notNullable();
    table.string('middlename', 250).defaultTo('');
    table.string('lastname', 250).notNullable();
    table.string('suffix', 20).defaultTo('');
    table.date('birthdate').nullable();
    table.tinyint('age', 3).defaultTo(0);
    table.enum('sex', ['', 'MALE', 'FEMALE']).defaultTo('');
    table.string('photo_url', 1000).defaultTo('');
    table
      .string('verification_token', 100)
      .defaultTo('')
      .comment(
        'Value will be in JWT format, this will be generated during registration w/c will be used for email verification'
      );
    table
      .string('verification_md5', 32)
      .index()
      .defaultTo('')
      .comment(
        'This will be used for faster query than verification_token for validation'
      );
    table
      .timestamp('verified_at')
      .nullable()
      .comment('Should have value once email is verified');
    table
      .string('remember_token', 100)
      .defaultTo('')
      .comment(
        'Value will be in JWT format, user needs to tick remember me checkbox'
      );
    table
      .string('recovery_token', 100)
      .defaultTo('')
      .comment(
        'Value will be in JWT format, this will be generated during forgot password'
      );
    table
      .string('recovery_md5', 32)
      .index()
      .defaultTo('')
      .comment(
        'This will be used for faster query than recovery_token for validation'
      );
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    if (client === 'mysql') {
      table.engine('InnoDB');
      table.charset('utf8mb4');
      table.collate('utf8mb4_general_ci');
    }
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('users');
};
