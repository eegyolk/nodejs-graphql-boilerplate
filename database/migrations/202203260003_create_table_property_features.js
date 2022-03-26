/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('property_features', function (table) {
    table.bigIncrements('id').primary();
    table.bigInteger('property_id').unsigned().notNullable();
    table.integer('feature_id').unsigned().notNullable();
    table.tinyint('value').defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('property_id', 'idx_property_features_property_id')
      .references('id')
      .inTable('properties');
    table
      .foreign('feature_id', 'idx_property_features_feature_id')
      .references('id')
      .inTable('features');

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
  return knex.schema.dropTable('property_features');
};
