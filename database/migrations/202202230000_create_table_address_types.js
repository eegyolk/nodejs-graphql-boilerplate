/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('address_types', function (table) {
    table.increments('id').primary();
    table
      .string('code', 100)
      .unique({ indexName: 'uniq_address_types_code' })
      .notNullable();
    table.string('label', 100).notNullable();
    table.string('description', 250).defaultTo('');
    table.boolean('is_default').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();
    table.comment(
      'An address type can be assigned to many users in table user_addresses'
    );

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
  return knex.schema.dropTable('address_types');
};
