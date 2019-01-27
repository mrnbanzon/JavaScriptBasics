// VAR: function-scoped
// LET: block-scoped (also, no hoisting)

// Example 1: (No hoisting for let)
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// console.log(y); // err, y not defined
// let y = 10;
// console.log(y); // never reached due to err @ line 9

// Example 2:
var a = false;
if (a) {
  var b = 'yes';
} else {
  b = 'no';
}
console.log(b); // logs 'no'

if (a) {
  let c = 'YES';
}
console.log(c); // err, c is not defined
