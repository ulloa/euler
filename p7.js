#!/usr/bin env node
// http://projecteuler.net/problem=7
// 10,001st prime number

var prime = function(l) {
    var list = [];
    list.push(2);
    var n = 2;
    while (list.length <= l) {
	for (i = 0; i < list.length; i++) {
	    if (n % list[i] === 0) {
		break;
	    } else if (i == list.length - 1) {
		list.push(n);
	    }
	}
	n++;
    }
    console.log(list[l - 1]);
};
prime(10001)
