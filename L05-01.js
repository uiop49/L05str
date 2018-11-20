function numDots(s) {
	s=String(s);
    var k=0;
    for(var i=0;i<s.length;i++){
        if (s[i]=='.'){
            k++;
        }
    }
    return k;
}

module.exports = numDots;