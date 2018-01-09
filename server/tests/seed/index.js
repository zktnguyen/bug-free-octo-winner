const { ObjectID } = require('mongodb');
const { Todo } = require('../../models/todo');

const seedTodos = [{ 
  _id: new ObjectID(), 
  text: 'first test todo',
}, 
{ 
  _id: new ObjectID(), 
  text: 'second test todo',
  completed: true,
  completedAt: new Date().getTime()
}];

const populateTodos = done => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(seedTodos);
  }).then(() => done());
};

module.exports = {
  seedTodos,
  populateTodos
};