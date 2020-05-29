exports.up = async (knex) =>
  knex.schema.createTable("enterprises", (table) => {
    table.increments("id");
    table.text("name").unique().notNullable();
    table
      .integer("owner_id")
      .references("owners.id")
      .notNullable()
      .onDelete("CASCADE");
  });

exports.down = async (knex) => knex.schema.dropTable("enterprises");
