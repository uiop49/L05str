function ph2f(s){
    var bykvi = '';
    for (i=0;i < s.length;i++){
        if (s[i]==='p' && s[i+1]==='h'){
        bykvi += 'f';
        i++;
        }
        else bykvi += s[i];
    }
    return bykvi;
}
module.exports = ph2f;