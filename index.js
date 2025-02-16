function reverse(word) {
  return word.split("").reverse().join("")
}

function isPalindrome(word) {
  const reversedWord = reverse(word)
  return word === reversedWord
}

if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
