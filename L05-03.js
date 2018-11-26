function longestWordLen(s)
{
	var a="";
	var d=0;
	for (var i=0; i<s.length; i++)
	{
		if (s[i]===" ")
			{
				d=i;
				a+=d-2;
				a+=" ";
				a+=d;
			}
	}
	return a;
}
//module.exports=longestWordLen;