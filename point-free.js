"use strict";

function not(fn) {
  return function(...args) {
    return !fn(...args);
  }
}

function output(txt) {
	console.log(txt);
}

function when(fn) {
  return function(predicate) {
    return function(...args) {
      if (predicate(...args)) {
        return fn(...args);
      }
    }
  }
}

function isShortEnough(str) {
	return str.length <= 5;
}

const isLongEnough = not(isShortEnough);

var msg1 = "Hello";
var msg2 = msg1 + " World";

when(output)(isShortEnough)(msg1);		// Hello
when(output)(isShortEnough)(msg2);
when(output)(isLongEnough)(msg1);
when(output)(isLongEnough)(msg2);		// Hello World



