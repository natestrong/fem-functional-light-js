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

