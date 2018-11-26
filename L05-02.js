function ph2f(s)
{
	var r="";
	for (var i=0; i<s.length; i++)
	{
		if (s[i] === "p")
		{
			i++;
			if (s[i] === "h")
			{
				r+="f";
			}
			else
			{
				r+=s[i];
			}
		}
		else
		{
			r+=s[i];
		}
	}
	return r;
}
module.exports=ph2f;