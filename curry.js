// .load curry.js

function curry(fn) {
  return function curried(...args) {
    if (args.length < fn.length) {
      return curried.bind(null, ...args);
    } else {
      return fn(...args);
    }
  }
}

const add3 = (a, b, c) => a + b + c;

const curryAdd = curry(add3);

const curry2 = fn => (...args) => console.log(args);

curry2(1, 2, 3);