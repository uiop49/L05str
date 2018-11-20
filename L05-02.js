function ph2f(s) {
	for (var i = 0; i < s.length; i++) {
		if (s[i] == 'ph') {
            s[i] = 'f';
		}
	}
	return s;
}

module.exports = ph2f;