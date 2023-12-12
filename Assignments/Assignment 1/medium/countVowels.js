/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
    // Your code here
    //noramalise the string in lower case 
    let normstr = str.toLowerCase();
    let vowels = "aeiou";//initialise vowes string
    let count = 0;//initialise count

    for(let i=0; i<vowels.length; i++){
      for (let j=0; j<normstr.length; j++){
        if (vowels[i]==normstr[j]){
          count++;
        }
      }
    }
    return count;
}

module.exports = countVowels;