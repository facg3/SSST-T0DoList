var test = require('tape');
var logic = require('./logic');

test('Add test', function(t) {
  t.deepEqual(logic.addTodo([],{description:"screen"}),[{id:1, description:"screen", done:false}], "test1: actual should be equal to expected");
  t.deepEqual(logic.addTodo([],{description:"salam"}),[{id:2, description: "salam", done:false}], "test2: actual should be equal to expected");


  t.end();
});

test('Delete test', function(t) {


  t.deepEqual(logic.deleteTodo([{id: 1 , description: " HI " , done: false},
                                {id: 2 , description: "Hello" , done: false}],
                                     1),
                               [{id: 2 , description: "Hello" , done: false}],
                               "Only Object 2.");

  t.end();
});


test('Edit test', function(t) {

  t.deepEqual(logic.markTodo([{id: 1 , description: " HI " , done: false},
                              {id: 2 , description: "Hello" , done: false}],
                                   2),
                             [{id: 1 , description : " HI " , done: false},
                              {id: 2 , description : "Hello" , done: true}],
                              "2 Must be true.");

  t.end();
});


test('sort  test', function(t) {

  t.deepEqual(logic.sortTodos([{id: 1 , description: "HI" , done: true},
                              {id: 2 , description: "Hello" , done: false}]),
                             [{id: 2 , description : "Hello" , done: false},
                              {id: 1 , description : "HI" , done: true}],
                              "most be sorted");
  t.end();
});
