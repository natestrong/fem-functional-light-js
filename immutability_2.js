// .load immutability_2.js

"use strict";

const DRAW_COUNT = 6;

function lotteryNum() {
	return (Math.round(Math.random() * 100) % 58) + 1;
}

function pickNumber(numbers) {
  numbers = numbers.slice();
  
  let newNum;
  while (!newNum || numbers.includes(lotteryNum)) {
    newNum = lotteryNum();
  }

  numbers.push(newNum);
  numbers.sort((a, b) => a - b);
  return numbers;
}

let luckyLotteryNumbers = [];

while (luckyLotteryNumbers.length < DRAW_COUNT) {
	luckyLotteryNumbers = (pickNumber(luckyLotteryNumbers));
}

console.log(luckyLotteryNumbers);
