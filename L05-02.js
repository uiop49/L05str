function ph2s(s){
	var st = "";
	for (var i=0; i<s.length; i++) {
		if (s[i]=="p" && s[i+1]=="h") {
			st+="f";
			i  = i + 1
		} else {
			st+=s[i];
		}
	}
	return st;
}

module.exports = ph2s;