
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('todo_items').del()
    .then(function () {
      // Inserts seed entries
      return knex('todo_items').insert([
        {id: 1, todo: 'eat', complete: false},
        {id: 2, todo: 'code', complete: false},
        {id: 3, todo: 'clean', complete: false}
      ]);
    });
};
