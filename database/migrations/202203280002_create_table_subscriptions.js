/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('subscriptions', function (table) {
    table.bigIncrements('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('price_scheme_duration_id').unsigned().notNullable();
    table.decimal('price_scheme_duration_amount', 6, 2).defaultTo(0.0);
    table.tinyint('price_scheme_duration_discount', 3).defaultTo(0);
    table.integer('price_scheme_feature_id').unsigned().notNullable();
    table.json('price_scheme_feature_inclusion').notNullable();
    table.decimal('total_amount', 6, 2).defaultTo(0.0);
    table.integer('payment_provider_id').unsigned().notNullable();
    table.string('payment_reference_no', 32).defaultTo('');
    table
      .enum('payment_status', ['PENDING', 'COMPLETED', 'REJECTED', 'CANCELLED'])
      .defaultTo('PENDING');
    table.string('payment_notes', 250).defaultTo('');
    table.timestamp('starts_at').nullable();
    table.timestamp('ends_at').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('user_id', 'idx_subscriptions_user_id')
      .references('id')
      .inTable('users');
    table
      .foreign(
        'price_scheme_duration_id',
        'idx_subscriptions_price_scheme_duration_id'
      )
      .references('id')
      .inTable('price_scheme_durations');
    table
      .foreign(
        'price_scheme_feature_id',
        'idx_subscriptions_price_scheme_feature_id'
      )
      .references('id')
      .inTable('price_scheme_features');
    table
      .foreign('payment_provider_id', 'idx_subscriptions_payment_provider_id')
      .references('id')
      .inTable('payment_providers');

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
  return knex.schema.dropTable('subscriptions');
};
