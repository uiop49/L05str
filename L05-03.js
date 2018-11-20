function longestWordLen(s){
	var l = s.length ;
	var q = 0 ;
	var k = 0 ;
	for(i=0;i<l;i++){
		if(s[i]!=" "){
			q = q + 1 ;
			if((s[i]==",")||(s[i]==".")){
				q = q - 1 ;
			}
		}
		else{
			if(q>k){
				k = q ;
			}
			q = 0 ;
		}
	}
	return k ;
}

module.exports = longestWordLen ;	