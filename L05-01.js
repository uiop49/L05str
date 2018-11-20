function numDots(s) {
	var res = 0;
	for (var i = 0; i < s.length; i++) {
		if (s[i] == '.') {
            res ++;
		}
	}
	return res;
}

module.exports = numDots;