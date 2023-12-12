/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  //normalize the string to lower case, remove all punctuation, remove all spaces
  const normstr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let i = 0;
  let j = normstr.length -1 ;

  while(i<=j){
    if ( normstr[i]==normstr[j]){
      i++;
      j--;
    }
    else
      return false;
  }

  return true;
}

module.exports = isPalindrome;
