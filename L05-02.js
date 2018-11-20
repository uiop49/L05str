function ph2f(s){
 var n = 0;
   for (var i=0; i<s.length;i++){
	if ((s[i]==="p")&&(s[i+1]==="h")){
	s[i]='f';
	s[i]='';
	};
   };
return n;
}
module.exports =numDots;