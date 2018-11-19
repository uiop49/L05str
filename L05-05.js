function isDelResult(s1, s2) {
	var f=0;
	for (var i=0; i<s1.length; i++)
		if (s2[f]==s1[i]) f++;
	if (f==s2.length) return true;
	else return false;
}
module.exports = isDelResult;