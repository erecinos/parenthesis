var DataStructures = require('algorithms').DataStructures;
var Stack = DataStructures.Stack;

function parenthesis(string) {

  var sequence = new Stack();

  var match = { ')' : '(',
                ']' : '[',
                '}' : '{'
              };

  for (var i = 0; i < string.length; i++) {

    if ( (/[\(\[\{]/).test(string.charAt(i)) ) {

      sequence.push(string.charAt(i));

    } else if ( match.hasOwnProperty(string.charAt(i)) &&
    (match[string.charAt(i)] === sequence.peek()) ) {

      sequence.pop();
    } else {

     return false;
   }
 }
 return true;
}

console.log(parenthesis(string));
