let wait = function(func, num) {
  setTimeout(func, num * 500);
};

let simple = num =>
  new Promise((resolve, reject) => {
    console.log(`Waiting...${num}`);
    wait(() => resolve(num - 1), num);
  });

simple(3)
  .then(simple)
  .then(simple)
  .then(boom => {
    console.log(`${boom}...Complete`);
  });
