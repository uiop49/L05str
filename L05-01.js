function numDots(s){
	var l = s.length ;
	var k = 0 ;
	for(var i=0;i<l;i++){
		if(s[i]=="."){
			k = k + 1 ;
		}
	}
	return k ;
}

module.exports = numDots ;	