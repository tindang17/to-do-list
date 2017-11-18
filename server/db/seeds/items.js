
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo_items').insert([
        {todo: 'eat', complete: false},
        {todo: 'code', complete: false},
        {todo: 'clean', complete: false}
      ]);
    });
};
