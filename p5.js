#!/usr/bin/env node
var smallmult = function(i, j) {
    var totprimearr = [2];
    var totalprime = 2;
    if (i == 1) {
	i = 2;
    }
    for (n = i; n <= j; n++) {
	var tempprime = n;
	for (ii = 0; ii < totprimearr.length; ii++) {
	    if (tempprime % totprimearr[ii] === 0) {
		tempprime /= totprimearr[ii];
	    } else if (ii == totprimearr.length - 1 && tempprime != 1) {
		totprimearr.push(tempprime);
//		console.log(totprimearr);
		totalprime *= tempprime;
	    }
	}
    }
    console.log(totalprime);
};
smallmult(1, 20)
