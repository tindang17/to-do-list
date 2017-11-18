
exports.up = function(knex, Promise) {
  return knex.schema.createTable('todo_items', (table) => {
    table.increments('id');
    table.string('todo');
    table.boolean('complete');
  });
};

exports.down = function(knex, Promise) {
  return knex.raw("drop table todo_items cascade");
};
