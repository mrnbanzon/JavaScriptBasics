// this is how debounce works:
// NOTE: know how setTimeout and clearTimeout works
// NOTE: understand how closure works too...

function debounce(func, ms) {
  let timeID = null;
  return function(...args) {
    clearTimeout(timeID);
    timeID = setTimeout(() => func(...args), ms);
  };
}

//example:
function print(name) {
  console.log(`Hi ${name}!`);
}

print = debounce(print, 500);

print('Mike');
print('Dan');
print('Brian');
print('Steven');
print('Nathaniel');
print('Francis');
print('Dustin'); //This should be the only name printed;
