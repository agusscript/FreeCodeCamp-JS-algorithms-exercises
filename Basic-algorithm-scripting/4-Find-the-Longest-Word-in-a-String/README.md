# Find the Longest Word in a String

Return the length of the longest word in the provided sentence.

Your response should be a number.

# Tests

- findLongestWordLength("The quick brown fox jumped over the lazy dog") should return a number.
- findLongestWordLength("The quick brown fox jumped over the lazy dog") should return 6.
- findLongestWordLength("May the force be with you") should return 5.
- findLongestWordLength("Google do a barrel roll") should return 6.
- findLongestWordLength("What is the average airspeed velocity of an unladen swallow") should return 8.
- findLongestWordLength("What if we try a super-long word such as otorhinolaryngology") should return 19.


# Solution 

```
function findLongestWordLength(str) {
  let strToArray = str.split(" ");

  let wordsLength = [];

  strToArray.forEach(function (word) {
    return wordsLength.push(word.length);
  });

  let longestWord = wordsLength[0];

  for (let i = 0; i < wordsLength.length; i++) {
    if (wordsLength[i] > longestWord) {
      longestWord = wordsLength[i];
    }
  }

  return longestWord;
}
```
