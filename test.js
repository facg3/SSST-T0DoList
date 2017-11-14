var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.deepEqual(logic.addTodo([],{description:"screen"}),[{id:1, description:"screen", done:false}], "test1: actual should be equal to expected");
  t.deepEqual(logic.addTodo([],{description:"salam"}),[{id:2, description: "salam", done:false}], "test2: actual should be equal to expected");
  t.end();
});
