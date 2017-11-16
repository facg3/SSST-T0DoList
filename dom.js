(function() {
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');
  var state = [];

  var createTodoNode = function(todo) {
        var todoNode = document.createElement('li');
        var deleteButtonNode = document.createElement('button');
        deleteButtonNode.innerText="Delete";
        deleteButtonNode.addEventListener('click', function(event) {
          var newState = todoFunctions.deleteTodo(state, todo.id);
          update(newState);
        });

        var markButtonNode = document.createElement('button');
        markButtonNode.innerText="Mark";
        markButtonNode.addEventListener('click', function(event) {
          var newState = todoFunctions.markTodo(state, todo.id);
          update(newState);
        });

        todoNode.id=todo.id;
        todoNode.innerText=todo.description;
        if(todo.done===true){

          todoNode.className+=" todo-checked";
          markButtonNode.innerText="Unmark";
        }
          else {
            todoNode.className+=" todo-not-checked";
            markButtonNode.innerText="Mark";
            console.log(todoNode) ;
          }
        todoNode.appendChild(markButtonNode);
        todoNode.appendChild(deleteButtonNode);

        return todoNode;
    };

  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // event.target ....
    var description = {description: document.querySelector('input[name=description]').value};
    var newState = todoFunctions.addTodo(state, description); // ?? change this!
    update(newState);
    });
  }

  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
