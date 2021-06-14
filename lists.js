// .load lists.js

// function fixed1() {
//   return 1;
// }

// function fixed2() {
//   return 2;
// }

function add(a, b) {
  return a + b;
}

// console.log(add(fixed1(), fixed2()));

function add2(fn1, fn2) {
  return add(fn1(), fn2());
}

// console.log(add2(fixed1, fixed2));

function ret(x) {
  return x => x;
}

function addn(...fns) {
  return fns.reduce((acc, fn) => add2(ret(acc), ret(fn)), 0);
}

console.log(addn([1, 2, 3, 4, 5]))