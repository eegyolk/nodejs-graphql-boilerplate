/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable(
    'persona_identification_types',
    function (table) {
      table.bigIncrements('id').primary();
      table.integer('persona_id').unsigned().notNullable();
      table.integer('identification_type_id').unsigned().notNullable();
      table.boolean('is_required').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('deleted_at').nullable();
      table.comment('List of identification_type per persona');

      table
        .foreign('persona_id', 'idx_persona_identification_types_persona_id')
        .references('id')
        .inTable('personas');
      table
        .foreign(
          'identification_type_id',
          'idx_persona_identification_types_identification_type_id'
        )
        .references('id')
        .inTable('identification_types');

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
  return knex.schema.dropTable('persona_identification_types');
};
