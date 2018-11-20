function longestWordLen(s){
	var l = s.length ;
	var q = 0 ;
	var k = 0 ;
	var c = 0 ;
	for(i=0;i<l;i++){
		if(s[i]!=" "){
			q = q + 1 ;
			if((s[i]==",")||(s[i]==".")){
				q = q - 1 ;
			}
			c = q ;
		}
		else{
			if(q>k){
				k = q ;
			}
			q = 0 ;
		}
	}
	if(k==0){
		return c ;
	}else{
		return k ;
	}
}
module.exports = longestWordLen ;	