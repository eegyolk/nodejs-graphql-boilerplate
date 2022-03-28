/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable(
    'subscription_payment_details',
    function (table) {
      table.bigIncrements('id').primary();
      table.bigInteger('subscription_id').unsigned().notNullable();
      table.json('data').nullable();
      table.string('attachment_url', 1000).defaultTo('');
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('deleted_at').nullable();

      table
        .foreign(
          'subscription_id',
          'idx_subscription_payment_details_subscription_id'
        )
        .references('id')
        .inTable('subscriptions');

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
  return knex.schema.dropTable('subscription_payment_details');
};
