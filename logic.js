var todoFunctions = {
  generateId: (function() {
    var idCounter = 0;

    function incrementCounter() {
      return (idCounter += 1);
    }

    return incrementCounter;
  })(),

  cloneArrayOfObjects: function(todos) {
    return todos.map(function(todo){
      return JSON.parse(JSON.stringify(todo));
    });
  },

  addTodo: function(todos, newTodo) {
    ourNewTodo = {
      id: todoFunctions.generateId(),
      description: newTodo.description ,
      done: false
    };
    return todos.concat(ourNewTodo);
    },

  deleteTodo: function(todos, idToDelete) {
    return todos.filter(function(idToKeep){
      if(idToKeep.id !== idToDelete) return idToKeep;
    })
  },

  markTodo: function(todos, idToMark) {
    return todos.map(function(idToDone){
      if(idToDone.id === idToMark){
          if(idToDone.done === false){
            idToDone.done=true;
            return idToDone;
          }
          else{
            idToDone.done=false;
            return idToDone;
          }
      }
        else return idToDone;
    })
  },

  sortTodos: function(todos, sortFunction) {
    // stretch goal! Do this last
    // should leave the input arguement todos unchanged (you can use cloneArrayOfObjects)
    // sortFunction will have same signature as the sort function in array.sort
    // hint: array.slice, array.sort

  },
};


// http://www.matteoagosti.com/blog/2013/02/24/writing-javascript-modules-for-both-browser-and-node/
if (typeof module !== 'undefined') {
  module.exports = todoFunctions;
}
