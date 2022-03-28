/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable(
    'price_scheme_duration_logs',
    function (table) {
      table.bigIncrements('id').primary();
      table.integer('price_scheme_duration_id').unsigned().notNullable();
      table.json('old_data').notNullable();
      table.json('new_data').notNullable();
      table.string('remarks', 250).defaultTo('');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('deleted_at').nullable();

      table
        .foreign(
          'price_scheme_duration_id',
          'idx_price_scheme_duration_logs_price_scheme_duration_id'
        )
        .references('id')
        .inTable('price_scheme_durations');

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
  return knex.schema.dropTable('price_scheme_duration_logs');
};
