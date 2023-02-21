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

findLongestWordLength("The quick brown fox jumped over the lazy dog");