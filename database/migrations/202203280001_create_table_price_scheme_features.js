/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('price_scheme_features', function (table) {
    table.increments('id').primary();
    table.integer('price_scheme_id').unsigned().notNullable();
    table.string('name', 100).notNullable();
    table.string('str_value', 250).defaultTo('');
    table.tinyint('int_value', 3).defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('price_scheme_id', 'idx_price_scheme_features_price_scheme_id')
      .references('id')
      .inTable('price_schemes');

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
  return knex.schema.dropTable('price_scheme_features');
};
