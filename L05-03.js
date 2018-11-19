function longestWordLen(s) {
var maxCount = 0;
	symbolCount = 0;	
	for (i = 0; i < s.length+1; i++) {
		if (s[i] >= 'a' && s[i] <= 'z' || s[i] >= 'A' && s[i] <= 'Z')
			symbolCount++;
		else {
			if (maxCount < symbolCount) 
				maxCount = symbolCount;
			symbolCount = 0;
		}
	}
	return maxCount;
} 
module.exports = longestWordLen;