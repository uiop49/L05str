function ph2f(s){
	var l = s.length ;
	var k = "" ;
	for(i=1;i<l+1;i++){
		if((s[i-1]=="p")&&(s[i]=="h")){
			k = k + "f" ;
			i = i + 1 ;
		}
		else{
			k = k + s[i-1] ;
		}
	}
	return k ;
}

module.exports = ph2f ;	