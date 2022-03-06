/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('user_addresses', function (table) {
    table.bigIncrements('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('address_type_id').unsigned().notNullable();
    table.string('address_line_1', 250).notNullable();
    table.string('address_line_2', 250).defaultTo('');
    table.string('barangay', 150).notNullable();
    table.string('city_town', 150).notNullable();
    table.string('state_province', 150).notNullable();
    table.string('postal_code', 10).notNullable();
    table.string('country', 100).default('Philippines');
    table.boolean('is_default').defaultTo(false);
    table.tinyint('rank').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('user_id', 'idx_user_addresses_user_id')
      .references('id')
      .inTable('users');
    table
      .foreign('address_type_id', 'idx_user_addresses_address_type_id')
      .references('id')
      .inTable('address_types');

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
  return knex.schema.dropTable('user_addresses');
};
