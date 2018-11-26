function ph2f(s) {
	var str = '';
	for (var i = 0; i < s.length; i++) {
		if (s[i] == 'p' && s[i + 1] == 'h') {
            str += 'f';
            i++;
		} else {
			str += s[i];
		}
	}
	return str;
}

module.exports = ph2f;