#!/usr/bin/env node
// http://projecteuler.net/problem=2
// sum of even numbers that are less than 4 million in value, found in 
// fibonacci sequence

var sum = function(arr) {
    var cc = 0;
    for(var ii in arr) {
	cc += arr[ii];
	}
    return cc;
};

var fib = function(a, b, max) {
    out = [];
    while (a <= max && b <= max) {
	out.push(a);
	out.push(b);
	a += b;
	b += a;
    }
    now = [];
    for (i = 0; i < out.length; i++) {
	if (out[i] % 2 === 0) {
	    now.push(out[i]);
	}
    }
    return(sum(now));
};

console.log(fib(1, 2, 4000000));


var fibbi = function() {
    var maxi = 4000000;
    var odd1 = 1, odd2 = 1, even = 2;
    var sumi = 0;
    while (even < maxi) {
	sumi += even;
	odd1 = odd2 + even;
	odd2 = even + odd1;
	even = odd1 + odd2;
    }
    return sumi;
};

console.log(fibbi());
