#!/usr/bin/env node
// http:/projecteuler.net/problem=4
// largest palindrome product of 3 digit numbers ex: 9009
var mergearray = function(arrtomerge) {
    var out = 0;
    var myarr = arrtomerge;
    for (i = 0; i < arrtomerge.length; i++) {
	var value = arrtomerge[i];
	var l = arrtomerge.length - 1 -i;
	out += (value * Math.pow(10, l));
    }
    return (out);
};

var palindromeprod = function() {
    var palarr = [9, 9, 9, 9, 9, 9];
    for (ii = 9; ii >= 0; ii--) {
	palarr[1] = ii;
	palarr[4] = ii;
	for (iii = 9; iii >= 0; iii--) {
	    palarr[2] = iii;
	    palarr[3] = iii;
	    var test = mergearray(palarr);
	    var m = 1000;
	    while ( test % m != 0) {
		m = m - 1;
		if (test % m === 0 && m > 99 && m < 1000 && test / m > 100 && test / m < 1000) {
		    console.log(test);
		    break;
		}
	    }
	}
    }
};
palindromeprod();
