function isDelResult(s1,s2){
	l1 = s1.length ;
	l2 = s2.length ;
	var a = "" ;
	for(var i=0;i<l2;i++){
		for(var j=0;j<l1;j++){
			if(s2[i]==s1[j]){
				a = a + s2[i] ;
				i = i + 1 ;
			}
		}
	}
	if(a==s2){
		return 'True' ;
	}else{
		return 'False' ;
	}
}

module.exports = isDelResult ;