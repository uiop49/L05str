function isPalindrome(s){
	var k = 0;
    var d = '';
    var t = true;
    var f = false;
	for (var i=0; i<s.length; i++){
		if (s[i] != ' ')
            d += s[i];
    }
    for (i = 0;i < d.length;i++){
        if (d[i] == d[d.length-i-1])
            k++
    }
        if (d.length == k){
            return t;
        }
       
    return f;
}
module.exports = isPalindrome;