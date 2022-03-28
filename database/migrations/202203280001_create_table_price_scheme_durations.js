/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('price_scheme_durations', function (table) {
    table.increments('id').primary();
    table.integer('price_scheme_id').unsigned().notNullable();
    table.integer('price_duration_id').unsigned().notNullable();
    table.decimal('amount', 6, 2).defaultTo(0.0);
    table.tinyint('discount', 3).defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('price_scheme_id', 'idx_price_scheme_durations_price_scheme_id')
      .references('id')
      .inTable('price_schemes');
    table
      .foreign(
        'price_duration_id',
        'idx_price_scheme_durations_price_duration_id'
      )
      .references('id')
      .inTable('price_durations');

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
  return knex.schema.dropTable('price_scheme_durations');
};
