function longestWordLen(s) {
	var charcount=0;
	for (i=0; i<s.length+1; i++) 
		if (s[i]==/\d/) {
			charcount+=i;
		}
	return s.match(charcount);
}

module.exports=longestWordLen;