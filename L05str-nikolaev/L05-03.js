function longestWord(s){
	s+=" "
	max = "";
	lmax = 0;
	max1 = "";
	lmax1 = 0;
	flag = true;
	for(var i=0;i<s.length;i++){
		console.log(s[i]);
		if ((s[i].charCodeAt()>96 && s[i].charCodeAt()<123) ||
			(s[i].charCodeAt()>64 && s[i].charCodeAt()<91)){
			max1 += s[i];
			console.log(s[i]);
			lmax1++;
		}else{
			if (lmax1>lmax){
				lmax = lmax1;
				max = max1;
			}
			console.log(max1)
			lmax1 = 0;
			max1 = "";
		}
	}
	return(lmax);
}

module.exports = longestWord;