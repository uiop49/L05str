function isDelResult(s1, s2){
	var j = 0;
	var k = 0;
	var jk = 0;
	s3 = "";
	for(var i=0;i<s2.length;i++){
		jk += k;
		console.log(j);
		k = 0;
		for(j=jk;j<s1.length;j++){
			k++;
			console.log(s1[j]);
			if (s2[i]==s1[j]){
				s3 += s2[i];
				console.log("...."+s3);
				break
			}
		}
	}
	return(s3==s2)
}

module.exports = isDelResult; 