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

titleCase("I'm a little tea pot");
