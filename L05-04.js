function isPalindrome(s) {
	var r = '';
	var l;
	var res = 1;
	for (var j = 0; j < s.length; j++) {
		if (s[j] != ' ') {
			r += s[j];
		}
	}
	j = 0;
    if (r.length%2 == 1) {
    	l = Math.floor(r.length/2);
    } else {
    	l = r.length/2 - 1;
    }
	for (var i = r.length - 1; i > l; i--) {
		if (r[i] == r[j]) {
			res *= 1;
			j++;
		} else {
			res *= 0;
		}
	}
	return res>0;
}

module.exports = isPalindrome;