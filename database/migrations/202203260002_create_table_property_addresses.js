/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('property_addresses', function (table) {
    table.bigIncrements('id').primary();
    table.bigInteger('property_id').unsigned().notNullable();
    table.decimal('latitude', 9, 6).defaultTo(0.0);
    table.decimal('longitude', 9, 6).defaultTo(0.0);
    table.string('address_line_1', 250).notNullable();
    table.string('address_line_2', 250).defaultTo('');
    table.string('barangay', 150).notNullable();
    table.string('city_town', 150).notNullable();
    table.string('state_province', 150).notNullable();
    table.string('postal_code', 10).notNullable();
    table.string('country', 100).default('Philippines');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('property_id', 'idx_property_addresses_property_id')
      .references('id')
      .inTable('properties');

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
  return knex.schema.dropTable('property_addresses');
};
