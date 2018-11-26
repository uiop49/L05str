function ph2f(s){
	var s1 = "";
	var i = 0;
	while (i<s.length){
		if (s.slice(i,i+2)=="ph"){
			s1 += "f";
			i += 2;
		}else{
			s1 += s[i];
			i++;
		}
	}
	return(s1);
}

module.exports = ph2f;