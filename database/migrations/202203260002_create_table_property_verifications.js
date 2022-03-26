/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('property_verifications', function (table) {
    table.bigIncrements('id').primary();
    table.bigInteger('property_id').unsigned().notNullable();
    table.string('remarks', 1000).defaultTo('');
    table.json('notes').nullable();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign(
        'property_type_id',
        'idx_property_verifications_property_type_id'
      )
      .references('id')
      .inTable('property_types');

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
  return knex.schema.dropTable('property_verifications');
};
