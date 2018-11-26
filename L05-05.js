function isDelResult(s1,s2) {
	var sl1=s1.length;
	var sl2=s2.length;
	var l=0, i=0, j=0;
	if (sl1<sl2)
		for (i=0; i<sl1; i++)
			for(j=0; j<sl2; j++)
				if (s1[i]==s2[j])
					{l+=1; break;}
	if (l==sl1)
		return 'true';
	else return 'false';
}
module.exports=isDelResult;
