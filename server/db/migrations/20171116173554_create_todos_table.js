
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo_items', (table) => {
    table.increments();
    table.string('todo');
    table.boolean('complete');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('todo_items');
};
