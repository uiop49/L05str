function numDots(s) {
	var dotCount = 0;
	for (i = 0; i < s.length; i++)
		if (s[i]=='.') dotCount++;
	return dotCount;
} 

module.exports = numDots;