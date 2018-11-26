function isPalindrome(s){
	var k = 0;
    var b = '';
	for (var i=0; i<s.length; i++){
		if (s[i] != ' ')
            b += s[i];
    }
    for (i = 0;i < b.length;i++){
        if (b[i] == b[b.length-i-1])
            k++
    }
        if (b.length == k)
            return true;
        else return false;
    }
    
module.exports = isPalindrome;
