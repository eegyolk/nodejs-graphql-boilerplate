/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('subscription_consumables', function (table) {
    table.bigIncrements('id').primary();
    table.bigInteger('subscription_id').unsigned().notNullable();
    table.string('price_scheme_feature_name', 100).notNullable();
    table.tinyint('price_scheme_feature_value', 3).defaultTo(0);
    table.tinyint('available_count', 3).defaultTo(0);
    table.tinyint('used_count', 3).defaultTo(0);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign(
        'subscription_id',
        'idx_subscription_consumables_subscription_id'
      )
      .references('id')
      .inTable('subscriptions');

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
  return knex.schema.dropTable('subscription_consumables');
};
