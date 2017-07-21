const express = require('express');
const mustache = require('mustache-express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');




var application = express();

application.engine('mustache', mustacheExpress());
application.set('view engine', 'mustache');

application.set('views', './views');

application.use(bodyParser.urlencoded()); 
application.use(expressValidator());

application.use(express.static('public'));
//application.use(expressValidator);
var todoList =[];
 
application.get('/', (request, response) => {
//console.log(todoList);
    response.render('todo',{todoList: todoList});//todo
    //console.log('get request');
   //response.send('Hi!');
});

application.post('/', (request, response) => {

    var newTodo = request.body.newTodo;
    
    //request.checkBody('newTodo', 'What the hell! Read the directions please.').notEmpty();
 
   // var errors = request.validationResult();
    //if (errors) {

      //response.redirect('todo',{todoList: todoList, errors});

    //{ else {
        var Todos = {};
        Todos.listItem = newTodo;
        Todos.id =todoList.length;
        Todos.complete = false;
      todoList.push(Todos);  // datafile.todo.push(newTodo)
    //  console.log(Todos);
     response.render('todo',{todoList:todoList});
 //   }
});

application.post('/:id', (request, response)=> {
   
   //var taskToComplete = request.params.taskName;

   var item = request.params.listItem;
console.log (request.params.listItem);
    for (var i = 0; i<todoList.length; i++) {
      
      if(item == itemList[i]) {
          console.log(todos[i]);

          itemList[i].complete = true;
          console.log(itemList[i].complete);

      }
   }
    response.render('todo',{todoList:todoList});
})




application.listen(3000, function () {
  console.log('Successfully started express application!');
});