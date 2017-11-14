// part 2 linking it all together
// The function here is called an iife,
// it keeps everything inside hidden from the rest of our application
(function() {
  // This is the dom node where we will keep our todo
  var container = document.getElementById('todo-container');
  var addTodoForm = document.getElementById('add-todo');

  var state = [
    { id: -3, description: 'first todo' },
  ]; // this is our initial todoList

  // This function takes a todo, it returns the DOM node representing that todo
  var createTodoNode = function(todo) {
    var todoNode = document.createElement('li');
    var addNodeButton = document.querySelector('input[type="submit"]');
    // Declaring a DELETE button with DELETE text inside of it.
    var deleteButtonNode = document.createElement('button');
      deleteButtonNode.innerText = "delete";
    // Declaring a MARK button with MARK text inside of it.
    var markNodeButton = document.createElement('button');
      markNodeButton.innerText = "mark";
    // This is the SUBMIT button, which does everything!!
      addNodeButton.addEventListener('click', function(event){
    // event.preventDefault is to prevent browser NORMAL FUNCTIONS from executing....
          event.preventDefault();
    // Declaring a string to retrieve the TEXT from our input field after the SUBMIT click.
        var nodeDescription = document.querySelector('input[name="description"]').value;
    // Declaring An array to hold the value of the Returned array from the function addToDo
    // we will pass the STATE array, and the nodeDescription....
        var newNodesArray = todoFunctions.addTodo(state, {description: nodeDescription});
    // Retrieving the values from the Object we created in the new array(newNodesArray).
          todoNode.id = newNodesArray[newNodesArray.length-1].id;
          todoNode.innerText = newNodesArray[newNodesArray.length-1].description;
          todoNode.className = "not-checked"; // this will be the normail class when DONE is false.
          todoNode.appendChild(deleteButtonNode); // add deleteButtonNode to the IL element we creating.
          todoNode.appendChild(markNodeButton); // add markNodeButton to the IL element we creating.
        console.log(todoNode) // testing :D
      });

    // Add event Listener to deleteButtonNode... still have some work to do...
      deleteButtonNode.addEventListener('click', function(event){
        var newState = todoFunctions.deleteTodo(state, todo.id);
        update(newState);
      });

    // add markTodo button

    // add classes for css
    return todoNode;
  };

  // bind create todo form
  if (addTodoForm) {
    addTodoForm.addEventListener('submit', function(event) {
      // https://developer.mozilla.org/en-US/docs/Web/Events/submit
      event.preventDefault();
      var description = '?'; // event.target ....

      // hint: todoFunctions.addTodo
      var newState = []; // ?? change this!
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
