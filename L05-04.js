function isPalindrome(s) {
	var f=0;
	var x='';
	var l=0;
	for (var k=0; k<s.length; k++)
		if (s[k]!=' ')
			x+=s[k];
		else
			x+='';
	var n = x.length;
	for (i=0; i<x.length; i++)
		if ((x[i]<='Z' && x[i]>='A') || (x[i]>='0' && x[i]<='9'))
			l=1;
			else {l=0;break;}
	if (l==1) for (i=0; i<x.length/2; i++)
					if (x[i]==x[n-1-i])
										f=1;
					else {f=0; break;}
	if (f==0) return 'false';
	else return 'true';
}
module.exports=isPalindrome;
