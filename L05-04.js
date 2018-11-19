function isPalindrome(s) {
	var f=0;
	ss = "";
	for (var i=s.length-1; i>-1; i--) {
		if (s[i]!=" ") ss+=s[i];
	}
	for (var j=0; j<s.length; j++) {
		if (s[j]!=" ") {
			if (s[j]==ss[f]) f++;
			else return false;
		} 
	} 
	return true;
}
module.exports = isPalindrome;