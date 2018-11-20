function ph2f(s){
	var ph = '';
	for (var i=0; i<s.length; i++){
		if (s[i]=='p' && s[i+1]=='h'){
            ph += 'f'
			i++;
	} else {
        ph += s[i];
    }
} 
	return ph;
} 
module.exports = ph2f;
