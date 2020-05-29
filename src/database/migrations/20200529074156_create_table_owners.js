exports.up = async (knex) =>
  knex.schema.createTable("owners", (table) => {
    table.increments("id");
    table.text("name").unique().notNullable();
  });

exports.down = async (knex) => knex.schema.dropTable("owners");
