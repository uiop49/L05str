function longestWordLen(s) {
var a = 0 ;
var k = 0 ;
var l = s.length ; 	
	for (var i=0;i<l+1;i++) {
		if (s[i]>='a'&&s[i]<='z'||s[i]>='A'&&s[i]<='Z'){
			k++;
		}
		else {
			if (a < k){ 
				a = k;
			}
			k = 0;
		}
	}
	return a;
}
module.exports = longestWordLen;