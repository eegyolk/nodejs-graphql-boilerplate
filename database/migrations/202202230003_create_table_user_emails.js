/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('user_emails', function (table) {
    table.bigIncrements('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('email_type_id').unsigned().notNullable();
    table.string('email_address', 100).notNullable();
    table.boolean('is_default').defaultTo(false);
    table.tinyint('rank').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('user_id', 'idx_user_emails_user_id')
      .references('id')
      .inTable('users');
    table
      .foreign('email_type_id', 'idx_user_emails_email_type_id')
      .references('id')
      .inTable('email_types');

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
  return knex.schema.dropTable('user_emails');
};
