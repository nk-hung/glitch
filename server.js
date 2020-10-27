// server.js
// where your node app starts

// we've started you off with Express (https://expressjs.com/)
// but feel free to use whatever libraries or frameworks you'd like through `package.json`.
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', './views');

var todoList = [
  {id: 0, title:'Đi chợ'},
  {id: 1, title:'Nấu ăn'},
  {id: 2, title:'Rửa bát'},
  {id: 3, title:'Học code tại CodersX'}
];
// https://expressjs.com/en/starter/basic-routing.html
app.get('/', function(req, res) {
  res.render('index');
});

app.get('/todos', function(req, res) {
  res.render('todos/index', {
    todoList: todoList
  });
});

app.get('/todos/search', function(req, res) {
  let q = req.query.q;
  let matchedTodo = todoList.filter(function(todoItem) {
      return todoItem.title.toLowerCase().indexOf(q.toLowerCase()) !== -1;
  });
  res.render('todos/index', {
      todoList: matchedTodo,
      values: q
  });
});
// listen for requests :)

app.listen(process.env.PORT, () => {
  console.log("Server listening on port " + process.env.PORT);
});
