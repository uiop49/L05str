function numDots(s) {
	var x=0; 
	var i=0;
	for (; i<s.length; i++) 
		if (s[i]=='.') x++;
	return x;
}
module.exports=numDots;