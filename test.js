var test = require('tape');
var logic = require('./logic');

test('Example test', function(t) {
  t.deepEqual(logic.addTodo([],{description:"screen"}),[{id:1, description:"screen", done:false}], "test1: actual should be equal to expected");
  t.deepEqual(logic.addTodo([],{description:"salam"}),[{id:2, description: "salam", done:false}], "test2: actual should be equal to expected");
  t.deepEqual(logic.deleteTodo([{id:1, description: "salam", done:false},{id:2, description: "samar", done:false}], 1),[{id:2, description: "samar", done:false}], 'shoul delete');


  var actual = logic.deleteTodo([{id:1, description: "salam", done:false},{id:2, description: "samar", done:false}], 1);

  var expected = [{id:2, description: "samar", done:false}];
  t.deepEqual(actual, expected, 'deleted');

  t.deepEqual(logic.markTodo([{id:1, description: "salam", done:false},{id:2, description: "samar", done:false}],1), [{id:1, description: "salam", done:true},{id:2, description: "samar", done:false}], 'should marked' )
  t.end();
});
