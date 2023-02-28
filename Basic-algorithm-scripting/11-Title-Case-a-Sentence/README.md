# Title Case a Sentence

Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.

# Tests

- titleCase("I'm a little tea pot") should return a string.
- titleCase("I'm a little tea pot") should return the string I'm A Little Tea Pot.
- titleCase("sHoRt AnD sToUt") should return the string Short And Stout.
- titleCase("HERE IS MY HANDLE HERE IS MY SPOUT") should return the string Here Is My Handle Here Is My Spout.


# Solution 

```
function titleCase(str) {
  let strToArr = str.split(" ");
  let result = [];

  strToArr.forEach(function (word) {
    let wordToLower = word.toLowerCase();
    let firstWordToUpper = wordToLower.replace(
      wordToLower[0],
      wordToLower[0].toUpperCase()
    );

    return result.push(firstWordToUpper);
  });

  return result.join(" ");
}
```