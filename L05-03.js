function longestWordLen(s){
	var w = 0;
    var LW = 0;
    var i = 0;
   
	for (i; i<s.length+1; i++){
		if ('a'<= s[i] && s[i]<= 'z' || 'A' <= s[i] && s[i]<='Z'){
			w++;
	} else 
	{
        if (w > LW) LW = w;
        w = 0;
    }
} 
	return LW;
} 

module.exports = longestWordLen;