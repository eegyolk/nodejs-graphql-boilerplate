/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('activity_logs', function (table) {
    table.uuid('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.bigInteger('device_id').unsigned().notNullable();
    table.text('activity').notNullable();
    table.string('ip_address', 25).notNullable();
    table.timestamp('timestamp').defaultTo(knex.fn.now());

    table
      .foreign('user_id', 'idx_activity_logs_user_id')
      .references('id')
      .inTable('users');
    table
      .foreign('device_id', 'idx_activity_logs_device_id')
      .references('id')
      .inTable('devices');

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
  return knex.schema.dropTable('activity_logs');
};
