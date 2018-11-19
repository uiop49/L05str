function longestWordLen(s) {
	var Dlina2 = 0;
	var Dlina1 = 0;
	for (var i=0; i<s.length+1; i++) {
		if (s[i]>="a" && s[i]<="z" || s[i]>="A" && s[i]<="Z") Dlina1++;
		else {
			if (Dlina1 > Dlina2) Dlina2 = Dlina1;
				Dlina1 = 0;
			} 
			
	}
	if (Dlina2 == 0)
		return Dlina1;
	else return Dlina2;
}

module.exports = longestWordLen;