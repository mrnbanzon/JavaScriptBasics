// what does the following do?
for (var i = 0; i < 10; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
// ANS: the above function prints '10' 10 times

// how do we get it to print 0,1,2,3,4,5,6,7,8,9 ?
// ANS:
for (let i = 0; i < 10; i += 1) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
// WHY: 'let' block scoping. the context for each iteration is preserved so every time the function in the setTimeout is created the context of i is preserved for that block of code.
