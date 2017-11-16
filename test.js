var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.deepEqual(logic.addTodo([],{description:"screen"}),[{id:1, description:"screen", done:false}], "test1: actual should be equal to expected");
  t.deepEqual(logic.addTodo([],{description:"salam"}),[{id:2, description: "salam", done:false}], "test2: actual should be equal to expected");

  t.deepEqual(logic.deleteTodo([{id: 1 , description: " HI " , done: false},
                                {id: 2 , description: "Hello" , done: false}],
                                     1),
                               [{id: 2 , description: "Hello" , done: false}],
                               "test3: Only Object 2.");

  t.deepEqual(logic.markTodo([{id: 1 , description: " HI " , done: false},
                              {id: 2 , description: "Hello" , done: false}],
                                   2),
                             [{id: 1 , description : " HI " , done: false},
                              {id: 2 , description : "Hello" , done: true}],
                              "test4: 2 Must be true.");
  t.deepEqual(logic.sortTodos([{id:1 , description: "One",done:true},{id:2 , description: "Two",done:false},{id:3 , description: "Three",done:false}])
                             ,[{id:2 , description: "Two",done:false},{id:3 , description: "Three",done:false},{id:1 , description: "One",done:true}], "test5: actual should be equal to expected");
  t.end();
});
