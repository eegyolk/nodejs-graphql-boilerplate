/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable(
    'property_public_transports',
    function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('property_id').unsigned().notNullable();
      table.integer('public_transport_id').unsigned().notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('deleted_at').nullable();

      table
        .foreign('property_id', 'idx_property_public_transports_property_id')
        .references('id')
        .inTable('properties');
      table
        .foreign(
          'public_transport_id',
          'idx_property_public_transports_public_transport_id'
        )
        .references('id')
        .inTable('public_transports');

      if (client === 'mysql') {
        table.engine('InnoDB');
        table.charset('utf8mb4');
        table.collate('utf8mb4_general_ci');
      }
    }
  );
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('property_public_transports');
};
