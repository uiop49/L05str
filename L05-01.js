function numDots(s){
 var n = 0;
   for (var i=0; i<s.length;i++){
	if (s[i]===".")
	n++;
	};
return n;
}
module.exports =numDots;