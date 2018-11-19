function isPalindrome(s) {
	var q = '';
	var	palindromeFactorCount = 0;	
	for (i = 0; i < s.length; i++) {
		if (s[i] != ' ') q += s[i];
	}	
	for (i = 0; i < Math.round(q.length/2); i++) {
		if (q[i]==q[q.length-i-1]) palindromeFactorCount++;
	}	
	if (palindromeFactorCount == Math.round(q.length/2)) return true;
		else return false;
}
module.exports = isPalindrome;