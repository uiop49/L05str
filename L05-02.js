function ph2s(s) {
	var ss = "";
	for (var i=0; i<s.length; i++) {
		if (s[i]=="p" && s[i+1]=="h") {
			ss+="f";
			i++;
		} else {
			ss+=s[i];
		}
	}
	return ss;
}

module.exports = ph2s;