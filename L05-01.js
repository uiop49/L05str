function numDots(s) {
	var dots = 0;
	for (var i=0; i<s.length; i++) {
		if (s[i]==".") dots++;
	}
	return dots;
}


module.exports = numDots;