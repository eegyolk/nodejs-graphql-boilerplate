/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('phone_types', function (table) {
    table.increments('id').primary();
    table
      .string('code', 100)
      .unique({ indexName: 'uniq_phone_types_code' })
      .notNullable();
    table.string('label', 100).notNullable();
    table.string('description', 250).defaultTo('');
    table.enum('sub_type', ['MOBILE', 'LANDLINE']).defaultTo('MOBILE');
    table.boolean('is_default').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();
    table.comment(
      'A phone type can be assigned to many users in table user_phones'
    );

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
  return knex.schema.dropTable('phone_types');
};
