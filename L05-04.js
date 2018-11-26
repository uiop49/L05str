function isPalindrome(s) {
  s = s.replace(/\s+/g, '');
  var len = Math.floor(s.length / 2);
  for (var i = 0; i < len; i++)
    if (s[i] !== s[s.length - i - 1])
      return false;
  return true;
}
module.exports = isPalindrome;