const express = require('express');
const mustache = require('mustache-express');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');


var application = express();

application.engine('mustache', mustacheExpress());

application.set('view engine', 'mustache');

application.set('views', './views');

// parse application/x-www-form-urlencoded
application.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
application.use(bodyParser.json())

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
    
    
        var Todos = {};
        Todos.listItem = newTodo;
        // Todos.id =todoList.length;
        Todos.complete = false;
        Todos.id=todoList.length;
      todoList.push(Todos);  
      console.log(Todos);
      console.log(todoList);
     response.render('todo',{todoList:todoList});

});



application.post('/:id', (request,response) =>{

    var item = parseInt(request.params.id);
    var todoToFind = todoList.find(q=> q.id === item);
   
           
        console.log(todoToFind.id);
        todoToFind.complete = true;
        console.log('---------------------------');
        response.render('todo',{todoList:todoList});

});


application.listen(3000, function () {
   console.log('Successfully started express application!');
});