/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('user_identifications', function (table) {
    table.bigIncrements('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('identification_type_id').unsigned().notNullable();
    table.json('images_url').nullable();
    table
      .string('identification_number', 25)
      .unique({ indexName: 'uniq_user_identifications_identification_number' })
      .notNullable();
    table.date('expiration_date').nullable();
    table.boolean('is_default').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('user_id', 'idx_user_identifications_user_id')
      .references('id')
      .inTable('users');
    table
      .foreign(
        'identification_type_id',
        'idx_user_identifications_identification_type_id'
      )
      .references('id')
      .inTable('identification_types');

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
  return knex.schema.dropTable('user_identifications');
};
