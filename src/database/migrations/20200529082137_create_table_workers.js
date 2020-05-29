exports.up = async (knex) =>
  knex.schema.createTable("workers", (table) => {
    table.increments("id");
    table.text("name").unique().notNullable();
    table
      .integer("enterprises_id")
      .references("enterprises.id")
      .notNullable()
      .onDelete("CASCADE");
  });

exports.down = async (knex) => knex.schema.dropTable("workers");
