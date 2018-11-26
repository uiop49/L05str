function isPalindrome(s){
	var l = s.length ;
	var a = "" ;
	var b = "" ;
	for(var i=0;i<l;i++){
		if(s[i]>='a'&&s[i]<='z'||s[i]>='A'&&s[i]<='Z'){
			a = a + s[i] ;
		}
	}
	var al = a.length ;
	var al2 = a.length -1  ;
	for(var j=0;j<al;j++){
		b = b + a[al2] ;
		al2 = al2 - 1 ;
	}
	if(a==b){
		return 'True' ;
	}
	else{
		return 'False' ;
	}
}

module.exports = isPalindrome ;	