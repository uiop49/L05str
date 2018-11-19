function ph2f(s) {
	var q = '';
	for (i = 0; i < s.length; i++) {
		if (s[i]=='p' && s[i+1]=='h') {
			q+='f';
			i++;
			}
		else q+=s[i];
		}
	return q;
}

module.exports = ph2f;