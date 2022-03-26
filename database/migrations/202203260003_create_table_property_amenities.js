/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('property_amenities', function (table) {
    table.bigIncrements('id').primary();
    table.bigInteger('property_id').unsigned().notNullable();
    table.integer('amenity_id').unsigned().notNullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('property_id', 'idx_property_amenities_property_id')
      .references('id')
      .inTable('properties');
    table
      .foreign('amenity_id', 'idx_property_amenities_amenity_id')
      .references('id')
      .inTable('amenities');

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
  return knex.schema.dropTable('property_amenities');
};
