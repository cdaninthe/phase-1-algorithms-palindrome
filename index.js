function isPalindrome(word) {
  // Write your algorithm here
  //reverse word
  const reversedWord = reverseWord(word)
  console.log(reversedWord)

  //check if word and reversedWord are the same
  if (reversedWord === word) {
    return true
  }
  else {return false}

}

function reverseWord(word) {
  let newWord = ""
  for (let i = word.length - 1; i >= 0; i--) { 
    newWord += word[i]
  }
  return newWord;
}



/* 
  Add your pseudocode here
  1. reverse word 
  2. check if word and reversed word are the same:
    if yes: isPalidrome returns true
    if no: isPalidrome returns false
*/

/*
  Add written explanation of your solution here
  1. I had to reverse the word: so I created a function reverseWord with a for loop
  2. I compared the original word with the reversedWord: if they were the same isPalindrome returns true, if not false
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

isPalindrome('cat')