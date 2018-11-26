function longestWordLen(s)
{
	var a="";
	var d=0;
	var b="";
	var x=0;
	var y=0;
	var z=s.length;
	var max=0;
	for (var i=0; i<s.length+1; i++)
	{
		if ((s[i]===" ") || (s[i]===",") || (s[i]===".") || (s[i]==="*"))
		//if (s[i]===" ")right
			{
				d=i;//id
				x=d-y;//length of the word
				y=d+1;//beginning of the next word
				a+=x;
				a+=" ";
				//a+=d+1;//
			}
				if ((i===z) && (s[z]!==" "))
				{
					d=s.length;
					a+=d-y;
					//a+=" ";
				}
	}
	if (a.length===1)
	{
		max=a;
	}else
		{
			if (a[0]>a[2])
				{
					max=a[0];
				}
				else
					{
						max=a[2];
					}
		for (var j=0; j<a.length; j++)
		{
			if (j%2==0)
			{
				if (a[j]>max)
				{
					max=a[j];
				}
			}
		}
	}
	return Number(max);
}
module.exports=longestWordLen;