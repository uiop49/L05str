function numDots(s){
	var d=0;
	for (var i=0; i<s.length; i++)
	{
		if (s[i]===".")
		{
			d += 1;
		}
	}
	return d;
}
module.exports=numDots;