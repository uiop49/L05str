function longestWordLen(s) {
	var s = s.split (' ');
	var LW = 0;
	for (var i = 0; i < s.length; i++){
		if(s[i].length > LW){
			LW = s[i].length
		}
	}
	return LW;
}
module.exports = longestWordLen;