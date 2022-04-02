/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable('properties', function (table) {
    table.bigIncrements('id').primary();
    table.integer('user_id').unsigned().notNullable();
    table.integer('unit_type_id').unsigned().notNullable();
    table.integer('property_type_id').unsigned().notNullable();
    table.integer('accommodation_type_id').unsigned().notNullable();
    table.string('title', 100).notNullable();
    table.string('description', 250).defaultTo('');
    table.decimal('lot_area', 5, 2).defaultTo(0.0);
    table.decimal('floor_area', 5, 2).defaultTo(0.0);
    table
      .enum('verification_status', ['PENDING', 'VERIFIED', 'REJECTED'])
      .defaultTo('PENDING');
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
    table.timestamp('deleted_at').nullable();

    table
      .foreign('user_id', 'idx_properties_user_id')
      .references('id')
      .inTable('users');
    table
      .foreign('unit_type_id', 'idx_properties_unit_type_id')
      .references('id')
      .inTable('unit_types');
    table
      .foreign('property_type_id', 'idx_properties_property_type_id')
      .references('id')
      .inTable('property_types');
    table
      .foreign('accommodation_type_id', 'idx_properties_accommodation_type_id')
      .references('id')
      .inTable('accommodation_types');

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
  return knex.schema.dropTable('properties');
};
