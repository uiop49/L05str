function ph2f(s) {
	for (var i = 0; i < s.length; i++) {
		if (s[i] == 'p' && s[i+1] == 'h') {
            s[i] = 'f';
            s[i + 1] = '';
		}
	}
	return s;
}

module.exports = ph2f;