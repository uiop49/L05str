function ph2f(s) {
	var lett="";
	for (i=0; i<s.length; i++) 
		if (s[i]=="p" && s[i+1]=="h") {
			lett+="f";
			i++;
		}
		else lett+=s[i];
	return lett;
}

module.exports=ph2f;