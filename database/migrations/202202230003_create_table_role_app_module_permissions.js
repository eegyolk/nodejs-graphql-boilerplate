/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  const client = knex.context.client.config.client;

  return knex.schema.createTable(
    'role_app_module_permissions',
    function (table) {
      table.bigIncrements('id').primary();
      table.integer('role_id').unsigned().notNullable();
      table.integer('app_module_id').unsigned().notNullable();
      table.boolean('can_view').defaultTo(false);
      table.boolean('can_create').defaultTo(false);
      table.boolean('can_edit').defaultTo(false);
      table.boolean('can_delete').defaultTo(false);
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
      table.timestamp('deleted_at').nullable();

      table
        .foreign('role_id', 'idx_role_app_module_permissions_role_id')
        .references('id')
        .inTable('roles');
      table
        .foreign(
          'app_module_id',
          'idx_role_app_module_permissions_app_module_id'
        )
        .references('id')
        .inTable('app_modules');

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
  return knex.schema.dropTable('role_app_module_permissions');
};
