(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo', done: false },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var span = document.createElement('span')
    todoNode.appendChild(span);
    span.innerText = todo.description;
    todoNode.id = todo.id;

    // you will need to use addEventListener

    // add span holding description

    // this adds the delete button
    var deleteButtonNode = document.createElement('button');
    deleteButtonNode.className = " delete";
    deleteButtonNode.innerText = "delete";
    deleteButtonNode.addEventListener('click', function(event) {
      var newState = todoFunctions.deleteTodo(state, todo.id);

      update(newState);
    });
    todoNode.appendChild(deleteButtonNode);

    // add markTodo button
    var markBtn = document.createElement('button');
    markBtn.className = " mark";

    markBtn.innerText = "Mark";


    markBtn.addEventListener('click', function(event){
      var newState = todoFunctions.markTodo(state, todo.id);
      update(newState);
    });
    todoNode.appendChild(markBtn);

    if(todo.done === true){
    markBtn.innerText = "UnMark";
    todoNode.className+= " checked";
    }
    else{
      todoNode.done = false;
      todoNode.className += " unchecked";
    }
    // add classes for css

    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      // what does event.preventDefault do?
      // what is inside event.target?

      event.preventDefault();

      var description = document.querySelector('input[name = description]').value;// event.target ....

      // hint:todoFunctions.addTodo
      var newState = todoFunctions.addTodo(state, {description: description}); // ?? change this!
      update(newState);
    });
  }

  // you should not need to change this function
  var update = function(newState) {
    state = newState;
    renderState(state);
  };

  // you do not need to change this function
  var renderState = function(state) {
    var todoListNode = document.createElement('ul');

    state.forEach(function(todo) {
      todoListNode.appendChild(createTodoNode(todo));
    });

    // you may want to add a class for css
    container.replaceChild(todoListNode, container.firstChild);
  };

  if (container) renderState(state);
})();
