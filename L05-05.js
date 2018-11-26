function isDelResult(s1,s2) {
	var k = 0;
	var i = 0;
	for (i; i < s1.length; i++)
		if (s1[i] == s2[k]) k++;
	if (k == s2.length){
	return true;
   }
		 return false;
}
module.exports = isDelResult;