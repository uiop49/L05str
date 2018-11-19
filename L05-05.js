function isDelResult(s1, s2) {
	var j = 0;
	for (i = 0; i < s1.length; i++)
		if (s1[i] == s2[j]) j++;
	if (j == s2.length) return true;
		else return false;
}
module.exports = isDelResult;