function longestWordLen(s){
	var k = 0;
    var l = 0;
	for (var i=0; i<s.length+1; i++){
		if ('a'<= s[i] && s[i]<= 'z' || 'A' <= s[i] && s[i]<='Z'){
			k++;
	} else {
        if (k > l) l=k;
        k = 0;
    }
} 
	return l;
} 

module.exports = longestWordLen;
