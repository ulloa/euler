#!/usr/bin/env node
// http://projecteuler.net/problem=1

var divides = function(a, b) {
    return b % a === 0;
};

var sum = function(arr) {
    var cc = 0;
    for (var ii in arr) {
	cc += arr[ii];
    }
    return cc;
};

var summax = function(first, second, max) {
    k = [];
    for (i = 1; i < max; i++) {
	if (divides(first, i)) {
	    k.push(i);
	} else if (divides(second, i)) {
	    k.push(i);
	}
    }
    return sum(k);
};

console.log(summax(3, 5, 1000));
