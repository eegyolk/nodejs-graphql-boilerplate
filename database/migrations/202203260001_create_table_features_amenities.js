/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('features_amenities', function (table) {
    table.increments('id').primary();
    table.integer('feature_amenity_type_id').unsigned().notNullable();
    table
      .string('code', 100)
      .unique({ indexName: 'uniq_features_amenities_code' })
      .notNullable();
    table.string('label', 100).notNullable();
    table.string('description', 250).defaultTo('');
    table.boolean('with_value').defaultTo(false);
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign(
        'feature_amenity_type_id',
        'idx_features_amenities_feature_amenity_type_id'
      )
      .references('id')
      .inTable('feature_amenity_types');

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
  return knex.schema.dropTable('features_amenities');
};
