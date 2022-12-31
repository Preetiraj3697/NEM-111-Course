// server.js
const express = require('express');
const app = express();

app.use(express.json());

const todos = [];

app.route('/todos')
  .get((req, res) => {
    res.json(todos);
  })
  .post((req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.json(todo);
  })
  .put((req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;
    todos.forEach((todo) => {
      if (todo.id === id) {
        todo = { ...todo, ...updatedTodo };
        return res.json(todo);
      }
    });
    res.status(404).json({ message: 'TODO not found' });
  })
  .delete((req, res) => {
    const { id } = req.params;
    todos.forEach((todo, index) => {
      if (todo.id === id) {
        todos.splice(index, 1);
        return res.json({ message: 'TODO deleted' });
      }
    });
    res.status(404).json({ message: 'TODO not found' });
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
