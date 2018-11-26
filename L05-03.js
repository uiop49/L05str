function longestWordLen(s) {
	var x = 0;
	var m = 0;
	for (var i = 0; i < s.length; i++) {
		if (s[i] <= 'я' && s[i] >= 'A') {
			x += 1;
			if (m < x) {
				m = x;
			}
		} else {
			x = 0;			
			}
		}

	return m;
}

module.exports = longestWordLen;
