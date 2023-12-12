/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/
function isAnagram(str1, str2) {
  //normalise the strings
  const normstr1 = str1.toLowerCase();
  const normstr2 = str2.toLowerCase();

  if (normstr1.length!= normstr2.length){
    return false;//if the length is not same they cant be anagrams
  }
  else{
    const sortedstr1= normstr1.split('').sort().join('');
    const sortedstr2= normstr2.split('').sort().join('');
    if (sortedstr1 == sortedstr2)
      return true;
    else
      return false;
  }
}

module.exports = isAnagram;
