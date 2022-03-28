/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('payment_providers', function (table) {
    table.increments('id').primary();
    table
      .string('code', 100)
      .unique({ indexName: 'uniq_payment_providers_code' })
      .notNullable();
    table.string('label', 100).notNullable();
    table.string('description', 250).defaultTo('');
    table.string('account_name', 100).defaultTo('');
    table
      .string('account_number', 100)
      .unique({ indexName: 'uniq_payment_providers_account_number' })
      .defaultTo('');
    table.string('swift_code', 25).defaultTo('');
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
  return knex.schema.dropTable('payment_providers');
};
