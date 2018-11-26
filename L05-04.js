function isPalindrome(s){
	s1 = "";
	var i = 0;
	while (s[i]!=undefined){
		console.log(". "+s[i]);
		if (isBukva(s[i])){
			s1 += s[i];
		console.log(". "+s[i]);
		}
	i++;
	}
	console.log(s1);
	return(s1==revercer(s1))
}

function isBukva(s){
	return((s.charCodeAt()>96 && s.charCodeAt()<123) ||
			(s.charCodeAt()>64 && s.charCodeAt()<91))
}

function revercer(s){
	var s1 = "";
	for (var i=s.length-1;i>=0;i--){
		s1 += s[i];
	}
	return(s1)
}

module.exports = isPalindrome;