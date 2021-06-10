function mod(y) {
  return function(x) {
    return x % y;
  }
}

function eq(y) {
  return function(x) {
    return x === y;
  }
}

function log(...args) {
  console.log(...args);
}

const pipe = (...functions) => {
  return (v) => {
    return functions.reduce((acc, fn) => fn(acc), v);
  }
}

const isOdd = pipe(mod(2), eq(1), log);

[1, 2, 3, 4, 5, 6].forEach(isOdd)


// .load point-free-2.js

