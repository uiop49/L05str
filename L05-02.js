function ph2s(s)
{
	var d="";
	for (var i=0; i<s.length; i++)
	{
		if ((s[i] == "p") && (s[i+1] == "h"))
		{
			s[i]="f";
			i++;
		}
	}
	return s;
}
module.exports=ph2s;