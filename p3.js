#!/usr/bin/env node
// http://projecteuler.net/problem=3
// largest prime factor of the number 600851475143?


var prime = function(low, top) {
    var list = [];
    list.push(2);
    for (nn = low; nn < top; nn++) {
	for (ii = 0; ii < list.length; ii++) {
	    if (nn % list[ii] === 0) {
		break;
	    } else if (ii == list.length-1) {
		list.push(nn);
	    }
	}
    }
    return(list);
};

var factory = function(temp) {
    var time = [];
    var ll = 10000;
    while (ll < temp) {
	var list = prime(ll - 9998, ll);
	for (ii = ll-10000; ii < ll; ii ++) {
		if ((temp % list[ii]) === 0) {
		    time.push(list[ii]);
		    temp = temp/list[ii];
		}
	}
	ll += 10000;
    }
    return(time);
};

console.log(factory(559979));
